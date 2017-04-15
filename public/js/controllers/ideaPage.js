/**
 * Created by Ilya on 09.04.2017.
 */

import { FullIdea } from '../classes/FullIdea';
import { getPageContent } from '../all';

getPageContent().then(renderContent);

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
    let data = json.ideas[0];
    let idea = new FullIdea(data);

    $('.single-idea-section').append(idea.init());
}