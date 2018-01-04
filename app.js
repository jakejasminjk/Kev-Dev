var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");
    
    app.use(express.static(__dirname + "/public"));
    app.set("view engine", "ejs");
    
    app.get("/",function(req,res){
        
        res.render("home");
    });
    
    app.listen(process.env.PORT, process.env.IP, function(){
    console.log("All Good, Mate");
    
});
