const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");
const userController = require("../Controllers/userController");

router.route("/add").post(userController.add);
router.route("/getdata").get(userController.getdata);
router.route("/getuser/:id").get(userController.getuser);


module.exports = router;