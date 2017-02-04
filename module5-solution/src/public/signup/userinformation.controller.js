(function(){
	"use strict";
	angular.module("public")
		.controller("UserInformationController", UserInformationController);
	UserInformationController.$inject = ['userInformation'];
	function UserInformationController(userInformation) {
		var userInformationCtrl = this;
		userInformationCtrl.firstName = userInformation.firstName;
		userInformationCtrl.lastName = userInformation.lastName;
		userInformationCtrl.email = userInformation.email;
		userInformationCtrl.phoneNumber = userInformation.phoneNumber;
		userInformationCtrl.menuChoiceNumber = userInformation.menuChoiceNumber;
		userInformationCtrl.menuName = userInformation.menuName;
		userInformationCtrl.menuDescription = userInformation.userMenuDescription;

		userInformationCtrl.isRegisteredUser = function() {
			if (userInformation.firstName === undefined || 
				userInformation.lastName === undefined || 
				userInformation.email === undefined) {
				return false;
			} else {
				return true;
			}
		};
	}
})();