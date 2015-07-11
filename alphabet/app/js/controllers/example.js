'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ExampleCtrl() {

  // ViewModel
  var vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify!';
  vm.number = 1234;

  vm.loadCriminals = function(){
    console.log('load criminals');
  };

}

controllersModule.controller('ExampleCtrl', ExampleCtrl);
