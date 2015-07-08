import angular from 'angular';
import {MainController} from './controllers/MainController';

angular.module('myApp', [])
 .controller('MainController', MainController);


console.log(angular.version);
