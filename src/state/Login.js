import { create } from "zustand";

export const useUserLogin = create((set)=>({
  user: null,
  setUser: (data) => set({ user: data }),
  logout: () => set({ user: null })
}))