'use strict';

angular.module('oncPpnApp')
  .service('HealthplanSpanish', function HealthplanSpanish() {
    return {
        name: 'Oracle Health Plan',
        subtitle: 'El líder en cobertura de salud inteligente',
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
                title: 'Bienvenido a Oracle Health Plan',
                text: 'El aviso explica cómo cumplimos con nuestro compromiso de respetar la privacidad y confidencialidad de su información de salud protegida. Este aviso le informa sobre las maneras en que podemos usar y compartir su información de salud protegida, así como las obligaciones legales que tenemos con respecto a su información de salud protegida. El aviso también le informa sobre sus derechos bajo las leyes federales y estatales. El aviso se aplica a todos los registros en poder de los servicios y programas de Oracle Health Plan enumerados al final de este aviso, independientemente de si se escribe el registro, informatizado o en cualquier otra forma. Estamos obligados por ley a asegurarse de que la información que lo identifica a usted se mantiene como privado y para hacer de este Aviso a su disposición.'
            },
            effectiveDate: 1395181351047,
            applicability: 'This notice applies to Oracle Health Plan only.',
            privacyOfficer: 'HIPAA Compliance Dept., Phone: 123-555-1212, 13943 N. 11th Ave, Phoenix, AZ 85021',
            signOff: 'By checking this box and clicking the button below, you acknowledge receipt of this notice.  To print this notice, click here <a href="http://www.hhs.gov/ocr/privacy/hipaa/nppbooklet_health_plan.pdf">hardcopy</a>.  You may also contact our office to request a printed copy.'
        },
        signAgreementAlert: 'Gracias por firmar este acuerdo usted.'
    };
  });
