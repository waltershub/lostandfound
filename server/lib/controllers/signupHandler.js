const db = require('../../../db/config');

const bcrypt = require('bcrypt');

module.exports = (req, res) => {
  const userdata = Object.assign({}, req.body);
  const username = userdata.username;
  db.user.findOne({ username }, (err, person) => {
    if (err) throw err;
    else if (!person) {
      bcrypt.hash(userdata.password, 10, (hashErr, hash) => {
        if (hashErr) throw hashErr;
        userdata.password = hash;
        db.user.create(userdata, (error) => {
          if (error) throw error;
          res.send('success on sign up post');
        });
      });
    } else {
      res.send('already exits');
    }
  });
};
