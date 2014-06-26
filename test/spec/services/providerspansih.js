'use strict';

describe('Service: Providerspansih', function () {

  // load the service's module
  beforeEach(module('oncPpnApp'));

  // instantiate service
  var Providerspansih;
  beforeEach(inject(function (_Providerspansih_) {
    Providerspansih = _Providerspansih_;
  }));

  it('should do something', function () {
    expect(!!Providerspansih).toBe(true);
  });

});
