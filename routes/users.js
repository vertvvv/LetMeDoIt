/**
 * Created by Ilya on 21.04.2017.
 */

var express = require('express');
var users = require('../services/usersService');

var router = express.Router();

router.get('/', function (req, res, next) {
    res.send(users.getAllUsers());
});

router.post('/', function (req, res, next) {
    var newUser = req.body;
    users.addUser(newUser);
    res.send(newUser);
});

module.exports = router;