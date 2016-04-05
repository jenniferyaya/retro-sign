var $svg = $('svg');
var $lines = $('.lines');
var $engage = $('.engage');
var $btn = $('.btn');

$('svg').on('click', function (e) {
  $('.lines').toggleClass('is-pressed');
  $('.engage').toggleClass('engaged');
  $btn.toggleClass('button');
  $('svg').toggleClass('is-pressed');
});
