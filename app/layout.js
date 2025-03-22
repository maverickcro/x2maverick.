"use client";
import "./styles/globals.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavControls from "./components/NavControls";

export default function RootLayout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <html
      lang="hr"
      className="min-h-full bg-neutral-950 text-base antialiased overflow-x-hidden"
    >
      <body>
        <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <motion.div
          className="text-neutral-950"
          initial={{ marginTop: 0 }}
          exit={{ marginTop: 0 }}
          //umjesto 100vh stavi prop koliki je height nava?
          animate={{ marginTop: isNavOpen ? "75vh" : "0" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <NavControls isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <div
            className="relative flex flex-col bg-white"
            style={{
              borderTopLeftRadius: "40px",
              borderTopRightRadius: "40px",
              marginTop: "10px",
              height: "5rem",
            }}
          ></div>
          {children}
        </motion.div>
        <Footer />
      </body>
    </html>
  );
}
