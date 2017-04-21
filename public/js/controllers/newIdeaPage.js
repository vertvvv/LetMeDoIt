/**
 * Created by Ilya on 09.04.2017.
 */

import { renderMainComponents } from '../all';

renderMainComponents();

$('body')
    .on('click', '#addFunction', () => {
        let input = `<input class="new-input">`;

        $('#functionWrapper').append(input);
        $('.new-input').fadeIn(1000);
    })
    .on('click', '#addWish', () => {
        let wish = `<div class="wish new-input">
                        <hr class="wish-hr">
                        <input placeholder="Wish">
                        <textarea placeholder="Description"></textarea>
                    </div>`;

        $('#wishWrapper').append(wish);
        $('.new-input').fadeIn(1000);
    });