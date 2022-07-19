const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/test");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const userController = require("./Controllers/userController");
const users = require("./models/userSchema");
const cors = require('cors');
const router = require("./routes/router");

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.use("*", function (req, res) {
    res.status(404).json({ msg: "NOT FOUND" });
});

app.listen(PORT, () => {
    console.log(`Server is running at Port ${PORT}`);
})

module.exports = app;