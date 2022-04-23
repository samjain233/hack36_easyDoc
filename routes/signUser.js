//user database :- User

//sign up user route
const express = require("express");
const User = require("../database/signuserdatabase");

//middleware
let router = express.Router();




//get route--------------------------------------------------------------------------------------------------
router.get("/",function(req,res){
    res.render("signUser");
});



//post route--------------------------------------------------------------------------------------------------
router.post("/",function(req,res){
    console.log(req.body);
    if(req.body.password === req.body.repassword)
    {
        console.log("password mathced");
        const name = req.body.name;
        const email = req.body.email;
        const age = req.body.age;
        const password = req.body.password;

        const user = new User ({
            email: email,
            name: name,
            age: age,
            password:password,
            mobile: "783434"
        });

        user.save();
        console.log("successfully registered");
        let options = {
            expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
        }
        res.cookie("userlogin", req.body.email, options);
        res.redirect("/User");
    }
    else
    {
        console.log("signup failed");
        res.status(404).redirect("/signUser");
    }
});


//export
module.exports= router;