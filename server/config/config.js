/**
 * Created by masuma on 4/20/2015.
 */
var path = require('path');
var rootPath = path.normalize(__dirname+'../../../');
console.log('rootpath' + rootPath);
module.exports = {
    development:{
        rootPath : rootPath,
        port: process.env.PORT || 3000,
        uploadRoot : 'upload/',
        photoDir:'upload/photos/',
        dbUrl:'mongodb://localhost:27017/theBoard'
    },
    production:{
        rootPath : rootPath,
        port: process.env.PORT || 80,
        uploadRoot : 'upload/',
        photoDir:'upload/photos/',
        dbUrl:''
    }
}
//(function(config){
//
//
//    config =
//    //config = conf;
//
//})();