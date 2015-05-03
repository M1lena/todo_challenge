describe('DoThisController', function() {
  beforeEach(module('DoThis'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('DoThisController');
  }));

  xit('initialises with an empty text input box and list', function() {
    expect(ctrl.listAll).toBeUndefined();
  });

});