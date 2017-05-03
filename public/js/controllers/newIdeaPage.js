/**
 * Created by Ilya on 09.04.2017.
 */

import { renderMainComponents } from '../all';
import { ideas } from '../api';

renderMainComponents();

$('body')
    .on('click', '#addFunction', () => {
        let input = `<input class="func-input new-input">`;

        $('#functionWrapper').append(input);
        $('.new-input').fadeIn(1000);
    })
    .on('click', '#addWish', () => {
        let wish = `<div class="wish new-input">
                        <hr class="wish-hr">
                        <input class="wish__name" placeholder="Wish">
                        <textarea class="wish__desc" placeholder="Description"></textarea>
                    </div>`;

        $('#wishWrapper').append(wish);
        $('.new-input').fadeIn(1000);
    });

$('.create-idea').on('click', postIdea);

function postIdea() {
    makeNewIdeaObject()
        .then(ideas.postIdea)
        .then((data) => {
            window.location.href = 'http://localhost:3000/assets/idea.html?id=' + data.id;
        });
}

function makeNewIdeaObject() {
    return new Promise((resolve) => {
        let idea = {
            functionality: [],
            mockups: [],
            other: [],
            comments: [],
            rating: 0
        };

        idea.name = $('#ideaNameInput').val();
        idea['main-idea'] = $('#ideaDescTextarea').val();
        $('.func-input').each((i, item) => {
            idea.functionality.push($(item).val());
        });

        $('.wish').each((i, item) => {
            let wish = {};
            wish.name = $(item).find('.wish__name').val();
            wish.text = $(item).find('.wish__desc').val();
            idea.other.push(wish);
        });
        resolve(idea);
    });
}