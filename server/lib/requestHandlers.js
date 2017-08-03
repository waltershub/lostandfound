const { lost } = require('../../db/config');

exports.postLostItem = (req, res) => {
  lost.create(req.body, (err) => {
    if (err) throw err;

    // must still write here check data base as a call back
  });
  res.send('success on post lost item');
};

exports.getStatus = (req, res) => {
  if (req.session.user) res.send(true);
  else res.send(false);
};
