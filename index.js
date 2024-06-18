import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectionDb } from "./db/db.js";
const app=express();
dotenv.config()


app.use(cors());
app.use(express.json());

console.log(process.env.PORT)

connectionDb();


app.listen(process.env.PORT,()=>{
    console.log("connected to backend")
})
