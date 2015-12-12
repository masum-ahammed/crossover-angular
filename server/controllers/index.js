/**
 * Created by Masum on 2/22/2015.
 */
(function(contorllers){
    var homeController = require("./homeController");

    contorllers.init = function(app){
        homeController.init(app);


    }

})(module.exports);