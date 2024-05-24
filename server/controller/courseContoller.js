import courseModel from "../schema/course.js";

const Course=async(req,res)=>{

    const{Image,Name,Description,Rating,Duration,Item,Path }=req.body

 
        const userData=new courseModel({ Image,Name,Description,Rating,Duration,Item,Path })
        await userData.save()
        res.status(200).json({msg:"added"})
 
}

const getCourse=async(req,res)=>{
    try{
        const userData=await courseModel.find({})
        console.log(userData)
        res.json({user:userData})
    }
    catch(err){
        res.json({msg:"error"})
    }
    // })
}
export  {Course,getCourse}

