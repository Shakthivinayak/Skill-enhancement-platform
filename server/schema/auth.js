import mongoose from "mongoose";

const authSchema=mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
    Role:String
})

const authModel=mongoose.model('authentication',authSchema)

export default authModel