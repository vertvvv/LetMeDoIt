/**
 * Created by Ilya on 21.04.2017.
 */

var db = require('./database');

function addIdea(idea) {
    db.push('/ideas[]', idea);
}

function getAllIdeas() {
    return db.getData('/ideas');
}

function getUserIdeas(userid) {
    let allIdeas = db.getData('/ideas');
    return allIdeas.filter((idea) => {
       return idea['userid'] == userid;
    });
}

function getSingleIdea(id) {
    let allIdeas = db.getData('/ideas');
    return (allIdeas.filter((idea) => {
        return idea['id'] == id;
    }))[0]; //like Array.some(), but returns value, idk how to do it better
}

module.exports = {
    addIdea: addIdea,
    getAllIdeas: getAllIdeas,
    getUserIdeas: getUserIdeas,
    getSingleIdea: getSingleIdea
};