(function() {
  $((function() {
    return $('.excl-instruction-click').on('click', function() {
      $('.excl-instruction').toggleClass('show');
      $('.excl-instruction-click .icon-plus').toggleClass('hide');
      return $('.excl-instruction-click .icon-minus').toggleClass('hide');
    });
  }));

}).call(this);
