
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var question = require('./routes/question');
var quizEntry = require('./routes/addQuiz')
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
app.get('/QuestionAnswer',function(req , res){
    res.render('QuestionAnswer')
})
app.get('/test',function(req , res){
    res.send('farzan is a good boy')
})
app.get('/addQuiz' ,function(req , res){
    res.render('addQuiz')
})

app.get('/number/:FirstNumber/:SecondNumber',routes.calculate)
app.post('/signIn',user.SignIn)
app.post('/takeQuestion' ,question.takeQuestion)


app.post('/SignUp',user.signUp)
app.post('/addQuiz',quizEntry.addQuiz)


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
