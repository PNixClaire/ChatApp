//IMPORTS
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";


//VARIABLES
const app = express();
const PORT = process.env.PORT || 5000;

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



//app will listen on port 5000
app.listen(PORT, () => {
    
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`);

});