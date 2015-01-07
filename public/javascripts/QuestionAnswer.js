

var str = (window.location.pathname).substr(16,window.location.pathname.length)



$(document).ready(function(){

    var current_question=0;
    var choices = [];
    var recieveData;
    var correctAnswer=[];

    var data = {quizId:str}
    $.ajax({
        method:'POST',
        url: '/getQuestionByQuizID',
        data:data
    }).success(function(data , textstatus){
            recieveData=data;
            getQuestion(current_question)
            function getQuestion(current_question){

                $("#ques").html(data.data[current_question].question);
                //("#ans1").html.(data.data[0].question)
                $("#ans1").html(data.data[current_question].answer1)

                $("#ans2").html(data.data[current_question].answer2)
                $("#ans3").html(data.data[current_question].answer3)
                $("#ans4").html(data.data[current_question].answer4)
            }
            console.log(data)
        }).error(function(err , textstatus){
            console.log(err)


        })

   //var session =  sessionStorage.getItem('sinInUser')

    function getRadioInfo() {
        var decision = null;
        //for(var i = 0; i < $('input[type=radio]:checked'); i += 1) {
            if($('input[type=radio]:checked')) {
                decision = $(('input[type=radio]:checked')).val();
          //  }
        }
        return decision;
    }





    $("#next").on('click',function(){
        var decision = getRadioInfo();
       /* if(decision==null){
            $("#submitError").style.display = "block";
        }
        else{
           // $("#submitError").style.display = "none";
        }*/

        checkAnswer(decision);
        //choices[current_question] = decision;
        current_question +=1;
        if(current_question<recieveData.data.length){
       // getQuestion(current_question)
        $("#ques").html(recieveData.data[current_question].question);
        //("#ans1").html.(data.data[0].question)
        $("#ans1").html(recieveData.data[current_question].answer1)
        $("#ans2").html(recieveData.data[current_question].answer2)
        $("#ans3").html(recieveData.data[current_question].answer3)
        $("#ans4").html(recieveData.data[current_question].answer4)
        }
       else{
          //  alert(correctAnswer);
            /*sessionStorage.setItem('Result', JSON.stringify(correctAnswer))
            window.location.assign('/Result')
            */
        }


    })
    $("#result").click(function(){
        var decision = getRadioInfo();
        if(decision==null){
            $("#submitError").style.display = "block";
        }
        else{
            // $("#submitError").style.display = "none";
        }

        checkAnswer(decision);

        var user = JSON.parse(sessionStorage.getItem('signInUser'))[0];

        var data = {
            quizId: str,
            userId: user._id,
            result: correctAnswer
        };
        $.ajax({
            type: "POST",
            url: "/Result",
            data: data
        }).success(function (data, textstatus) {
                console.log(data)

            }).error(function (err, textStatus) {
                console.log(err)
            });



        sessionStorage.setItem('Result', JSON.stringify(correctAnswer))
        window.location.assign('/Result')

    })
function checkAnswer(decision){
    if(decision==recieveData.data[current_question].rightAnswer)
    if(correctAnswer==true)
    {
        correctAnswer.push(true)
    }
    else{
        correctAnswer.push(false)
    }
    if(current_question == length-1) {
        $("#next").css('visibility',"hidden");
        $("#result").css('visibility',"visible");


        /* $("#next").click(function(){
             $("#showsubmit").replaceWith("<button>show results</button>");
     })

 */
}
}


    $("#submitAns").click(function(){

        var ans = $("input[class=ans]:checked").val();
        //var ans = '';




    })

   // window.location='/'

})


