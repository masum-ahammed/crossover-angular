
/**
 * Created by Masum on 2/28/2015.
 */
var TaskContract = function(task){

    var contract = {};
    contract.id = task._id;
    contract.pbl = task.pbl;
    contract.title = task.title;
    contract.description = task.description;
    contract.createdBy = task.createdBy;
    contract.assignee = task.assignee;
    contract.status = task.status;
    contract.assigneeName = "";

    contract.assigneeImageUrl = task.assignee ? '/userthumb/'+task.assignee : 'images//avatar.jpg';
    return contract;

};

module.exports = TaskContract;



