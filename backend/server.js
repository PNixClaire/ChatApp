//IMPORTS
import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import {app, server} from './socket/socket.js'

//VARIABLES
//const app = express();
const PORT = process.env.PORT || 5000;

const __dirName = path.resolve();

dotenv.config();

/*
 //test
// app.get("/", (req, res) => {
//     //root route http://localhost:5000/
//     res.send("server ready");
// })*/

//MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
                    // where the routes are    
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.use(express.static(path.join(__dirName, "/frontend/dist")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirName,"frontend", "dist", "index.html"))
})
//app will listen on port 5000
server.listen(PORT, () => {
    
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`);

});