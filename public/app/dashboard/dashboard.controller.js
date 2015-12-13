/**
 * Created by Masum on 3/31/2015.
 */
(function (angular) {
    'use strict';

    angular.module('app')
    .controller('dashboardController',dashboardController);

    dashboardController.$inject = ['dashboardService'];

    function dashboardController(dashboardService){
        var vm = this;
        vm.list =[];
        dashboardService.getData().then(function(data){
            vm.list = data;

        });
    }
})(window.angular);
