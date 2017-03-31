/**
 * Created by Ilya on 27.03.2017.
 */

$('#profile-bar').on('click', function (e) {
    e.preventDefault();
    $('.dropdown-menu').toggleClass('invisible-element');
    $(this).toggleClass('active');
});

$('.mockup').on('click', function () {
    let self = $(this).parent();

    $('.img-grid__wrapper').each((i, item) => {
        if (!$(item).is(self)) {
            $(item).removeClass('mockup-full-width');
            console.log('done', item);
        }
    });

    $(this).parent().toggleClass('mockup-full-width');
});

$('#logo').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({scrollTop: $('body').offset().top}, 'slow');
});