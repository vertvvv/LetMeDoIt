/**
 * Created by Ilya on 27.03.2017.
 */

import { API_URL } from './consts';
import { Header } from './classes/Header';
import { Footer } from './classes/Footer';

export function renderPage(renderContent) {
    $.get(API_URL + 'data', function(json) {
        let header = new Header(json.users.username);
        let footer = new Footer();

        $('body')
            .prepend(header.getFullHeader())
            .append(footer.getFooter());
        if (renderContent) renderContent(json);
    });

    $('body')
        .on('click', '#profile-bar', function () {
            $('.dropdown-menu').toggleClass('invisible-element');
            $(this).toggleClass('active');
        });
}