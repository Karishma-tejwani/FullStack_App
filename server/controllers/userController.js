const users = require("../models/userSchema");

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
      console.log(err);
    }
  };

module.exports = {add};