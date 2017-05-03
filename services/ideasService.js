/**
 * Created by Ilya on 21.04.2017.
 */

var db = require('./database');
var comments = require('./commentsService');
var users = require('./usersService');

function postIdea(idea) {
    db.push('/ideas[]', idea);
    db.push('/ideaid', idea.id);
}

function getNewIdeaID() {
    return db.getData('/ideaid');
}//temporary decision

function getAllIdeas() {
    return (db.getData('/ideas')).map(item => {
        item.user.name = users.getUsernameByID(item.user.id);
        return item;
    });
}

function getSingleIdea(id) {
    let allIdeas = db.getData('/ideas');
    let idea = (allIdeas.filter((idea) => {
        return idea['id'] == id;
    }))[0]; //like Array.some(), but returns value, idk how to do it better

    idea.user.name = users.getUsernameByID(idea.user.id);

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
    if (index !== false) {
        db.delete('/ideas[' + index + ']');
        return 'Success!';
    } else {
        throw new Error('Wrong idea id, try again');
    }
}

function editIdea(id) {
    let index = findIdea(id);
    if (index !== false) {
        db.push('/ideas[' + index + ']');
        return 'Success!';
    } else {
        throw new Error('Wrong idea id, try again');
    }
}

module.exports = {
    editIdea: editIdea,
    findIdea: findIdea,
    getNewIdeaID: getNewIdeaID,
    getAllIdeas: getAllIdeas,
    getSingleIdea: getSingleIdea,
    postIdea: postIdea,
    deleteIdea: deleteIdea
};