import { create } from "zustand";

export const useMessage = create((set)=>({
messages:[{
    id: 1,
    text: "",
    users: "You"
}],
inputValue: "",

setinput:(input)=>set({inputValue:input}),
setmessages:(newMessage)=>set({messages:newMessage}),

sendMessage:(message)=>set((state)=>({message:[...state.messages.text,message]}))

}))