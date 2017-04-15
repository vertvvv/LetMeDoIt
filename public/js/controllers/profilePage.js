/**
 * Created by Ilya on 09.04.2017.
 */

import { getPageContent } from '../all';
import { Profile } from '../classes/Profile';
import { ShortIdea } from '../classes/ShortIdea';

getPageContent().then(renderContent);

function renderContent(data) {
    let profile = new Profile(data.users[0]);

    $('.user-section').append(profile.getFullProfile());

    data.ideas.forEach((item) => {
        let idea = new ShortIdea(item);
        $('.ideas-user-section').append(idea.init());
    });
}