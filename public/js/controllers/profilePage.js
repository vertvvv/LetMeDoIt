/**
 * Created by Ilya on 09.04.2017.
 */

import { renderPage } from '../all';
import { Profile } from '../classes/Profile';
import { ShortIdea } from '../classes/Idea';

renderPage(renderContent);

function renderContent(data) {
    let profile = new Profile(data.users);

    $('.user-section').append(profile.getFullProfile());

    data.users.ideas.forEach((item) => {
        let idea = new ShortIdea(item.name, item['main-idea'], item.rating);
        $('.ideas-user-section').append(idea.getFullIdea());
    });
}