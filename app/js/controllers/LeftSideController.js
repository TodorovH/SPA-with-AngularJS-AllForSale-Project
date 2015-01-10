softUni.controller('LeftSideController', [ '$scope', '$rootScope', 'filter', 'mainData',
	function($scope, $rootScope, filter, mainData) {
		$scope.removeListStyle = 'removeListStyle';
		$scope.adContainer = 'adContainer';
		$scope.adHeader = 'adHeader';
		$scope.titleContainer = 'titleContainer';
		$scope.dateContainer = 'dateContainer';
		$scope.adBody = 'adBody';
		$scope.imgContainer = 'imgContainer';
		$scope.adImg = 'adImg';
		$scope.infoContainer = 'infoContainer';
		$scope.textContainer = 'textContainer';
		$scope.nameContainer = 'nameContainer';
		$scope.emailContainer = 'emailContainer';
		$scope.phoneContainer = 'phoneContainer';
		$scope.ownerName = 'ownerName';
		$scope.ownerEmail = 'ownerEmail';
		$scope.ownerPhone = 'ownerPhone';
		$scope.leftSide = 'leftSide';

		$scope.ready = false;

		function loadPublicAds (filterParams) {
			$rootScope.elementId = filterParams;
			filterParams = filterParams || {};
			mainData.getAllAds(filterParams)
				.$promise
				.then(function(data) {
					$scope.data = data;
					$scope.ready = true;
				});
		}
		
		loadPublicAds();

		$scope.$on('categoryClicked', function (event, category) {
			loadPublicAds(filter.getFilterParams());
		});

		$scope.$on('townClicked', function (event, town) {
			loadPublicAds(filter.getFilterParams());
		});
}]);