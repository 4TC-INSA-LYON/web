angular.module('BlankApp', [])
.controller('MonController', ['$scope', function($scope) {
  $scope.coucou = function() { console.log("Hello"); }
  $scope.titre = "Bonjour maman";
}])


.factory('WebQuest', ['$http', function($http) {
  return {
/*    call: function() {
      $http.get('http://localhost:3000/test')
      .then(res => {console.log('-->', res)});
    }
    */
  }
}])
;

