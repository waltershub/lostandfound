const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('../../../db/config');

exports.auth = ({body}, res, done) => {
  passport.use(new LocalStrategy((body.username ,body.password , done) =>{
    db.user.findOne({body.username}, (err,user)=>{

    })

  }));
};
