
var session =  sessionStorage.getItem('sinInUser')
if(session){
    window.location = '/'
}
else
{
    function startQuiz() {
        var str = (window.location.pathname).substr(11,window.location.pathname.length)
        window.location.assign("/QuestionAnswer/"+str);
        $.ajax
    }
}
