const db = require('../../db/config');
const checkMatches = require('./controllers/matchhandler');

function getUserId(user, callback) {
  db.user.findOne({ username: user })
    .then((userObject) => {
      callback(userObject._id);
    });
}

exports.postLostItem = (req, res) => {
  req.session.user = req.session.user || 'frank';
  checkMatches(req.body, 'lost', (item) => {
    getUserId(req.session.user, (userId) => {
      item.user_id = userId;
      db.lost.create(item, (err) => {
        if (err) throw err;
      });
    });
  });
  res.send('success on post lost item');
};

exports.postFoundItem = (req, res) => {
  req.session.user = req.session.user || 'barney';
  checkMatches(req.body, 'found', (item) => {
    getUserId(req.session.user, (userId) => {
      item.user_id = userId;
      db.found.create(item, (err) => {
        if (err) throw err;
      });
    });
  });
  res.send('success on post found item');
};

exports.getStatus = (req, res) => {
  if (req.session.user) res.send(true);
  else res.send(false);
};

exports.getMatches = (req, res) => {
  req.session.user = req.session.user || 'barney';
  getUserId(req.session.user, (userId) => {
    db.found.find({ user_id: userId })
      .then((data) => {
        data = data.filter(item => item.matches.length > 0);
        res.send(data);
      });
  });
};
