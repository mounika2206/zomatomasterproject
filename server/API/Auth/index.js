import express from "express";
import bcryt from "bcryptjs"

import jwt from "jsonwebtoken";
import passport from "passport";
import { ValidateSignUp,ValidateSignin } from "../../validation/auth";
import{UserModel} from "../../database/user";
const Router =express.Router();

//signup
Router.post("/signup",async(req,res)=>
{
    
    try{
        await ValidateSignUp(req.body.credentials);
        // if(error) return res.status(500).json({error});
        
    await  UserModel.findByEmailAndPhone(req.body.credentials);
    const  newUser=await UserModel.create(req.body.credentials);
    const token=newUser.generateJwtToken();
     return res.status(200).json({token,status:"success"});
    }
    catch(error)
    {
        return res.status(500).json({error:error.message});
    }
});

Router.post("/signin",async(req,res)=>
{
    try{
        
        await ValidateSignin(req.body.credentials);
    //const user=await UserModel.findByEmailAndPassword(
        //req.body.credentials
        const user =
         await UserModel.findByEmailAndPassword(req.body.credentials);
    
    
    const token=user.generateJwtToken();
     return res.status(200).json({token,status:"success"});
    }
    catch(error)
    {
        return res.status(500).json({error:error.message});
    }
});

Router.get("/google",passport.authenticate("google",
    {
        scope:
        [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
        ],
    })
);

Router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      return res.json({ token: req.session.passport.user.token });
    }
  );


export default Router;


