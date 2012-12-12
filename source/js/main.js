$(function() {
  var texts = ['Schweiz', 'Suisse', 'Suizzera', 'Svizra', 'Switzerland'];
  var pos = 0;

  window.setInterval(function() {
    $("#caption-switzerland").fadeOut('fast', function() {
      $(this).text(texts[++pos % texts.length]);
    });
    $("#caption-switzerland").fadeIn('fast');
  }, 3000);
});

// eof
