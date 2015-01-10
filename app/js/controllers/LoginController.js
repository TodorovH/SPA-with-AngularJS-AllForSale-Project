softUni.controller('LoginController',['$scope', '$location', 'userData', 'authentication',
	function($scope, $location, userData, authentication) {
		$scope.loginContainer = 'loginContainer';
		$scope.loginDiv = 'loginDiv';
		$scope.userNameDiv = 'userNameDiv';
		$scope.passwordDiv = 'passwordDiv';
		$scope.submitButton = 'submitButton';
		$scope.linkRegister = 'linkRegister';

		$scope.navbar = 'navbar';
		$scope.navbarInHomePage = 'navbarInHomePage';
		$scope.navigation = 'navigation';
		$scope.loginAndRegButtons = 'loginAndRegButtons';
		$scope.greetings = 'greetings';
		$scope.defaultTemplate = 'templates/loginAndRegisterButtons.html';
		$scope.loginTemplate = 'templates/logoutButton.html';

		$scope.isLoggedIn = authentication.isLoggedIn();

	$scope.login = function(user) {
		userData.login(user)
			.$promise
			.then(function(user) {
				$location.path('templates/homePage');
			});
	}

	$scope.user = function(user) {
		userData.login(user)
			.$promise
			.then(function(user) {
				$scope.user = authentication.getUser(user);
			});
	}
}]);