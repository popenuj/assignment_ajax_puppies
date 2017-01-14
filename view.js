var APP = APP || {}

APP.View = (function($) {
  var _$refreshLink = $("a").eq(0);
  var _$puppyList = $('#puppy-list');
  var _$ul = $('ul');

  var init = function(refreshPupsCB, addPupCB, adoptPupCB) {
    _addRefreshListener(refreshPupsCB);
    _addPuppyToPen(addPupCB);
    _addAdoptionListener(adoptPupCB);
  };

  var _addPuppyToPen = function(addPupCB) {
    $("form[data-ajaxremote='true']").submit(function(event){
      event.preventDefault();
      var $el = $(event.target);
      var name = $('#name').val();
      var breed_id = $('#breed_id').val();

      $.ajax({
        url: $el.attr("action"),
        method: "POST",
        contentType: 'application/json',
        data: JSON.stringify({ name, breed_id}),
        success: addPupCB,
      })
    });
  };

  var _addRefreshListener = function(refreshPupsCB) {
    _$refreshLink.click(function(e) {

      e.preventDefault();
      $.ajax({
        url: _$refreshLink.attr("href"),
        method: 'GET',
        dataType: 'json',
        success: refreshPupsCB
      })
    });
  };

  var _addAdoptionListener = function(adoptPupCB) {
    _$ul.on("click", "a", function(e) {
      e.preventDefault();
      $.ajax({
        url: $(e.target).attr("href"),
        method: 'DELETE',
        dataType: 'json',
        success: adoptPupCB
      })
    });
  };

  var renderPuppies = function renderPuppies(puppies) {
    _$puppyList.html("");
    var i = puppies.length;
    while (i--) {
      var li = _buildPuppyLi(puppies[i]);
      _$puppyList.append(li);
    }
  };

  var _buildPuppyLi = function(puppyObject) {
    var name = $('<b>').text(puppyObject.name);
    var text = ' ('+puppyObject.breed.name+'), created '+ APP.timeSince(puppyObject.created_at)+' ago -- ';
    var url = "https://ajax-puppies.herokuapp.com/puppies/" +  puppyObject.id +".json"
    var link = $('<a>').attr('href', url).text('adopt');
    return $('<li>').append(name).append(text).append(link);
  }

  return {
    init: init,
    renderPuppies: renderPuppies
  }
})($);

// {"name":"New one",
// "breed":{"id":112,"name":"Affenpinscher",
//           "created_at":"2016-09-22T15:28:47.774Z"
//           ,"updated_at":"2016-09-22T15:28:47.774Z"},
//  "id":7230,
//  "created_at":"2016-12-28T06:53:07.547Z",
//  "url":"https://ajax-puppies.herokuapp.com/puppies/7230.json"}

////////////////// Sample puppy list response
// [{"name":"New one","breed":{"id":112,"name":"Affenpinscher","created_at":"2016-09-22T15:28:47.774Z","updated_at":"2016-09-22T15:28:47.774Z"},"id":7230,"created_at":"2016-12-28T06:53:07.547Z","url":"https://ajax-puppies.herokuapp.com/puppies/7230.json"},{"name":"OMG","breed":{"id":114,"name":"Airedale Terrier","created_at":"2016-09-22T15:28:47.785Z","updated_at":"2016-09-22T15:28:47.785Z"},"id":7231,"created_at":"2016-12-28T06:53:56.860Z","url":"https://ajax-puppies.herokuapp.com/puppies/7231.json"},{"name":"Jimmy","breed":{"id":128,"name":"Borzoi","created_at":"2016-09-22T15:28:47.897Z","updated_at":"2016-09-22T15:28:47.897Z"},"id":7239,"created_at":"2016-12-28T08:25:18.618Z","url":"https://ajax-puppies.herokuapp.com/puppies/7239.json"},{"name":"Viking Code Dog","breed":{"id":112,"name":"Affenpinscher","created_at":"2016-09-22T15:28:47.774Z","updated_at":"2016-09-22T15:28:47.774Z"},"id":7240,"created_at":"2017-01-13T16:26:37.477Z","url":"https://ajax-puppies.herokuapp.com/puppies/7240.json"}]
