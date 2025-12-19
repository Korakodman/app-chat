import { create } from "zustand";

export const useUserLogin = create((set)=>({
  user: null,
  login: null,
  setUser: (data) => set({ user: data }),
  setLogin: (islogin) => set({login:islogin}),
  logout: () => set({ user: null })
}))