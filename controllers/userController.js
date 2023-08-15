const User = require("../models/userModel.js");
exports.home = (req, res) => {
  res.send("<h1>Home page</h1>");
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      throw new Error("Name and email are required");
    }
    //Check if user is already registered
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }

    const user = await User.create({
      name,
      email,
    });

    res.status(201).json({
      success: true,
      message: "user created successfully",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      users,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const name = req.body.name;
    if (!name) {
      throw new Error("Name field is empty");
    }
    const updateUser = await User.findByIdAndUpdate(userId, { name });
    res.status(200).json({
      success: true,
      message: "user updated successfully",
      updateUser,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deleteUser = await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "user deleted successfully",
      deleteUser,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: err.message });
  }
};
