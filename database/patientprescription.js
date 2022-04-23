const mongoose = require('mongoose');

//mongodb-----------------------------------------------------------------------------------------------------
mongoose.connect("mongodb://localhost:27017/usersHack36",{useNewUrlParser:true});

const patientprescriptionschema = new mongoose.Schema({
    user_id : String,
    Prescription : String,
    dr_id : String
});

const Prescription = mongoose.model("Prescription", patientprescriptionschema);

// --------------------------------------------------------------------------------------------------------------

module.exports = Prescription;