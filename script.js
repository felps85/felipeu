window.onblur = function () { document.title = 'Where are you?'; }

window.onfocus = function () { document.title = 'Welcome back'; }

// $( document ).ready(function() {

//   $(window).blur(function(e) {
//       $(document).attr("title", "Hey, come back");
//   });

//   $(window).focus(function(e) {
//       $(document).attr("title", "Welcome back!");
//   });

// });