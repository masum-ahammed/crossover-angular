/**
 * Created by Masum on 12/13/2015.
 */
(function () {
    angular
        .module('app')
        .directive('dbRactangleBox', dbRactangleBox);

    function dbRactangleBox() {
        var directive = {
            restrict: 'EA',

            templateUrl: 'app/directives/ractangle-box.directive.html',
            scope: {
                status: '='
            },
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }


    function Controller() {
        var vm = this;
       console.log(vm.status)


    }



})();