import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Outlet, Scripts } from "@remix-run/react";
import { Navbar } from "./components/navbar/navbar";
import stylesheet from "~/tailwind.css";
import clsx from "clsx";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Will Corrigan</title>
        <Links />
      </head>
      <body
        className={clsx(
          ["min-h-screen", "bg-gradient-to-b", "from-g1", "via-g2", "to-g3"],
          [
            "lg:bg-no-repeat",
            "lg:bg-cover",
            "lg:bg-left",
            "lg:bg-[url('./images/wave-haikei.svg')]",
            "lg:bg-center",
          ]
        )}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Outlet />
        </div>
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
