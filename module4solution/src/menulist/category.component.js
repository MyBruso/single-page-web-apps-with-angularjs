(function(){
	angular.module('MenuApp')
		.component('categoriesComponent', {
			templateUrl : 'src/menulist/templates/category-component.html',
			bindings : {
				categories : '<'
			}
		});
})();