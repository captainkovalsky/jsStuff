import angular from 'angular';
import {MainController} from './controllers/MainController';
import {FilterFactory} from 'app/Filter';

angular.module('myApp', [])
 .controller('MainController', MainController)
 .factory('FilterFactory', () => new FilterFactory)


console.log(angular.version);
