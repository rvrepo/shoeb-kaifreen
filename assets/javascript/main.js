(function() {

  // Set the date we're counting down to
  var countDownDate = new Date("Feb 28, 2020 21:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    if (distance < 0) {
      distance = now - countDownDate;
      var marriedEle = document.getElementById('married-text');
      marriedEle.innerHTML = 'got married on'
      var countingEle = document.getElementById('counting-text');
      countingEle.innerHTML = 'married since';
    }

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    var daysEle = document.getElementById("days");
    var hoursEle = document.getElementById("hours");
    var minutesEle = document.getElementById("minutes");
    var sencondsEle = document.getElementById("seconds");
    var daysText = 'days';
    var hoursText = 'hours';
    var minutesText = 'minutes';
    var secondsText = 'seconds';

    if (days === 1) {
      daysText = 'day';
    }
    if (hours === 1) {
      hoursText = 'hour';
    }
    if (minutes === 1) {
      minutesText = 'minute';
    }
    if (seconds === 1) {
      secondsText = 'second';
    }

    daysEle.innerHTML = '<span>' + days + '</span>' + '<span class="timer-subtext">' + daysText + '</span>';
    hoursEle.innerHTML = '<span>' + hours + '</span>' + '<span class="timer-subtext">' + hoursText + '</span>';
    minutesEle.innerHTML = '<span>' + minutes + '</span>' + '<span class="timer-subtext">' + minutesText + '</span>';
    sencondsEle.innerHTML = '<span>' + seconds + '</span>' + '<span class="timer-subtext">' + secondsText + '</span>';


  }, 1000);

  initMap();

})();


function initMap() {

  var mymap = L.map('map').setView([23.066384, 70.117546], 15);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11'
  }).addTo(mymap);

  var greenIcon = L.icon({
    iconUrl: '/assets/images/marker.png',
    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [50, 30], // point of the icon which will correspond to marker's location
    popupAnchor:  [-25, -35] // point from which the popup should open relative to the iconAnchor
});

  L.marker([23.066384, 70.117546], {icon: greenIcon}).addTo(mymap)
    .bindPopup("<b>Basma Gardens</b><br />IFFCO Colony, Uday Nagar, Gandhidham.").openPopup();



  var popup = L.popup();

  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(mymap);
  }

  mymap.on('click', onMapClick);



}