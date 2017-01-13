var APP = APP || {}

APP.View = (function() {

  var init = function() {
    _addRefreshListener();
  }

  var _$refreshLink = $("a").eq(0)

  var _addRefreshListener = function() {
    _$refreshLink.click(function(event) {
      event.preventDefault();
      $.ajax({
        url: _$refreshLink.attr("href"),
        method: 'GET',
        dataType: 'json',
        success: function(response) {
          console.log(response);
        }
      })
    });
  };

  return {
    init: init
  }
})();
