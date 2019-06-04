import $ from 'jquery';



$(function Functions() {
  smoothScroll(300);
  workBelt();
});

function smoothScroll(duration) {
  $('a[href^="#"]').on('click', function (event) {

    var target = $($(this).attr('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}

function workBelt() {
  $('.thumb__unit').click(function () {
    $('.site-work__belt').css('left', '-100%');
    $('.projects-page').show();
  });

  $('.projects-page__return').click(function () {
    $('.site-work__belt').css('left', '0%');
    $('.projects-page').hide();

  });
}

export default Functions;