describe('DoThisController', function() {
  var scope, ctrl;


  beforeEach(module('DoThis'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('DoThisController', {$scope: scope});
  }));

  xit("initialises with text input box with text 'enter to-do item'", function() {
    expect(ctrl.listAll).toBeUndefined();
  });

  it('can add a to-do item from task list', function() {
    ctrl.taskName = 'this is new';
    ctrl.addTask();
    expect(ctrl.taskName.tasks).toEqual(tasks);
  });

  xit('can mark a to-do item as completed', function() {
    expect(ctrl.listAll).toBeUndefined();
  });

  xit('can remove a to-do item from task list', function() {
    expect(ctrl.listAll).toBeUndefined();
  });

  xit('can see a total number for all the tasks on the list', function() {
    expect(ctrl.listAll).toBeUndefined();
  });

});
