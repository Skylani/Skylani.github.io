$(document).ready(function(){
  $("header").headroom();

  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });

});
