// import mongoose from "mongoose";
// import UserChat from "@/models/UserChat";
// import { ConnentToDatabase } from "@/lib/mongodb";
// import { NextResponse } from "next/server";


// export async function GET(req) {
//     await ConnentToDatabase(process.env.PUBLICAPI)
//     try {
//         const Users = await UserChat.find({})
//         return NextResponse.json(Users,{status:200})
//     } catch (error) {
//         return NextResponse.json(error,{status:400})
//     }
// }