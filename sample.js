const express = require("express");
const bodyParser = require("body-parser");
const Patientlist = require("./database/doctorpatientlist");
const doctorId = "626383226b25e622dc0d931a";
// const cookieParser = require('cookie-parser');

//middleware
let app = express();
// app.use(cookieParser());

//get route--------------------------------------------------------------------------------------------------
app.get("/",function(req,res){
    const user = new Patientlist ({
        doctor_id: doctorId,
        CurrentNum : "1",
        TotalNum : "1",
        Users: [{
            _id: "62627afa7c34d8a60857cdb7",
            number: "1"
        }]
    });
    user.save();
    console.log("successfully inserted user");
    
});



//post route--------------------------------------------------------------------------------------------------
app.post("/",function(req,res){
    
});

app.listen(3000,function(){

});


