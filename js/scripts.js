$(document).ready(function(){
    google.maps.visualRefresh = true;
    map = new google.maps.Map(document.getElementById("map-container"), {
            disableDefaultUI: true,
            disableDoubleClickZoom: true,
            scrollwheel: true,
            keyboardShortcuts: false,
            minZoom: 4,
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            },
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
            },
            overviewMapControl: true
        });
    map.setCenter(new google.maps.LatLng(41, 29));
});