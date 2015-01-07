softUni.controller('RightSideController',
	function($scope, mainData) {
		$scope.filterCategory = 'filterCategory';
		$scope.filterTowns = 'filterTowns';
		$scope.headerCategory = 'headerCategory';
		$scope.headerTowns = 'headerTowns';
		$scope.hoverAdd = 'hoverAdd';

		mainData.getTowns(function(resp) {
			$scope.towns = resp;
		});
		mainData.getCategories(function(resp) {
			$scope.categories = resp;
		});
});