"use client"
import Link from 'next/link';
import { useState ,useRef,useEffect} from 'react';
  import { useMessage } from '@/state/message';
  import { socket } from "@/lib/socket";
export default function page() {
      // const [messages, setMessages] = useState([
      //   { id: 1, user: "Alice", text: "Hi there!" ,time: new Date().toLocaleString("th-TH")
      //   },
      // ]);
      // ใช้ useRef ในการเก็บข้อมูลนั้นๆเฉพาะเจาะจง
    // หรือมาจาก state / context

        const InputRef = useRef();
   const { messages, addMessage } = useMessage();
   const [username, setUsername] = useState("");

         useEffect(() => {
            const username = prompt("ใส่ชื่อด้วยจ้าา") 

             socket.emit("join", username);
             setUsername(username)
         socket.on("receive-message", (data) => {
            console.log("receive:", data);
    addMessage(data);
  });
  socket.on("system", (msg) => {
    addMessage({
      id: Date.now(),
      user: "System",
      text: msg,
      time: new Date().toLocaleString("th-TH"),
    });
  }); 
;
return () =>   {
  socket.off("receive-message");
  socket.off("system");;
          }}, []);

  const sendMessage = () => {
  const text = InputRef.current.value;
  if (!text) return;
  socket.emit("send-message", text);
  InputRef.current.value = "";
};

// Funtion KeyBoard on press
const handleKeyPress = (e) => {
 if (e.key === "Enter"){
 sendMessage()
}
        };  
  return (
   <div className='h-screen  w-screen p-2'>
   {/* BackGround UI */}
       <div className="flex flex-col h-11/12 bg-[#222831] text-[#DFD0B8]">
    <div className=' p-2 grid message-box1-server'>
          {/* Chat UI*/}
       <div className="flex-1 overflow-y-auto p-4 space-y-2">
    {messages.map((msg) => (
      <div
        key={msg.id}
        className={`flex ${
          msg.user === username ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`p-2 rounded-xl max-w-[70%] break-words ${
            msg.user === "You"
              ? "bg-[#948979] text-[#222831] rounded-tr-none"
              : "bg-[#393E46] text-[#DFD0B8] rounded-tl-none"
          }`}
        >
          {msg.user !== username && <span className="font-semibold">{msg.user}: </span>}
          {msg.text}
         <div><span className=' opacity-50'></span></div>
        </div>
      </div>
    ))}
  </div>

   </div>
    </div>
    <div className=' border-2 p-2 h-auto w-96 md:w-auto flex ml-4 md:ml-0'>
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 rounded-l-md p-2 text-[#DFD0B8] bg-[#222831] outline-none text-2xl placeholder-[#948979]"
          ref={InputRef}
           onKeyDown={handleKeyPress}
        />
          <button
          onClick={sendMessage}
          className="bg-[#948979] hover:bg-[#DFD0B8] text-[#222831] w-[200px] px-4 rounded-r-md"
        >
          Send
        </button>
    </div>
   </div>
  )
}