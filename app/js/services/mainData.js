softUni.factory('mainData', function($http) {
	return {
		getAllAdds: function(success) {
			$http({
				method: 'GET',
				url: 'http://softuni-ads.azurewebsites.net/api/ads?pagesize=3&startpage=1'
			})
			.success(function(data, status, headers, config){
				success(data);
			})
			.error(function(data, status, headers, config){
				$log.warn(data);
			})
		},
		getAllTowns: function(success) {
			$http({
				method: 'GET',
				url: 'http://softuni-ads.azurewebsites.net/api/towns'
			})
			.success(function(data, status, headers, config){
				success(data);
			})
			.error(function(data, status, headers, config){
				$log.warn(data);
			})
		},
		getAllCategories: function(success) {
			$http({
				method: 'GET',
				url: 'http://softuni-ads.azurewebsites.net/api/categories'
			})
			.success(function(data, status, headers, config){
				success(data);
			})
			.error(function(data, status, headers, config){
				$log.warn(data);
			})
		}
	}
})