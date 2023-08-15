const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required field"],
    trim: true,
    maxlength: [50, "Name should be less than 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required field"],
    unique: true,
  },
});

module.exports = mongoose.model("User", userSchema);
