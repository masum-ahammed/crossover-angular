/**
 * Created by Masum on 12/13/2015.
 */
(function (angular) {
    angular
        .module('app')
        .directive('dbUnitTest',dbUnitTest);


    //dbListItem.$inject = [];
    function dbUnitTest() {
        var directive = {
            restrict: 'EA',

            templateUrl: 'app/directives/unit-test.directive.html',
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

            vm.pie = vm.ngModel.pie;
            vm.testPassed = vm.ngModel.testPassed;





        }




    }





})(window.angular);