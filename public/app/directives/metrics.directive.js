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

        Controller.$inject = ['$scope','$rootScope'];
        function Controller($scope,$rootScope) {
            var vm = this;
            vm.item = vm.ngModel;



        }




    }





})(window.angular);