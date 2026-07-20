import { NextResponse } from 'next/server';

export function middleware(request) {
  const host = request.headers.get('host') || '';
  if (host === 'bookeraccounting.com') {
    const url = request.nextUrl.clone();
    url.hostname = 'www.bookeraccounting.com';
    url.port = '';
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|icon-512.png|favicon.png|apple-touch-icon.png|.*\\..*).*)'],
};
