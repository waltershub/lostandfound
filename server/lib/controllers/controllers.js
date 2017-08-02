const db = require('../../../db/config');

const bcrypt = require('bcrypt');

exports.signup = (data, callback) => {
  let res = '';
  const userdata = Object.assign({}, data);
  const username = userdata.username;
  db.user.findOne({ username }, (err, person) => {
    if (err) throw err;
    else if (!person) {
      bcrypt.hash(userdata.password, 10, (hashErr, hash) => {
        if (hashErr) throw hashErr;
        userdata.password = hash;
        db.user.create(userdata, (error) => {
          if (error) throw error;
          res = 'success on sign up post';
        });
      });
    } else {
      res = 'already exits';
    }
    console.log('res is', res);
    callback(res);
  });
};
