import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", //use the userid in the User model
        required: true
    },

    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", //use the userid in the User model
        required: true
    },

    message: {
        type: String,
        required: true
    }
    
}, { timestamps: true }); //createdAt and updatedAt

const Message = mongoose.model("Message", messageSchema);

export default Message;