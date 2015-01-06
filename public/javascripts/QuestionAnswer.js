

var str = (window.location.pathname).substr(16,window.location.pathname.length)



$(document).ready(function(){

    var data = {quizId:str}
    $.ajax({
        method:'POST',
        url: '/getQuestionByQuizID',
        data:data
    }).success(function(data , textstatus){
            $("#ques").html(data.data[0].question);
            //("#ans1").html.(data.data[0].question)
           $("#ans2").html(data.data[0].answer1)
            $("#ans3").html(data.data[0].answer2)
            $("#ans4").html(data.data[0].answer3)
            console.log(data)
        }).error(function(err , textstatus){
            console.log(err)


        })

   //var session =  sessionStorage.getItem('sinInUser')



    $("#submitAns").click(function(){

        var ans = $("input[class=ans]:checked").val();
        //var ans = '';




    })

   // window.location='/'

})
