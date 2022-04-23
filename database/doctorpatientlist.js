const mongoose = require('mongoose');

//mongodb-----------------------------------------------------------------------------------------------------
mongoose.connect("mongodb+srv://sam233:42119243Sam@cluster0.bgt3y.mongodb.net/hack36", {useNewUrlParser: true});

const patientlistschema = new mongoose.Schema({
    doctor_id : String,
    avgtime : String,
    CurrentNum : Number,
    TotalNum : Number,
    Users : [{
        _id : String,
        number : Number
    }]
});

const Patientlist = mongoose.model("Patientlist", patientlistschema);

// --------------------------------------------------------------------------------------------------------------

module.exports = Patientlist;