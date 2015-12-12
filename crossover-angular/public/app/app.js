(function () {
    'use strict';

    var app = angular.module('app', [
         // Angular modules
        
         'ngRoute'

         // Custom modules

         // 3rd Party Modules

    ]);


  
    // Configure the routes and route resolvers
    app.config(['$routeProvider',
   function ($routeProvider) {
       $routeProvider.
         when('/', {
             templateUrl: 'app/dashboard.html',
             //template: '<div>Masum</div>',
         }).
       
         otherwise({
             redirectTo: '/'
         });
   }]);

   
    angular.element(document).ready(function () {
        angular.bootstrap(document, ["app"]);
    });
})();
