softUni.controller('LeftSideController',
	function($scope, mainData) {
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

		mainData.getAllAdds(function(resp) {
			$scope.data = resp;
		});
});