const express = require("express");
const bodyParser = require("body-parser");

//middleware
let router = express.Router();
router.use(express.static("public"));

//get route--------------------------------------------------------------------------------------------------
router.get("/",function(req,res){
    if(req.cookies.doctorlogin)
    res.render("doctorHome",{email:req.cookies.doctorlogin});
    else
    res.redirect("/login");
});



//post route--------------------------------------------------------------------------------------------------
router.post("/",function(req,res){
    
});


//export
module.exports= router;