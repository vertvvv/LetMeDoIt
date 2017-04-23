/**
 * Created by Ilya on 21.04.2017.
 */

var db = require('./database');

function addUser(user) {
    db.push('/users[]', user);
}

function getAllUsers() {
    return db.getData('/users');
}

function getUserInfo(userid) {
    let result = {

    };

    let allUsers = db.getData('/users');
    result.user = (allUsers.filter((user) => {
        return user['id'] == userid;
    }))[0];

    let allIdeas = db.getData('/ideas');
    result.ideas = allIdeas.filter((idea) => {
        return idea.user['id'] == userid;
    });

    return result;
}

module.exports = {
    addUser: addUser,
    getAllUsers: getAllUsers,
    getUserInfo: getUserInfo
};