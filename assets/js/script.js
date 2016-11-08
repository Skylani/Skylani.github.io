$(function() {
  nav();
  smoothScroll();
  showBackToTop();
  projects.init();

  //allow :active styles to work in Mobile Safari
  document.addEventListener("touchstart", function(){}, true);
});


function nav() {
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
}

// Show back to top button when scrolled to an offset position
function showBackToTop() {
  var offset = 400;
  var duration = 700;
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(duration);
    } else {
      $('.back-to-top').fadeOut(duration);
    }
  });
}

// Smooth scrolling
function smoothScroll() {
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
}


var projects = {

  init: function() {
    $activeProject = '';
    $activeTag = $('.project-tag-all').addClass('active');

    // Masonry setting
    $grid = $('.grid').imagesLoaded( function() {
      // init Isotope after all images have loaded
      $grid.isotope({
        itemSelector: '.grid-item',
        masonry: {
          columnWidth: 100,
        }
      });
    });

    projects.tagChangeListener();
    projects.loadProject();
    projects.updateLayoutOnResize();
    projects.scrollToCurrentItem();
  },

  updateTagState: function($projectTag) {
    $activeTag.removeClass('active');
    $projectTag.addClass('active');
    $activeTag = $projectTag;
  },

  tagChangeListener: function() {
    $('.project-tag').on('click', function(){

      var $projectTag = $(this);
      projects.restorePrevProject();

      // Action when different tag clicked
      if($projectTag[0] != $activeTag[0]) {
        $('html, body').animate({ scrollTop: 0 }, 200);
        var tagName = projects.getTagName(this.className);
        var filterName = projects.getFilterName(tagName);
        $grid.isotope({ filter: filterName });

        // Update tag state in header tags
        if($projectTag.parent().hasClass('header-tags')) {
          projects.updateTagState($projectTag);
        } else {
          projects.updateTagState($('.header-tags').find('.project-tag-' + projects.getTagName(this.className)));
        }
      }
    });
  },

  getFilterName: function(tagName) {
    if(tagName == 'all') {
      return '*';
    }

    return '.' + tagName;
  },

  getTagName: function(className) {
    var tagClass = className.split(' ')[2];
    return tagClass.split('-')[2];
  },

  loadProject: function() {
    $.ajaxSetup({ cache: true });

    // Click on non-active project
    $('.grid-item').on('click', function(e) {
      if(e.target.tagName != 'IMG') return;

      $this = $(this);
      if(!$this.hasClass('active')) {
        projects.restorePrevProject();

        $activeProjectHidable = $this.find('.project-hidable').show();
        $projectContent = $activeProjectHidable.find('.project-content');
        $projectTitle = $activeProjectHidable.find('.project-title');
        $activeProject = $this.addClass('active');
        $grid.isotope('layout');

        var spinner = '<div class="loader">Loading...</div>',
            folder = $this.data('folder'),
            title = $this.data('title'),
            newHTML = '/projects/' + folder + '/index.html';

        $projectTitle.text(title);
        $projectContent.html(spinner);
        $projectContent.load(newHTML, function() {
          $grid.isotope('layout');
        });
      }
    });
  },

  scrollToCurrentItem: function() {
    $grid.on('layoutComplete', function( event, laidOutItems ) {
      if($activeProject != '') {
        $('html, body').animate({
          scrollTop: $activeProject.offset().top
        }, 200);
      }
    });
  },


  updateLayoutOnResize: function() {
    $(window).resize(function(){
      $grid.isotope('layout');
    });
  },

  restorePrevProject: function() {
    if($activeProject != '') {
      $activeProjectHidable.hide();
      $activeProject.removeClass('active');
      $activeProject = '';
    }
  },
};