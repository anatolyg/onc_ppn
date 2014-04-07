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
                    $infoText.toggle();
                });
            }
        };
    }])
  .controller('PpnProviderEnglish', function ($scope) {
        $scope.date = new Date();
        $scope.patientSigned = false;
        $scope.org = {
            name: 'Oracle Radiology',
            subtitle: 'The leader in molecular imaging',
            address: {
                address1: '13943 N. 20th Street',
                address2: 'Lower Level',
                city: 'Phoenix',
                state: 'AZ',
                zip: '85021'
            },
            phone: '1235551212',
            fax: '1235551212',
            ppn: {
                introduction: {
                    title: 'Welcome to Oracle Radiology',
                    titleSpanish: 'Bienvenido a Oracle Radiología',
                    text: 'The Notice explains how we fulfill our commitment to respect the privacy and confidentiality of your protected health information. This Notice tells you about the ways we may use and share your protected health information, as well as the legal obligations we have regarding your protected health information. The Notice also tells you about your rights under federal and state laws. The Notice applies to all records held by the North Shore-LIJ facilities and programs listed at the end of this Notice, regardless of whether the record is written, computerized or in any other form. We are required by law to make sure that information that identifies you is kept private and to make this Notice available to you.',
                    textSpanish: 'El aviso explica cómo cumplimos con nuestro compromiso de respetar la privacidad y confidencialidad de su información de salud protegida. Este aviso le informa sobre las maneras en que podemos usar y compartir su información de salud protegida, así como las obligaciones legales que tenemos con respecto a su información de salud protegida. El aviso también le informa sobre sus derechos bajo las leyes federales y estatales. El aviso se aplica a todos los registros en poder de los servicios y programas de North Shore-LIJ enumerados al final de este aviso, independientemente de si se escribe el registro, informatizado o en cualquier otra forma. Estamos obligados por ley a asegurarse de que la información que lo identifica a usted se mantiene como privado y para hacer de este Aviso a su disposición.'
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