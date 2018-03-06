$( document ).ready(function() {

  $(window).blur(function(e) {
      $(document).attr("title", "Hey, come back");
  });

  $(window).focus(function(e) {
      $(document).attr("title", "Welcome back!");
  });

});