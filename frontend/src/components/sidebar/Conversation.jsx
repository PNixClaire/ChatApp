import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  
  const { selectedConversation, setSelectedConversation } = useConversation()

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  //const isOnline = onlineUsers.includes(conversation._id)
  const isOnline =
    Array.isArray(onlineUsers) && onlineUsers.includes(conversation._id);


  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-puce rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-puce" : ""}`}
      onClick={() => setSelectedConversation(conversation)}>
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullname}</p>
            <span className="text-x1">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
}

export default Conversation

// const Conversation = () => {
//   return (
//     <>
//       <div className="flex gap-2 items-center hover:bg-puce rounded p-2 py-1 cursor-pointer">
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img
//               src="https://static.vecteezy.com/system/resources/previews/022/026/280/original/cute-winnie-the-pooh-cartoon-free-vector.jpg"
//               alt="user avatar"
//             />
//           </div>
//         </div>

//         <div className="flex flex-col flex-1">
//           <div className="flex gap-3 justify-between">
//             <p className="font-bold text-gray-200">John Doe</p>
//             <span className="text-x1">🤧</span>
//           </div>
//         </div>
//       </div>

//       <div className="divider my-0 py-0 h-1" />
//     </>
//   );
// }

// export default Conversation