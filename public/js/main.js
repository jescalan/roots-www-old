(function() {
  var js;

  js = ["http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", '/js/waypoints.min.js'];

  require(js, function() {
    return $(function() {
      setTimeout((function() {
        return $('.icon').css({
          opacity: 1
        });
      }), 500);
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
