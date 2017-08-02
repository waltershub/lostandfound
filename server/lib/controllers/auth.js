const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('../../../db/config');

passport.use(new LocalStrategy((username, password, done) => {
  db.user.findOne({ username }, (dbErr, user) => {
    if (dbErr) throw dbErr;
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    bcrypt.compare(password, user.password)
      .then((res) => {
        if (!res) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
  });
}));
