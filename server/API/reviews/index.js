import express from "express";
import passport from "passport";
import { ReviewModel } from "../../database/reviews";
const Router=express.Router();
//review object
Router.post("/new",async(req,res)=>
{
    try
    {
       
        const {reviewData}=req.body;
        await ReviewModel.create(reviewData);
        return res.json({review:"Successfully Created Review."});
    }
    catch(error)
    {
        return res.status(500).json({error:error.message});
    }
});
//delete a review
Router.delete("/delete/:_id",async(req,res)=>
{
    try{
        const{_id}=req.params;
        await ReviewModel.findByIdAndDelete(_id);
        return res.json({review:"Successfully deleted the Review."});
    }
    catch(error)
    {
        return res.status(500).json({error:error.message});
    }
});

export default Router;