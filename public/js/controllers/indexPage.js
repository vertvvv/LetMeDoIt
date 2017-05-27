/**
 * Created by Ilya on 09.04.2017.
 */

import { ShortIdea } from '../classes/ShortIdea';
import { renderMainComponents } from '../all';
import { ideas, users } from '../api';

renderMainComponents().then(getContentData);

$('body')
    .on('click', '#logo', function (e) {
        e.preventDefault();
        $('html,body').animate({scrollTop: $('body').offset().top}, 'slow');
    })
    .on('click', '#bestFilter', function filterByDate() {
        $('#newFilter').removeClass('ideas-filter__current');
        $(this).addClass('ideas-filter__current');
        ideas.getAllIdeas()
            .done((data) => {
                $('.idea').remove();
                sortIdeasByDate(data);
            });
    })
    .on('click', '#newFilter', function filterByRating() {
        $('#bestFilter').removeClass('ideas-filter__current');
        $(this).addClass('ideas-filter__current');
        ideas.getAllIdeas()
            .done((data) => {
                $('.idea').remove();
                sortIdeasByRating(data);
            });
    });

function getContentData() {
    ideas.getAllIdeas()
        .done(sortIdeasByRating)
        .error();
}

function sortIdeasByRating(data) {
    let newData = data.sort(sortByRating);
    renderIdeas(newData);
}

function sortIdeasByDate(data) {
    let newData = data.sort(sortByDate);
    renderIdeas(newData);
}

function renderIdeas(data) {
    data.forEach((item) => {
        let idea = new ShortIdea(item);
        $('#ideasPlace').append(idea.init());
    })
}

function sortByDate(a,b) {
    return a.id < b.id;
}

function sortByRating(a,b) {
    return a.rating < b.rating;
}