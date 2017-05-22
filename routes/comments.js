/**
 * Created by Ilya on 21.04.2017.
 */

var express = require('express');
var comments = require('../services/commentsService');
var users = require('../services/usersService');

var router = express.Router();

/**
 * Post comment for idea
 * @param {string} token - Access token to identificate user
 * @param {Object} comment - Comment with text and date
 * @returns {string} Success - if operation was correct
 * @throws 400 Error - if wrong access token
 */

router.post('/', function (req, res, next) {
    let newComment = req.body;
    let token = req.query.token;

    try {
        let userid = users.getUserByToken(token);

        newComment.id = comments.getNewCommentID() + 1;
        newComment.user = {
            id: userid,
            name: users.getUsernameByID(userid),
            avatar: users.getAvatarByID(userid)
        };

        comments.addComment(newComment);

        users.addCommentToStats(userid);

        res.send(newComment);
    } catch(err) {
        res.status('400');
        res.send(err.message);
    }
});

module.exports = router;