const express = require("express");
const bodyParser = require("body-parser");
const Doctor = require("../database/signupdoctordatabse");

//middleware
let router = express.Router();

//get route--------------------------------------------------------------------------------------------------
router.get("/",function(req,res){
    res.render("signDoctor");
});



//post route--------------------------------------------------------------------------------------------------
router.post("/", function (req, res) {
  console.log(req.body);
  if (req.body.password === req.body.repassword) {
    console.log("password matched");

    const speciality = req.body.speciality;
    const name = req.body.name;
    const timings = req.body.timings;
    const address = req.body.address;
    const degree = req.body.degree;
    const registrationNo = req.body.registrationNo;
    const description = req.body.description;
    const email = req.body.email;
    const password = req.body.password;
    const contactNo = req.body.phone;

    const doctor = new Doctor({
      speciality: speciality,
      name: name,
      timings: timings,
      address: address,
      degree: degree,
      registrationNo: registrationNo,
      description: description,
      email: email,
      password: password,
      contactNo: contactNo
    });

    doctor.save();
    console.log("successfully registered");
    let options = {
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    }
    res.cookie("doctorlogin", req.body.email, options);
    res.redirect("/doctor");
  }
  else {
    console.log("signup failed");
    res.status(404).redirect("/signDoctor");
  }
});


//export
module.exports= router;
