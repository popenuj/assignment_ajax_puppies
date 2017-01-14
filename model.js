var APP = APP || {}

APP.Model = (function() {
  var _puppies = [];

  // var _parseResponse = function(response) {}

  var setPuppies = function setPuppies(response) {
    _puppies = response;
  }

  var getPuppies = function getPuppies() {
    return _puppies;
  }

  var _getBreeds = function() {
    $.ajax({
      url: "https://ajax-puppies.herokuapp.com/breeds.json",
      method: 'GET',
      dataType: 'json',
      success: function(response){ _breeds = response }
    })
    return _breeds;
  };

  var adoptPup = function(response) {
    console.log(response);
  };

  var _breeds = _breeds || _getBreeds();

  var _formatPuppy = function(puppy) {
    var breed_id = puppy.breed_id
    for (var i = 0; i < _breeds.length; i++) {
      if (_breeds[i].id === breed_id) {
        puppy.breed = {id: breed_id, name: _breeds[i].name}
        return puppy;
      }
    }
    return puppy;
  }

  var addPuppy = function addPuppy(response) {
    var puppy = _formatPuppy(response)
    _puppies.push(puppy);
  };


  return {
    setPuppies: setPuppies,
    getPuppies: getPuppies,
    addPuppy: addPuppy,
    adoptPup: adoptPup,
  }
})();
