softUni.factory('categoriesData', ['$resource', function($resource){
	var resource = $resource('http://softuni-ads.azurewebsites.net/api/categories');

	function getAllCategories() {
		return resource.query();
	}

	return {
		getAllCategories: getAllCategories
	}
}]);