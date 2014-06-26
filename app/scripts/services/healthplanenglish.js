'use strict';

angular.module('oncPpnApp')
  .service('HealthplanEnglish', function HealthplanEnglish() {
    return {
        logo: '/images/logo.png',
        name: 'Oracle Health Plan',
        subtitle: 'The leader in smart health coverage',
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
                title: 'Welcome to Oracle Health Plan',
                text: 'The Notice explains how we fulfill our commitment to respect the privacy and confidentiality of your protected health information. This Notice tells you about the ways we may use and share your protected health information, as well as the legal obligations we have regarding your protected health information. The Notice also tells you about your rights under federal and state laws. The Notice applies to all records held by the Oracle Health Plan facilities and programs listed at the end of this Notice, regardless of whether the record is written, computerized or in any other form. We are required by law to make sure that information that identifies you is kept private and to make this Notice available to you.',
            },
            effectiveDate: 1395181351047,
            applicability: 'This notice applies to Oracle Health Plan only.',
            privacyOfficer: 'HIPAA Compliance Dept., Phone: 123-555-1212, 13943 N. 11th Ave, Phoenix, AZ 85021',
            signOff: 'By checking this box and clicking the button below, you acknowledge receipt of this notice.  To print this notice, click here <a href="http://www.hhs.gov/ocr/privacy/hipaa/nppbooklet_health_plan.pdf">hardcopy</a>.  You may also contact our office to request a printed copy.'
        },
        signAgreementAlert: 'Thank you for signing the agreement',
        stateLaws: 'Put applicable state laws here',
        specialNotes: 'Put any special notes here',
        electronicAccess: 'Electronic access is provided by PatientPrivilege'
    };
  });
