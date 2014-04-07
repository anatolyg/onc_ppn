'use strict';

angular
  .module('oncPpnApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ppn/provider/english', {
        templateUrl: 'views/ppn.html',
        controller: 'PpnProviderEnglish'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
