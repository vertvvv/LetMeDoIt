/**
 * Created by Ilya on 09.04.2017.
 */

import { FullIdea } from '../classes/FullIdea';
import { getPageContent } from '../all';

getPageContent().then(renderContent);

/*(() => {
    $.post('http://localhost:3000/api/users', {
        id: 3,
        email: "test@test.com",
        password: "testtest",
        username: "userrrrnnnname",
        name: "user",
        surname: "name",
        avatar: null,
        info: "I am user from Userland, my hobby is posting ideas, hope someone can realize something from it!",
        stats: {
            ideas: 'asd',
            comments: 'das',
            rating: 'sad'
        },
        ideas: [1, 2],
        comments: [22, 2, 3, 4]
    }, (data) => console.log(data));
})();*/

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