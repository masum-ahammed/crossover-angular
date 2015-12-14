/**
 * Created by Masum on 12/13/2015.
 */
(function (angular) {
    angular
        .module('app')
        .directive('dbPieChart',dbPieChart);


    //dbListItem.$inject = [];
    function dbPieChart() {
        var directive = {
            restrict: 'EA',

            templateUrl: 'app/directives/pie-chart.directive.html',
            scope: {
                ngModel: '=',
                parcent:'@'
            },
            controller: Controller,
            link:link,
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;

        function link( scope, elm ) {
            scope.$watch('vm.graphdata', function( data ) {
                if ( !data.series || !data.options ) return;
                console.log(data.series, data.options);
                $.plot( elm, data.series, data.options );
            }, true);



        }
        Controller.$inject = ['$scope','$rootScope'];
        function Controller($scope,$rootScope) {
            var vm = this;
            vm.green = vm.ngModel.green;
            vm.red = vm.ngModel.red;
            vm.greenData = parseFloat(vm.parcent);
            vm.redData = 100 - vm.greenData;
            console.log('test passed : '+ vm.parcent);

            vm.graphdata = {
                series: [
                    { label: {name:'green' , value:vm.green},  data:  vm.greenData, color: "#72AC4D"},
                    { label: {name:'red' , value:vm.red},data: vm.redData, color: "#EB7D3B"}
                ],
                options: {
                    series: {
                        pie: {
                            show: true,
                            highlight: {
                                opacity: 0.1
                            },
                            radius: 1,
                            stroke: {
                                color: '#C7C1B9',
                                width: 2
                            },
                            startAngle: 2,
                            combine: {
                                color: '#353535',
                                threshold: 0.05
                            },
                            label: {
                                show: true,
                                radius: 1,
                                formatter: function (label, series) {

                                    return '<div class="pie-chart-label-'+label.name+'">' + label.value + '</div>';
                                }
                            }
                        },
                        grow: {active: false}
                    },
                    legend: {show: false},
                    grid: {
                        hoverable: true,
                        clickable: true
                    }
                }
            };



        }






    }





})(window.angular);