const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");
const userController = require("../Controllers/userController");

router.route("/add").post(userController.add);

// router.post("/add", async(req, res) =>{

//     const {name, email, job, phone, address} = req.body;

//     if(!name || !email || !job || !phone || !address){
//         res.status(404).send("fill all required fields");
//     }

//     try{
//         const user = await users.findOne({email: email});
//         console.log(user);
        
//         if(user){
//             res.status(404).send("User already registered");
//         }else{
//             const addUser = new users({name, email, job, phone, address});
//             await addUser.save();
//             res.status(201).json(addUser);
//             console.log(addUser);
//         }
//     }

//     catch (error){ 
//         res.status(404).send(error);
//     }
// })

module.exports = router;