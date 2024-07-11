const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')

const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});


userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

// userSchema.methods.generateAuthToken = async function () {
//     try {
//         let myToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { });
//         return myToken;
//     }
//     catch (e) {
//         console.log(e)
//     }
// }
userSchema.methods.generateAuthToken = async function() {
    try {
        let myToken=jwt.sign(
            {
            userId:this._id,
            email:this.email
        },
        process.env.SECRET_KEY,{
            expiresIn:"30d"
        }
    )
    return myToken

    } catch (error) {
        console.error(error);
    }
}


module.exports = mongoose.model("User", userSchema);