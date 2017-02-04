(function(){
	angular.module('public')
		.service('SignupService', SignupService);

	//SignupService.$inject = ['$http', 'ApiPath']
	function SignupService() {
		var service = this;
		var userInformation = {};
		
		service.saveUserInformation = function(userFirstName, userLastName, userEmail, userPhoneNumber, userMenuChoiceNumber, userMenuName, userMenuDescription) {
			userInformation = {
				firstName : userFirstName,
				lastName : userLastName,
				email : userEmail,
				phoneNumber : userPhoneNumber,
				menuChoiceNumber : userMenuChoiceNumber,
				menuName : userMenuName,
				menuDescription : userMenuDescription
			};
		};

		service.getUserInformation = function() {
			return userInformation;
		};


	}
})();