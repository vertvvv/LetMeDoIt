/**
 * Created by Ilya on 27.03.2017.
 */

import { Header } from './classes/Header';
import { Footer } from './classes/Footer';
import { users } from './api';

export function renderMainComponents() {
    return new Promise((resolve) => {
        users.getAllUsers()
            .done(renderPage)
            .error((data) => {
                console.log(data);
            });

        function renderPage(json) {
            let header = new Header(json[0].username);
            let footer = new Footer();

            $('body')
                .prepend(header.getFullHeader())
                .append(footer.getFooter())
                .on('click', '#profile-bar', function () {
                    $('.dropdown-menu').toggleClass('invisible-element');
                    $(this).toggleClass('active');
                });

            resolve();
        }
    });
}

/*
* Function from http://www.jquerybyexample.net/2012/06/get-url-parameters-using-jquery.html
* */

export function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};