import angular from 'angular';
import {MainController} from './controllers/MainController';
import {Filter} from 'app/Filter';

console.log('fi;ter ', Filter);
angular.module('myApp', [])
 .controller('MainController', MainController)
 .factory('Filter', () => {return Filter; })


console.log(angular.version);
