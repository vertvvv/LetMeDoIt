/**
 * Created by Ilya on 21.04.2017.
 */

var express = require('express');
var comments = require('../services/commentsService');

var router = express.Router();

router.get('/id/:id', function (req, res, next) {
    let id = req.params.id;
    res.send(comments.getIdeaComments(id));
});

router.post('/', function (req, res, next) {
    var newComment = req.body;
    newComment.id = comments.getNewCommentID() + 1;
    newComment.user = {
        id: 1,
        name: 'username'
    };
    comments.addComment(newComment);
    res.send(newComment);
});

module.exports = router;