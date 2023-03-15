import classNames from "classnames";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  var styling = { active: "text-red-400", inactive: "text-white" };
  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            classNames(
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
            classNames(isActive ? styling.active : styling.inactive)
          }
        >
          Blog
        </NavLink>
      </div>
    </nav>
  );
};
