import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    try {
        
        const token = req.cookies.jwt

        //token -> the user is logged in
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" }); 
        }

        //decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user

        //if you pass all the previous checks, then proceed to the next function
        next();

    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
export default protectRoute;