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
            console.log(login, password);
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
        throw new Error('Invalid data!');
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
        db.push('/users[]', {id: id, email: login});
        return authorizeUser(login, password);
    } else {
        throw new Error ('This login is already taken!');
    }
}

function getUsernameByID(id) {
    let allAccounts = db.getData('/users');
    let name = undefined;

    allAccounts.forEach(item => {
        if (item.id == id) {
            name = item.name;
        }
    });

    return name;
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

function getUserByToken(token) {
    let allUserTokens = db.getData('/useridtoken');
    let id = false;

    allUserTokens.forEach(item => {
        if (item.token == token) {
            id = item.id;
        }
    });

    if (id !== false) {
        return id;
    } else {
        throw new Error('Wrong access token! Try again or re-login.');
    }
}

module.exports = {
    authorizeUser: authorizeUser,
    signUpUser: signUpUser,
    getAllUsers: getAllUsers,
    getUserInfo: getUserInfo,
    getUserByToken: getUserByToken,
    getUsernameByID: getUsernameByID
};