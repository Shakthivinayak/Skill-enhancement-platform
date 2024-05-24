import scoreModel from "../schema/score.js";

const Score=async(req,res)=>{

    const{Score}=req.body

 
        const userData=new scoreModel({ Score})
        await userData.save()
        res.status(200).json({msg:"added"})
 
}

const getScore=async(req,res)=>{
    try{
        const userData=await scoreModel.find({})
        console.log(userData)
        res.json({user:userData})
    }
    catch(err){
        res.json({msg:"error"})
    }
}
export  {Score,getScore}

