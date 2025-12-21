import { ConnentToDatabase } from "@/lib/mongodb";

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import UserChat from "@/models/UserChat";

export async function GET(req) {
  await ConnentToDatabase(process.env.PUBLICAPI)
  try {
   return NextResponse.json("Hello Regis",{status :200})
  } catch (error) {
    return NextResponse.json(error,{status :400})
  }
}
export async function POST(req) {
  await ConnentToDatabase(process.env.PUBLICAPI)
  console.log(mongoose.connection.name)
  try {
    const body = await req.json()
    console.log(body)
    const NewUser = new UserChat({...body})
   await NewUser.save()
   return NextResponse.json(body,{status :200})
  } catch (error) {
    return NextResponse.json(error,{status :400},
      console.log(error)
    )
    
  }
}