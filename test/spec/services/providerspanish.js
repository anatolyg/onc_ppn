'use strict';

describe('Service: Providerspanish', function () {

  // load the service's module
  beforeEach(module('oncPpnApp'));

  // instantiate service
  var Providerspanish;
  beforeEach(inject(function (_Providerspanish_) {
    Providerspanish = _Providerspanish_;
  }));

  it('should do something', function () {
    expect(!!Providerspanish).toBe(true);
  });

});
