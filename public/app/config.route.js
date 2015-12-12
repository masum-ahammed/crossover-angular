(function () {
    'use strict';

    var app = angular.module('br-reg');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/registration/registration.html',
                    title: 'registration',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Registration'
                    }
                }
            }
        ];
    }
})();