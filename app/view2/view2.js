'use strict';

angular.module('myApp.view2', ['ngRoute', 'ngResource'])

.config(['$routeProvider' ,'$sceDelegateProvider',
    function($routeProvider, $sceDelegateProvider ) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });

        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain. **.
            'https://api.openweathermap.org/**'
        ]);

}])

.controller('View2Ctrl', ['$scope', '$resource', 'cityService',function($scope, $resource, cityService){
      $scope.name= cityService.city;
      $scope.$watch('name', function() {
        cityService.city = $scope.name;
      })


    ///https://api.openweathermap.org/data/2.5/weather?q=Perth&appid=0e9a696b90b68060101270f94e66481f&units=metric

    $scope.openWeather =
        $resource(openWeatherApi.url + "/" + openWeatherApi.version
            + "/" + "weather" + "?q=" + $scope.name + "&appid=" + openWeatherApi.appid + "&units" + openWeatherApi.units
        );
      $scope.results =  $scope.openWeather.get();
      console.log($scope.results);
}]
);

