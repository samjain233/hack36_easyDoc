const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//middleware
let router = express.Router();

//get route--------------------------------------------------------------------------------------------------
router.get("/",function(req,res){
    console.log("welcome to the login route");
});



//post route--------------------------------------------------------------------------------------------------
router.post("/",function(req,res){
    
});


//export
module.exports= router;