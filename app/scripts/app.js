(function () {
    'use strict';

    angular
      .module('oncPpnApp', [
        'ngRoute', 'ngSanitize'
      ])
      .config(['$routeProvider', function ($routeProvider) {
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
            .when('/ppn/healthplan/english', {
                templateUrl: 'views/ppn_hp.html',
                controller: 'PpnHcEnglish'
            })
            .when('/ppn/healthplan/spanish', {
                templateUrl: 'views/ppn_hp_espanol.html',
                controller: 'PpnHcEnglish'
            })
          .otherwise({
            redirectTo: '/'
          });
      }]).run(['$rootScope', function ($rootScope) {
         $rootScope.date = new Date();
      }]);
}());
