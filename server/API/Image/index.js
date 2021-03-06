/*import express from "express";
import passport from "passport";
import{ImageModel} from "../../database/allModels";
import AWS from "aws-sdk";
import multer from "multer";
require("dotenv").config();

const Router=express.Router();
const storage=multer.memoryStorage();
const upload=multer({storage});
const s3Bucket=new AWS.S3({
    accesskeyId:process.env.AWS_S3_ACCESS_KEY,
    secretaccesskey:process.env.AWS_S3_SECRET_KEY,
    
    region:"ap-south-1",
    });
Router.post("/",upload.single("file"),async(req,res)=>
{
    try
    {
       const file=req.file;
       const bucketOptions={
           Bucket:"mounikareddi12",
           Key:file.originalname,
           Body:file.buffer,
           ContentType:file.mimetype,
           ACL:"public-read",

       };
       const s3upload=(options)=>
       {
           return new Promise((resolve,reject)=>
           s3Bucket.upload(options,(error,data)=>
           {
               if(error)
               return reject(error);
               return resolve(data);
           })
           );
       };
       const uploadImage=await s3upload(bucketOptions);
       console.log(uploadImage);
       return res.status(200).json({uploadImage});

    }
    catch(error)
    {
        return res.status(500).json({error:error.message});
    }

});
export default Router;


*/




// Libraries
import express from "express";
import passport from "passport";
import multer from "multer";

// Database modal
import { ImageModel } from "../../database/allModels";

// Utilities
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

// Multer Config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route     /
Des       Uploads given image to S3 bucket, and saves file link to mongodb
Params    none
Access    Public
Method    POST  
*/
Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    // s3 bucket options
    const bucketOptions = {
      Bucket: "mounikareddi12",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read", // Access Control List
    };

    const uploadImage = await s3Upload(bucketOptions);

    return res.status(200).json({ uploadImage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
