softUni.factory('townsData', ['$resource', function($resource){
	var resource = $resource('http://softuni-ads.azurewebsites.net/api/towns');

	//var resource = $resource('http://localhost:1337/api/towns');

	function getAllTowns() {
		return resource.query();
	}

	return {
		getAllTowns: getAllTowns
	}
}]);