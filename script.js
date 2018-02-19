(function($) {
  $('a[href^=mailto]').each(function() {
    var href = $(this).attr('href');
    $(this).click(function() {
      var t;
      var self = $(this);

      $(window).blur(function() {
        // The browser apparently responded, so stop the timeout.
        clearTimeout(t);
      });

      t = setTimeout(function() {
        // The browser did not respond after 500ms, so open an alternative URL.
        document.location.href = '...';
      }, 500);
    });
  });
})(jQuery);