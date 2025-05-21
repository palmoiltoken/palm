import type { LinksFunction } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import { Toaster } from "@shadcn/toaster";
import "./assets/styles/global.css";
import "./assets/styles/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Baloo+Chettan:wght@400;700&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Baloo+Chettan+2:wght@400;700&display=swap",
  },
  {
    rel: "icon",
    href: "/favicon-32x32.png",
    sizes: "32x32",
    type: "image/png",
  },
  {
    rel: "icon",
    href: "/favicon-16x16.png",
    sizes: "16x16",
    type: "image/png",
  },
  {
    rel: "shortcut icon",
    href: "/favicon.ico",
  },
  {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/x-icon",
  },
  {
    rel: "icon",
    href: "/android-chrome-192x192.png",
    sizes: "192x192",
    type: "image/png",
  },
  {
    rel: "icon",
    href: "/android-chrome-512x512.png",
    sizes: "512x512",
    type: "image/png",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Palm Coin</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <Toaster />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
