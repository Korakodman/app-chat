"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useUserLogin } from "@/state/Login";
import { useEffect } from "react";
 

export default function RootLayout({ children }) {
  const {setUser,logout,user,seteLogin,login} = useUserLogin()

  //  useEffect(()=>{
  //   fetch("http://localhost:3000/api/me")
  //   .then(res => res.ok ? res.json : null)
  //   .then(data =>{
  //     if(data?.user){
  //       setUser(data.user)
  //       seteLogin(true)
  //     }
  //   })
  //  })

  return (
    <html lang="en">
      <body
        className="antialiased flex "
      > 
     { user || login ? <Navbar/> :""}
        {children}
        
      </body>
    </html>
  );
}
