/**
 * Created by Ilya on 21.04.2017.
 */

var express = require('express');
var users = require('../services/usersService');

var router = express.Router();

/**
 * Authenticate user
 * @param {string} login
 * @param {string} password
 * @returns {string} token - access token for user
 * @throws 400 Error - Invalid data
 */

router.post('/login', function(req, res, next) {
   let login = req.body.login;
   let password = req.body.password;

   try {
       let result = users.authorizeUser(login, password);
       res.send(result);
   } catch(err) {
       res.status(400);
       res.send(err.message);
   }
});

/**
 * Sign up user
 * @param {string} login
 * @param {string} password
 * @returns {string} token - access token for user
 * @throws 400 Error - Invalid data
 */

router.post('/signup', function(req, res, next) {
   let login = req.body.login;
   let password = req.body.password;

   try {
       let result = users.signUpUser(login, password);
       res.send(result);
   } catch(err) {
       res.status(400);
       res.send(err.message);
   }
});

/**
 * Get information about user
 * @param {string} id - user id
 * @returns JSON with user info
 */

router.get('/:id', function (req, res, next) {
    var id = req.params.id;

    res.send(users.getUserInfo(id));
});

/**
 * Get user about current user
 * @param {string} token - access token
 * @returns JSON with user info
 */

router.get('/', function (req, res, next) {
    let token = req.query.token;

    try {
        let id = users.getUserByToken(token);
        res.send(users.getUserInfo(id));
    } catch(err) {
        res.status('400');
        res.send(err.message);
    }
});

/**
 * Change information about user
 * @param {string} token - Access token to identificate user
 * @param {Object} user - User info with many fields
 * @returns JSON with user info
 */

router.put('/', function (req, res, next) {
    let token = req.query.token;
    let userInfo = req.body;

    try {
        let id = users.getUserByToken(token);
        res.send(users.changeUserInfo(id, userInfo));
    } catch(err) {
        res.status('400');
        res.send(err.message);
    }
});

/**
 * Change users password
 * @param {string} token - Access token to identificate user
 * @param {string} password - New password
 * @returns new access token
 */

router.post('/changepass', function (req, res, next) {
    let token = req.query.token;
    let password = req.body.password;

    try {
        let id = users.getUserByToken(token);
        res.send(users.changePassword(id, password));
    } catch(err) {
        res.status('400');
        res.send(err.message);
    }
});

module.exports = router;