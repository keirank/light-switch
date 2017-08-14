$(document).ready(function() {
  $('#off').hide();
  $('#on').click(function() {
    $('body').toggleClass('all');
    $('#off').show();
    $('#on').hide();
  });
  $('#off').click(function() {
    $('body').toggleClass('all');
    $('#on').show();
    $('#off').hide();
  });
});