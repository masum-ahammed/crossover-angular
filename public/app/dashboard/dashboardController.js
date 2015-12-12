/**
 * Created by Masum on 3/31/2015.
 */
(function (angular) {
    'use strict';

    angular.module('app')
    .controller('dashboardController',dashboardController);

    dashboardController.$inject = ['dashboardService'];

    function dashboardController(dashboardService){
        dashboardService.getData().then(function(data){
            console.log(data);

        });
    }
})(window.angular);
