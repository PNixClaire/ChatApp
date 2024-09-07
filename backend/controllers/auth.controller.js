import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import generateTokenAndSetCookie from '../utils/generateToken.js';


export const signup = async (req, res) => {
    console.log(req.body);
    try {

        //input from the user
        const { fullname, username, password, confirmPassword, gender } = req.body;

        //check if the password and confirmpassword match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }


        //check that the username exists in the db
        const user = await User.findOne({ username });

        //check if the user already exists
        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }

        //hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //profile pic placeholders depending on the user gender and username
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`


        //create a new user with the properties from req.body
        const newUser = new User({
            fullname, 
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        //response
        if (newUser) {
            //JWT token
            generateTokenAndSetCookie(newUser._id, res);

            //save the new user in the db
            await newUser.save();
            
            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }
        
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const login = async (req, res) => {
    try {

        const { username, password } = req.body;

        //check if the user exists
        const user = await User.findOne({ username });

        //if the password is the same as the one in the db, store it here
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        //check if the username and password are correct
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        //generate the token and cookie for the user when logged in
        generateTokenAndSetCookie(user._id, res);


        //success response
        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic
        });

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const logout = (req, res) => {
    try {

        //destroy the cookie and token to logout the user
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfull" });

    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
 }