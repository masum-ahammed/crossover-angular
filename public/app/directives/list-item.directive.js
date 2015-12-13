/**
 * Created by Masum on 12/13/2015.
 */
(function (angular) {
    angular
        .module('app')
        .directive('dbListItem',dbListItem);


    //dbListItem.$inject = [];
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


        Controller.$inject = ['$scope','$rootScope'];
        function Controller($scope,$rootScope) {
            var vm = this;
            vm.item = vm.ngModel;
            vm.isCollapsed = true;

            var styleInfo = getStyleInfo(vm.item);
            vm.imageUrl = styleInfo.imageUrl;
            vm.borderClass = styleInfo.borderClass;
            // vm.borderClass = getBorderClass.call(vm.item);
            vm.doCollapse = function(){
                clicked = true;
                vm.isCollapsed = !vm.isCollapsed ;
                $rootScope.$broadcast('db-Collapse', {itemId:vm.item.id,isCollapse:true});
            }

            var collapseListener = $rootScope.$on('db-Collapse', function (event, args) {
               if(args.itemId != vm.item.id){
                   vm.isCollapsed = args.isCollapse;
               }
            } );

            $scope.$on( '$destroy', collapseListener );
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
        return directive;
    }





})(window.angular);