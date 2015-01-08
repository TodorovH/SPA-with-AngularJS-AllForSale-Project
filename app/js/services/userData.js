softUni.factory('userData',['$resource', 'authentication', function($resource, authentication) {
	var resource = $resource('http://softuni-ads.azurewebsites.net/api/user/register');

	function registerUser(user) {
		return resource
				.save(user)
				.$promise
				.then(function(data) {
					authentication.saveUser(data);
				});
	}

	function loginUser(user) {
		// body...
	}

	function logoutUser() {
		// body...
	}


	return {
		register: registerUser,
		login: loginUser,
		logout: logoutUser
	}
	//return {
	//	register: function(success, user) {
	//		$http({
	//			method: 'POST',
	//			url: 'http://softuni-ads.azurewebsites.net/api/user/register',
	//			data: JSON.stringify(user)
	//		})
	//		.success(function(data){
	//			success(data);
	//		})
	//	},
	//	login: function(success) {
	//		$http({
	//			method: 'POST',
	//			url: 'http://softuni-ads.azurewebsites.net/api/towns'
	//		})
	//		.success(function(user){
	//			success(user);
	//		})
	//		.error(function(user){
	//			
	//		})
	//	},
	//	logout: function(success) {
	//		$http({
	//			method: 'GET',
	//			url: 'http://softuni-ads.azurewebsites.net/api/categories'
	//		})
	//		.success(function(){
	//			success();
	//		})
	//		.error(function(){
	//			
	//		})
	//	}
	//}
}]);