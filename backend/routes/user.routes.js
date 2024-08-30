import express from "express"; 
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

//get the users and display on the sidebar
router.get("/", protectRoute, getUsersForSidebar);

export default router
