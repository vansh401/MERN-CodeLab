const express = require('express');
const router=express.Router(); 

const authcontrollers = require('../controllers/auth-controller');


// router.get("/",(req,res)=>{
//     res
//     .status(200)
//     .send("welcome to mern codelab");
// })

// router.route("/").get((req,res)=>{
//     res.status(200).send("welcome to mern codelab");
// })
// router.route("/register").get((req,res)=>{
//     res.status(200).send("welcome to mern codelab register page");
// })
// router.route("/about").get((req,res)=>{
//     res.status(200).send("welcome to mern codelab about page");
// })

// routes---------->> (simplified)
router.route("/").get(authcontrollers.home)
router.route("/register").post(authcontrollers.register)
router.route("/update").put(authcontrollers.update)
router.route("/about").get(authcontrollers.about)
router.route("/delete").delete(authcontrollers.deleteUser)

router.route("/login").post(authcontrollers.login)




module.exports = router;