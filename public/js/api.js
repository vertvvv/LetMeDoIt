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
    }
};