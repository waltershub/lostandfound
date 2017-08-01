var request = require('request');
var {promisify} = require('bluebird');
var {
  getPokemonData,
  createNewUser,
  loginUser,
  getFavs,
  setFav,
  removeFav
} = require('./util');
var session = require('express-session');

var requestPromise = promisify(request)

exports.pokemonDataReq = (req, res) => {
  var pokemon = req.query.q;
  console.log('handeling data req for:', pokemon);
  console.log('session for:', req.session.user);
  getPokemonData(pokemon, req)
  .then((data) => {
    res.send(data);
  });
};

exports.signup = (req, res) => {
  var user = req.body.username;
  var pwd = req.body.password;
  createNewUser(user, pwd, res, req);
}

exports.login = (req, res) => {
  var user = req.body.username;
  var pwd = req.body.password;
  loginUser(user, pwd, res, req);
}

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
}

exports.favs = (req, res) => {
  console.log(req.session.user);
  var user = req.session.user;
  getFavs(user, res, req);
}

exports.updateFavs = (req, res) => {
  var user = req.session.user;
  var poke = req.body.pokemon;
  setFav(user, poke, res);
}

exports.removeFav = (req, res) => {
  var user = req.session.user;
  var poke = req.body.pokemon;
  console.log('poke',poke)
  removeFav(user, poke, res);
}


