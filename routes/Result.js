

var mongoose = require('mongoose');

var resultSchema = mongoose.Schema({
    quizId:String,
    userId:String,
    result:String
})

var resultDb = mongoose.model('Result' , resultSchema)

exports.resultData = function(req , res){
    var quizId = req.body.quizId
    var userId = req.body.userId
    var result = req.body.result


var result_info = new resultDb({
   quizId:quizId,
   userId:userId,
   result:result
});
    result_info.save(function(err,data){

        res.send({err:err,data:data});

    });
};
