/**
 * Created by Ilya on 21.04.2017.
 */

var db = require('./database');
var uuid = require('uuid/v4');

function authorizeUser(login, password) {
    let allAccounts = db.getData('/userpassword');
    let index = false;
    let id = null;

    allAccounts.forEach((item, i) => {
        if (item.login == login && item.password == password) {
            index = i;
            id = item.id;
        }
    });

    if (index !== false) {
        let token = uuid();
        db.getData('/useridtoken').forEach((item, i) => {
           if (item.id == id) {
               db.delete('/useridtoken[' + i + ']');
           }
        });
        db.push('/useridtoken[]', {id: id, token: token});
        return {token: token, login: login, id: id};
    } else {
        return "Invalid data!";
    }
}

function signUpUser(login, password) {
    let allAccounts = db.getData('/userpassword');
    let isLoginAlreadyTaken = false;

    allAccounts.forEach((item, i) => {
        if (item.login == login) {
            isLoginAlreadyTaken = true;
        }
    });

    if (!isLoginAlreadyTaken) {
        let id = db.getData('/userid');
        db.push('/userid', id + 1);
        db.push('/userpassword[]', {id: id, login: login, password: password});
        db.push('/users[]', {id: id, login: login});
        return authorizeUser(login, password);
    } else {
        return 'This login is already taken!';
    }
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
    authorizeUser: authorizeUser,
    signUpUser: signUpUser,
    getAllUsers: getAllUsers,
    getUserInfo: getUserInfo
};