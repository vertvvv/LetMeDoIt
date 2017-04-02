/**
 * Created by Ilya on 27.03.2017.
 */

$('#profile-bar').on('click', function () {
    $('.dropdown-menu').toggleClass('invisible-element');
    $(this).toggleClass('active');
});

$('.mockup').on('click', function () {
    let self = $(this).parent();

    $('.img-grid__wrapper').each((i, item) => {
        if (!$(item).is(self)) {
            $(item).removeClass('mockup-full-width');
        }
    });

    $(this).parent().toggleClass('mockup-full-width');
});

$('#logo').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({scrollTop: $('body').offset().top}, 'slow');
});

$('#addFunction').on('click', () => {
    let input = `<input class="new-input">`;

    $('#functionWrapper').append(input);
    $('.new-input').fadeIn(1000);
});

$('#addWish').on('click', () => {
    let wish = `<div class="wish new-input">
                    <hr class="wish-hr">
                    <input placeholder="Wish">
                    <textarea placeholder="Description"></textarea>
                </div>`;

    $('#wishWrapper').append(wish);
    $('.new-input').fadeIn(1000);
});