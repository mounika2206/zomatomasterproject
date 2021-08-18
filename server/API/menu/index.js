import express from "express";
import passport from "passport";
import { MenuModel } from "../../database/allModels";
const Router=express.Router();
//Get all menus based on Restaurants

Router.get("/list/:_id",async(req,res)=>
{
    try{
        const{_id}=req.params;
        const menus=await MenuModel.findOne(_id);
        return res.json({menus});

    }
    catch(error)
    {
        return res.status(500).json({error:error.message});
    }
});
//Get all menu images based on id
Router.get("/image/:_id",async(req,res)=>
{ try{
    const{_id}=req.params;
    const menus=await ImageModel.findOne(_id);

}
catch(error)
{
    return res.status(500).json({error:error.message
    });
}

})
export default Router;