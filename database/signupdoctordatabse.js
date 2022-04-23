const mongoose = require('mongoose');

//mongodb-----------------------------------------------------------------------------------------------------
mongoose.connect("mongodb+srv://sam233:42119243Sam@cluster0.bgt3y.mongodb.net/hack36", {useNewUrlParser: true});

const doctorSchema = new mongoose.Schema({
    speciality: String,
    name: String,
    timings: String,
    address: String,
    degree: String,
    registrationNo: String,
    description: String,
    email: String,
    password: String,
    contactNo: Number
});

const Doctor = mongoose.model("Doctor", doctorSchema);

// --------------------------------------------------------------------------------------------------------------

module.exports = Doctor;