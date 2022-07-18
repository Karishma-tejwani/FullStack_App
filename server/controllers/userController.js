const users = require("../models/userSchema");

//Add User
const add = async (req, res) => {
    
    const { name, email, job, phone, address } = req.body;

    if (!name || !email || !job || !phone || !address) {
      return res.status(404).json("Fill all the fields");
    }
    try {
      const userExist = await users.findOne({ email: email });
      console.log(userExist);

      if (userExist) {
        return res.status(404).json({ error: "User Already Exist!" });
      }
      const user = new users({ name, email, job, phone, address });
      const userAdd = await user.save();
      if (userAdd) {
        res.status(201).json({ msg: "User Added Successfulyy!" });
      }
    } catch (err) {
        res.status(404).json(err)
    }
};

//Get User Data

const getdata = async(req, res) => {
    try{
        const userData = await users.find();
        res.status(201).json(userData);
        console.log(userData);
    }catch(err){
        res.status(404).json(err)
    }
}

module.exports = {add, getdata};