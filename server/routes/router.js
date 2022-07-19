const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");
const products = require("../models/productSchema");
const userController = require("../Controllers/userController");
const productController = require("../Controllers/productController");
const middleware = require("../middlewares/");

router.route("/add").post(productController.add);
router.route("/getdata").get(productController.getdata);
router.route("/getproduct/:id").get(productController.getproduct);
router.route("/updateproduct/:id").patch(middleware.auth, productController.updateproduct);
router.route("/deleteproduct/:id").delete(middleware.auth, productController.deleteproduct);

router.route("/register").post(userController.register);
router.route("/login").post(userController.login);

module.exports = router;