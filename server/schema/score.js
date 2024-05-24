import mongoose from "mongoose";

const scoreSchema=mongoose.Schema({
    Score:String
})

const scoreModel=mongoose.model('Score',scoreSchema)

export default scoreModel