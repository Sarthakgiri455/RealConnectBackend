const express = require('express');
const router = express.Router();

const authControllers= require("../controllers/auth/authControllers");
const Joi= require('joi');
const validator= require('express-joi-validation').createValidator({});

const auth= require("../middlewares/auth")


const registerSchema= Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password:Joi.string().min(6).max(12).required(),
    mail:Joi.string().email().required(),
})

const loginSchema= Joi.object({
   
    password:Joi.string().min(6).max(12).required(),
    mail:Joi.string().email().required(),
})  

router.post(
    
"/register",

validator.body(registerSchema),
 authControllers.controllers.postRegister)

router.post(
    "/login",
    validator.body(loginSchema),
     authControllers.controllers.postLogin)
    
router.get('/test', auth,(req,res)=>{
    console/log("request passed")});   

     //test route to verify the working of middleware

module.exports=router;