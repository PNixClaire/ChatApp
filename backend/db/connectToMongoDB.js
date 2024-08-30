import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {

        await mongoose.connect(process.env.URL)
        console.log("Connected")

    } catch (error) {
        console.log('Error connecting to MongoDB', error.message);
    }
}

export default connectToMongoDB;