/**
 * Created by Ilya on 21.04.2017.
 */

var db = require('./database');
var ideas = require('./ideasService');
var users = require('./usersService');

function addComment(comment) {
    //add comment to idea json
    let index = ideas.findIdea(comment.ideaid);
    db.push('/ideas[' + index + ']/comments[]', comment);
}

function getNewCommentID() {
    return db.getData('/commentid');
}

module.exports = {
    getNewCommentID: getNewCommentID,
    addComment: addComment
};