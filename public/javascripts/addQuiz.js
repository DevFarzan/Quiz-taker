
$(document).ready(function(){

    $("#submit").click(function(){
        // alert("aa");
        var quizTitle = $("#quizTitle").val();
        var quizDescription = $("#qizDescription").val();
        var data = {quizTitle:quizTitle,quizDescription:quizDescription}
        $.ajax({
            method:"POST",
            url:'/addQuiz',
            data:data
        }).success(function(data , textstatus){
                console.log(data)
            }).error(function(data , textstatus){
                console.log(err)
            })
    })
})
