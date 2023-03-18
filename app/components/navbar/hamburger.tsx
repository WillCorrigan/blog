import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";

interface Props {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const Hamburger = ({ menuOpen, setMenuOpen }: Props) => {
  return (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="p-4 space-y-2 rounded shadow"
    >
      <span className="block w-8 h-0.5 bg-gray-100"></span>
      <span className="block w-8 h-0.5 bg-gray-100"></span>
      <span className="block w-8 h-0.5 bg-gray-100"></span>
    </button>
  );
};
