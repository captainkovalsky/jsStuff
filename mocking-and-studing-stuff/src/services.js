/**
 * Created by vdzundza on 22.04.15.
 */
var testModule = angular.module('testModule');

testModule.service('serviceDep1', function serviceDepOne(){
   this.getSomething = function(){
      return 'serviceDep1';
   };
});

testModule.service('serviceDep2', [
    'serviceDep1', function serviceDepSecond(serviceOne){
      this.doStuff = function(){
         var serviceOneStuff = serviceOne.getSomething();
         return 'Do my stuff and do ' + serviceOneStuff + ' serviceOne stuff';
      };
   }
]);




