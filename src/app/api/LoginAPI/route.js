import { ConnentToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import UserChat from "@/models/UserChat";
// GET API
export async function GET(req) {
    // await ConnentToDatabase(process.env.PUBLICAPI)
    try {
     const user = await UserChat.find({})
       return NextResponse.json("hello From API",{status : 200})
    } catch (error) {
         return NextResponse.json(error,{status : 400})
    }
}
export async function POST(req) {
     try {
       await ConnentToDatabase(process.env.PUBLICAPI)
        const {username,password} = await req.json()
        const user = await UserChat.findOne({username})
        if(!user || user.password !== password){
         
         return NextResponse.json({success: false,message:"Invalid credentials"},{status : 401})
        }else{
          const res =  NextResponse.json({ success: true, user:{
            id: user._id,
        username: user.username,
          } },
  { status: 200 })

          res.cookies.set("Login","true",{
            httpOnly:true,
           secure: process.env.NODE_ENV === "production",
            path:"/",
            maxAge : 60*60,
          },)
        
          return res
        }
     } catch (error) {
       return NextResponse.json({ error: error.message })

     }
}