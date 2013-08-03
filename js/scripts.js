
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

    getPolylineBounds = function(polylineKey) {
        var polylines = jQuery.grep($scope.paths, function(p){
            return p.key == polylineKey;
        });
        if(polylines.length != 1)
            return;

        var polyline = polylines[0];

        var bounds = new google.maps.LatLngBounds();
        var points = polyline.getPath().getArray();
        for (var n = 0; n < points.length ; n++){
            bounds.extend(points[n]);
        }

        return bounds;
    };

    goToAction = function(actionKey) {
        var acts = jQuery.grep(actions, function(a){
            return a.key == actionKey;
        });
        if(acts.length != 1)
            return;

        var action = acts[0];
        if(action.type == "Stay") {
            $scope.map.setCenter(new google.maps.LatLng(action.location.lat, action.location.lon));
            $scope.map.setZoom(17);
        }
        else {
            var bounds = getPolylineBounds(actionKey);
            $scope.map.fitBounds(bounds);
        }
    };

    initializeMap();
    initializeMapPoints();

    $scope.$on('$routeChangeSuccess', function(event, current) {
       var action = current.params.action;
       if (!action)
            return;
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

  //   var gun1Path = new google.maps.Polyline({
  //   path: gun1Points,
  //   strokeColor: "#FF0000",
  //   strokeOpacity: 1.0,
  //   strokeWeight: 2
  // });

  // gun1Path.setMap(map);
});