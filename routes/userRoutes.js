const express = require("express");
const {
  home,
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController.js");
const router = express.Router();

router.get("/", home);
router.post("/createuser", createUser);
router.get("/getusers", getUsers);
router.patch("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);

module.exports = router;
