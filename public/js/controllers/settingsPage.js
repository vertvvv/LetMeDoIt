/**
 * Created by Ilya on 09.04.2017.
 */

import { renderMainComponents } from '../all';
import { users } from '../api';

renderMainComponents().then(getUsersInfo);

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

