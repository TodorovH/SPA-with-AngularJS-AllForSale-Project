softUni.factory('userData',['$resource', function($resource) {
	var resource = $resource('http://softuni-ads.azurewebsites.net/api/user/register');

	function registerUser(user) {
		return resource.save(user);
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
}])