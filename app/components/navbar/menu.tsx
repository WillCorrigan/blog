import { Link } from "@remix-run/react";
import clsx from "clsx";
import type { Dispatch, SetStateAction } from "react";
import { ImCross } from "react-icons/im";

interface Props {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const Menu = ({ menuOpen, setMenuOpen }: Props) => {
  const links = [
    { link: "/", title: "Home" },
    { link: "/blog", title: "Blog" },
    { link: "/about", title: "About" },
  ];

  return (
    <div
      className={clsx(
        "absolute top-0 z-10 min-h-screen bg-yellow-400",
        { "opacity-0": !menuOpen, "w-0": !menuOpen, "w-full": menuOpen },
        "transition ease-in-out duration-500"
      )}
    >
      <div
        className={clsx("flex flex-col justify-start text-center", {
          hidden: !menuOpen,
        })}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex self-end w-5 mr-5 pt-7 align"
        >
          <ImCross size={20} />
        </button>
        {links.map(({ link, title }, index: number) => (
          <Link
            key={index}
            onClick={() => setMenuOpen(!menuOpen)}
            to={link}
            className="text-3xl py-2.5"
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};
