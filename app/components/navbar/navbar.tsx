import clsx from "clsx";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  var styling = { active: "text-blue-400", inactive: "text-black-400" };
  return (
    <nav className="px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(
              isActive ? styling.active : styling.inactive,
              "flex",
              "items-center"
            )
          }
        >
          Will Corrigan
        </NavLink>
        <NavLink
          to="blog"
          className={({ isActive }) =>
            clsx(isActive ? styling.active : styling.inactive)
          }
        >
          Blog
        </NavLink>
      </div>
    </nav>
  );
};
