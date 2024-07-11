const User=require("../models/user-model")


const home=async(req,res)=>{
    try {
        res.status(200).send("welcome to mern codelab home page")
    } catch (error) {
        console.log(error);
    }
}

const register=async(req,res)=>{
    try {
        console.log(req.body);

        const{name,email,phone,password}=req.body;
        const user=new User({name,email,phone,password});
        const newUser=await user.save();

        res.status(200).json({msg:newUser})
    } catch (error) {
        console.log(error);
    }
}

const about=async(req,res)=>{
    try {
        res.status(200).send("welcome to mern codelab about page")
    } catch (error) {
        console.log(error);
    }
}

const update=async(req,res)=>{
    try {
        const{name,email}=req.body;
        const updatedUser=await User.updateOne({email},{name:name})
        res.status(200).send({
            msg:updatedUser
        })
    } catch (error) {
        console.log(error);
    }
}
const deleteUser=async(req,res)=>{
    try {
        const{email}=req.body;
        const deletedUser=await User.deleteOne({email})
        res.status(200).send({
            msg:deletedUser
        })
    } catch (error) {
        console.log(error);
    }
}

// login code--------->>>
const login= async (req, res)=>{
    try {
        
    } catch (error) {
        
    }
}



module.exports = {home , register, about,update,deleteUser};
