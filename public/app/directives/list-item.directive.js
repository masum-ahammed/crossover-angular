/**
 * Created by Masum on 12/13/2015.
 */
(function () {
    angular
        .module('app')
        .directive('dbListItem', dbListItem);

    function dbListItem() {
        var directive = {
            restrict: 'EA',

            templateUrl: 'app/directives/list-item.directive.html',
            scope: {
                ngModel: '='
            },
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }


    function Controller() {
        var vm = this;
        vm.item = vm.ngModel;


    }



})();