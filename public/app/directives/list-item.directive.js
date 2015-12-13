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

        var styleInfo = getStyleInfo(vm.item);
        vm.imageUrl = styleInfo.imageUrl;
        vm.borderClass = styleInfo.borderClass;
       // vm.borderClass = getBorderClass.call(vm.item);



    }


    function getStyleInfo(item){
        var isBuild = item.type == 'Build';
        var imgName = isBuild ? 'pc' : 'wall';
        var styleInfo ={
            imageUrl : 'content/images/'+imgName+'-sm-gray.png',
            borderClass : 'gray-border'
        };
        if( item.state === 'Pending'){
            return styleInfo
        }
        else if( item.state === 'Running'){
            styleInfo.imageUrl= 'content/images/'+imgName+'-sm-blue.png';
            styleInfo.borderClass =  'blue-border';
            return styleInfo;

        }
        else if(item.state === 'Complete' || item.state === 'Accepted'){

            styleInfo.imageUrl= 'content/images/'+imgName+'-sm-green.png';
            styleInfo.borderClass =  'green-border';
            return styleInfo;
        }
        else if(item.state === 'Rejected'){

            styleInfo.imageUrl= 'content/images/'+imgName+'-sm-red.png';
            styleInfo.borderClass =  'red-border';
            return styleInfo;
        }
    }


})();