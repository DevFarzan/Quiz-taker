/*
$(document).ready(function(){
    var session =  sessionStorage.getItem('signInUer')
    if(session){
        $.ajax({
            method:"GET",
            url:"/displayAllQuizInfo"


        }).success(function(data , textstatus){
                var list = $("#list");
                //select.children().remove();
                if (data.data) {
//                $(data).each(function(index, item) {
//                    select.append('<option>ddddddddd</option>')
//                });


                    for( var i=0;i<data.data.length;i++){
                        select.append('<option value='+data.data[i]._id+'>'+data.data[i].quizTitle+'</option> ')
                    }

                }
                console.log(data)
            }).error(function(data , textstatus){
                console.log(err)
            })









        $("#submit").click(function(){
           */
/* var quizId = $("#select1").val();
            var question = $("#question").val();
            var answer1 = $("#answer1").val();
            var answer2 = $("#answer2").val();
            var answer3 = $("#answer3").val();
            var answer4 = $("#answer4").val();

            console.log(quizId);
            var data = { quizId:quizId ,question:question,answer1:answer2,answer2:answer2,answer3:answer3,answer4:answer4}*//*


            $.ajax({
                method:"POST",
                url:"/displayAllQuiz",
                data:data
            }).success(function(data , textstatus){
                   console.log(data)
                })
        }).error(function(data , textstatus){
                console.log(err)
            })
    }else{
        window.location='/'
    }
})




*/


var session =  sessionStorage.getItem('sinInUser')
if(session){
 window.location = '/'
}
else
{
    function sendId(str){
       window.location.assign("/startQuiz/"+str);
    }
}



