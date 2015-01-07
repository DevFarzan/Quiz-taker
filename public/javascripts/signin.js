/**
 * Created by Farzan on 12/30/14.
 */


$(document).ready(function(){

    $("#submit").click(function(){
       // alert("aa");
        var username = $("#username").val();
        var password = $("#password").val();


        var data = {username:username,password:password}
        $.ajax({
            method:"POST",
            url:"/signIn",
            data:data
        }).success(function(data , textstatus){

                sessionStorage.setItem("signInUser" , JSON.stringify(data.data))

                sessionStorage.getItem('signInUser')
                //console.log();
                console.log(data)
            }).error(function(data , textstatus){
                console.log(err)
            })


    })

})

