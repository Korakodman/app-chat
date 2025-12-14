import jwt from "jsonwebtoken"
import UserChat from "@/models/UserChat"
import { NextResponse } from "next/server"
import { ConnentToDatabase } from "@/lib/mongodb"
export async function GET(req) {
    const token = req.cookies.get("Login")?.value

  return NextResponse.json({login:token},{status: 200})
}