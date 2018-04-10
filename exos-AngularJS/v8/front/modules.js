angular.module('BlankApp', ['ui.router'])
.config(function($stateProvider) {
  $stateProvider
  .state(
    'home'
  ,
    {
      url: '/',
      component: 'root'
    }
  )
})
.factory('WebQuest', ['$http', function($http) {
  return {
    call: function() {
      $http.get('http://localhost:3000/test')
      .then(res => {console.log('-->', res)});
    }
  }
}])
.filter('reverse', function() {
  return function(input, uppercase) {
    console.log("->", input);

    input = input || '';
    var out = '';
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    if (uppercase) {
      out = out.toUpperCase();
    };

    return out;
  }
})
;

