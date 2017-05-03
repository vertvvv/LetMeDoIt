/**
 * Created by Ilya on 21.04.2017.
 */

var express = require('express');
var users = require('../services/usersService');
var errHandler = require('../app');

var router = express.Router();
/**
 * Get all users
 * @returns JSON with all users
 */
router.get('/', function (req, res, next) {
    res.send(users.getAllUsers());
});

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

module.exports = router;