/**
 * Created by Ilya on 09.04.2017.
 */

import { ShortIdea } from '../classes/ShortIdea';
import { getPageContent } from '../all';

getPageContent().then(renderContent);

$('body')
    .on('click', '#logo', function (e) {
        e.preventDefault();
        $('html,body').animate({scrollTop: $('body').offset().top}, 'slow');
    });

function renderContent(data) {
    data.ideas.forEach((item) => {
        let idea = new ShortIdea(item);
        $('#ideasPlace').append(idea.getFullIdea());
    })
}