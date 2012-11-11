(function() {

  console.log("hello from a require'd coffee file");

}).call(this);

(function() {
  var js;

  js = ["http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"];

  require(js, function() {
    return $(function() {
      return setTimeout((function() {
        return $('.icon').css({
          opacity: 1
        });
      }), 500);
    });
  });

}).call(this);
