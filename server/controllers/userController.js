const users = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = (req, res) => {
  console.log(req.body);
  const {username, email, password} = req.body;
  bcrypt.hash(password, 5, async function(err, hash) {
      if(!err){
          try{
              users.create({username, email, password: hash}, (err, user) => {
                  if(user){
                      res.status(200).json({user,  msg:'Registration Successfully!'})
                  }
              })
          }
          catch(err){
              res.status(500).json({msg:err})
          }
      }
      else{
          res.status(500).json({msg:err})
      }
  });
  } 
  
  const login=(req, res) => {
      const { username, password } = req.body;
    users.findOne({ username }, (err, user) => {
      console.log('YEEES',user);
      if (user) {
        bcrypt.compare(password, user.password, (err, validated) => {
          console.log("In validation "+validated);
          if (validated) {
            const token = jwt.sign({username:user.username},process.env.SECRET_KEY,{expiresIn:30*60})
            res.status(200).json({token, user})
          } else {
            res.status(401).send({msg:'Either Username or password is Incorrect'})
          }
        });
      } else {
        res.status(401).send({msg:'Either Username or password is Incorrect'})
      }
    });
  }

module.exports = { register, login };