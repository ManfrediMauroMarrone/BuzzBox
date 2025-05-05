import React from "react";

function ChatContainer({children}) {
  return <div className="bg-primary w-4/6 h-[80vh] rounded-3xl py-3 pr-3 flex">{children}</div>;
}

export default ChatContainer;
