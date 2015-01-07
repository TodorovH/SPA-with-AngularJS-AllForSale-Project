softUni.controller('AddsController',
	function($scope, mainData) {
		$scope.container = 'container';
		$scope.addsContainer = 'addsContainer';
		$scope.filtersContainer = 'filtersContainer';
		$scope.removeListStyle = 'removeListStyle';
		$scope.addContainer = 'addContainer';
		$scope.addHeader = 'addHeader';
		$scope.titleContainer = 'titleContainer';
		$scope.dateContainer = 'dateContainer';
		$scope.addBody = 'addBody';
		$scope.imgContainer = 'imgContainer';
		$scope.addImg = 'addImg';
		$scope.infoContainer = 'infoContainer';
		$scope.textContainer = 'textContainer';
		$scope.nameContainer = 'nameContainer';
		$scope.emailContainer = 'emailContainer';
		$scope.phoneContainer = 'phoneContainer';
		$scope.ownerName = 'ownerName';
		$scope.ownerEmail = 'ownerEmail';
		$scope.ownerPhone = 'ownerPhone';
		$scope.leftSide = 'leftSide';
		$scope.filterCategory = 'filterCategory';
		$scope.filterTowns = 'filterTowns';
		$scope.headerCategory = 'headerCategory';
		$scope.headerTowns = 'headerTowns';
		$scope.hoverAdd = 'hoverAdd';

		mainData.getAllAdds(function(resp) {
			$scope.data = resp;
		});
		mainData.getAllTowns(function(resp) {
			$scope.towns = resp;
		});
		mainData.getAllCategories(function(resp) {
			$scope.categories = resp;
		});
});