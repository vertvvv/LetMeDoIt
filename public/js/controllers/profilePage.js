/**
 * Created by Ilya on 09.04.2017.
 */

import { renderMainComponents } from '../all';
import { Profile } from '../classes/Profile';
import { ShortIdea } from '../classes/ShortIdea';
import { users, ideas } from '../api';

renderMainComponents().then(getProfileData);

function getProfileData() {

    users.getAllUsers()
        .done((data) => {
            renderProfileContent(data).then(getUserIdeas);
        });
}

function renderProfileContent(data) {
    return new Promise((resolve) => {
        let profile = new Profile(data[0]);
        $('.user-section').append(profile.getFullProfile());
        resolve(data[0]);
    });
}

function getUserIdeas(data) {
    ideas.getUserIdeas(data.id)
        .done(renderUserIdeas);
}

function renderUserIdeas(data) {
    console.log(data);
    data.forEach((item) => {
        let idea = new ShortIdea(item);
        $('.ideas-user-section').append(idea.init());
    });
}