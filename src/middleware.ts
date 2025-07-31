import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const validPaths = [
  "/",
]

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (!validPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|api).*)"]
}