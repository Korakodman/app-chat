import { create } from "zustand";

export const useMessage = create((set) => ({
  messages: [
    {
      id: 1,
      user: "ระบบ",
      text: "Welcome to chat 👋",
      time: new Date().toLocaleString("th-TH"),
    },
  ],
  hide: null,
  changehide: (status)=>set({hide:status}),
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
}));
