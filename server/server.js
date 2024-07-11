require('dotenv').config();

const express = require('express');
const app = express();
const router=require("./router/auth-router")
const connectDb=require("./utils/db")
connectDb()


app.use(express.json()); 
app.use("/api/auth",router)

const PORT=process.env.PORT;


    app.listen(PORT,()=>{
        console.log(`server listening on port : ${PORT}`);
    });

