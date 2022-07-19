const users = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async(req, res) => {
  // console.log(req.body);
  // const {username, email, password} = req.body;
  // bcrypt.hash(password, 5, async function(err, hash) {
  //     if(!err){
  //         try{
  //             users.create({username, email, password: hash}, (err, user) => {
  //                 if(user){
  //                     res.status(200).json({user,  msg:'Registration Successfully!'})
  //                     console.log("done reg")
  //                 }
  //             })
  //         }
  //         catch(err){
  //             res.status(500).json({msg:err})
  //             console.log("NO reg")
  //         }
  //     }
  //     else{
  //         res.status(500).json({msg:err})
  //         console.log("NO reg")
  //     }
  // });

  try{

    const {username, email, password} = req.body

    const hashedPassword = await bcrypt.hash(password, 5)
    const user = await users.create({username, email, password:hashedPassword})
    res.status(201).json({user, msg:"Registration Successfully!"});
    console.log("regs done")
}
catch(err){
    res.status(500).json(err.message)
};

  } 
  
  const login=async (req, res) => {
    try{
      const {username, password} = req.body
      console.log(req.body)
      const user = await users.findOne({username})
      console.log(user)
      if(!user){
          return res.status(404).json(`User with id ${_id} does not exist`)
      }
      
      const valid  = await bcrypt.compare(password, user.password)
      console.log(valid)
      if(valid){
          const token = jwt.sign({username:user.email},process.env.SECRET_KEY, {expiresIn:30*60})
          return res.status(200).json({user, token})
      }
      else{
        res.status(201).json({msg:`Either email or password is wrong`})
      }
  }
  catch(err){
      res.status(500).json(err.message)
  }
  }

module.exports = { register, login };