/**
 * Created by Masum on 5/3/2015.
 */
(function(config){
    var bodyParser = require('body-parser');
    var flash = require('connect-flash');
    var express = require('express');
    var session = require('express-session');
    var cookieParser = require('cookie-parser');
    var ejsEngine = require('ejs-locals')

    config.init = function(app,config){
        app.use(express.static(config.rootPath+'/public') );
        app.engine("ejs",ejsEngine);
        app.set("view engine","ejs");
        app.set('views',config.rootPath+'/server/views');

        app.use(bodyParser.urlencoded({ extended: false }));
        // parse application/json
        app.use(bodyParser.json())

        app.use(cookieParser('keyboard cat'));
        app.use(session({ cookie: { maxAge: 60000 },saveUninitialized: true,resave:false,secret:"TheBoard"}));
        app.use(flash());


//set up the static resources


    };
})(module.exports);
