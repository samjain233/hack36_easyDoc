const express = require("express");
const bodyParser = require("body-parser");
const Patientlist = require("./database/doctorpatientlist");
const doctorId = "626383226b25e622dc0d931a";
// const cookieParser = require('cookie-parser');


//middleware
let app = express();
// app.use(cookieParser());

//get route--------------------------------------------------------------------------------------------------
app.get("/", function (req, res) {
    const filter = { doctor_id: doctorId };
    Patientlist.findOne(filter, function (err, data) {
        var totalNumber = data.TotalNum;
        totalNumber = totalNumber + 1;
        const newPatient = {
            _id: "62627eff7f245a5649dac650",
            number: totalNumber
        }
        var patientarray = data.Users;
        patientarray.push(newPatient);

        const update = { TotalNum: totalNumber, Users: patientarray };
        console.log(update);
        Patientlist.updateOne(filter, update, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("successfully updated");
            }
        });

    });

});

    



//post route--------------------------------------------------------------------------------------------------
app.post("/",function(req,res){
    
});

app.listen(3000,function(){

});


