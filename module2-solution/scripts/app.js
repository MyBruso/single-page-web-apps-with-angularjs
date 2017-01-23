(function(){
	angular.module("ShoppingListCheckOff", [])
	 	.controller("ToBuyController", ToBuyController)
	 	.controller("AlreadyBoughtController", AlreadyBoughtController)
	 	.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

	 ToBuyController.$inject=['ShoppingListCheckOffService'];
	 function ToBuyController(ShoppingListCheckOffService) {
	 	var toBuyCtrl = this;
	 	
	 	toBuyCtrl.items = ShoppingListCheckOffService.getToBuyItems();

	 	toBuyCtrl.buyItem = function(index) {
	 		ShoppingListCheckOffService.buyItem(index);
	 	};
	 }

	 AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
	 function AlreadyBoughtController(ShoppingListCheckOffService) {
	 	var alreadyBoughtCtrl = this;

	 	alreadyBoughtCtrl.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
	 }

	 function ShoppingListCheckOffService() {
	 	var service = this;

	 	var toBuyItems = [
	 		{
	 			name : "Cookies",
	 			quantity : 10
	 		},
	 		{
	 			name : "Chips",
	 			quantity : 5
	 		},
	 		{
	 			name : "Cold Drinks",
	 			quantity : 10
	 		},
	 		{
	 			name : "Sandwiches",
	 			quantity : 5
	 		},
	 		{
	 			name : "Burgers",
	 			quantity : 8
	 		}
	 	];

	 	var alreadyBoughtItems = [];

	 	service.getToBuyItems = function() {
	 		return toBuyItems;
	 	};

	 	service.buyItem = function(index) {
	 		var toBuyItem = toBuyItems.splice(index, 1)[0];
	 		alreadyBoughtItems.push(toBuyItem);
	 	};

	 	service.getAlreadyBoughtItems = function() {
	 		return alreadyBoughtItems;
	 	};
	 }

})();