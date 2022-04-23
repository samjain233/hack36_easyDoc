//User/docprofile

//require
const express = require("express");
const bodyParser = require("body-parser");
const Doctor = require("../database/signupdoctordatabse");
const Patientlist = require("../database/doctorpatientlist");
const User = require("../database/signuserdatabase");

//middleware
let router = express.Router();


//get route--------------------------------------------------------------------------------------------------
router.get("/docprofile",function(req,res){
    const doc_id=req.cookies.docsearch;
    console.log(doc_id);
    Doctor.findOne({_id:doc_id},function (err, data){
        Patientlist.findOne({doctor_id:doc_id},function(err,currdata){
            console.log(data);
            console.log(currdata);
            res.render("doctorprofile.ejs",{data:data,currdata:currdata,myid:req.cookies.userlogin});
        });
    });
});



//post route--------------------------------------------------------------------------------------------------
router.post("/docprofile",function(req,res){
    console.log(req.body);
    const doc_id= req.body.doc_id;
    Patientlist.findOne({doctor_id:doc_id},function(err,data){
        if(!data)
        {
            User.findOne({email:req.cookies.userlogin},function(err,userdata){
                const user = new Patientlist ({
                    doctor_id: doc_id,
                    CurrentNum : "1",
                    TotalNum : "1",
                    Users: [{
                        _id: userdata._id,
                        number: "1"
                    }]
                });
                user.save();
                console.log("successfully inserted user");
                res.redirect("/user/registeredUser");
            });
            
        }
        else {
            User.findOne({email:req.cookies.userlogin},function(err,userdata){
                var totalNumber = data.TotalNum;
                totalNumber = totalNumber + 1;
                const newPatient = {
                    _id: userdata._id,
                    number: totalNumber
                }
                var patientarray = data.Users;
                patientarray.push(newPatient);

                const update = { TotalNum: totalNumber, Users: patientarray };
                console.log(update);
                Patientlist.updateOne({doctor_id:doc_id}, update, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("successfully updated");
                        res.redirect("/user/registeredUser");
                    }
                });
            });
        }
    });
});


//export
module.exports= router;