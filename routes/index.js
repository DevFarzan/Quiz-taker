
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' ,name:'farzan'});

};
exports.calculate=function(req , res){

    var first = req.params.FirstNumber;
    var second = req.params.SecondNumber;

    res.send("my no 1st is " + first + " The no 2nd is " + second + " and their addition is " + (parseInt(first)+parseInt(second)));
}