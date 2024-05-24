import contactModel from "../schema/contact.js"
import authModel from "../schema/auth.js"

const Contact=async(req,res)=>{

    const{Message,Email}=req.body

    const userData=await authModel.findOne({Email})

    if(userData){
        res.status(500)
        res.json({msg:"user already exists"})
    }
    else{
        const userData=new contactModel({ Message,Email})
        await userData.save()
        res.status(200).json({msg:"added"})
    }
}

export default Contact
