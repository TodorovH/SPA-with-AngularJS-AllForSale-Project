var softUni = angular.module('softUniModule', ['ngResource', 'ngRoute', 'LocalStorageModule', 'ui.bootstrap.pagination']);

softUni.config(['$routeProvider', 'localStorageServiceProvider', function($routeProvider, localStorageServiceProvider) {
	$routeProvider.when('/ads', {
		templateUrl: 'templates/ads.html',
		controller: 'MainController'
	});
	$routeProvider.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'LoginController'
	});
	$routeProvider.when('/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	});
	$routeProvider.otherwise({redirectTo: '/ads'});

	localStorageServiceProvider.setStorageType('localStorage');
	localStorageServiceProvider.setPrefix('allForSaleApp');
}]);