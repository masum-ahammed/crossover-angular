/**
 * Created by Masum on 12/13/2015.
 */
(function (angular) {
    angular
        .module('app')
        .directive('dbMetrics',dbMetrics);


    //dbListItem.$inject = [];
    function dbMetrics() {
        var directive = {
            restrict: 'EA',

            templateUrl: 'app/directives/metrics.directive.html',
            scope: {
                ngModel: '='
            },
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;

        Controller.$inject = ['$scope','utilService'];
        function Controller($scope,utilService) {
            var vm = this;

            var styleInfo = utilService.getStyleByStatus(vm.ngModel.status);

            vm.borderClass = styleInfo.borderClassName;
            vm.color = styleInfo.color;
            vm.test = vm.ngModel.test;
            vm.maintainability = vm.ngModel.maintainability;
            vm.security = vm.ngModel.security;
            vm.workmanship = vm.ngModel.workmanship;


        }




    }





})(window.angular);