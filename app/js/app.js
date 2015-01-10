var softUni = angular.module('softUniModule', ['ngResource', 'ngRoute', 'LocalStorageModule']);

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

	// Web Storage settings
	localStorageServiceProvider.setStorageType('localStorage');
	localStorageServiceProvider.setPrefix('allForSaleApp');
}]);

//function clickEvent() {
//	$('.hoverAd')
//		.parent()
//		.children('div')
//		.removeClass('hoverAdselected')
//		.addClass('hoverAd');
//
//	$('.hoverAd')
//		.css('background', 'black')
//		.removeClass('hoverAd')
//		.addClass('hoverAdselected');
//}

//(function () {
//	jQuery('.hoverAd').click(function () {
//		$(this).css('background', 'black');
//	})
//})();

//$(function(){

//	$('.hoverAd').on('click', function(event) {
//		event.preventDefault(); 
//		$(this)
//			//.find('div.hoverAd')
//			.css('background', 'black');
//	});

//});