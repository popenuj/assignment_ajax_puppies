var APP = APP || {}

APP.View = (function() {
  var _$refreshLink = $("a").eq(0);
  var _$puppyList = $('#puppy-list');

  var init = function(refreshPupsCB) {
    _addRefreshListener(refreshPupsCB);
  }


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

  var renderPuppies = function renderPuppies(puppies) {
    for(var i = 0; i < puppies.length; i++) {
      var text = '<span>'+puppies[i].name+'</span> '+'('+puppies[i].breed.name+'), created '+ APP.timeSince(puppies[i].created_at+' ago -- ');
      var link = $('<a>').attr('href', '#').text('adopt');
      var li = $('<li>').text(text).append(link);

      _$puppyList.append(li);
    }
  }

  return {
    init: init,
    renderPuppies: renderPuppies
  }
})();

// {"name":"New one",
// "breed":{"id":112,"name":"Affenpinscher",
//           "created_at":"2016-09-22T15:28:47.774Z"
//           ,"updated_at":"2016-09-22T15:28:47.774Z"},
//  "id":7230,
//  "created_at":"2016-12-28T06:53:07.547Z",
//  "url":"https://ajax-puppies.herokuapp.com/puppies/7230.json"}

////////////////// Sample puppy list response
// [{"name":"New one","breed":{"id":112,"name":"Affenpinscher","created_at":"2016-09-22T15:28:47.774Z","updated_at":"2016-09-22T15:28:47.774Z"},"id":7230,"created_at":"2016-12-28T06:53:07.547Z","url":"https://ajax-puppies.herokuapp.com/puppies/7230.json"},{"name":"OMG","breed":{"id":114,"name":"Airedale Terrier","created_at":"2016-09-22T15:28:47.785Z","updated_at":"2016-09-22T15:28:47.785Z"},"id":7231,"created_at":"2016-12-28T06:53:56.860Z","url":"https://ajax-puppies.herokuapp.com/puppies/7231.json"},{"name":"Jimmy","breed":{"id":128,"name":"Borzoi","created_at":"2016-09-22T15:28:47.897Z","updated_at":"2016-09-22T15:28:47.897Z"},"id":7239,"created_at":"2016-12-28T08:25:18.618Z","url":"https://ajax-puppies.herokuapp.com/puppies/7239.json"},{"name":"Viking Code Dog","breed":{"id":112,"name":"Affenpinscher","created_at":"2016-09-22T15:28:47.774Z","updated_at":"2016-09-22T15:28:47.774Z"},"id":7240,"created_at":"2017-01-13T16:26:37.477Z","url":"https://ajax-puppies.herokuapp.com/puppies/7240.json"}]
