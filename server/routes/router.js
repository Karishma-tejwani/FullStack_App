const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");
const products = require("../models/productSchema");
const userController = require("../Controllers/userController");

router.route("/add").post(userController.add);
router.route("/getdata").get(userController.getdata);
router.route("/getproduct/:id").get(userController.getproduct);
router.route("/updateproduct/:id").patch(userController.updateproduct);
router.route("/deleteproduct/:id").patch(userController.deleteproduct);

module.exports = router;