// import { NextResponse } from "next/server";

// export function middleware(req) {
//   const { pathname } = req.nextUrl;
//   console.log("MIDDLEWARE:", req.nextUrl.pathname);
//   // ❗❗ ข้าม API ทุกตัว
//   if (req.nextUrl.pathname.startsWith("/api")) {
//   return NextResponse.next();
// }


//   const token = req.cookies.get("Login")?.value;

//   const isLoginPage = pathname === "/login";
//   const isProtectedPage = ["/", "/chat"].includes(pathname);

//   if (!token && isProtectedPage) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   if (token && isLoginPage) {
//     return NextResponse.redirect(new URL("/chat", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/", "/chat", "/login"],
// };
