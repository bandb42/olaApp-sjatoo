'use strict';

/* Controllers */

var olaCtrls = angular.module('olaApp.controllers', []);
olaCtrls.controller('StatusCtrl', ['$scope', function($scope) {
  	$scope.leds = [
	  	{
	  		'number' : 1,
	  		'address' : 11,
	  		'red' : 0,
	  		'green' : 127,
	  		'blue' : 255,
	  		'4' : 0,
	  		'5' : 0,
	  		'6' : 250
	  	},
	  	{
	  		'number' : 2,
	  		'address' : 21,
	  		'red' : 63,
	  		'green' : 63,
	  		'blue' : 191,
	  		'4' : 20,
	  		'5' : 40,
	  		'6' : 200
  		},
  		{
	  		'number' : 3,
	  		'address' : 31,
	  		'red' : 127,
	  		'green' : 0,
	  		'blue' : 127,
	  		'4' : 40,
	  		'5' : 80,
	  		'6' : 150
	  	},
	  	{
	  		'number' : 4,
	  		'address' : 41,
	  		'red' : 191,
	  		'green' : 63,
	  		'blue' : 63,
	  		'4' : 60,
	  		'5' : 120,
	  		'6' : 100
  		},
  		{
	  		'number' : 5,
	  		'address' : 51,
	  		'red' : 255,
	  		'green' : 127,
	  		'blue' : 0,
	  		'4' : 80,
	  		'5' : 160,
	  		'6' : 50
	  	},
	  	{
	  		'number' : 6,
	  		'address' : 61,
	  		'red' : 191,
	  		'green' : 191,
	  		'blue' : 63,
	  		'4' : 100,
	  		'5' : 200,
	  		'6' : 0
  		},
  		{
	  		'number' : 7,
	  		'address' : 71,
	  		'red' : 127,
	  		'green' : 255,
	  		'blue' : 127,
	  		'4' : 120,
	  		'5' : 240,
	  		'6' : 100
	  	},
	  	{
	  		'number' : 8,
	  		'address' : 81,
	  		'red' : 64,
	  		'green' : 191,
	  		'blue' : 191,
	  		'4' : 140,
	  		'5' : 255,
	  		'6' : 200
  		}
  	];
  	$scope.ledSort = 'number';

  	$scope.scanners = [
  		{
  			'number' : 1,
  			'address' : 111,
  			'shutter' : 1,
  			'shutterName': 'Stopped',
  			'gobo' : 153,
  			'goboName' : 'Rotatie',
  			'color' : 200,
  			'colorName' : 'Rotatie',
  			'pan' : 30,
  			'tilt' : 100
  		},
  		{
  			'number' : 2,
  			'address' : 121,
  			'shutter' : 15,
  			'shutterName' : 'Gobo + Kleur',
  			'gobo' : 15,
  			'goboName' : 'Open',
  			'color' : 20,
  			'colorName' : 'Groen',
  			'colorHtml' : 'green',
  			'pan' : 130,
  			'tilt' : 200
  		},
  		{
  			'number' : 3,
  			'address' : 131,
  			'shutter' : 255,
  			'shutterName': 'Gobo',
  			'gobo' : 66,
  			'goboName' : 'Gobo 7',
  			'color' : 50,
  			'colorName' : 'Amber',
  			'colorHtml' : 'FFBF00',
  			'pan' : 30,
  			'tilt' : 100
  		},
  		{
  			'number' : 4,
  			'address' : 141,
  			'shutter' : 100,
  			'shutterName' : 'Kleur',
  			'gobo' : 121,
  			'goboName' : 'Gobo 14',
  			'color' : 66,
  			'colorName' : 'Rood',
  			'colorHtml' : 'red',
  			'pan' : 130,
  			'tilt' : 200
  		},
  	];

  	$scope.scannerSort = 'number';

}])

olaCtrls.controller('NavbarCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.isActive = function (viewLocation) {
		return viewLocation === $location.path();
	}
}]);