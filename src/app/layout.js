"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useMessage } from "@/state/message";
import { useEffect, useState } from "react";
 

export default function RootLayout({ children }) {
  const {changehide ,hide} = useMessage()
   useEffect(()=>{
  //     async function verifyCookie(params) {
  // const res =  await fetch("http://localhost:3000/api/Me")
  //     if(res.ok){
  //       const data = await res.json()
  //       // setLogin(data)
  //       console.log("fetch" ,data)
  //       setLogin(data)
  //         console.log("state" ,login)

  //     }else{
  //       console.log("Not Found Cookie")
  //     }
  // }
  // verifyCookie()
  const userlocal = localStorage.getItem("user")
  if(userlocal){
    changehide(true)
  }else{
    changehide(false)
  }
},[])
  

  return (
    <html lang="en">
      <body
        className="antialiased flex  "
      > 
     {hide ? <Navbar/> : ""}
        {children}
        
      </body>
    </html>
  );
}
