import $ from 'jquery';



$(function Functions() {
  smoothScroll(300);
  workBelt();
  workLoad();
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
    $('.projects-page').hide(500);

  });
}

function workLoad() {
  $.ajaxSetup({
    cache: false
  });

  $('.thumb__unit').click(function () {

    var $this = $(this),
      newTitle = $this.find('strong').text(),
      newFolder = $this.data('folder'),
      spinner = '<div class="loader">Loading...</div>',
      newHTML = '/work/' + newFolder + '.html';
    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });
}

export default Functions;