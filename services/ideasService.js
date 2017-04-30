/**
 * Created by Ilya on 21.04.2017.
 */

var db = require('./database');
var comments = require('./commentsService');

function postIdea(idea) {
    db.push('/ideas[]', idea);
    db.push('/ideaid', idea.id);
}

function getNewIdeaID() {
    return db.get('/ideaid');
} //temporary decision

function getAllIdeas() {
    return db.getData('/ideas');
}

function getSingleIdea(id) {
    let allIdeas = db.getData('/ideas');
    let idea = (allIdeas.filter((idea) => {
        return idea['id'] == id;
    }))[0]; //like Array.some(), but returns value, idk how to do it better
    //idea['comments'] = comments.getIdeaComments(id);
    return idea;
}

function findIdea(id) {
    let allIdeas = db.getData('/ideas');
    let index = false;
    allIdeas.forEach((item, i) => {
        if (item.id === parseInt(id)) {
            index = i;
        }
    });
    return index;
}

function deleteIdea(id) {
    let index = findIdea(id);
    if (index != -1) {
        db.delete('/ideas[' + index + ']');
        return 'Success!';
    } else {
        return 'Error! Try again.';
    }
}

module.exports = {
    findIdea: findIdea,
    getNewIdeaID: getNewIdeaID,
    getAllIdeas: getAllIdeas,
    getSingleIdea: getSingleIdea,
    postIdea: postIdea,
    deleteIdea: deleteIdea
};