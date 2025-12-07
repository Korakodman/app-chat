"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useUserLogin } from "@/state/Login";
 

export default function RootLayout({ children }) {
  const {setUser,logout,user} = useUserLogin()
  return (
    <html lang="en">
      <body
        className="antialiased flex "
      > 
     {user ?  <Navbar/> : ""}
        {children}
        
      </body>
    </html>
  );
}
