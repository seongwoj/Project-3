const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose'); 


const userSchema = new Schema({
  email: {type: String, required: true, unique:true}, 
    username : {type: String, unique: true, required:true}, 
});

userSchema.plugin(passportLocalMongoose); 

const User = mongoose.model("User", userSchema);

module.exports = User;
