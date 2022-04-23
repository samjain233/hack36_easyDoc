//api/currNum

const express = require("express");
const bodyParser = require("body-parser");
const Patientlist = require("../../database/doctorpatientlist");

//middleware
let router = express.Router();
router.use(bodyParser.json());

//get route--------------------------------------------------------------------------------------------------
router.get("/currNum",function(req,res){
    console.log("get route of api/currNum");
});



//post route--------------------------------------------------------------------------------------------------
router.post("/currNum",function(req,res){
    console.log("/api/currNum post route");
    console.log(req.body);
    console.log(req.body.doctor_id);
    const doctor_Id= req.body.doctor_id;
    Patientlist.findOne({ doctor_id: doctor_Id }, function (err, data){
        let num = data.avgtime;
        num = Math.round(num*(data.TotalNum-data.CurrentNum));
        num = num + " minutes";
        const object ={
            currUser : data.CurrentNum,
            totalUser : data.TotalNum,
            time : num
        };
        res.json(object);
    });
});


//export
module.exports= router;