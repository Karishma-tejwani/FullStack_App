const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");
const products = require("../models/productSchema");
const productController = require("../Controllers/productController");

router.route("/add").post(productController.add);
router.route("/getdata").get(productController.getdata);
router.route("/getproduct/:id").get(productController.getproduct);
router.route("/updateproduct/:id").patch(productController.updateproduct);
router.route("/deleteproduct/:id").patch(productController.deleteproduct);

module.exports = router;