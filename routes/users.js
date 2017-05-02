/**
 * Created by Ilya on 21.04.2017.
 */

var express = require('express');
var users = require('../services/usersService');

var router = express.Router();

router.get('/', function (req, res, next) {
    res.send(users.getAllUsers());
});

router.post('/login', function(req, res, next) {
   let login = req.body.login;
   let password = req.body.password;
   res.send(users.authorizeUser(login, password));
});

router.post('/signup', function(req, res, next) {
   let login = req.body.login;
   let password = req.body.password;
   res.send(users.signUpUser(login, password));
});

router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    res.send(users.getUserInfo(id));
});

module.exports = router;