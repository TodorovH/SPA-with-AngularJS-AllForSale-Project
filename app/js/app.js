var softUni = angular.module('softUniModule', ['ngResource', 'ngRoute', 'LocalStorageModule']);

softUni.config(['$routeProvider', 'localStorageServiceProvider', function($routeProvider, localStorageServiceProvider) {
	$routeProvider.when('/adds', {
		templateUrl: 'templates/adds.html'
	});
	$routeProvider.when('/login', {
		templateUrl: 'templates/login.html'
	});
	$routeProvider.when('/register', {
		templateUrl: 'templates/register.html'
	});
	$routeProvider.otherwise({redirectTo: '/adds'});

	// Web Storage settings
	localStorageServiceProvider.setStorageType('localStorage');
	localStorageServiceProvider.setPrefix('allForSaleApp');
}]);
