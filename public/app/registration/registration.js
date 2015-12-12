(function () {
    'use strict';
    var controllerId = 'registration';
    angular.module('br-reg').controller(controllerId, ['common', 'registrationService', registration]);

    function registration(common, registrationService) {

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var logError = getLogFn(controllerId,'error');

        var vm = this;
        vm.registration = {
            "username" : "masum2@boomtest.com",
            "firstName" : "Clark",
            "lastName" : "Kent",
            "category" : "Super Heros",
            "businessName" : "Super awesome test",

            "businessDescription" : "Fighting crime",

            "password" : "Test12345",
            "businessDescription " : "Test test 1",
            "websiteUrl" : "www.overthere.com",
            "businessPhoneNumber" : "9545551234",
            "contactPhoneNumber" : "9545551234"
        }



        vm.title = 'Registration';

        activate();

        function activate() {
//            var promises = [getMessageCount(), getPeople()];
//            common.activateController(promises, controllerId)
//                .then(function () { log('Activated Dashboard View'); });
        }
        vm.save = function(){
            registrationService.saveRegistration(vm.registration).then(function(result){
                log(result.firstName + ' successfully registered.');
            },function(err){
                logError(err);
            })
        }

        vm.submitForm = function(isValid) {

            // check to make sure the form is completely valid
            if (isValid) {
               vm.save();
            }

        };
    }
})();