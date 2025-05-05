import React from "react";
import { LuSend } from "react-icons/lu";

function ChatBox() {
  return (
    <div className="bg-secondary w-[95%] h-full rounded-3xl relative p-3 flex flex-col">
      <div className="flex-1"></div>
      <div className="bg-[#eeeffa] rounded-xl flex justify-between p-3">
        <input
          type="text"
          placeholder="Your Message"
          className="w-full outline-none"
        />
        <button>
          <LuSend className="text-[18px]"/>
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
