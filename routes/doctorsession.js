//Doctor/docsession

//require
const express = require("express");
const bodyParser = require("body-parser");
const Patientlist = require("../database/doctorpatientlist");
const User = require("../database/signuserdatabase");
const Prescription = require("../database/patientprescription");
const doctorId = "626383226b25e622dc0d931a";


//middleware
let router = express.Router();
router.use(express.static("public"));

//get route--------------------------------------------------------------------------------------------------
router.get("/docsession",function(req,res){
    let currNum = null;
    let UserName = null;
    let UserAge = null;

    console.log("retrieving data from databases");
    Patientlist.findOne({ doctor_id: doctorId }, function (err, detail) {
        if (err) {
            console.log(err);
        } else {
            currNum = detail.CurrentNum;
            const UserId = detail.Users[currNum-1]._id;
            console.log(UserId);
            User.findOne({_id : UserId},function(err,userdetail){
                if(err){
                    console.log(err);
                }else{
                    UserName =userdetail.name;
                    UserAge = userdetail.age;
                    res.render("doctorsession.ejs",{currNum : currNum , userName : UserName , age : UserAge , user_ID :UserId});
                }
            });
        }
    });
    
});



//post route--------------------------------------------------------------------------------------------------
router.post("/docsession", function (req, res) {
    const description = req.body;
    console.log(description);
    let currNum = null;
    Patientlist.findOne({ doctor_id: doctorId }, function (err, detail) {
        if (err) {
            console.log(err);
        } else {
            
            const pres = new Prescription({
                user_id: description.user_ID,
                Prescription: description.Description,
                dr_id: doctorId
            });
            pres.save();

            currNum = detail.CurrentNum;
            currNum = currNum + 1;
            console.log(currNum);
            const update = { CurrentNum: currNum };
            Patientlist.updateOne({ doctor_id: doctorId }, update, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("successfully updated");
                    res.redirect("/Doctor/docsession");
                }
            });
        }
    });
});


//export
module.exports= router;