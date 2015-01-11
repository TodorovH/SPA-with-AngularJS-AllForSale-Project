softUni.controller('LeftSideController', [ '$scope', '$rootScope', 'filter', 'mainData', '$location', '$anchorScroll',
	function($scope, $rootScope, filter, mainData, $location, $anchorScroll) {
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

		$scope.maxSize = 5;
		$scope.bigCurrentPage = 1;


		function loadPublicAds (params) {
			$rootScope.elementId = params;
			var startpage = $rootScope.page;
			params = params || {};
			mainData.getAllAds(params, startpage)
				.$promise
				.then(function(data) {
					$scope.bigTotalItems = data.numItems;
					$scope.data = data;
					$scope.ready = true;
				});
		}
		
		loadPublicAds();

		//function goToTop() {
		//		$location.hash('container');
		//		$anchorScroll();
		//}

		$scope.$on('categoryClicked', function (event, category) {
			loadPublicAds(filter.getParams());
			//goToTop();
		});

		$scope.$on('townClicked', function (event, town) {
			loadPublicAds(filter.getParams());
			//goToTop();
		});

		$scope.$on('selectPage', function (event, page) {
			loadPublicAds(filter.getParams());
			//goToTop();
		});
}]);