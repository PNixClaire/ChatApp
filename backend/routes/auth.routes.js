import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
const router = express.Router();

//use post method 
router.post("/signup", signup);

// this function will run if [from server.js] we navigate /api/auth/login
router.post("/login", login);

router.post("/logout", logout);

export default router;
