import { create } from "zustand";

export const useUserLogin = create((set)=>({
  user: null,
  login: null,
  setUser: (data) => set({ user: data }),
  seteLogin: (login) => set({login:login}),
  logout: () => set({ user: null })
}))