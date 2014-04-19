'use strict';


// Declare app level module which depends on filters, and services
var olaApp = angular.module('olaApp', [
  'ngRoute',
  'olaApp.filters',
  'olaApp.services',
  'olaApp.directives',
  'olaApp.controllers'
]);

olaApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/status', {templateUrl: 'partials/status.html', controller: 'StatusCtrl'})
  $routeProvider.when('/control', {templateUrl: 'partials/control.html', controller: 'ControlCtrl'});
}]);

olaApp.constant('PATCH', {
	'leds' : {
		'first' : 1,
		'step' : 16,
		'amount' : 8
	},
	'scanners' : {
		'first' : 129,
		'step' : 16,
		'amount': 4
	}
})