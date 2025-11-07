import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Static assets için aggressive caching
  if (request.nextUrl.pathname.startsWith("/images/")) {
    response.headers.set(
      "Cache-Control",
      "public, max-age=31536000, immutable"
    );
    response.headers.set("CDN-Cache-Control", "public, max-age=31536000");
    response.headers.set(
      "Vercel-CDN-Cache-Control",
      "public, max-age=31536000"
    );
  }

  // Hero images için extra optimization
  if (request.nextUrl.pathname.includes("hero-")) {
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("Accept-CH", "DPR, Viewport-Width, Width");
  }

  return response;
}

export const config = {
  matcher: [
    "/images/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
