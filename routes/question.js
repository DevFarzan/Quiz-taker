
/*
 * GET home page.
 */


    var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
    quizId:String,
    question:String,
    answer1:String,
    answer2:String,
    answer3:String,
    answer4:String,
    rightAnswer:String

});
var questiondb = mongoose.model('question' , questionSchema)

exports.takeQuestion = function(req,res){
    var quizId = req.body.quizId
    var question = req.body.question
    var answer1 = req.body.answer1
    var answer2 = req.body.answer2
    var answer3 = req.body.answer3
    var answer4 = req.body.answer4
    var rightAnswer = req.body.correctAnswer

    var question_info = new questiondb({
        quizId:quizId,
        question:question,
        answer1:answer1,
        answer2:answer2,
        answer3:answer3,
        answer4:answer4,
        rightAnswer:rightAnswer
});

    question_info.save(function(err,data){

        res.send({err:err,data:data})

    });
};
exports.getQuestionByQuizID = function(req ,res){
    var quizId = req.body.quizId;

    questiondb.find({quizId:quizId},function(err,data){
        res.send({err:err,data:data})
    })

}