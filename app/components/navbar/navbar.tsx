import clsx from "clsx";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Hamburger } from "./hamburger";
import { Menu } from "./menu";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  var styling = { active: "text-blue-400", inactive: "text-black-400" };
  return (
    <nav className="sm:px-4 py-2.5 flex justify-end relative">
      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="container flex-wrap items-center justify-between hidden mx-auto md:flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(
              isActive ? styling.active : styling.inactive,
              "flex",
              "items-center",
              "text-2xl"
            )
          }
        >
          Will Corrigan
        </NavLink>
        <NavLink
          to="blog"
          className={({ isActive }) =>
            clsx(isActive ? styling.active : styling.inactive, "text-2xl")
          }
        >
          Blog
        </NavLink>
      </div>
    </nav>
  );
};
