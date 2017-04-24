/**
 * Created by Ilya on 21.04.2017.
 */

var db = require('./database');

function postIdea(idea) {
    db.push('/ideas[]', idea);
}

function getAllIdeas() {
    return db.getData('/ideas');
}

function getSingleIdea(id) {
    let allIdeas = db.getData('/ideas');
    return (allIdeas.filter((idea) => {
        return idea['id'] == id;
    }))[0]; //like Array.some(), but returns value, idk how to do it better
}

module.exports = {
    getAllIdeas: getAllIdeas,
    getSingleIdea: getSingleIdea,
    postIdea: postIdea
};