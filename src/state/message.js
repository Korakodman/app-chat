import { create } from "zustand";

export const useMessage = create((set) => ({
  messages: [
    {
      id: 1,
      user: "System",
      text: "Welcome to chat 👋",
      time: new Date().toLocaleString("th-TH"),
    },
  ],

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
}));
