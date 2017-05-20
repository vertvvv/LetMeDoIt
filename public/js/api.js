/**
 * Created by Ilya on 21.04.2017.
 */

import { API_URL } from './consts';

jQuery.each( [ "put", "delete" ], function( i, method ) {
    jQuery[ method ] = function( url, data, callback, type ) {
        if ( jQuery.isFunction( data ) ) {
            type = type || callback;
            callback = data;
            data = undefined;
        }

        return jQuery.ajax({
            url: url,
            type: method,
            dataType: type,
            data: data,
            success: callback
        });
    };
});

export const users = {
    getAllUsers: () => {
        return $.get(API_URL + 'users');
    },

    getSingleUser: (id) => {
        return $.get(API_URL + 'users/' + id);
    },

    getCurrentUser: () => {
        return $.get(API_URL + 'users?token=' + localStorage.getItem('token'));
    },

    changeUserInfo: (info) => {
        return $.put(API_URL + 'users?token=' + localStorage.getItem('token'), info);
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