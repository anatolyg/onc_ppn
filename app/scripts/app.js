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
          .when('/ppn/provider/en', {
            templateUrl: 'views/ppn.html',
            controller: 'PpnProviderEnglish'
          })
          .when('/ppn/provider/es', {
            templateUrl: 'views/ppn_espanol.html',
            controller: 'PpnProviderSpanish'
          })
            .when('/ppn/healthplan/en', {
                templateUrl: 'views/ppn_hp.html',
                controller: 'PpnHcEnglish'
            })
            .when('/ppn/healthplan/es', {
                templateUrl: 'views/ppn_hp_espanol.html',
                controller: 'PpnHcSpanish'
            })
          .otherwise({
            redirectTo: '/'
          });
      }]).run(['$rootScope', function ($rootScope) {
         $rootScope.date = new Date();
      }]);
}());
