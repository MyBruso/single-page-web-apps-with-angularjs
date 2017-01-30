(function(){
	angular.module('MenuApp')
		.controller('ItemController', ItemController);
	ItemController.$inject = ['items'];
	function ItemController(items) {
		var itemCtrl = this;
		itemCtrl.items = items;
	}
})();