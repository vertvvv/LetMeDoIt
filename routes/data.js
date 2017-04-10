var express = require('express');
var data = require('../data.json');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;
