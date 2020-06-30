const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose'); 


const UserSchema = new Schema({
  email: {type: String, required: true, unique:true}, 
    username : {type: String, unique: true, required:true}, 
});

UserSchema.plugin(passportLocalMongoose); 

const User = mongoose.model("User", UserSchema);

module.exports = User;
