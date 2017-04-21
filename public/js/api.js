/**
 * Created by Ilya on 21.04.2017.
 */

import { API_URL } from './consts';

export const users = {

    getAllUsers: () => {
        return $.get(API_URL + 'api/users');
    }

};

export const ideas = {

    getAllIdeas: () => {
        return $.get(API_URL + 'api/ideas');
    },

    getSingleIdea: (id) => {
        return $.get(API_URL + 'api/ideas/id/' + id);
    },

    getUserIdeas: (id) => {
        return $.get(API_URL + 'api/ideas/user/' + id);
    }
};