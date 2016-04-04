var $svg = $('svg');
var $lines = $('.lines');
var $btn = $('.btn');
var $engage = $('.engage');

$btn.on('click', function () {

  $lines.addClass('addlines');

  $lines.removeClass('lines');

  $engage.addClass('is-engage');

  $svg.addClass('.engage');

});
