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
    ideas.addIdea(newIdea);
    res.send(newIdea);
});

module.exports = router;