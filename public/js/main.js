(function() {
  requirejs.config({
    shim: {
      waypoints: {
        deps: ['jquery']
      }
    },
    paths: {
      jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min',
      waypoints: '/js/waypoints.min'
    }
  });

  require(['jquery', 'waypoints'], function($) {
    return $(function() {
      $('.icon').addClass('in');
      if ($(window).scrollTop() > 392) {
        $('#docnav').css({
          top: 5
        });
      }
      $(window).on('scroll', function() {
        if ($(window).scrollTop() > 330) {
          return $('#docnav').css({
            top: 5
          });
        } else {
          return $('#docnav').css({
            top: 330 - $(window).scrollTop()
          });
        }
      });
      $('.docs h3').waypoint(function() {
        $('#docnav li').removeClass('active');
        return $("a[href='#" + ($(this).attr('id')) + "']").parent().addClass('active');
      });
      $('a[href*=#]:not([href=#])').on('click', function() {
        var factor, target;

        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {
          target = $(this.hash).length ? $(this.hash) : $("[name=" + (this.hash.slice(1)) + "]");
          if (target.length) {
            factor = target.offset().top > $(window).scrollTop() ? -1 : 1;
            $('html,body').animate({
              scrollTop: target.offset().top - factor
            }, 500);
            return false;
          }
        }
      });
      return $('a[href^="http://"]').attr('target', '_blank');
    });
  });

}).call(this);
