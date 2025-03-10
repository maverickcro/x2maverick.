"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavControls from "./components/NavControls";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className={`relative min-h-screen flex flex-col overflow-hidden`}>
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <NavControls isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      <motion.main
        initial={{ marginTop: 0 }}
        exit={{ marginTop: 0 }}
        animate={{ marginTop: isNavOpen ? "100vh" : "0" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex flex-col"
      >
        <Hero isNavOpen={isNavOpen} />
      </motion.main>
      <footer className="bg-neutral-950 text-white py-4 flex justify-center">
        <p>&copy; 2025 Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
