softUni.factory('userData',['$resource', 'authentication', function($resource, authentication) {
	var resource = 'http://softuni-ads.azurewebsites.net/api/';

	function registerUser(user) {
		return $resource(resource + 'user/register')
				.save(user)
				.$promise
				.then(function(data) {
					authentication.saveUser(data);
				});
	}

	function loginUser(user) {
		return $resource(resource + 'user/login')
				.save(user)
				.$promise
				.then(function(data) {
					authentication.saveUser(data);
				});
	}

	function logoutUser() {
		return $resource(resource + 'user/logout')
				.save(user)
				.$promise
				.then(function(data) {
					authentication.removeUser();
				});
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