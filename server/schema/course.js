import mongoose from "mongoose";

const courseSchema=mongoose.Schema({
    Image:String,
    Name:String,
    Description:String,
    Rating:Number,
    Duration:String,
    Item:String,
    Path:String
})

const courseModel=mongoose.model('Course',courseSchema)

export default courseModel