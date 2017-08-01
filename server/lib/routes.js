const express = require('express');
const db = require('../../db/config');

const router = express.Router();


router.post('/', (req, res) => {
  console.log('upcoming');
});


router.post('/signup', (req, res) => {
  console.log(req.body);
  db.user.create(req.body, (err) => {
    if (err) throw err;
  });
  res.send('succes');
});


module.exports.router = router;
