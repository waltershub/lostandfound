const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const db = require('..db/config.js');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.listen(port, (err) => {
  if (err) throw err;
  console.log('Listening on ' + port);
});
