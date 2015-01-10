softUni.controller('AdsController', ['$scope',
	function($scope) {
		$scope.container = 'container';
		$scope.adsContainer = 'adsContainer';
		$scope.filtersContainer = 'filtersContainer';
		$scope.templateAds = 'templates/leftSide.html';
		$scope.templateFilters = 'templates/rightSide.html';

		//$scope.totalItems = 100;
		$scope.currentPage = 4;

		$scope.setPage = function (pageNo) {
		    $scope.currentPage = pageNo;
		};

		$scope.pageChanged = function() {
		    $log.log('Page changed to: ' + $scope.currentPage);
		};

		$scope.maxSize = 5;
		$scope.bigTotalItems = 200;
		$scope.bigCurrentPage = 1;
}]);