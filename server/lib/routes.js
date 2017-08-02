const express = require('express');
const router = express.Router();
const signupHandler = require('../lib/controllers/signupHandler');
const requestHandlers = require('./requestHandlers');
const { auth } = require('./controllers/auth');

router.post('/signup', signupHandler);

router.post('/login', auth, (req, res) => {

});

router.post('/lostitem', requestHandlers.postLostItem);


module.exports.router = router;
