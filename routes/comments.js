/**
 * Created by Ilya on 21.04.2017.
 */

var express = require('express');
var comments = require('../services/commentsService');

var router = express.Router();

router.get('/', function (req, res, next) {
    res.send(comments.getAllComments());
});

router.post('/', function (req, res, next) {
    var newComment = req.body;
    comments.addComment(newComment);
    res.send(newComment);
});

module.exports = router;