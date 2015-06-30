'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'loginRegister/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', [function() {

}]);