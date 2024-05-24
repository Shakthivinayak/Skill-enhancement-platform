import mongoose from "mongoose";

const quizSchema=mongoose.Schema({
    Questions:String,
    Options:[String],
    CorrectAnswer:String
  
})

const quizModel=mongoose.model('Quiz',quizSchema)

export default quizModel