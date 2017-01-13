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

  var addPuppy = function addPuppy() {

  }

  return {
    setPuppies: setPuppies,
    getPuppies: getPuppies,
    addPuppy: addPuppy
  }
})();
