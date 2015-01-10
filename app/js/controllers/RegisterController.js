softUni.controller('RegisterController',['$scope', '$location', 'townsData', 'userData',
	function($scope, $location, townsData, userData) {
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
		
		townsData.getAllTowns()
			.$promise
			.then(function(data) {
				$scope.towns = data;
			});
		

		$scope.register = function(user) {
			userData.register(user)
				.$promise
				.then(function(user) {
					userData.login(user);
				})
				.then(function() {
					$location.path('templates/ads');
				});
		};
}]);