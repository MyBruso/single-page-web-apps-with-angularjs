(function(){
	"use strict";

	angular.module('public')
		.controller('SignupController', SignupController);

	SignupController.$inject = ['MenuService', 'SignupService'];
	function SignupController(MenuService, SignupService) {
		var signupCtrl = this;
		signupCtrl.firstName = "";
		signupCtrl.lastName = "";
		signupCtrl.email = "";
		signupCtrl.phoneNumber = "";
		signupCtrl.menuNumber = "";

		signupCtrl.signUp = function() {
			signupCtrl.message = "";
			signupCtrl.menuNumberMessage = "";
			var promise = MenuService.getMenuItem(signupCtrl.menuNumber);
			promise.then(function(data) {
				SignupService.saveUserInformation(signupCtrl.firstName, signupCtrl.lastName, signupCtrl.email, signupCtrl.phoneNumber, signupCtrl.menuNumber);
				signupCtrl.message = "Your information has been saved";
			}).catch(function(error) {
				signupCtrl.menuNumberMessage = "No such menu number exists";
			});
		};
	}

})();