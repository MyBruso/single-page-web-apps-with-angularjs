(function(){
	angular.module('data')
		.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$http'];
	function MenuDataService($http) {
		var service  = this;

		service.getAllCategories = function() {
			var response = $http({
				method : 'GET',
				url : ('http://davids-restaurant.herokuapp.com/categories.json')
			});
			return response;
		};

		service.getItemsForCategory = function(categoryShortName) {
			var response = $http({
				method : 'GET',
				url : ('http://davids-restaurant.herokuapp.com/menu_items.json?category='),
				params : {
					category : categoryShortName
				}
			});
			return response;
		};
	}
})();