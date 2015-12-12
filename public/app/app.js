(function () {
    'use strict';
    
    var app = angular.module('br-reg', [
        // Angular modules 
        'ngAnimate',        // animations
        'ngRoute',          // routing
        'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)

        // Custom modules 
        'common',           // common functions, logger, spinner
        'common.bootstrap', // bootstrap dialog wrapper functions

        // 3rd Party Modules
        'ui.bootstrap'      // ui-bootstrap (ex: carousel, pagination, dialog)
    ]);

    // Handle routing errors and success events
    app.run(['$route',  function ($route) {
            // Include $route to kick start the router.
        }]);
    angular.element(document).ready(function() {
        angular.bootstrap(document, ["br-reg"]);
    });
})();