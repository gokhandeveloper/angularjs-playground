'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider ) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });


}])

.controller('View2Ctrl', ['$scope', 'cityService',function($scope, cityService){
      $scope.name= cityService.city;
      $scope.$watch('name', function() {
        cityService.city = $scope.name;
      })
}]
);

