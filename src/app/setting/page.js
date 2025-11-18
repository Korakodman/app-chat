// src/app/chat/page.jsx
"use client"
import { useState, useEffect, useRef } from "react";
import { useMessage } from "@/state/message";
export default function page() {
  // const [messages, setMessages] = useState([
  //   { id: 1, user: "Alice", text: "Hi there!" },
  //   { id: 2, user: "Bob", text: "Hello!" },
  // ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef();
const { messages,sendMessage ,setmessages,setinput,inputValue} = useMessage()
  // scroll to bottom when messages change
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // const sendMessage = () => {
  //   if (!input.trim()) return;
  //   setMessages((prev) => [
  //     ...prev,
  //     { id: Date.now(), user: "You", text: input },
  //   ]);
  //   setInput("");
  // };

  const handleonchange = (value) => {
    setmessages(value)
  };
  const ButtonHandle = ()=>{
    sendMessage(messages)
  }
  return (
    <div className="flex flex-col h-screen bg-[#222831] text-[#DFD0B8]">
      {/* Message List */}
      {messages.map((msg)=>{
        return(
          <div id={msg.id}>
            {msg.text}
          </div>
        )
      })}
      {/* ChatBox */}
      <div className="flex p-2 bg-[#393E46]">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 rounded-l-md p-2 text-[#DFD0B8] bg-[#222831] outline-none placeholder-[#948979]"
          value={messages.messages}
          onChange={(e) => handleonchange(e.target.value)}
        
        />
        <button
          onClick={ButtonHandle}
          className="bg-[#948979] hover:bg-[#DFD0B8] text-[#222831] px-4 rounded-r-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}
