import { Server } from "socket.io";

const io = new Server(3001,{
    cors:{
        origin:"http://localhost:3000"
    }
})  

io.on("connection",(socket)=>{
    console.log("coonected:", socket.id)
})
io.on("join", (username) => {
  socket.username = username;
  io.emit("system", `${username} joined`);
});
io.on("send-message", (text) => {
  io.emit("receive-message", {
    id: Date.now(),
    user: socket.username,
    text,
    time: new Date().toLocaleString("th-TH"),
  });
});


