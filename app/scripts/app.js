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
      .when('/ppn/provider/spanish', {
        templateUrl: 'views/ppn_espanol.html',
        controller: 'PpnProviderEnglish'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
