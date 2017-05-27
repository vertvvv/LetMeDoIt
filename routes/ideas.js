/**
 * Created by Ilya on 21.04.2017.
 */

var express = require('express');
var ideas = require('../services/ideasService');
var users = require('../services/usersService');

var router = express.Router();

/**
 * Get all ideas
 * @returns JSON with all ideas
 */

router.get('/', function (req, res, next) {
    res.send(ideas.getAllIdeas());
});

/**
 * Get user ideas
 * @param {number} id - User's id
 * @returns JSON with all user ideas
 *
 */

router.get('/id/:id', function (req, res, next) {
    var id = req.params.id;
    res.send(ideas.getSingleIdea(id));
});

/**
 * Post idea
 * @param {string} token - Access token to identificate user
 * @param {Object} idea - Single idea with many fields
 * @returns {string} Success - if operation was correct
 * @throws 400 Error - if wrong access token
 */

router.post('/', function (req, res, next) {
    let newIdea = req.body;
    let token = req.query.token;
    try {
        let id = users.getUserByToken(token);

        newIdea.user = {
            id: id
        };
        newIdea.tags = ['tag1', 'tag2', 'tag3'];
        newIdea.mockups = [];
        newIdea.comments = [];
        newIdea.id = ideas.getNewIdeaID() + 1;

        ideas.postIdea(newIdea);

        users.addIdeaToStats(id);

        res.send(newIdea);

    } catch(err) {
        res.status('400');
        res.send(err.message);
    }
});

/**
 * Delete idea
 * @param {string} token - Access token to identificate user (TODO)
 * @param {Object} id - Idea id
 * @returns {string} Success - if operation was correct
 * @throws 400 Error - if wrong access token or incorrect idea id
 */

router.delete('/id/:id', function (req, res, next) {
    var id = req.params.id;
    try {
        let result = ideas.deleteIdea(id);
        res.send(result);
    } catch (err) {
        res.status(400);
        res.send(err.message);
    }
});

/**
 * Edit idea
 * @param {string} token - Access token to identificate user (TODO)
 * @param {Object} id - Idea id
 * @returns {string} Success - if operation was correct
 * @throws 400 Error - if wrong access token or incorrect idea id
 */

router.put('/id/:id', function (req, res, next) {
   var id = req.params.id;
    try {
        let result = ideas.editIdea(id);
        res.send(result);
    } catch (err) {
        res.status(400);
        res.send(err.message);
    }
});

module.exports = router;