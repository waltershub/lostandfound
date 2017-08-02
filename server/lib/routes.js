const express = require('express');
const db = require('../../db/config');

const router = express.Router();


router.post('/', (req, res) => {
  console.log('success on index');
  res.sendFile('../../client/index.html');
});


router.post('/signup', (req, res) => {
  const username = req.body.username;
  db.user.findOne({ username }, (err, person) => {
    if (err) throw err;

    else if (!person) {
      db.user.create(req.body, (error) => {
        if (error) throw error;
        res.send('success on sign up post');
      });
    }
  });
});

router.post('/lostitem', (req, res) => {
  db.lost.create(req.body, (err) => {
    if (err) throw err;

    // must still write here check data base as a call back
  });
  res.send('success on post lost item');
});


module.exports.router = router;
