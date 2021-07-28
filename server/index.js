require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import Auth from "./API/Auth";
import ConnectionDB from "./database/connection";
const zomato=express();
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use("/auth",Auth);

zomato.get("/",(req,res)=>  res.json({message:"Setup successs"}));

zomato.listen(4200,()=>
ConnectionDB().then(()=> console.log("Server is running"))
.catch(()=>
console.log("Server is Running,But database connection failed")));

















//"dev":"nodemon --exc babel-node index"
//"test": "echo \"Error: no test specified\" && exit 1"
//"start": "babel-node index"