import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get('next-auth.session-token');

  if (token) {
    if (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  if (!token) {
    if (request.nextUrl.pathname !== '/' && request.nextUrl.pathname !== '/login' && request.nextUrl.pathname !== '/register') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};