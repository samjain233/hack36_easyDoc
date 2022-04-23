//login route 
const express = require("express");
const User = require("../database/signuserdatabase");
const Doctor = require("../database/signupdoctordatabse");


//middleware
let router = express.Router();

//get route--------------------------------------------------------------------------------------------------
router.get("/",function(req,res){
    if(req.cookies.userlogin)
    {
        res.redirect("/user");
    }
    else if(req.cookies.doctorlogin){
        res.redirect("/doctor");
    }
    else{
    res.render("login");
    }
});



//post route--------------------------------------------------------------------------------------------------
router.post("/",function(req,res){
    console.log(req.body);
    if(Number(req.body.option)===1)
    {
        console.log("user");
        User.findOne({ email: req.body.email }, function (err, detail) {
            if (err) {
                console.log(err);

            } else {
                if (detail.password === req.body.password) {
                    let options = {
                        expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
                    }
                    res.cookie("userlogin", req.body.email, options);
                    console.log("correct passwd");
                    console.log("redirect to user portal");
                    res.redirect("/user");
                }
                else {
                    console.log("incorrect password");
                }
            }
        });
    }
    else
    {
        console.log("doctor");
        Doctor.findOne({ email: req.body.email }, function (err, detail) {
            if (err) {
                console.log(err);
            } else {
                if (detail.password === req.body.password) {
                    let options = {
                        expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
                    }
                    res.cookie("doctorlogin", req.body.email, options);
                    console.log("correct passwd");
                    console.log("redirect to Doctor portal");
                    res.redirect("/doctor");
                }
                else {
                    console.log("incorrect password");
                }
            }
        });
    }
});


//export
module.exports= router;