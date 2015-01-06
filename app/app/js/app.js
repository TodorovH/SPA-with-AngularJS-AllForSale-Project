var softUni = angular.module('softUniModule', ['ngRoute'])
.config(function($routeProvider) {
	$routeProvider.when('/adds', {
		templateUrl: 'templates/adds.html'
	})
	$routeProvider.when('/login', {
		templateUrl: 'templates/login.html'
	})
	$routeProvider.when('/register', {
		templateUrl: 'templates/register.html'
	})
});
