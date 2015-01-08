softUni.controller('RightSideController',
	function($scope, mainData) {
		$scope.filterCategory = 'filterCategory';
		$scope.filterTowns = 'filterTowns';
		$scope.headerCategory = 'headerCategory';
		$scope.headerTowns = 'headerTowns';
		$scope.hoverAdd = 'hoverAdd';

		mainData.getAllTowns(function(resp) {
			$scope.towns = resp;
		});
		mainData.getAllCategories(function(resp) {
			$scope.categories = resp;
		});
});