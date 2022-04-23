//api/time

const express = require("express");
const bodyParser = require("body-parser");
const Patientlist = require("../../database/doctorpatientlist");

//middleware
let router = express.Router();
router.use(bodyParser.json());

//get route--------------------------------------------------------------------------------------------------
router.get("/time",function(req,res){
    console.log("get route of api/time");
});


//post route--------------------------------------------------------------------------------------------------
router.post("/time",function(req,res){
    console.log("/api/currNum post route");
    console.log(req.body);
    console.log(req.body.doctor_id);
    const doctor_Id= req.body.doctor_id;
    Patientlist.findOne({ doctor_id: doctor_Id }, function (err, data){
        if(data.avgtime){
            const newtime = (Number(data.avgtime) + Number(req.body.time))/2;
            const update = { avgtime : newtime };
            console.log(newtime);
            Patientlist.updateOne({ doctor_id: doctor_Id }, update, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("successfully updated by average ");
                    res.send("successfull");
                }
            }); 
        }
        else{
            const update = { avgtime : req.body.time };
            Patientlist.updateOne({ doctor_id: doctor_Id }, update, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("successfully updated by addtion");
                    res.send("successfull");
                }
            });
        }
    });
});


//export
module.exports= router;