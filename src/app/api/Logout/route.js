import { ConnentToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET(req) {
   const res = NextResponse.redirect(new URL(process.env.PUBLICAPI),{status : 301})
   res.cookies.set("token","Login-status",{
    httpOnly:true,
    path: "/",
    expires : new Date(0)
   })
   return res
}