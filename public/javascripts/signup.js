/**
 * Created by Farzan on 12/30/14.
 */



$(document).ready(function(){

    $("#submit1").click(function(){

        var inputName = $("#InputName").val();
        var inputEmail = $("#InputEmailFirst").val();
        var password  = $("#password").val();
        var data  = {InputName:inputName,InputEmail:inputEmail,password:password}
        $.ajax({
            method:"POST",
            url:"/SignUp",
            data:data
        }).success(function(data, textstatus) {
                sessionStorage.setItem("signInUser" , JSON.stringify(data.data))

                sessionStorage.getItem('sinInUser')
            // console.log(data)


            }).error(function(err,textStatus){
                console.log(err)
            })
    })
})
