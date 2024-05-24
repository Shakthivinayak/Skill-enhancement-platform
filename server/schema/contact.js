import mongoose from "mongoose";

const contactSchema=mongoose.Schema({
    Email:String,
    Message:String,
  
})

const contactModel=mongoose.model('Contact',contactSchema)

export default contactModel