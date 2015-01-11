softUni.factory('categoriesData', ['$resource', function($resource){
	var resource = $resource('http://softuni-ads.azurewebsites.net/api/categories');

	//var resource = $resource('http://localhost:1337/api/categories');

	function getAllCategories() {
		return resource.query();
	}

	return {
		getAllCategories: getAllCategories
	}
}]);