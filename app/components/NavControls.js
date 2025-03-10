"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function NavControls({ isNavOpen, setIsNavOpen }) {
  return (
    <>
      <div className="absolute top-6 left-6 z-30">
        <Link
          href="/"
          className={`text-4xl font-bold ${
            isNavOpen ? "text-white" : "text-black"
          }`}
        >
          X2
        </Link>
      </div>

      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className={`absolute top-6 right-6 z-30 p-2 rounded-full transition-all duration-300 ${
          isNavOpen ? "text-white" : "text-black"
        }`}
      >
        {isNavOpen ? <X size={30} /> : <Menu size={30} />}
      </button>
    </>
  );
}
