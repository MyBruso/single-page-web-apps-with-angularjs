(function(){
	angular.module('MenuApp')
		.component('itemComponent', {
			templateUrl : 'src/menulist/templates/item-component.html',
			bindings : {
				items : '<'
			}
		});
})();