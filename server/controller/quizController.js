import quizModel from "../schema/quiz.js";

const Quiz=async(req,res)=>{

    const{Questions,Options,CorrectAnswer}=req.body['0']

 
        const userData=new quizModel({ Questions,Options,CorrectAnswer})
        await userData.save()
        res.status(200).json({msg:"added"})
 
}

const getQuiz=async(req,res)=>{
    try{
        const userData=await quizModel.find({})
        console.log(userData)
        res.json({user:userData})
    }
    catch(err){
        res.json({msg:"error"})
    }
}
export  {Quiz,getQuiz}

