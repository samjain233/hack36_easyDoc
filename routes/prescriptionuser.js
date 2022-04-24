const express = require("express");
const bodyParser = require("body-parser");
const prescriptionuser = require("../database/patientprescription");
const User = require("../database/signuserdatabase");


//middleware
let router = express.Router();
router.use(express.static("public"));

//get route--------------------------------------------------------------------------------------------------
router.get("/prescriptionuser",function(req,res){
    console.log(req.cookies.userlogin);
    User.findOne({email:req.cookies.userlogin},function(err,userdata){
        const id = userdata._id;
        prescriptionuser.find({user_id:id},function(err,data){
            console.log(data);
            res.render("prescriptionuser",{email:req.cookies.userlogin,prescription:data});
        });
    });   
});



//post route--------------------------------------------------------------------------------------------------
router.post("/",function(req,res){
    
});


//export
module.exports= router;