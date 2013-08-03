
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
function LazAlpleriController($scope, $route, $routeParams){
    $scope.actions = actions;
    $scope.markers = [];
    $scope.paths = [];

    $scope.$on('$routeChangeSuccess', function(event, current) {
       var action = current.params.action;
       if (!action)
            return;
        else
            console.log(action);
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
                    strokeWeight: 2
                  });

                $scope.paths.push(path);
            }
        });
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



    initializeMap();
    initializeMapPoints();
}

$(document).ready(function(){


  //   var gun1Path = new google.maps.Polyline({
  //   path: gun1Points,
  //   strokeColor: "#FF0000",
  //   strokeOpacity: 1.0,
  //   strokeWeight: 2
  // });

  // gun1Path.setMap(map);
});