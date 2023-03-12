import type { LinksFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

import stylesUrl from "~/styles/blog.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Blog() {
  return (
    <div>
      This is the blog.
      <Link to="posts">Posts</Link>
      <Outlet />
    </div>
  );
}
