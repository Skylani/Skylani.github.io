$(document).ready(function(){
  $("#header").headroom();

  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });

  $(window).resize(function(){
    if($(window).width() >= 550) {
      // Close menu
      $('#toggle').removeClass('active');
      // Close overlay
      $('#overlay').removeClass('open');
    }
  });

  // Show back to top button when scrolled to an offset position
  var offset = 400;
  var duration = 700;
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(duration);
    } else {
      $('.back-to-top').fadeOut(duration);
    }
  });

  // Smooth scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });

  //allow :active styles to work in Mobile Safari
  document.addEventListener("touchstart", function(){}, true);

});
