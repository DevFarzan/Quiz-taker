


$(document).ready(function(){
    var user = JSON.parse(sessionStorage.getItem('signInUser'))[0];
    $.ajax({
        method:"POST",
        url:"/dashboard",
        data:{userId:user._id}

    }).success(function(data , textstatus){
         userIdData = JSON.stringify(data)

       $("#userData_Id").html(userIdData)
            console.log(data)

        }).error(function(err , textstatus){
            console.log(err)
        })
})
