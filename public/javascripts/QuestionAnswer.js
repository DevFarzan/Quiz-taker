
$(document).ready(function(){



   var session =  sessionStorage.getItem('sinInUser')
if(session){


    $("#submitAns").click(function(){

        var ans = $("input[class=ans]:checked").val();
        //var ans = '';


        alert(ans);
    })
}else{
    window.location='/'
}
})
