//alert('gdsghdghd')

$(document).ready(function(){
var  a= sessionStorage.getItem('Result');

    $("#get").html(a)

    var results = JSON.parse(a);

    var calculation = 0;

    results.forEach(function(entry) {

        if(entry==true){
            calculation++;
        }
    })

    percentage = calculation/results.length*100
    $("#percentage").html(percentage)
})