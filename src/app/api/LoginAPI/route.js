import { ConnentToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

// GET API
export async function GET() {
    await ConnentToDatabase(process.env.PUBLICAPI)
    try {
       return NextResponse.json("hello",{status : 200})
    } catch (error) {
         return NextResponse.json(error,{status : 400})
    }
}
export async function POST(req) {
     await ConnentToDatabase(process.env.PUBLICAPI)
     try {
        const body = await req.body
        console.log(body)
       return NextResponse.json(body,{status:200})
     } catch (error) {
       return NextResponse.json({ error: error.message })

     }
}