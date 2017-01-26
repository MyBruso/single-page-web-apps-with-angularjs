(function(){
	'use strict';
	angular.module("NarrowItDownApp", [])
		.controller("NarrowItDownController", NarrowItDownController)
		.service("MenuSearchService", MenuSearchService)
		.directive("foundItems", foundItems);

	function foundItems() {
		var dod = {
			templateUrl : 'itemdetails.html',
			scope : {
				found : '<',
				onRemove : '&'
			},
			controller : FoundItemsDirectiveController,
			controllerAs : 'foundItemsDirectiveCtrl',
			bindToController : true
		};
		return dod;
	}

	function FoundItemsDirectiveController() {
		var foundItemsDirectiveCtrl = this;

		foundItemsDirectiveCtrl.isItemListEmpty = function() {
			if (foundItemsDirectiveCtrl.found !== undefined && foundItemsDirectiveCtrl.found.length === 0) {
				return true;
			} else {
				return false;
			}
		};
	}

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var narrowItDownCtrl = this;
		narrowItDownCtrl.searchMenuName = "";
		narrowItDownCtrl.found = undefined;
		
		narrowItDownCtrl.searchMenuItems = function() {
			if (narrowItDownCtrl.searchMenuName !== "") {
				var promise = MenuSearchService.getMatchedMenuItems(narrowItDownCtrl.searchMenuName);
				promise.then(function(result) {
					narrowItDownCtrl.found = result;
				}).catch(function(error) {
					console.log("MenuSearchService.getMatchedMenuItems() could not retrieve data!");
				});
			} else {
				narrowItDownCtrl.found = [];
			}
		};

		narrowItDownCtrl.removeItem = function(index) {
			narrowItDownCtrl.found.splice(index, 1);
		};
	}

	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http) {
		var service = this;
		service.getMatchedMenuItems = function(searchMenuName) {
			var response = $http({
				method : "GET",
				url : ("https://davids-restaurant.herokuapp.com/menu_items.json")
			}).then(function(result){
				var foundItems = [];
				var menuItems = result.data.menu_items;
				var regex = new RegExp(searchMenuName, 'gi');
				for (var i = 0; i < menuItems.length; i++) {
					var description = menuItems[i].description;
					if (description.match(regex)) {
						foundItems.push(menuItems[i]);
					}
				}
				return foundItems;
			});

			return response;
		};
	}

})();