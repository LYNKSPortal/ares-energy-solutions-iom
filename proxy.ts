import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { maintenanceMode } from "@/lib/constants";

export function proxy(request: NextRequest) {
  if (!maintenanceMode) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith("/maintenance")) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|avif)$).*)",
  ],
};
