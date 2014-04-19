'use strict';

/* Controllers */

var olaCtrls = angular.module('olaApp.controllers', []);
olaCtrls.controller('StatusCtrl', ['$scope', '$http', 'PATCH', function($scope, $http, PATCH) {
	
	$http.get('http://localhost/get_dmx?u=1').success(function(data) {
		$scope.dmx = data;
		$scope.leds = new Array();
		$scope.scanners = new Array();

		// check for error
		if (data['error']) {
			$scope.dmxError = data['error'];
			return
		}

		// create leds
		var amount = PATCH['leds']['amount'];
		var step = PATCH['leds']['step'];
		var first = PATCH['leds']['first'];
		for (var i=0; i<amount; i++) {
			// substract 1, data array counts from zero, dmx from 1
			var index = first + i*step -1; 
			var led = {
				'number' : i+1,
				'address' : index +1,
				'red' : data['dmx'][index],
				'green' : data['dmx'][index+1],
				'blue' : data['dmx'][index+2],
				'4' : data['dmx'][index+3],
				'5' : data['dmx'][index+4],
				'6' : data['dmx'][index+5],
			};
			$scope.leds.push(led);
		}

		// create scanners
		var amount = PATCH['scanners']['amount'];
		var step = PATCH['scanners']['step'];
		var first = PATCH['scanners']['first'];
		for (var i=0; i<amount; i++) {
			// substract 1, data array counts from zero, dmx from 1
			var index = first + i*step -1; 
			var scanner = {
				'number' : i+1,
				'address' : index+1,
				'shutter' : data['dmx'][index],
				'gobo' : data['dmx'][index+1],
				'color' : data['dmx'][index+2],
				'pan' : data['dmx'][index+3],
				'tilt' : data['dmx'][index+4],
				'shutterName': shutterName(data['dmx'][index]),
				'goboName' : goboName(data['dmx'][index+1]),
				'colorName' : colorName(data['dmx'][index+2]),
				'colorHtml' : colorHtml(data['dmx'][index+2]),
			};
			$scope.scanners.push(scanner);
		}
		
	}) 	
	$scope.ledSort = 'number';
	$scope.scannerSort = 'number';

}])

olaCtrls.controller('NavbarCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.isActive = function (viewLocation) {
		return viewLocation === $location.path();
	}
}]);

olaCtrls.controller('ControlCtrl', ['$scope', '$http', function($scope, $http) {}]);

function shutterName($value) {
	// from low to high, return when found
	if ($value <= 10) return "Stop";
	if ($value <= 92) return "Gobo & kleur";
	if ($value <= 174) return "Kleur";
	if ($value <= 255) return "Gobo";
	return "N/A"
}

function goboName($value) {
	// from low to high, return when found
	if ($value <= 8)   return "Blackout";
	if ($value <= 16)  return "Open";
	if ($value <= 24)  return "Gobo 1";
	if ($value <= 32)  return "Gobo 2";
	if ($value <= 40)  return "Gobo 3";
	if ($value <= 48)  return "Gobo 4";
	if ($value <= 56)  return "Gobo 5";
	if ($value <= 64)  return "Gobo 6";
	if ($value <= 72)  return "Gobo 7";
	if ($value <= 80)  return "Gobo 8";
	if ($value <= 88)  return "Gobo 9";
	if ($value <= 96)  return "Gobo 10";
	if ($value <= 104) return "Gobo 11";
	if ($value <= 112) return "Gobo 12";
	if ($value <= 120) return "Gobo 13";
	if ($value <= 128) return "Gobo 14";
	if ($value <= 255) return "Rotatie";
	return "N/A"
}

function colorName($value) {
	// from low to high, return when found
	if ($value <= 11)  return "Wit";
	if ($value <= 22)  return "Groen";
	if ($value <= 33)  return "Oranje";
	if ($value <= 44)  return "Lichtblauw";
	if ($value <= 55)  return "Amber";
	if ($value <= 66)  return "Rood";
	if ($value <= 77)  return "Paars";
	if ($value <= 88)  return "Roze";
	if ($value <= 99)  return "lichtgroen";
	if ($value <= 110) return "Blauw";
	if ($value <= 121) return "Geel";
	if ($value <= 128) return "Magenta";
	if ($value <= 255) return "Rotatie";
	return "N/A"
}

function colorHtml($value) {
	// from low to high, return when found
	if ($value <= 11)  return "#FFF"; // white
	if ($value <= 22)  return "#060"; // green
	if ($value <= 33)  return "#F60"; // orange
	if ($value <= 44)  return "#30F"; // light blue
	if ($value <= 55)  return "#FF7E00"; // amber
	if ($value <= 66)  return "#F00"; // red
	if ($value <= 77)  return "#707"; // purple
	if ($value <= 88)  return "#F0C"; // pink
	if ($value <= 99)  return "#0F0"; // light green
	if ($value <= 110) return "#00C"; // blue
	if ($value <= 121) return "#FF0"; // yellow
	if ($value <= 128) return "#F0F"; // magento
	if ($value <= 255) return "Rotatie";
	return "N/A"
}
