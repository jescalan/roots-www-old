(function() {

  console.log("hello from a require'd coffee file");

}).call(this);

(function() {
  var js;

  js = ["http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"];

  require(js, function() {
    return $(function() {
      var filterPath, locationPath, scrollElem, scrollableElement;
      setTimeout((function() {
        return $('.icon').css({
          opacity: 1
        });
      }), 500);
      filterPath = function(string) {
        return string.replace(/^\//, '').replace(/(index|default).[a-zA-Z]{3,4}$/, '').replace(/\/$/, '');
      };
      $('a[href*=#]').each(function() {
        var $target, target, targetOffset, thisPath;
        thisPath = filterPath(this.pathname) || locationPath;
        if (locationPath === thisPath && (location.hostname === this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
          $target = $(this.hash);
          target = this.hash;
          if (target) {
            targetOffset = $target.offset().top;
            return $(this).on('click', function(e) {
              e.preventDefault();
              return $(scrollElem).animate({
                scrollTop: targetOffset
              }, 400, function() {
                return location.hash = target;
              });
            });
          }
        }
      });
      scrollableElement = function(els) {
        var $scrollElement, arg, isScrollable, _i, _len;
        for (_i = 0, _len = arguments.length; _i < _len; _i++) {
          arg = arguments[_i];
          $scrollElement = $(arg);
          if ($scrollElement.scrollTop() > 0) {
            return arg;
          } else {
            $scrollElement.scrollTop(1);
            isScrollable = $scrollElement.scrollTop() > 0;
            $scrollElement.scrollTop(0);
            if (isScrollable) {
              return arg;
            }
          }
        }
        return [];
      };
      locationPath = filterPath(location.pathname);
      return scrollElem = scrollableElement('html', 'body');
    });
  });

}).call(this);
