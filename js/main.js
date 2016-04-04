var $svg = $('svg');
var $lines = $('.lines');
var $btn = $('.btn');
var $engage = $('.engage');

$btn.on('click', function () {

  $lines.addClass('addlines');

  $lines.removeClass('lines');

  $engage.addClass('is-engage');

});

$btn.on('mouseenter', function () {

  $(this).children('path:last-child').css('fill', '#f60');

});
