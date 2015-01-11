softUni.factory('userData',['$resource', 'authentication', function($resource, authentication) {
	var resource = 'http://softuni-ads.azurewebsites.net/api/';
	//var resource = 'http://localhost:1337/api/';

	function registerUser(user) {
		var resource = $resource(resource + 'user/register')
				.save(user);

		resource.$promise
				.then(function(data) {
					authentication.saveUser(data);
				});
		return 	resource;		
	}

	function loginUser(user) {
		var resource = $resource(resource + 'user/login')
				.save(user);
		resource.$promise
				.then(function(data) {
					authentication.saveUser(data);
				});
		return resource;
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
}]);