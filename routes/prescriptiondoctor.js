const express = require("express");
const bodyParser = require("body-parser");

//middleware
let router = express.Router();
router.use(express.static("public"));

//get route--------------------------------------------------------------------------------------------------
router.get("/prescriptionDoctor",function(req,res){
    res.render("prescriptiondoctor");
});



//post route--------------------------------------------------------------------------------------------------
router.post("/",function(req,res){
    
});


//export
module.exports= router;