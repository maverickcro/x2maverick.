"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavControls from "./components/NavControls";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isNavOpen ? "overflow-hidden" : ""
      }`}
    >
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <NavControls isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      <main>
        <Hero isNavOpen={isNavOpen} />
      </main>
      <footer className="bg-neutral-950 text-white py-4 flex justify-center">
        <p>&copy; 2025 Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
