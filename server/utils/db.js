const mongoose = require('mongoose');

// const url="mongodb://localhost:27017/mern_admin"

// mongoose.connect(url)

const url=process.env.MONGODB_URL;
const connectDb=async()=>{
    try {
        await mongoose.connect(url,{
            family : 4
        });
        console.log("Connection successful");
    } catch (error) {
        console.error("Connection failed")
        process.exit(0);
    }
}

module.exports=connectDb;