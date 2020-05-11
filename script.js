$(document).ready(function () {
    $('.menu_toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top').toggleClass('open');
    });
});
