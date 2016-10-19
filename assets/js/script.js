$(document).ready(function(){
  $("#header").headroom();

  $('#toggle').click(function() {
    $(this).toggleClass('active');
    // Show nav
    $('#overlay').toggle();
    // Apply overlay style to nav
    $('#overlay').addClass('isOverlay');
    // Open overlay
    $('#overlay').toggleClass('open');
  });

  $(window).resize(function(){
    if($(window).width() > 535) {
      // Remove overlay style
      $('#overlay').removeClass('isOverlay');
      // Show nav
      $('#overlay').removeAttr('style');
      // Close menu
      $('#toggle').removeClass('active');
      // Close overlay
      $('#overlay').removeClass('open');
    }

    if($(window).width() < 535) {
      // Apply overlay style
      $('#overlay').addClass('isOverlay');
    }
  });

});
