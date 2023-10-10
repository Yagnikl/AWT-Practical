const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  fullName:String,
  age:Number,
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
