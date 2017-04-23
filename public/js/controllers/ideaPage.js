/**
 * Created by Ilya on 09.04.2017.
 */

import { FullIdea } from '../classes/FullIdea';
import { renderMainComponents, getUrlParameter } from '../all';
import { ideas } from '../api';

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
    });


function getIdeaData() {
    let id = getUrlParameter('id');
    ideas.getSingleIdea(id)
        .done(renderIdea);
}

function renderIdea(data) {
    let idea = new FullIdea(data);

    $('.single-idea-section').append(idea.init());
}