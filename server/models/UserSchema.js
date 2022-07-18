const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "name is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "email required"]
    },
    password: {
        type: String,
        required: [true, "password required"],
        unique: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

userSchema.plugin(uniqueValidator);

userSchema.pre("save", function(next){
    const user = this;
    bcrypt.hash(user.password, 5, function(err, hash){
        user.password = hash;
        next();
    })
});

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}


const user = mongoose.model('user', userSchema);

module.exports = user;