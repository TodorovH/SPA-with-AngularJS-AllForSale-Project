softUni.factory('userData', function($http) {
	return {
		register: function(user) {
			$http({
				method: 'POST',
				url: 'http://softuni-ads.azurewebsites.net/api/user/register'
			})
			.success(function(user){
				success(user)
				.save();
			})
			.error(function(user){
				
			})
		},
		login: function(success) {
			$http({
				method: 'POST',
				url: 'http://softuni-ads.azurewebsites.net/api/towns'
			})
			.success(function(user){
				success(user);
			})
			.error(function(user){
				
			})
		},
		logout: function(success) {
			$http({
				method: 'GET',
				url: 'http://softuni-ads.azurewebsites.net/api/categories'
			})
			.success(function(){
				success();
			})
			.error(function(){
				
			})
		}
	}
})