import authModel from "../schema/auth.js";
import bcrypt from  'bcryptjs'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'

const Signup=async(req,res)=>{

    const{Name,Email,Password,Role}=req.body

    const userData=await authModel.findOne({Email})

    if(userData){
        res.status(500)
        res.json({msg:"user already exists"})
    }
    else{
        const hashPassword=await bcrypt.hash(Password,10)
        const userData=new authModel({ Name,Email,Password:hashPassword,Role})
        await userData.save()
        res.status(200).json({msg:"added"})
    }
}


const Login=async(req,res)=>{
    const{Email,Password}=req.body
    try{
    const user=await authModel.findOne({Email})
    if(!user){
        res.status(400).json({msg:"please_signup with a valid mail"})
    }

    else{
    const matchPassword=await bcrypt.compare(Password,user.Password)
    if(!matchPassword){
        res.status(400).json({msg:"pwd_incorrect"})
    }
    else{
        res.status(200).json({msg:"login success"})
    }
}
}catch(err){
    res.status(500).json({msg:'error'})
}
}

export {Signup,Login}