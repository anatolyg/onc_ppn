'use strict';

describe('Service: Healthplanspanish', function () {

  // load the service's module
  beforeEach(module('oncPpnApp'));

  // instantiate service
  var Healthplanspanish;
  beforeEach(inject(function (_Healthplanspanish_) {
    Healthplanspanish = _Healthplanspanish_;
  }));

  it('should do something', function () {
    expect(!!Healthplanspanish).toBe(true);
  });

});
