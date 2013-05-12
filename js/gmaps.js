var map;
function initialize() {
    var myInitLatLong = new google.maps.LatLng(31.439978,-100.490445);
    var mapOptions = {
      zoom: 6,
      center: myInitLatLong,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map_canvas'),
    mapOptions);
  var marker0 = new google.maps.Marker({
      position: new google.maps.LatLng(31.070763,-97.370263),
      map: map
  });
  var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(31.473401,-97.201005),
      map: map
  });
  var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(31.439978,-100.490445),
      map: map
  });
  var marker3 = new google.maps.Marker({
      position: new google.maps.LatLng(32.000252,-102.11891),
      map: map
  });
  var marker4 = new google.maps.Marker({
      position: new google.maps.LatLng(31.120503,-97.875935),
      map: map
  });
  var marker5 = new google.maps.Marker({
      position: new google.maps.LatLng(33.592333,-101.927722),
      map: map
  });
}

google.maps.event.addDomListener(window, 'load', initialize);