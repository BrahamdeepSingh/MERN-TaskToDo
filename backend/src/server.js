import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import notesRoute from "./routes/notesRoute.js";
import { connect } from "mongoose";

dotenv.config();
//const express = require("express");

//console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;

//connectDB();
app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json()); //middleware  allow the to access req.body , this function runs in middle between request and the respomse

//our simple middleware
// app.use((req,res,next)=>{
//     console.log('Req method is ${req.method} & req URL is ${req.wrl}');
//     next();
// });

app.use("/api/notes", notesRoute);

connectDB().then(() => {
    app.listen(PORT, () =>{
        console.log("server started on port:", PORT);
    
    });
});

