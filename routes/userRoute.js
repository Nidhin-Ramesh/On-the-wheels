const express=require('express')
const userRoute=express()
userRoute.get('/register',(req,res)=>{
    res.send('this is register page')
})
module.exports=userRoute