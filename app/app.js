'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngRoute', 'myApp.version'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider

    	  .when('/home', {
        templateUrl: 'issueViews/home.html',
        controller: 'NavigatorCtrl'
      })

      .when('/login', {
        templateUrl: 'loginRegister/login.html',
        controller: 'AuthCtrl'
      })

      .when('/register', {
        templateUrl: 'loginRegister/register.html',
        controller: 'AuthCtrl'
      })

      .when('/civilLiberties', {
        templateUrl: 'issueViews/civilLiberties.html',
        controller: 'NavigatorCtrl'
      })

      .when('/crimeAndPunishment', {
        templateUrl: 'issueViews/crimeAndPunishment.html',
        controller: 'NavigatorCtrl'
      })

      .when('/education', {
        templateUrl: 'issueViews/education.html',
        controler: 'NavigatorCtrl'
      })

      .when('/energy', {
        templateUrl: 'issueViews/energy.html',
        controller: 'NavigatorCtrl'
      })

      .when('/environment', {
        templateUrl: 'issueViews/environment.html',
        controller: 'NavigatorCtrl'
      })

      .when('/gunControl', {
        templateUrl: 'issueViews/gunControl.html',
        controller: 'NavigatorCtrl'
      })

      .when('/healthSafety', {
        templateUrl: 'issueViews/healthSafety.html',
        controller: 'NavigatorCtrl'
      })

      .when('/immigration', {
        templateUrl: 'issueViews/immigration.html',
        controller: 'NavigatorCtrl'
      })

      .when('/infrastructure', {
        templateUrl: 'issueViews/infrastructure.html',
        controller: 'NavigatorCtrl'
      })

      .when('/internationalRelations', {
        templateUrl: 'issueViews/internationalRelations.html',
        controller: 'NavigatorCtrl'
      })

      .when('/jobsEconomy', {
        templateUrl: 'issueViews/jobsEconomy.html',
        controller: 'NavigatorCtrl'
      })

      .when('/qualityOfLife', {
        templateUrl: 'issueViews/qualityOfLife.html',
        controller: 'NavigatorCtrl'
      })

      .when('/reproduction', {
        templateUrl: 'issueViews/reproduction.html',
        controller: 'NavigatorCtrl'
      })

      .when('/taxes', {
        templateUrl: 'issueViews/taxes.html',
        controller: 'NavigatorCtrl'
      })

      .when('/socialServices', {
        templateUrl: 'issueViews/socialServices.html',
        controller: 'NavigatorCtrl'
      });

  $routeProvider.otherwise({redirectTo: '/home'});
}])


app.run(function ($rootScope, $location, Data) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.authenticated = false;
            Data.get('session').then(function (results) {
                if (results.uid) {
                    $rootScope.authenticated = true;
                    $rootScope.uid = results.uid;
                    $rootScope.name = results.name;
                    $rootScope.email = results.email;
                } else {
                    var nextUrl = next.$$route.originalPath;
                    if (nextUrl == '/signup' || nextUrl == '/login') {
 
                    } else {
                        $location.path("/login");
                    }
                }
            });
        });
    });