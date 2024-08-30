import express from "express";
import { sendMessage, getMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();


//check if the user is logged in before sending the message 
router.post("/send/:id", protectRoute, sendMessage);

//get the messages between current user and the user id passed
router.get("/:id", protectRoute, getMessage);

export default router;