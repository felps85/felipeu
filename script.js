jQuery(document).ready(function( $ ){

// Change page title on blur
  $(window).blur(function() {
  $("title").text("Miss You ❤");
  });

// Change page title back on focus
  $(window).focus(function() {
  $("title").text("Welcome back!");
  });
});