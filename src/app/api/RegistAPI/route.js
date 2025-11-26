import { ConnentToDatabase } from "@/lib/mongodb";

import { NextResponse } from "next/server";


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
  try {
    const body = await req.json()
    console.log(body)
   return NextResponse.json(body,{status :200})
  } catch (error) {
    return NextResponse.json(error,{status :400})
  }
}