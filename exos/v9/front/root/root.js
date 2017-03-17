angular.module('BlankApp').component('root', {
   templateUrl: 'root/root.html',
   controller: ['$scope', 'WebQuest', function($scope, WebQuest) {
     $scope.coucou = function() { console.log("Hello"); WebQuest.call(); }
     $scope.titre = "Bonjour maman";
   }]
})
