// wait for DOM to load before running JS
$(document).on('ready', function() {
  // check to make sure JS is loaded
  console.log('JS is loaded!');

  var $spotifySearchButton = $('form.search');
  var $trackInput = $('input.track');
  var $results = $('#results');
  var $loading = $('#loading')

  // spotify search button
  $spotifySearchButton.on('submit', function submitSearch(event) {
   event.preventDefault();

  var query = $trackInput.val();

   if (query === "") {
     alert("Enter a keyword to search!");
     return;
   }
  $results.empty();
  $loading.show();

  $.ajax({
  method: 'GET',
  url: 'https://api.spotify.com/v1/search',
  data: {
    type: "track",
    q: query
  },
  success: SpotifyData
});

function SpotifyData(responseData) {
  console.log(responseData);
  var trackResults = responseData.tracks.items;
  console.log(trackResults);
}

});
});
