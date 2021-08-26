require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image"
//import img from "./API/Image"
import Order from "./API/orders";
import Review from "./API/reviews";
import MailService from "./API/Mail";
import ConnectionDB from "./database/connection";
const zomato=express();
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());
googleAuthConfig(passport);
routeConfig(passport);
zomato.use("/auth",Auth);
zomato.use("/restaurant",Restaurant);
zomato.use("/food",Food);
zomato.use("/menu",Menu);
zomato.use("/image",Image);
zomato.use("/orders",Order);
zomato.use("/reviews",Review);
zomato.use("/mail", MailService);


zomato.get("/",(req,res)=>  res.json({message:"Setup successs"}));

zomato.listen(4200,()=>
ConnectionDB().then(()=> console.log("Server is running!!!"))
.catch(()=>
console.log("Server is Running,But database connection failed")));









//"dev":"nodemon --exc babel-node index"
//"test": "echo \"Error: no test specified\" && exit 1"
//"start": "babel-node index"
////AWS_S3_ACCESS_KEY=AKIAUUHG4FK77YD3MIVP
//AWS_S3_SECRET_KEY=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
//
//AWS_S3_ACCESS_KEY=AKIAUUHG4FK7Z2RWQ5M5
//AWS_S3_SECRET_KEY=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



//AWS_S3_ACCESS_KEY=AKIAUUHG4FK77YD3MIVP
//AWS_S3_SECRET_KEY=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
//AWS_SDK_LOAD_CONFIG=1


//AWS_S3_ACCESS_KEY=AKIAUUHG4FK7ZJCJ6RFF
//AWS_S3_SECRET_KEY=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