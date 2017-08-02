const express = require('express');
const router = express.Router();
const signupHandler = require('../lib/controllers/signupHandler');
//const loginHandler = require('../lib/controllers/loginHandler');
const requestHandlers = require('./requestHandlers');
//const { auth } = require('./controllers/auth');

router.post('/signup', signupHandler);

//router.get('/login', loginHandler);

router.post('/lostitem', requestHandlers.postLostItem);
// router.post('/founditem', requestHandlers.postFoundItem);

// router.post('/messages', requestHandlers.postMessages);
// router.get('/messages', requestHandlers.getMessages);

// router.get('/matches', requestHandlers.getMatches);

// router.get('/dashdata', requestHandlers.getDashData);

module.exports.router = router;
