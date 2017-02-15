'use strict';

describe('Directive: editNameDirective', function () {

  // load the directive's module
  beforeEach(module('todofrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<edit-name-directive></edit-name-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the editNameDirective directive');
  }));
});
