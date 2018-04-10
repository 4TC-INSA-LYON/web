angular.module('BlankApp', [])
.controller('MonController', ['$scope', 'WebQuest', function($scope, WebQuest) {
  $scope.coucou = function() { console.log("Hello"); WebQuest.call(); }
  $scope.titre = "Bonjour maman";
}])
.factory('WebQuest', ['$http', function($http) {
  return {
    call: function() {
      $http.get('http://localhost:3000/test')
      .then(res => {console.log('-->', res)});
    }
  }
}])
;

