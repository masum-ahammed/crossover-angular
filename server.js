/**
 * Created by Masum on 2/22/2015.
 */

var http = require('http');
var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log('env : '+ env);
var config = require('./server/config/config')[env];

var app = express();
var expConfig = require('./server/config/express');
expConfig.init(app,config);


//controller
var controllers = require('./server/controllers');
controllers.init(app);

var server = http.createServer(app);
server.listen(config.port);