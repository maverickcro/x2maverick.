"use client";

import { motion } from "framer-motion";

export default function Hero({ isNavOpen }) {
  return (
    <motion.div
      className="relative flex flex-auto overflow-hidden bg-white h-screen z-0"
      style={{
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        marginTop: "10px",
      }}
      animate={{
        marginTop: isNavOpen ? "100px" : "10px",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="relative isolate flex w-full flex-col pt-9">
        <main className="w-full flex-auto">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-2 sm:mt-4 md:mt-56">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-3xl"></div>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
