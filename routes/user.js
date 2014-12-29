
/*
 * GET users listing.
 */



 var mongoose = require('mongoose');

//var user = mongoose.model('users')

var usersSchema = mongoose.Schema({
    userName:String,
    email: String,
    pass: String

});


var user = mongoose.model('user', usersSchema);



exports.list = function(req, res){
    user.find({},function(err,data){

        res.send({err:err,data:data});

    })

}




exports.SignIn = function(req , res){
    var username=req.body.username
     var password = req.body.password
    user.find({
        userName:username,
        pass:password
    },function(err,data){
        res.send({err:err,data:data});
    })
};

    //res.send(username+"<br/>"+ "" +password);}

exports.signUp = function(req, res){

    var username = req.body.InputName;
    var email = req.body.InputEmail;
    var password = req.body.password;

    var user_info = new user({
        userName: username,
        email: email,
        pass: password

    });

    user_info.save(function(err,data){

        res.send({err:err,data:data});

    });

    //res.send(username + " " + email + " " + password);

};
