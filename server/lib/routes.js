const express = require('express');
const db = require('../../db/config');
const controller = require('../lib/controllers/controllers');
const router = express.Router();
const {auth} = require('../lib/controller/auth')

router.post('/', (req, res) => {
  console.log('success on index');
  res.sendFile('../../client/index.html');
});


router.post('/signup', controller.signup);

router.post('/login', auth, (null, user) =>{
  res.send(null , user)
});

router.post('/lostitem', (req, res) => {
  db.lost.create(req.body, (err) => {
    if (err) throw err;

    // must still write here check data base as a call back
  });
  res.send('success on post lost item');
});


module.exports.router = router;
