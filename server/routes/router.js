const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");

router.post("/register", async(req, res) =>{
    // console.log(req.body);
    const {name, email, job, phone, address} = req.body;

    if(!name || !email || !job || !phone || !address){
        res.status(404).send("fill all required fields");
    }

    try{
        const user = await users.findOne({email: email});
        if(user){
            res.status(404).send("User already registered");
        }else{
            const addUser = new users({name, email, job, phone, address});
            await addUser.save();
            res.status(201).json(addUser);
            console.log(addUser);
        }
    }

    catch (error){ 
        res.status(404).send(error);
    }
})

module.exports = router;