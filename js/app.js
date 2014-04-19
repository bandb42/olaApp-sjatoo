'use strict';


// Declare app level module which depends on filters, and services
angular.module('olaApp', [
  'ngRoute',
  'olaApp.filters',
  'olaApp.services',
  'olaApp.directives',
  'olaApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/status', {templateUrl: 'partials/status.html', controller: 'StatusCtrl'});
}]);