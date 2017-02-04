(function(){
	angular.module('public')
		.service('SignupService', SignupService);

	//SignupService.$inject = ['$http', 'ApiPath']
	function SignupService() {
		var service = this;
		var userInformation = {};
		
		service.saveUserInformation = function(userFirstName, userLastName, userEmail, userPhoneNumber, userMenuChoiceNumber) {
			userInformation = {
				firstName : userFirstName,
				lastName : userLastName,
				email : userEmail,
				phoneNumber : userPhoneNumber,
				menuChoiceNumber : userMenuChoiceNumber
			};
		};

		service.getUserInformation = function() {
			return userInformation;
		};


	}
})();