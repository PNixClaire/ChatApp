import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    //create the token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn:'15d' //token expires in 15 days
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //15 days in miliseconds
        httpOnly: true, //users cannot access this cookie via js [cross-site scripting attacks]
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndSetCookie;