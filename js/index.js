/**
 * Created by Ilya on 27.03.2017.
 */

$('#profile-bar').on('click', function () {
    $('.dropdown-menu').toggleClass('invisible-element');
    $(this).toggleClass('active');
});

// $('#logo').on('click', function (e) {
//     e.preventDefault();
//     $('html,body').animate({scrollTop: $('body').offset().top}, 'slow');
// });