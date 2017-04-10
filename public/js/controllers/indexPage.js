/**
 * Created by Ilya on 09.04.2017.
 */

import { ShortIdea } from '../classes/Idea';
import { renderPage } from '../all';

renderPage(renderContent);

$('body')
    .on('click', '#logo', function (e) {
        e.preventDefault();
        $('html,body').animate({scrollTop: $('body').offset().top}, 'slow');
    });

function renderContent(data) {
    data.users.ideas.forEach((item) => {
        let idea = new ShortIdea(item.name, item['main-idea'], item.rating);
        $('#ideasPlace').append(idea.getFullIdea());
    })
}