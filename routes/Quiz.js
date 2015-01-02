
/*
 * GET home page.
 */


    var mongoose = require('mongoose');

var addQuizSchema = mongoose.Schema({
    quizTitle:String,
    quizDescription:String

});
var Quizdb = mongoose.model('quizEntry' , addQuizSchema)

exports.addQuiz = function(req,res){
    var quizTitle = req.body.quizTitle
    var quizDescription = req.body.quizDescription


    var quiz_info = new Quizdb({
        quizTitle:quizTitle,
        quizDescription:quizDescription

});

    quiz_info.save(function(err,data){

        res.send({err:err,data:data})

    });
};
exports.getAllQuiz=function(req,res){
    Quizdb.find({},function(err,data){

        res.send({err:err,data:data});
    })
}