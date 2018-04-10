angular.module('BlankApp', [])
.controller('MonController', ['$scope', function($scope) {
  coucou2 = function() { console.log("Hello"); }
  $scope.titre = "Hello" + new Date();
  $scope.coucou = function() { coucou2(); }

}])
;

