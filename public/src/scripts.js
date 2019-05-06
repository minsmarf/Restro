var map, infoWindow;
function initMap(){
    var options= { center: {lat: 37.335, lng:  -121.89 },
                    // mapTypeId: 'terrain',
                    zoom: 10}; 
    map = new google.maps.Map(document.getElementById('map'), options);
    
    infoWindow = new google.maps.InfoWindow;

    if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (p){
        var position = {
        lat: p.coords.latitude,
        lng:p.coords.longitude
        };
        console.log('Postion',position);
        infoWindow.setPosition(position);
        infoWindow.setContent('<div ><img src="assets/Google_Places.png" height="50px"></div>');
        infoWindow.open(map);
    }, function(){
        handleLocationError('Geolocation service failed', map.center());
    }
    )
    }else {
    handleLocationError('No geolocation available', map.center());
    }
}
function handleLocationError(content,position){
    console.log('failed here');
    infoWindow.setPosition(position);
    infoWindow.setContent(content);
    infoWindow.open(map);
}