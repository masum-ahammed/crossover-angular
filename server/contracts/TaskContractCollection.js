
/**
 * Created by Masum on 2/28/2015.
 */
  var TaskContract = require('./TaskContract');
var TaskContractCollection = function(tasks){
    var collection  = new Array();

    if(tasks){
        tasks.forEach(function(task){
            collection.push(new TaskContract(task));
        });

    }

    return collection;

};

module.exports = TaskContractCollection;



