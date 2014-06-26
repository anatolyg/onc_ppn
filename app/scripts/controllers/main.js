/*global $:false */
(function () {
'use strict';

angular.module('oncPpnApp')
  .controller('MainCtrl', function () {})
    .directive('plMoreInfo', ['$compile', function ( $compile ) {
        return {
            link: function ($scope, $el) {
                $el.find('header.heading').append( $compile ('<div class="pull-right" data-ppn-anchor-links><a data-ng-click="goToSection(\'links\')">Back to top</a></div>')($scope));
            }
        };
    }])
    .directive('ppnCollapsedList', [function () {
        return {
            link: function ($scope, $el) {
                // loop through each list-group-item, hide the list-group-item-text and add an event handler to the
                //  list-group-item-heading to collapse/show it.
                $el.find('.list-group-item').each(function (i, el) {
                    $(el).find('.list-group-item-heading:not([no-content])').append(' <i class="fa-question-circle" data-role="more-info"></i> ');
                }).click(function () {
                    var $info = $(this),
                        $infoText = $info.find('.list-group-item-text');
                    $infoText.toggleClass('aural');
                });
            }
        };
    }])
    .directive('ppnAnchorLinks', ['$anchorScroll', '$location', function ($anchorScroll, $location) {
        return {
            link: function ($scope) {
                $scope.goToSection = function (section) {
                    $location.hash(section + '-section');
                    $anchorScroll();
                };
            }
        };
    }])
    .controller('PpnProviderEnglish', ['ProviderEnglish', '$scope', function (ProviderEnglish, $scope) {
        $scope.date = new Date();
        $scope.patientSigned = false;
        $scope.org = ProviderEnglish;
        $scope.signAgreement = function() {
            window.alert(ProviderEnglish.signAgreementAlert);
        };
    }])
    .controller('PpnProviderSpanish', ['ProviderSpanish', '$scope', function (ProviderSpanish, $scope) {
        $scope.date = new Date();
        $scope.patientSigned = false;
        $scope.org = ProviderSpanish;
        $scope.signAgreement = function() {
            window.alert(ProviderSpanish.signAgreementAlert);
        };
    }])
    .controller('PpnHcEnglish', ['HealthplanEnglish', '$scope', function (HealthplanEnglish, $scope) {
        $scope.date = new Date();
        $scope.patientSigned = false;
        $scope.org = HealthplanEnglish;
        $scope.signAgreement = function() {
            window.alert(HealthplanEnglish.signAgreementAlert);
        };
    }])
    .controller('PpnHcSpanish', ['HealthplanSpanish', '$scope', function (HealthplanSpanish, $scope) {
        $scope.date = new Date();
        $scope.patientSigned = false;
        $scope.org = HealthplanSpanish;
        $scope.signAgreement = function() {
            window.alert(HealthplanSpanish.signAgreementAlert);
        };
    }]);
}());