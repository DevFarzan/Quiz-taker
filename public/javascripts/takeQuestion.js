
$(document).ready(function(){
    $("#submit").click(function(){
      var question = $("#question").val();
      var answer1 = $("#answer1").val();
      var answer2 = $("#answer2").val();
      var answer3 = $("#answer3").val();
      var answer4 = $("#answer4").val();
        var data = {question:question,answer1:answer2,answer2:answer2,answer3:answer3,answer4:answer4}
        $.ajax({
            method:"POST",
            url:"/takeQuestion",
            data:data
        }).success(function(data , textstatus){
                console.log(data)
            })
    }).error(function(data , textstatus){
            console.log(err)
        })
})
