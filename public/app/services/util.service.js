/**
 * Created by Masum on 12/12/2015.
 */
(function (angular) {
    'use strict';

    angular.module('app')
        .factory('utilService', utilService);


    utilService.$inject = ['$http', '$q'];
    function utilService($http, $q) {
        var service = {
            getStyleByStatus: getStyleByStatus


        };

        return service;

        function getStyleByStatus(status) {

            var style ={
                borderClassName:'',
                boxClassName:'',
                color:''
            };
            if( status === 'Done'){
                style.borderClassName ='green-border';
                style.boxClassName ='box-green';
                style.color = 'green';
                return style;
            }
            else if( status === 'Running'){
                style.borderClassName ='blue-border';
                style.boxClassName ='box-blue';
                style.color = 'blue';
                return style;

            }
            else if( status === 'Error' || status == 'Rejected'){

                style.borderClassName ='red-border';
                style.boxClassName ='box-red';
                style.color = 'red';
                return style;
            }
            else if( status === 'Pending'){
                style.borderClassName ='gray-border';
                style.boxClassName ='gray-red';
                style.color = 'gray';
                return style;
            }
        }
    }
})(window.angular);
