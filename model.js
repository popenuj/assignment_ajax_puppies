var APP = APP || {}

APP.Model = (function() {
  var _puppies;

  // var _parseResponse = function(response) {}

  var setPuppies = function setPuppies(response) {
    _puppies = response;
  }

  var getPuppies = function getPuppies() {
    return _puppies;
  }

  return {
    setPuppies: setPuppies,
    getPuppies: getPuppies
  }
})();
