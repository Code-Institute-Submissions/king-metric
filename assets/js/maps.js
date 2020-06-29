function initMap() {
  // Initial loading zoom and location of map
  const initialStatus = {
    zoom: 2,
    center: { lat: 32.9714929, lng: -3.5220193 },
  };

  // Creation of the map
  var map = new google.maps.Map(document.getElementById("map"), initialStatus);

  // Adding the markers to the map
  const locations = [
    {
      //United States
      position: { lat: 37.0902, lng: -95.7129 },
      icon: "https://i.imgur.com/b6MthM1.png",
      title: "United States of America",
    },
    {
      // Myanmar
      position: { lat: 21.9162, lng: 95.956 },
      icon: "https://i.imgur.com/LnP6Vv7.png",
      title: "Myanmar",
    },
    {
      // Liberia
      position: { lat: 6.4281, lng: -9.4295 },
      icon: "https://i.imgur.com/JXc3mj7.png",
      title: "Liberia",
    },
  ];

  for (var i = 0; i < locations.length; i++) {
    var marker = new google.maps.Marker({
      position: locations[i].position,
      icon: locations[i].icon,
      title: locations[i].title,
      animation: google.maps.Animation.DROP,
      map: map,
    });
    var infoWindow = new google.maps.InfoWindow({
     content: locations[i].content,
    });

    marker.addListener("click", function(){
     infoWindow.open(map,marker);
    })
  }
}
