const mongoose = require('mongoose');

//mongodb-----------------------------------------------------------------------------------------------------
mongoose.connect("mongodb://localhost:27017/usersHack36", {useNewUrlParser: true});

const userSchema = new mongoose.Schema({
    email: String,
    name:String,
    age: Number,
    password:String,
    mobile:Number
});

const User = mongoose.model("User", userSchema);

// --------------------------------------------------------------------------------------------------------------

module.exports = User;