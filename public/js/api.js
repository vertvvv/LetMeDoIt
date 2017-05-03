/**
 * Created by Ilya on 21.04.2017.
 */

import { API_URL } from './consts';

export const users = {
    getAllUsers: () => {
        return $.get(API_URL + 'users');
    },

    getSingleUser: (id) => {
        return $.get(API_URL + 'users/' + id);
    }
};

export const ideas = {
    getAllIdeas: () => {
        return $.get(API_URL + 'ideas');
    },

    getSingleIdea: (id) => {
        return $.get(API_URL + 'ideas/id/' + id);
    },

    postIdea: (idea) => {
        return $.post(API_URL + 'ideas?token=' + localStorage.getItem('token'), idea);
    }
};

export const comments = {
    postComment: (comment) => {
        return $.post(API_URL + 'comments?token=' + localStorage.getItem('token'), comment);
    }
};

export const auth = {
    authorizeUser: (login, password) => {
        return $.post(API_URL + 'users/login', {login: login, password: password});
    },

    signUpUser: (login, password) => {
        return $.post(API_URL + 'users/signup', {login: login, password: password});
    }
};