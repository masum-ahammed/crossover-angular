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
       vm.boxClass = getStyleInfo(vm.status);

    }

    function getStyleInfo(status){

        if( status === 'Done'){
            return 'box-green';
        }
        else if( status === 'Running'){
            return 'box-blue';
        }
        else if( status === 'Error' || status == 'Rejected'){
            return 'box-red';

        }
        else if( status === 'Pending'){
            return 'box-gray';

        }
    }


})();