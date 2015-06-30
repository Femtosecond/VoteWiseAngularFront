'use strict';

angular.module('myApp.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'loginRegister/register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', [function() {

}]);