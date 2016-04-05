var $svg = $('svg');
var $lines = $('.lines');
var $btn = $('.btn');
var $engage = $('.engage');

$svg.on('click', function (e) {
  $lines.toggleClass('is-on');
  $engage.toggleClass('engage');
  $btn.toggleClass('button');
  $svg.toggleClass('is-pressed');
});
