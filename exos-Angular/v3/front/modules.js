angular.module('BlankApp', [])
.controller('MonController', ['$scope', function($scope) {
  $scope.coucou = function() { console.log("Hello"); }
  $scope.titre = "Bonjour maman";
}])
;

