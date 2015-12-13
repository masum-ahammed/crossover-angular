﻿(function () {
    'use strict';
    
    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate',        // animations
        'ngRoute',          // routing
        'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)


        // 3rd Party Modules
        'ui.bootstrap'      // ui-bootstrap (ex: carousel, pagination, dialog)
    ]);

    app .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'dashboardController',
                    controllerAs: 'vm'
                }).

                otherwise({
                    redirectTo: '/'
                });
        }]);
    // Handle routing errors and success events
    app.run(['$route',  function ($route) {
            // Include $route to kick start the router.
        }]);
    angular.element(document).ready(function() {
        angular.bootstrap(document, ["app"]);
    });
})();