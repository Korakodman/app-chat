import { create } from "zustand";

export const useMessage = create((set)=>({
messages:[ { id: 1, user: "Alice", text: "Hi there!" ,time: new Date().toLocaleString("th-TH")
     },],
// setinput:(input)=>set({inputValue:input}),

Addmessages:(newMessage)=>set((state)=>({
    messages:[...state.messages,{
        id: new Date(),
        text: newMessage,
        user: "You",
        time: new Date().toLocaleString("th-TH")
    }]
})),

// AddMessage:(message)=>set((state)=>({
//     messages:[{...state.messages,
//     text: message,
//     users: "You"}]}))

}))