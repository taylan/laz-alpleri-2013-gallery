
angular.module('laz-alpleri', []).
config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/go/:action', {
    //templateUrl: 'chapter.html',
    controller: LazAlpleriController
    })
    .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
});

var mappe;
var pathss;
function LazAlpleriController($scope, $route, $routeParams){
    $scope.actions = actions;
    $scope.markers = [];
    $scope.paths = [];
    $scope.galleryPhotos = [];

    bindGalleryColorbox = function() {
        $.colorbox.remove();
        $("a.thumbnail").colorbox({
            rel: 'gallery',
            opacity: 0.7,
            width: '90%',
            height: '90%'
        });

        console.log("colorbox gogo");
    };

    $scope.$watch('galleryPhotos', function(oldGallery, newGallery) {
        console.log('gallery changed');

        setTimeout(function(){
            bindGalleryColorbox();
        }, 200);
    });

    initializeMapPoints = function() {
        angular.forEach($scope.actions, function(action){
            if(action.type == "Stay") {
                var marker = new google.maps.Marker({
                    map: $scope.map,
                    position: new google.maps.LatLng(action.location.lat, action.location.lon),
                    animation: google.maps.Animation.DROP,
                    title: action.name,
                    key: action.key
                });

                $scope.markers.push(marker);
            }
            else {
                var path = new google.maps.Polyline({
                    map: $scope.map,
                    path: action.path,
                    strokeColor: "#FF0000",
                    strokeOpacity: 0.7,
                    strokeWeight: 2,
                    key: action.key
                  });

                $scope.paths.push(path);
            }
        });

        pathss = $scope.paths;
    };

    initializeMap = function() {
        google.maps.visualRefresh = true;
        //return true;
        $scope.map = new google.maps.Map(document.getElementById("map-container"), {
                disableDefaultUI: true,
                disableDoubleClickZoom: true,
                scrollwheel: true,
                keyboardShortcuts: false,
                minZoom: 5,
                zoom: 11,
                mapTypeId: google.maps.MapTypeId.HYBRID,
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL
                },
                mapTypeControl: false,
                overviewMapControl: true
            });

        $scope.map.setCenter(new google.maps.LatLng(41.047891, 41.149128));
        mappe = $scope.map;
    };

    resetMap = function(){
        $scope.map.setCenter(new google.maps.LatLng(41.047891, 41.149128));
        $scope.map.setZoom(11);
    };

    findInArray = function(array, predicate) {
        var results = jQuery.grep(array, predicate);
        if(results.length != 1)
            return null;
        return results[0];
    };

    getPolylineBounds = function(polylineKey) {
        var polyline = findInArray($scope.paths, function(p){
            return p.key == polylineKey;
        });
        if(polyline == null)
            return;

        var bounds = new google.maps.LatLngBounds();
        var points = polyline.getPath().getArray();
        for (var n = 0; n < points.length ; n++){
            bounds.extend(points[n]);
        }

        return bounds;
    };

    setGalleryPhotos = function(action) {
        $scope.galleryPhotos = jQuery.grep(photos, function(p) {
            var pd = new Date(p.dt);
            return jQuery.grep(action.filterDates, function(fd){
                var xx = pd > new Date(fd.start) && pd < new Date(fd.end);
                return xx;
            }).length > 0;
        });
    };

    resetGalleryPhotos = function() {
        $scope.galleryPhotos = [];
        $.colorbox.remove();
    };

    goToAction = function(actionKey) {
        var action = findInArray($scope.actions, function(a){
            return a.key == actionKey;
        });
        if(action == null){
            resetGalleryPhotos();
            resetMap();
            return;
        }

        if(action.type == "Stay") {
            $scope.map.setCenter(new google.maps.LatLng(action.location.lat, action.location.lon));
            $scope.map.setZoom(17);
        }
        else {
            var bounds = getPolylineBounds(actionKey);
            $scope.map.fitBounds(bounds);
        }

        setGalleryPhotos(action);
    };

    initializeMap();
    initializeMapPoints();

    $scope.$on('$routeChangeSuccess', function(event, current) {
       var action = current.params.action;
       if (!action){
            resetGalleryPhotos();
            resetMap();
            return;
       }
        else
            goToAction(action);
     });

    $scope.getNavigationLinkTooltip = function(aa){
        var dates = jQuery.map(aa.displayDates, function(dd){
            var dt = new Date(dd);
            return dt.getDate() + "." + (dt.getMonth() + 1) + "." + dt.getFullYear();
        });
        return aa.name + "<br />" + dates.join("<br />");
    };
}

$(document).ready(function(){
    $(".navigation-link").tooltip({
        placement: 'right',
        html: true
    });
});