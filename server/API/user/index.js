import express from "express";
import passport from "passport";
import { UserModel } from "../../database/user";
const Router=express.Router();
Router.get("/:_id",async(req,res)=>
{
    try
    { 
        const {_id}=req.params;
    const getUser=await UserModel.findById(_id);
    return res.json({user:getUser});
}
catch(error)
{
 return res.status(500).json({error:error.message});
}

});
//update
Router.put("/update/:userId",(req,res)=>
{
    try{
        const{userId}=req.params;
        const{_userData}=req.body;
        
        const UpdateUserData=await UserModel.findByIdAndUpdate(
            userId,
            {
                $set:_userData,
            },
            {new:true}
            );
    return res.json({user:UpdateUserData});

    }
    catch(error)
    {
        return res.status(500).json({error:error.message});
    }

});










export default Router;