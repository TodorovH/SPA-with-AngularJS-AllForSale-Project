softUni.factory('townsData', ['$resource', function($resource){
	var resource = $resource('http://softuni-ads.azurewebsites.net/api/towns');

	function getAllTowns() {
		return resource.query();
	}

	return {
		getAllTowns: getAllTowns
	}
}]);