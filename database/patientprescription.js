const mongoose = require('mongoose');

//mongodb-----------------------------------------------------------------------------------------------------
mongoose.connect("mongodb+srv://sam233:42119243Sam@cluster0.bgt3y.mongodb.net/hack36", {useNewUrlParser: true});

const patientprescriptionschema = new mongoose.Schema({
    user_id : String,
    Prescription : String,
    dr_id : String
});

const Prescription = mongoose.model("Prescription", patientprescriptionschema);

// --------------------------------------------------------------------------------------------------------------

module.exports = Prescription;