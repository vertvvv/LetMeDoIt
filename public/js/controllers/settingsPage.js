/**
 * Created by Ilya on 09.04.2017.
 */

import { renderMainComponents } from '../all';
import { users } from '../api';

renderMainComponents().then(getUsersInfo);

$('#userInfoChange').on('click', changeUserInfo);
$('#passwordChange').on('click', changePassword);
$('#avatarChange').on('click', addChangeAvatarWindow);
$('body').on('click', '#confirmAvatarChange', changeAvatar);

function getUsersInfo() {
    users.getCurrentUser()
        .done(addInfoToInputs);
}

function addInfoToInputs(info) {
    let data = info.user;

    if (data.name) {
        $('#nameInput').val(data.name);
    }
    if (data.surname) {
        $('#surnameInput').val(data.surname);
    }
    if (data.info) {
        $('#bioTextarea').val(data.info);
    }
    if (data.username) {
        $('#usernameInput').val(data.username);
    }
    if (data.email) {
        $('#emailInput').val(data.email);
    }
    if (data.avatar) {
        $('.settings__info__avatar').css('background-image', 'url(' + data.avatar + ')');
    }
}

function changeUserInfo() {
    let info = {};

    info.name = $('#nameInput').val();
    info.surname = $('#surnameInput').val();
    info.info = $('#bioTextarea').val();
    info.username = $('#usernameInput').val();

    sendUserInfo(info);
}

function sendUserInfo(info) {
    let changeButton = $('#userInfoChange');

    users.changeUserInfo(info)
        .done((data) => {
            if (data.username) {
                localStorage.setItem('login', data.username);
            } else {
                localStorage.setItem('login', data.email);
            }
            $('.notification-message').remove();
            changeButton.after('<p class="notification-message success-message">Changes successfully completed!</p>');
        })
        .error(() => {
            $('.notification-message').remove();
            changeButton.after('<p class="notification-message warning-message">Something went wrong! Please try again.</p>');
        });
}

function changePassword(info) {
    let pass = $('#passInput').val();

    if (pass) {
        if ($('#confirmPassInput').val() === pass) {
            sendNewPassword(pass);
        } else {
            wrongPasswordNotification("Passwords don't match!");
        }
    } else {
        wrongPasswordNotification('Enter new password!');
    }
}

function sendNewPassword(password) {
    let changeButton = $('#passwordChange');
    let passJSON = {'password': password};

    users.changePassword(passJSON)
        .done((data) => {
            localStorage.setItem('token', data);
            $('.notification-message').remove();
            $('#passInput').val('');
            $('#confirmPassInput').val('');
            changeButton.after('<p class="notification-message success-message">Changes successfully completed!</p>');
        })
        .error(() => {
            wrongPasswordNotification('Something went wrong! Please try again.');
        });
}

function wrongPasswordNotification(text = 'Wrong password confirmation!') {
    $('.notification-message').remove();
    $('#passwordChange').after(`<p class="notification-message warning-message">${text}</p>`);
}

function addChangeAvatarWindow() {
    $('#avatarChange').before(`<input id="avatarInput" placeholder="Ctrl+V link on image here">`);
    $('#avatarChange').after(`<button id="confirmAvatarChange" class="settings__info__change-avatar">Change avatar</button>`);
    $('#avatarChange').remove();
}

function changeAvatar() {
    let info = {'avatar': $('#avatarInput').val()};
    let changeButton = $('#confirmAvatarChange');

    users.changeUserInfo(info)
        .done((data) => {
            localStorage.setItem('avatar', data.avatar);
            $('.settings__info__avatar').css('background-image', 'url(' + data.avatar + ')');
            $('.notification-message').remove();
            changeButton.after('<p class="notification-message success-message">Changes successfully completed!</p>');
        })
        .error(() => {
            $('.notification-message').remove();
            changeButton.after('<p class="notification-message warning-message">Something went wrong! Please try again.</p>');
        });
}