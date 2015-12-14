/**
 * Created by Masum on 12/13/2015.
 */
(function (angular) {
    angular
        .module('app')
        .directive('dbCodeCovered',dbCodeCovered);


    //dbListItem.$inject = [];
    function dbCodeCovered() {
        var directive = {
            restrict: 'EA',

            templateUrl: 'app/directives/code-covered.directive.html',
            scope: {
                percent: '@',
                color:'@'
            },
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;

        Controller.$inject = ['$scope','$rootScope'];
        function Controller($scope,$rootScope) {
            var vm = this;
            //vm.percent = vm.percent;
            vm.colorClass = vm.color;
            console.log('color: '+ vm.colorClass);


        }




    }





})(window.angular);