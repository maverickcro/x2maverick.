"use client";

import Link from "next/link";
import AnimatedHamburgerButton from "./AnimatedHamburgerButton";

export default function NavControls({ isNavOpen, setIsNavOpen }) {
  return (
    <>
      <div
        className="absolute top-3 left-3 z-30 h-20 w-20 flex items-center justify-center"
        style={{ transform: "translateY(-12px)" }}
      >
        <Link
          href="/"
          className={`text-4xl font-bold ${
            isNavOpen ? "text-white" : "text-black"
          }`}
        >
          X2
        </Link>
      </div>
      <div className="absolute top-3 right-3 z-30">
        <AnimatedHamburgerButton
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
        />
      </div>
    </>
  );
}
