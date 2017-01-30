(function(){

	angular.module('MenuApp')
		.controller('CategoryController', CategoryController);

	CategoryController.$inject = ['categories'];
	function CategoryController(categories) {
		var categoryCtrl = this;
		categoryCtrl.categories = categories;
	}

})();