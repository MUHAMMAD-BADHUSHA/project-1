const express = require('express')
const mongoose = require('mongoose')
const cors =require('cors')
const userModel=require('./Models/User')

const app= express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/user",console.log('db connected'))
//signup page
app.post('/signup',(req,res)=>{
    console.log('signup');
    
    
    userModel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
    

})
//Loginpage
app.post('/login',(req,res)=>{
    const {email,password,UserType}=req.body;
    userModel.findOne({ email:email})
    .then(user=>{
        if(user){
            if(user.password ===password){
                res.json("success")
            }else{
                res.json('Password is incorect')
            }
        }else{
            res.json('the email not exixsted')
        }
    })
})
 
app.listen(3001,(req,res)=>{
    console.log('server runnig port3001')

})
