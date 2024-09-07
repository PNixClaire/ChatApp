import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';
import { getReceiverSocketId , io} from '../socket/socket.js';


export const sendMessage = async (req, res) => {
    try {

        //get the message from the body
        const { message } = req.body;

        //get the receiver Id 
        const { id: receiverId } = req.params;

        const senderId = req.user._id

        //find the one conversation between the users
        let converston = await Conversation.findOne({
            participants: { $all: [ senderId, receiverId ] }, 
        })

        //if there is no existing conversation between the users, create one
        if (!converston) {
            converston = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        //create a new message 
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        //push the message into the messages array
        if (newMessage) {
            converston.messages.push(newMessage._id);
        }

        //save to the db in parallel to save time
        await Promise.all([converston.save(), newMessage.save()]);

        //socket io
        const receiverSocketId = getReceiverSocketId(receiverId);

        if (receiverSocketId) {
            //notify the specific client
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }

        //success response
        res.status(201).json(newMessage);

    } catch (error) {

        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });

    }
};

export const getMessage = async (req, res) => {
    try {
        
        const { id: userToChatId } = req.params;
        const senderId = req.user._id; //from protectRoute

        //find the one conversation between the participants
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages"); //give the messages inside the conversation


        if (!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {

        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });

    }
}