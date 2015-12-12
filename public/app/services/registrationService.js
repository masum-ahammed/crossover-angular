/**
 * Created by Masum on 3/31/2015.
 */
(function (angular) {
    'use strict';

    var serviceId = 'registrationService';
    angular.module('br-reg').factory(serviceId, ['$http', 'common', registrationService]);

    function registrationService($http,common) {

        var $q = common.$q;


        var service = {

            saveRegistration: saveRegistration


        };

        return service;


        function saveRegistration(registration) {
            var self = this;
            console.log('saving...');

            var deferred = $q.defer();

            $http.post('http://internal.boomcarding.com/api/register/merchant', registration)
                .success(function (data, status, headers, config) {
                    console.log('status' + status);
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    //console.log('status' + data.code);
                    deferred.reject(data.code);
                });
            return deferred.promise;
        }


    }
})(window.angular);