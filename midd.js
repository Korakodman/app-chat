// import { NextResponse } from "next/server";

// export function middleware(request){
//     const token = sessionStorage.getItem("Login")
//     if(!token){
//         return NextResponse.redirect(new URL("/login",request.url))
//     }
//     return NextResponse.next()
// }
// export const config = {
//     matcher:["/"]
// }