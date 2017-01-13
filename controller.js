var APP = APP || {}

APP.Controller = (function(view, model) {
  var _refreshPupsCB = function(response) {
    model.setPuppies(response);
    view.renderPuppies(model.getPuppies());
  }

  var init = function() {
    view.init(_refreshPupsCB);
  };

  return {
    init: init
  }
})(APP.View, APP.Model);

$(document).ready(function() {
  APP.Controller.init();
});

APP.timeSince = function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}
