import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Outlet } from "@remix-run/react";
import { Navbar } from "./components/navbar/navbar";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Will Corrigan</title>
        <Links />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-100">
        <Navbar />
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
