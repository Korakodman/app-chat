import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  const isLoginPage = pathname === "/login";
  const isProtectedPage = ["/", "/chat"].includes(pathname);

  // ไม่มี token แต่พยายามเข้า / หรือ /chat
  if (!token && isProtectedPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // มี token แต่ดันเข้า /login
  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/chat", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/chat", "/login"],
};
