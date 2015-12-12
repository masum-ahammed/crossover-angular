
/**
 * Created by Masum on 2/28/2015.
 */
var UserContract = function(user){

    var userContract = {};
    userContract.id = user._id;
    userContract.firstName = user.firstName;
    userContract.lastName = user.lastName;
    userContract.email = user.email;
    userContract.password = "";
    userContract.imageUrl = '/thumbnails/'+user.imageName;
    return userContract;

};

module.exports = UserContract;



