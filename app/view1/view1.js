'use strict';

var myApp= angular.module('myApp.view1', ['ngRoute', 'ngMessages', 'ngResource'])

.config(['$routeProvider', function($routeProvider ) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });


}
])
    .controller('View1Ctrl', ['$scope', '$location' ,'cityService',function($scope, $location, cityService) {
        $scope.name= cityService.city;
        $scope.$watch('name', function() {
            cityService.city = $scope.name;
        })

        $scope.submit = function() {
            $location.path("/view2")
        }


    }]);

myApp.service('cityService', function() {
    console.log("service in view1");
    this.city = "Please enter city name";
})
