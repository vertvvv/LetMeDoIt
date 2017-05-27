/**
 * Created by Ilya on 09.04.2017.
 */

import { renderMainComponents,getUrlParameter } from '../all';
import { Profile } from '../classes/Profile';
import { ShortIdea } from '../classes/ShortIdea';
import { users, ideas } from '../api';

renderMainComponents().then(getProfileData);

function getProfileData() {
    let id = getUrlParameter('id');
    if (id === undefined) {
        id = localStorage.getItem('id');
    }

    users.getSingleUser(id)
        .done((data) => {
            renderProfileContent(data).then(renderUserIdeas);
        });
}

function renderProfileContent(data) {
    return new Promise((resolve) => {
        let profile = new Profile(data.user);
        $('.user-section').append(profile.getFullProfile());
        resolve(data.ideas);
    });
}

function renderUserIdeas(data) {
    data.forEach((item) => {
        let idea = new ShortIdea(item);
        $('.ideas-user-section').append(idea.init());
    });
}