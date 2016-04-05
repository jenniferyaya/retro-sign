var $svg = $('svg');
var $lines = $('.lines');
var $btn = $('.btn');
var $engage = $('.engage');

$svg.on('click', function (e) {
  $lines.addClass('addlines');
  $lines.removeClass('lines');
  $engage.addClass('is-engage');
  $svg.toggleClass('is-on');
  $btn.toggleClass('btn');
  $svg.addClass('engage');
});
