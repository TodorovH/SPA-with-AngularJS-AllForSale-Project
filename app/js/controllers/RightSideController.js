softUni.controller('RightSideController', ['$scope', '$rootScope', 'townsData', 'categoriesData', 'filter',
	function($scope, $rootScope, townsData, categoriesData, filter) {
		$scope.filterCategory = 'filterCategory';
		$scope.filterTowns = 'filterTowns';
		$scope.headerCategory = 'headerCategory';
		$scope.headerTowns = 'headerTowns';

		townsData.getAllTowns()
			.$promise
			.then(function(data) {
				$scope.towns = data;
			});

		$scope.townClicked = function townClicked (town) {
			filter.filterByTown(town);
			$rootScope.$broadcast('townClicked', town);
		}

		categoriesData.getAllCategories()
			.$promise
			.then(function(data) {
				$scope.categories = data;
			});

		$scope.categoryClicked = function categoryClicked (category) {
			filter.filterByCategory(category);
			$rootScope.$broadcast('categoryClicked', category);
		}
}]);