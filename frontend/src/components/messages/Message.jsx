const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="chat bubble component"
            src="https://static.vecteezy.com/system/resources/previews/022/026/280/original/cute-winnie-the-pooh-cartoon-free-vector.jpg"
          />
        </div>
      </div>

      <div className={`chat-bubble text-unbleachedSilk bg-amaranthPurple`}>
        Hi! wassupp
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>
  );
}

export default Message