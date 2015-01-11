softUni.factory('mainData', ['$resource', '$rootScope', function($resource, $rootScope){

	//var resource = $resource('http://softuni-ads.azurewebsites.net/api/ads:adId', {adId: '@id'}, {
	//	update: { method: 'PUT' }
	//});
	var resource = $resource('http://softuni-ads.azurewebsites.net/api/ads');

	//var resource = $resource('http://localhost:1337/api/ads');

	function getAllAds(params, startpage) {
		startpage = startpage || 1;
		resource = $resource('http://softuni-ads.azurewebsites.net/api/ads?pagesize=10&startpage=' + startpage);

		//resource = $resource('http://localhost:1337/api/ads?pagesize=10&startpage=' + startpage);
 		return resource.get(params);
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