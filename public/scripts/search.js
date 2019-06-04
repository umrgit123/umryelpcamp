//$.ajaxSetup({ cache: false });
$.getJSON("https://umrwebdev-umrlearn.c9users.io/campgrounds", {format: 'json'});
$('#campground-search').on('input', function() {
  var search = $(this).serialize();
  if(search === "search=") {
    search = "all"
  }
  $.get('/campgrounds?' + search, function(data) {
    $('#campground-grid').html('');
//    $('#campground-grid').append(<div class="thumbnail">);
    data.forEach(function(campground) {
      $('#campground-grid').append(`
        <div class="col-md-3 col-sm-6">
          <div class="thumbnail-size">
            <img src="${ campground.image }">
            <div class="caption">
              <h4>${ campground.name }</h4>
            </div>
            <p>
              <a href="/campgrounds/${ campground._id }" class="btn btn-primary">More Info</a>
            </p>
          </div>
        </div>
      `)
    });
//    $('#campground-grid').append(</div>);
  });
});