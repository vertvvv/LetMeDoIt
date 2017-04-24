/**
 * Created by Ilya on 21.04.2017.
 */

var express = require('express');
var ideas = require('../services/ideasService');

var router = express.Router();

router.get('/', function (req, res, next) {
    res.send(ideas.getAllIdeas());
});

router.get('/id/:id', function (req, res, next) {
    var id = req.params.id;
    res.send(ideas.getSingleIdea(id));
});

router.post('/', function (req, res, next) {
    var newIdea = req.body;
    newIdea.tags = ['tag1', 'tag2', 'tag3'];
    newIdea.mockups = [];
    newIdea.id = ideas.getAllIdeas().length + 1;
    newIdea.user = {
        id: 1,
        name: 'username'
    };
    ideas.postIdea(newIdea);
    res.send(newIdea);
});

module.exports = router;