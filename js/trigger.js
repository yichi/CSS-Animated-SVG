(function() {
  var i, resize;

  i = setInterval(function() {
    return $("div").toggleClass("cross");
  }, 1500);

  $("div").click(function() {
    clearInterval(i);
    return $("div").toggleClass("cross");
  });

  resize = function() {
    return $("body").css({
      "margin-top": ~~((window.innerHeight - 150) / 2) + "px"
    });
  };

  $(window).resize(resize);

  resize();

}).call(this);