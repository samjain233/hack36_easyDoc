//node modules
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');


const login = require("./routes/login");
const googleAuth = require("./routes/googleauth");
const signUser = require("./routes/signUser");
const signDoctor = require("./routes/signDoctor");
const Doctors = require("./routes/doctors");
const DocSearch = require("./routes/docsearch");
const docprofile = require("./routes/docprofile");
const docsession = require("./routes/doctorsession");
const userHome = require("./routes/userhome");
const doctorHome = require("./routes/doctorHome");
const registereduser = require("./routes/registeredUser");
const prescriptionDoctor = require("./routes/prescriptiondoctor");
const api = require("./routes/api/currentNum");
const apitime = require("./routes/api/time");
//const UserInfoError = require("passport-google-oauth20/lib/errors/userinfoerror");



//middlewares
const app = express();
app.set("view engine",'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());





app.use("/login",login);
app.use("/googleAuth",googleAuth);
app.use("/signUser",signUser);
app.use("/signDoctor",signDoctor);
app.use("/doctorpanel",Doctors);
app.use("/User",DocSearch);
app.use("/User",docprofile);
app.use("/Doctor",docsession);
app.use("/user",userHome);
app.use("/doctor",doctorHome);
app.use("/User",registereduser);
app.use("/doctor",prescriptionDoctor);
app.use("/api",api);
app.use("/api",apitime);
    




//routes -------------------------------------------------------------------------------------------------------

// home route (/)---------------------------------------------------------------------------
app.get("/",function(req,res){
    console.log("home get (/) route");
    res.redirect("/login");
    
});


//post home route -----------------------------------------------------------------------------
app.post("/",function(req,res){
    console.log("in the home post route");
    
})

//logout route
app.get("/logout",function(req,res){
    res.clearCookie("doctorlogin");
    res.clearCookie("userlogin");
    res.redirect("/");
});


//listen port ----------------------------------------------------------------------------------------------------
app.listen(3000,function(){
    console.log("server started on port 3000");
})