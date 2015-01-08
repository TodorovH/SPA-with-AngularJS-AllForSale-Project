softUni.controller('LoginController',['$scope', 'userData',
	function($scope, userData) {
		$scope.loginContainer = 'loginContainer';
		$scope.loginDiv = 'loginDiv';
		$scope.userNameDiv = 'userNameDiv';
		$scope.passwordDiv = 'passwordDiv';
		$scope.submitButton = 'submitButton';
		$scope.linkRegister = 'linkRegister';

	$scope.login = function(user) {
		userData.login(user);
	}
}]);