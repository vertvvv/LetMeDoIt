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
        let token = generateToken(id);
        let login = getUsernameByID(id);
        let avatar = getAvatarByID(id);

        return {
            avatar: avatar,
            token: token,
            login: login,
            id: id
        };
    } else {
        throw new Error('Invalid data!');
    }
}

function generateToken(id) {
    let token = uuid();

    db.getData('/useridtoken').forEach((item, i) => {
        if (item.id == id) {
            db.delete('/useridtoken[' + i + ']');
        }
    });

    db.push('/useridtoken[]', {id: id, token: token});

    return token;
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
            if (item.username) {
                name = item.username;
            } else {
                name = item.email;
            }
        }
    });

    return name;
}

function getAllUsers() {
    return db.getData('/users');
}

function getUserInfo(userid) {
    let result = {};
    let allUsers = db.getData('/users');
    let allIdeas = db.getData('/ideas');

    result.user = (allUsers.filter((user) => {
        return user['id'] == userid;
    }))[0];

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

function changeUserInfo(id, info) {
    let allAccounts = db.getData('/users');
    let index = -1;

    allAccounts.forEach((item, i) => {
        if (item.id == id) {
            db.push('/users[' + i + ']', info, false);
            index = i;
        }
    });

    if (index != -1) {
        return db.getData('/users[' + index + ']');
    } else {
        throw new Error('Wrong user id!');
    }
}

function changePassword(id, pass) {
    let allUserPasswords = db.getData('/userpassword');
    let index = -1;

    allUserPasswords.forEach((item, i) => {
        if (item.id == id) {
            db.push('/userpassword[' + i + ']', {'password': pass}, false);
            index = i;
        }
    });

    if (index != -1) {
        return generateToken(id);
    } else {
        throw new Error('Wrong user id!');
    }
}

function getAvatarByID(id) {
    let allAccounts = db.getData('/users');
    let avatar = null;

    allAccounts.forEach(item => {
        if (item.id == id) {
            avatar = item.avatar;
        }
    });

    return avatar;
}

function addIdeaToStats(id) {
    let allAccounts = db.getData('/users');

    allAccounts.forEach((item, i) => {
        if (item.id == id) {
            db.push('/users[' + i + ']', {'stats': {'ideas': item.stats.ideas + 1}}, false);
        }
    });
}

function addCommentToStats(id) {
    let allAccounts = db.getData('/users');

    allAccounts.forEach((item, i) => {
        if (item.id == id) {
            db.push('/users[' + i + ']', {'stats': {'comments': item.stats.comments + 1}}, false);
        }
    });
}

module.exports = {
    authorizeUser: authorizeUser,
    signUpUser: signUpUser,
    getAllUsers: getAllUsers,
    getUserInfo: getUserInfo,
    getUserByToken: getUserByToken,
    getUsernameByID: getUsernameByID,
    changeUserInfo: changeUserInfo,
    changePassword: changePassword,
    getAvatarByID: getAvatarByID,
    addIdeaToStats: addIdeaToStats,
    addCommentToStats: addCommentToStats
};