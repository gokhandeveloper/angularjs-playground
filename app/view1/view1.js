'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngMessages', 'ngResource'])

.config(['$routeProvider', function($routeProvider ) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });


}
])
    .controller('View1Ctrl', ['$scope',function($scope) {
      $scope.name="gokhan"
console.log($scope)
}]);

