softUni.factory('mainData', ['$resource', function($resource){

	//var resource = $resource('http://softuni-ads.azurewebsites.net/api/ads:adId', {adId: '@id'}, {
	//	update: { method: 'PUT' }
	//});

	var resource = $resource('http://softuni-ads.azurewebsites.net/api/ads');

	function getAllAds(filterParams) {
		return resource.get(filterParams);
	}

	function editAd(adId, ad) {
		return resource.update({ id: adId }, ad);
	}

	function getAdById(adId) {
		return resource.get({ id: adId });
	}

	function addAd(ad) {
		return resource.save(ad);
	}

	function deleteAd(adId) {
		return resource.delete({ id: adId });
	}

	return {
		getAllAds: getAllAds,
		editAd: editAd,
		getAdById: getAdById,
		addAd: addAd,
		deleteAd: deleteAd
	}
}]);