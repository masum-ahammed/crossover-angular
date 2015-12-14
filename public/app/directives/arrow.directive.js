/**
 * Created by Masum on 12/13/2015.
 */
(function (angular) {
    angular
        .module('app')
        .directive('dbArrow',dbArrow);


    //dbListItem.$inject = [];
    function dbArrow() {
        var directive = {
            restrict: 'EA',

            templateUrl: 'app/directives/arrow.directive.html',
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
            vm.arrowClass = 'arrow-'+vm.item.arrowType;



        }




    }





})(window.angular);