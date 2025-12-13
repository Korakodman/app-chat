import jwt from "jsonwebtoken"
import UserChat from "@/models/UserChat"
import { NextResponse } from "next/server"
import { ConnentToDatabase } from "@/lib/mongodb"
export async function GET(req) {
    await ConnentToDatabase(process.env.PUBLICAPI)
    const token = req.cookies.get("token")?.value
    console.log("TOKEN:", token);
//   if(!token){
//     return NextResponse.json({user:null},{status:401})
//   }

//   const decoded = jwt.verify(token,process.env.JWTSECRETE)
//   const user = await UserChat.findById(decoded.username)

  return NextResponse.json("test",{status: 200})
}