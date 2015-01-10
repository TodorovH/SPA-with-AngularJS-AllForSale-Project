softUni.factory('authentication', ['localStorageService', function(localStorageService){
	var key = 'user';

	function saveUserData(data) {
		localStorageService.set(key, data);
	}

	function getUserData(data) {
		return localStorageService.get(key);
	}

	function getHeaders() {
		var headers = {};
		var userData = getUserData();
		if (userData) {
			headers.Authorization = 'Bearer ' + getUserData().access_token;
		}

		return headers;
	}

	function isAdmin() {
		var isAdmin = getUserData().isAdmin;
		return isAdmin;
	}

	function removeUser() {
		return localStorageService.clearAll();
	}

	function isLoggedIn() {
		return !!getUserData();
	}

	return {
		saveUser: saveUserData,
		getUser: getUserData,
		getHeaders: getHeaders,
		removeUser: removeUser,
		isAdmin: isAdmin,
		isLoggedIn: isLoggedIn
	}
}]);