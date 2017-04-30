/**
 * Created by Ilya on 21.04.2017.
 */

var db = require('./database');
var ideas = require('./ideasService');

function addComment(comment) {
    db.push('/comments[]', comment);
    db.push('/commentid', comment.id);

    //add comment to idea json
    let index = ideas.findIdea(comment.ideaid);
    db.push('/ideas[' + index + ']/comments[]', comment);
}

function getNewCommentID() {
    return db.getData('/commentid');
} //temporary decision

function getIdeaComments(id) {
    let allComments = db.getData('/comments');

    return (allComments.filter((comment) => {
        return comment['ideaid'] == id;
    })).sort((a, b) => {return new Date(a.date) < new Date(b.date)});
}

function getAllComments() {
    return db.getData('/comments');
}

module.exports = {
    getNewCommentID: getNewCommentID,
    addComment: addComment,
    getIdeaComments: getIdeaComments,
    getAllComments: getAllComments
};