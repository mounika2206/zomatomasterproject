import express from "express";
import passport from "passport";
import { OrderModel } from "../../database/allModels";
//import { ValidateOrderId } from "../../validation/order";
const Router=express.Router();
Router.get("/:id",passport.authenticate("jwt",{session:false}),
async(req,res)=>
{
    try{
        
        const{_id}=req.params;
        const getOrders=await OrderModel.find({user:_id});
        if(!getOrders)
        {
            return res.status(404).json({error:"user not found"});
        }
        return res.status(200).json({orders:getOrders});

    }
    catch(error)
    {
        return res.status(500).json({error:error.message});
    }
});

//add new order
Router.post("/new/:_id",async(req,res)=>
{

    try
    {
       const{_id}=req.params;
       const{orderDetails}=req.body;
       const addNewOrder=await OrderModel.findOneAndUpdate(
           {
               user:_id,
           },
           {
               $push:{orderDetails},
           },
           {new:true}
       );
       return res.json({order:addNewOrder});
    }
    catch(error)
    {
        return res.json(500).json({error:error.meassage});
    }
});

//add order ratings


export default Router;