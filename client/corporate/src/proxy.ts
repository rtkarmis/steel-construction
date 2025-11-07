import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Aggressive caching for static assets
  if (
    request.nextUrl.pathname.startsWith("/_next/static/") ||
    request.nextUrl.pathname.startsWith("/images/") ||
    request.nextUrl.pathname.includes(".webp") ||
    request.nextUrl.pathname.includes(".avif") ||
    request.nextUrl.pathname.includes(".png") ||
    request.nextUrl.pathname.includes(".jpg") ||
    request.nextUrl.pathname.includes(".jpeg")
  ) {
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

  // Cache Next.js image optimization
  if (request.nextUrl.pathname.startsWith("/_next/image")) {
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

  // Enable compression hints
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
