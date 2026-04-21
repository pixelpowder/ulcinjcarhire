// Expose the request pathname via a custom header so the root layout
// (which has no access to route params) can derive the active locale for
// <html lang="..."> and JSON-LD schema markup.
//
// Also 301-redirects retired car-guide slugs to their nearest real-inventory
// replacement in the current Ulcinj fleet.

import { NextResponse } from 'next/server';

const RETIRED_CARS = {
  'skoda-octavia':    'peugeot-308',    // mid-size diesel auto → closest
  'toyota-corolla':   'toyota-yaris',   // Toyota stays Toyota
  'mercedes-c-class': 'peugeot-308',    // premium → best mid-size available
  'jeep-renegade':    'kia-stonic',     // compact crossover
  'bmw-x3':           'kia-stonic',     // premium SUV — no true SUV in fleet
  'vw-transporter':   '/cars',          // van — no van in fleet, go to index
  'dacia-duster':     'kia-stonic',     // budget crossover
  // Slugs retired in this rollout:
  'peugeot-208':      'renault-clio',   // small French hatch → Clio
  'citroen-c3':       'renault-clio',   // small comfort hatch → Clio
  'vw-golf':          'peugeot-308',    // mid-size DSG diesel → 308 EAT
};

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Match /cars/<old-slug> or /<locale>/cars/<old-slug> — 301 redirect
  const carMatch = pathname.match(/^(?:\/([a-z]{2}))?\/cars\/([a-z0-9-]+)\/?$/);
  if (carMatch) {
    const [, locale, slug] = carMatch;
    if (RETIRED_CARS[slug]) {
      const target = RETIRED_CARS[slug];
      const newPath = target.startsWith('/')
        ? (locale ? `/${locale}${target}` : target)
        : (locale ? `/${locale}/cars/${target}` : `/cars/${target}`);
      const url = request.nextUrl.clone();
      url.pathname = newPath;
      return NextResponse.redirect(url, 301);
    }
  }

  const res = NextResponse.next();
  res.headers.set('x-pathname', pathname);
  return res;
}

export const config = {
  matcher: [
    // Skip static assets, API routes, and internal Next paths
    '/((?!api|_next|favicon|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
};
