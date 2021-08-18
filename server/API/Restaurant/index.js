import express from "express";
import passport from "passport";
import { RestaurantModel } from "../../database/allModels";
import { ValidateSearchstring } from "../../validation/restaurant";
import { ValidateRestaurantCity } from "../../validation/restaurant";
import { ValidateRestaurantId } from "../../validation/restaurant";

const Router=express.Router();
Router.get("/",async(req,res)=>
{
try{
    await ValidateRestaurantCity(req.query);
    const {city}=req.query;
    const restaurants=await RestaurantModel.find({city});
    return res.json({restaurants});
}
catch(error){
    return res.status(500).json({error:error.message});
}
});

/*
Route:/
Des get individual restuarant details based on id
*/
Router.get("/:_id",async(req,res)=>
{
    try

    {
        await ValidateRestaurantId(req.params);
                const{_id}=req.params;
        const restuarant=await RestaurantModel.findOne(_id);
        if(!restuarant)
        return res.status(404).json({error:"Restaurant Not Found"});
        return res.json({restuarant});

    }   
    catch(error){
        return res.status(500).json({error:error.message});

    } 
});

Router.get("/search",async(req,res)=>
{

    try{
        await ValidateSearchstring(req.body);
        const{searchString}=req.body;
        const restaurants=await RestaurantModel.find({
            name:{$regex:searchString,$options:"i"},
        });
        if(!restaurants)
        return res.status(400).json({error:` No Restuarant  match with {searchString}`});
        return res.json({restaurants});
    }
    catch(error)
    {
        return res.status(500).json({error:error.message});
    }
    
    
});

export default Router;