import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Outlet } from "@remix-run/react";
import { Navbar } from "./components/navbar/navbar";
import stylesheet from "~/tailwind.css";
import bg from "../public/images/wave-haikei.svg";

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
      <body
        className="min-h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Navbar />
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
