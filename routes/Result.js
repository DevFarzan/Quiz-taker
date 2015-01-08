

var mongoose = require('mongoose');

var resultSchema = mongoose.Schema({
    quizId:String,
    userId:String,
    result:String,
    TakenDate:Array

})

var resultDb = mongoose.model('Result' , resultSchema)

exports.resultData = function(req , res){
    var quizId = req.body.quizId
    var userId = req.body.userId
    var result = req.body.result
    var Date = new Date()
    var month = Date.getMonth()
    var year = Date.getFullYear()

var result_info = new resultDb({
   quizId:quizId,
   userId:userId,
   result:result,
   TakenDate:[month , year]

});
    result_info.save(function(err,data){

        res.send({err:err,data:data});

    });
};

exports.getUserData = function(req , res){
    var userId = req.body.userId;

    resultDb.find({userId:userId},function(err , data){
        res.send({err:err,data:data});
    });
}
