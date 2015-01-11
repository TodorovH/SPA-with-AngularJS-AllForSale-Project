softUni.factory('filter', function(){
	var params = {};

	function filterByCategory(category) {
		category = category || {};
		params.categoryId = category.id;
	}

	function filterByTown(town) {
		town = town || {};
		params.townId = town.id;
	}

	function getParams() {
		return params;
	}

	return {
		filterByCategory: filterByCategory,
		filterByTown: filterByTown,
		getParams: getParams
	}
});