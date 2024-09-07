import { useEffect } from 'react';
import useConversation from '../../zustand/useConversation.js'
import MessageInput from "./MessageInput.jsx";
import Messages from "./Messages.jsx";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from '../../context/AuthContext.jsx';


const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {

    //clean up
    return () => setSelectedConversation(null)
  },[setSelectedConversation])
  
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-amaranthPink px-4 py-2 mb-2">
            <span className="label-text text-amaranthPurple">
              To: <span className="text-chinaRose font-bold">{selectedConversation.fullname}</span>
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

const NoChatSelected = () => {

  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋🏼 {authUser.fullname} ✨</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center"/>
      </div>
    </div>
  );
}
export default MessageContainer

/**
 * import MessageInput from "./MessageInput.jsx";
import Messages from "./Messages.jsx";
import { TiMessages } from "react-icons/ti";


const MessageContainer = () => {
  const noChatSelected = true; 
  
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-amaranthPink px-4 py-2 mb-2">
            <span className="label-text text-amaranthPurple">
              To: <span className="text-chinaRose font-bold">John Doe</span>
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋🏼 John Doe ✨</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center"/>
      </div>
    </div>
  );
}
export default MessageContainer
 */