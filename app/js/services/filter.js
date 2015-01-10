softUni.factory('filter', function(){
	var filterParams = {};

	function filterByCategory(category) {
		category = category || {};
		filterParams.categoryId = category.id;
	}

	function filterByTown(town) {
		town = town || {};
		filterParams.townId = town.id;
	}

	function getFilterParams() {
		return filterParams;
	}

	return {
		filterByCategory: filterByCategory,
		filterByTown: filterByTown,
		getFilterParams: getFilterParams
	}
});