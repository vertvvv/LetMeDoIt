/**
 * Created by Ilya on 09.04.2017.
 */

import { FullIdea } from '../classes/Idea';
import { renderPage } from '../all';

renderPage(renderContent);

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


function renderContent(json) {
    let data = json.users.ideas[0];
    let idea = new FullIdea(data.name, data['main-idea'], data.rating, data.functionality, data.mockups, data.other, data.tags);

    $('.single-idea-section').append(idea.getFullIdea());
}