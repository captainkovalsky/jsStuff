/*global angular */

'use strict';

describe('Unit: ExampleCtrl', function() {

  var ctrl;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    angular.mock.inject(function($controller) {
      ctrl = $controller('ExampleCtrl');
    });
  });

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

  it('should have a number variable equals to 1234', function() {
    expect(ctrl.number).toEqual(1234);
  });

  it('should have a title variable equals to \'AngularJS, Gulp, and Browserify!\'', function() {
    expect(ctrl.title).toEqual('AngularJS, Gulp, and Browserify!');
  });

});