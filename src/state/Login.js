import { create } from "zustand";

export const useLogin = create(()=>({
    users:[{
        username : "",
        password : ""
    }],
    // AddUser For Login
  UsernameLogin:(username)=> set((state)=>({
    users:[...state.username,{
        username : username,
    }]
  })),
  PaswordLogin:(password)=> set((state)=>({
    users:[state.password,{
        password : password
    }]
  })),
}))