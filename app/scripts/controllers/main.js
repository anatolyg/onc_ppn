/*global $:false */
(function () {
'use strict';

angular.module('oncPpnApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
    .directive('plMoreInfo', [function () {
        return {
            link: function ($scope, $el) {
                $el.find('[data-role=more-info]').on('click', function () {
                    var $contents = $el.find('[data-role=more-info-contents]');
                    $contents.toggle();
                    $(this).children('[data-role=toggle]')
                        .toggleClass('fa-chevron-circle-down', $contents.is(':visible'))
                        .toggleClass('fa-chevron-circle-right', !$contents.is(':visible'));
                }).prepend('<i class="fa-chevron-circle-right" data-role="toggle"></i> ');
            }
        };
    }])
    .directive('ppnCollapsedList', [function () {
        return {
            link: function ($scope, $el) {
                // loop through each list-group-item, hide the list-group-item-text and add an event handler to the
                //  list-group-item-heading to collapse/show it.
                $el.find('.list-group-item-text').hide();
                $el.find('.list-group-item').each(function (i, el) {
                    $(el).find('.list-group-item-heading').append(' <i class="fa-question-circle"></i> ');
                }).click(function () {
                    var $info = $(this),
                        $infoText = $info.find('.list-group-item-text');
                    $infoText.toggle();
                });
            }
        };
    }])
  .controller('PpnProviderEnglish', function ($scope) {
        $scope.patientSigned = false;
        $scope.org = {
            name: 'Sun Radiology',
            subtitle: 'The leader in molecular imaging',
            address: {
                address1: '13943 N. 91st Avenue',
                address2: '#A-102',
                city: 'Peoria',
                state: 'AZ',
                zip: '85381'
            },
            phone: '6233445450',
            fax: '6233445458',
            ppn: {
                introduction: {
                    title: 'Welcome to Sun Radiology',
                    text: 'The Notice explains how we fulfill our commitment to respect the privacy and confidentiality of your protected health information. This Notice tells you about the ways we may use and share your protected health information, as well as the legal obligations we have regarding your protected health information. The Notice also tells you about your rights under federal and state laws. The Notice applies to all records held by the North Shore-LIJ facilities and programs listed at the end of this Notice, regardless of whether the record is written, computerized or in any other form. We are required by law to make sure that information that identifies you is kept private and to make this Notice available to you.'
                },
                effectiveDate: 1395181351047,
                applicability: 'This notice applies to Sun Radiology only.',
                privacyOfficer: 'HIPAA Compliance Dept., Phone: 623-344-5450, 13943 N. 91st Ave, Ste A-102, Peoria, AZ 85381',
                signOff: 'By checking this box and clicking the button below, you agree to the terms described above'
            }
        };
        $scope.getSpecialNotes = function () {
            return null;
        };

        $scope.getStateLaws = function () {
            return null;
        };
  });
}());