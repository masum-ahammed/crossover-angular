/**
 * Created by Masum on 12/12/2015.
 */
(function (angular) {
    'use strict';

    angular.module('app')
        .factory('dashboardService', dashboardService);


    dashboardService.$inject = ['$http', '$q'];
    function dashboardService($http, $q) {
        var service = {
            getData: getData


        };

        return service;

        function getData() {
            var deferred = $q.defer();

            $http.get('app/data/data.json').success(function (data) {
                deferred.resolve(data);
            })
            .error(function (msg) {
                deferred.reject(msg);
            });
            return deferred.promise;
        }
    }
})(window.angular);
