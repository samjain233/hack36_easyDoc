//user/docsearch

const express = require("express");
const bodyParser = require("body-parser");
const Doctor = require("../database/signupdoctordatabse");

//middleware
let router = express.Router();

//get route--------------------------------------------------------------------------------------------------
router.get("/docsearch",function(req,res){
    Doctor.find(function (err, doctorlist) {
        //console.log(doctorlist);
        //variables to display-----------------------------------------------------
        console.log(doctorlist);
        res.render("cardsdoctor.ejs",{render:doctorlist,email:req.cookies.userlogin});
    });
});



//post route--------------------------------------------------------------------------------------------------
router.post("/docsearch",function(req,res){
    console.log(req.body.doc_id);
    let options = {
        expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    }
    res.cookie("docsearch", req.body.doc_id, options);
    res.redirect("/User/docprofile");
});


//export
module.exports= router;