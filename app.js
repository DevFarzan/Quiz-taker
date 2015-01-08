
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var question = require('./routes/question');
var quizEntry = require('./routes/Quiz')
var Result = require('./routes/Result')
var data = require('./routes/dbCollections')
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/users', user.list);
//app.get('/saveusers', user.saveUser);
app.get('/SignUp', function(req, res){
    res.render('Signup')
})
app.get('/takeQuestion',function(req , res){
    res.render('takeQuestion')
})
app.get('/QuestionAnswer/:id', quizEntry.QuestionAnswer)
//app.get('/QuestionAnswer/:id',function(req , res){
  //  res.render('QuestionAnswer')
//})
app.get('/test',function(req , res){
    res.send('farzan is a good boy')
})
app.get('/addQuiz/' ,function(req , res){
    res.render('addQuiz')
})

app.get('/Result',function(req , res){
    res.render('Result')
})
app.get('/dashboard',function(req , res){
    res.render('dashboard')
})

app.post('/getQuestionByQuizID',question.getQuestionByQuizID)
app.get('/getAllQuizInfo',quizEntry.getAllQuiz)
app.get('/startQuiz/:id',quizEntry.startQuiz)
app.post('/Result',Result.resultData);
app.post('/dashboard',Result.getUserData)
   // res.render('startQuiz')
//})



app.get('/number/:FirstNumber/:SecondNumber',routes.calculate)
app.post('/signIn',user.SignIn)
app.post('/takeQuestion' ,question.takeQuestion)


app.post('/SignUp',user.signUp)
app.post('/addQuiz',quizEntry.addQuiz)
app.get('/displayAllQuiz' ,quizEntry.displayAllQuiz)
//app.get('/startQuiz',quizEntry. )


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
