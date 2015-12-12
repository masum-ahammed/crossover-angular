/**
 * Created by Masum on 2/22/2015.
 */
(function(homeController){

    homeController.init= function(app){
        app.get("/",function(req,res){
            res.render("index",{
                title:'Registration'

            });

        });





    };


})(module.exports);