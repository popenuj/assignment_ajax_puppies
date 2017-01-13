var APP = APP || {}

APP.Controller = (function(view, model) {

  var init = function() {
    view.init();
  }

  return {
    init: init
  }
})(APP.View, APP.Model);

$.ready(function() {
  APP.Controller.init();
});
