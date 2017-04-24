/**
 * Created by Ilya on 21.04.2017.
 */

var db = require('./database');

function addComment(comment) {
    db.push('/comments[]', comment);
}

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
    addComment: addComment,
    getIdeaComments: getIdeaComments,
    getAllComments: getAllComments
};