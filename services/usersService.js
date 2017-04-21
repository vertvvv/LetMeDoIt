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

module.exports = {
    addUser: addUser,
    getAllUsers: getAllUsers
};