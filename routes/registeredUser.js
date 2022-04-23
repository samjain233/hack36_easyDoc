//user/registeredUser

const express = require("express");
const bodyParser = require("body-parser");
const Doctor = require("../database/signupdoctordatabse");
const Patientlist = require("../database/doctorpatientlist");


//middleware
let router = express.Router();

//get route--------------------------------------------------------------------------------------------------
router.get("/registeredUser",function(req,res){
    const doc_id=req.cookies.docsearch;
    console.log(doc_id);
    Doctor.findOne({_id:doc_id},function (err, data){
        Patientlist.findOne({doctor_id:doc_id},function(err,currdata){
            console.log(data);
            console.log(currdata);
            res.render("registereduser.ejs",{data:data,currdata:currdata,myid:req.cookies.userlogin});
        });
    });
});



//post route--------------------------------------------------------------------------------------------------
router.post("/registeredUser",function(req,res){
    
});


//export
module.exports= router;