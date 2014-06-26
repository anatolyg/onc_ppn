'use strict';

describe('Service: Providerenglish', function () {

  // load the service's module
  beforeEach(module('oncPpnApp'));

  // instantiate service
  var Providerenglish;
  beforeEach(inject(function (_Providerenglish_) {
    Providerenglish = _Providerenglish_;
  }));

  it('should do something', function () {
    expect(!!Providerenglish).toBe(true);
  });

});
