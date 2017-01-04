(function() {
	'use strict';
	angular.module('LunchCheck', [])
			.controller('LunchCheckController', LunchCheckController);
	
	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.lunchItems = "";
		$scope.message = "";
		$scope.color = "";
		$scope.checkItemsQuanity = function() {
			var items = $scope.lunchItems.split(",");
			items = items.filter(function(n) { 
					n = n.trim();
					return n != "";});
			if (items.length == 0) {
				$scope.message = "Please enter data first";
				$scope.color = "red";
			} else {
				$scope.color = "green";
				if (items.length > 3) {
					$scope.message = "Too much!";
				} else {
					$scope.message = "Enjoy!";
				}	
			}
		};
	}

})();