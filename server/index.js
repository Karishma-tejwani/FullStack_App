//require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/ead");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const users = require("./models/userSchema");
const cors = require('cors');
const router = require("./routes/router");

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running at Port ${PORT}`);
})