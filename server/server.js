const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const { router } = require('./lib/routes');
const passport = require('passport');

mongoose.connect('mongodb://dbadmin:hrnyc9@ds129053.mlab.com:29053/hrnyc9lostandfound', {
  useMongoClient: true,
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('./client'));

app.use('/', router);

const port = process.env.PORT || 8000;

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Listening on ${port}`);
});
