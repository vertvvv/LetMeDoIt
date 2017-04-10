/**
 * Created by Ilya on 27.03.2017.
 */

import { API_URL } from './consts';
import { Header } from './classes/Header';
import { Footer } from './classes/Footer';

export function getPageContent(renderContent) {
    return new Promise((resolve, reject) => {
        let query = $.get(API_URL + 'data');

        query.done(renderPage)
            .error((data) => {
                $('body').html('We have some technical troubles, sorry.');
            });

        function renderPage(json) {
            let header = new Header(json.users[0].username);
            let footer = new Footer();

            $('body')
                .prepend(header.getFullHeader())
                .append(footer.getFooter())
                .on('click', '#profile-bar', function () {
                    $('.dropdown-menu').toggleClass('invisible-element');
                    $(this).toggleClass('active');
                });

            resolve(json);
        }
    });
}