'use strict';

describe('Service: Healthplanenglish', function () {

  // load the service's module
  beforeEach(module('oncPpnApp'));

  // instantiate service
  var Healthplanenglish;
  beforeEach(inject(function (_Healthplanenglish_) {
    Healthplanenglish = _Healthplanenglish_;
  }));

  it('should do something', function () {
    expect(!!Healthplanenglish).toBe(true);
  });

});
