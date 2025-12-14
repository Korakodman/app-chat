"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useUserLogin } from "@/state/Login";
import { useEffect } from "react";
 

export default function RootLayout({ children }) {
  const {setUser,logout,user,setLogin,login} = useUserLogin()

   useEffect(()=>{
      async function verifyCookie(params) {
  const res =  await fetch("http://localhost:3000/api/Me")
      if(res.ok){
        const data = await res.json()
        setLogin(data)
      }else{
        console.log("Not Found Cookie")
      }
    
  }
  console.log("User:", user)
    console.log("Islogin",login)
  verifyCookie()
},[user])
  

  return (
    <html lang="en">
      <body
        className="antialiased flex "
      > 
     { user && login ? <Navbar/> :""}
        {children}
        
      </body>
    </html>
  );
}
