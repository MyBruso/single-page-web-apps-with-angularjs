(function(){
	angular.module('MenuApp')
		.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			url : '/',
			templateUrl : 'src/menulist/templates/home.template.html'
		})
		.state('categories', {
			url : '/categories',
			templateUrl : 'src/menulist/templates/categories.template.html',
			controller : 'CategoryController as categoryCtrl',
			resolve : {
				categories : ['MenuDataService', function(MenuDataService) {
						return MenuDataService.getAllCategories().then(function(result) {
							var categories = result.data;
							return categories;
						});
					}]
			}
		})
		.state('items', {
			url : '/items/{categoryShortName}',
			templateUrl : 'src/menulist/templates/items.template.html',
			controller : 'ItemController as itemCtrl',
			resolve : {
				items : ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
					return MenuDataService.getItemsForCategory($stateParams.categoryShortName).then(function(result) {
						var items = result.data.menu_items;
						return items;
					});
				}]
			}
		});
	}

})();