/**
 * Created by Ilya on 09.04.2017.
 */

import { ShortIdea } from '../classes/ShortIdea';
import { renderMainComponents } from '../all';
import { ideas } from '../api';

renderMainComponents().then(getContentData);

$('body')
    .on('click', '#logo', function (e) {
        e.preventDefault();
        $('html,body').animate({scrollTop: $('body').offset().top}, 'slow');
    });

function getContentData() {
    ideas.getAllIdeas()
        .done(renderIdeas)
        .error();
}

function renderIdeas(data) {
    data.forEach((item) => {
        let idea = new ShortIdea(item);
        $('#ideasPlace').append(idea.init());
    })
}