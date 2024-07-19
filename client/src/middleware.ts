import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Function for handling requests to /home
async function HomeRequest(request: NextRequest) {
  return NextResponse.redirect(new URL("/home", request.url));
}

// Middleware function that routes requests to the appropriate handler
export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;

  if (url.startsWith("/")) {
    return HomeRequest(request);
  }
  // Allow other requests to proceed without modification
  return NextResponse.next();
}

// Configuration for the middleware matcher
export const config = {
  matcher: ["/"],
};
