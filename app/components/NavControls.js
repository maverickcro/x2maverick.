"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedHamburgerButton from "./AnimatedHamburgerButton";

export default function NavControls({ isNavOpen, setIsNavOpen }) {
  return (
    <div className="absolute top-3 right-0 left-0 z-30" area-hidden="true">
      {/* popravi komponentu da je sve u jednom divu */}
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
      {/* napravi komponentu od ovog buttona */}
      <Link href="/kontakt" passHref legacyBehavior>
        <a
          className="absolute top-6 right-25 z-30 inline-block max-w-fit rounded-sm border-2 border-double border-black bg-white px-6 py-1 font-bold uppercase text-black transition-all duration-300 
              hover:-translate-x-1 hover:-translate-y-1 hover:rounded-md hover:shadow-[4px_4px_0px_black]
              active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none"
        >
          Javite se
        </a>
      </Link>

      <div className="absolute top-3 right-3 z-30">
        <AnimatedHamburgerButton
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
        />
      </div>
    </div>
  );
}
