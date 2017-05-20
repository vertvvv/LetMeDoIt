/**
 * Created by Ilya on 09.04.2017.
 */

import { FullIdea } from '../classes/FullIdea';
import { Comment } from '../classes/Comments';
import { renderMainComponents, getUrlParameter } from '../all';
import { users, ideas, comments } from '../api';

renderMainComponents().then(getIdeaData);

$('body')
    .on('click', '.mockup', function () {
        let self = $(this).parent();

        $('.img-grid__wrapper').each((i, item) => {
            if (!$(item).is(self)) {
                $(item).removeClass('mockup-full-width');
            }
        });

        $(this).parent().toggleClass('mockup-full-width');
    })
    .on('click', '#addComment', sendComment);

function sendComment() {
    makeCommentObject()
        .then(comments.postComment)
        .then((json) => {
            let comment = new Comment(json);
            $(comment.getComment()).prependTo('#commentsPlace')
                .hide().show('slow');
        });
}

function makeCommentObject() {
    return new Promise((resolve) => {
        let comment = {};
        comment.ideaid = getUrlParameter('id');
        comment.date = new Date();
        comment.text = $('#new-comment').val();
        $('#new-comment').val('');
        resolve(comment);
    });
}

function getIdeaData() {
    let id = getUrlParameter('id');
    ideas.getSingleIdea(id)
        .done(renderIdea);
}

function renderIdea(data) {
    let idea = new FullIdea(data);

    $('.single-idea-section').append(idea.init());
}