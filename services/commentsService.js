/**
 * Created by Ilya on 21.04.2017.
 */

var db = require('./database');

function addComment(comment) {
    db.push('/comments[]', comment);
}

function getAllComments() {
    return db.getData('/comments');
}

module.exports = {
    addComment: addComment,
    getAllComments: getAllComments
};