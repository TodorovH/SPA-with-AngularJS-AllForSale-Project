softUni.controller('RegisterController',['$scope', 'mainData', 'userData',
	function($scope, mainData, userData) {
		$scope.registerContainer = 'registerContainer';
		$scope.registerDiv = 'registerDiv';
		$scope.leftSideOfRegForm = 'leftSideOfRegForm';
		$scope.rightSideOfRegForm = 'rightSideOfRegForm';
		$scope.userNameRegDiv = 'userNameRegDiv';
		$scope.passwordRegDiv = 'passwordRegDiv';
		$scope.nameDiv = 'nameDiv';
		$scope.phoneDiv = 'phoneDiv';
		$scope.emptyDiv = 'emptyDiv';
		$scope.confirmPasswordDiv = 'confirmPasswordDiv';
		$scope.emailDiv = 'emailDiv';
		$scope.townDiv = 'townDiv';
		$scope.registerButton = 'registerButton';
		$scope.linkLogin = 'linkLogin';

		mainData.getAllTowns(function(resp) {
			$scope.towns = resp;
		});

		$scope.register = function(user) {
			userData.register(user);
		}
}]);