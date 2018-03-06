$( document ).ready(function() {

  $(window).blur(function(e) {
      $("title").text("Hey, come back");
  });

  $(window).focus(function(e) {
      $("title").text("Welcome back!");
  });

});