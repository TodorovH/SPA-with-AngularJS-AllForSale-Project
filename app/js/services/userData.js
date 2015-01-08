softUni.factory('userData', function($http) {
	return {
		register: function(success, user) {
			$http({
				method: 'POST',
				url: 'http://softuni-ads.azurewebsites.net/api/user/register',
				data: JSON.stringify({
					'username': user[username],
					'password': user[password],
					'confirmPassword': user[confirmPassword],
					'ownerName': user[name],
					'ownerEmail': user[email],
					'ownerPhone': user[phone],
					'townId': user[townId]
				})
			})
			.success(function(data){
				success(data);
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