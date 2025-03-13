"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ isNavOpen, setIsNavOpen }) {
  return (
    <motion.nav
      initial={{ height: "64px" }}
      exit={{ height: "64px" }}
      animate={{ height: isNavOpen ? "75vh" : "64px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute top-0 left-0 w-full bg-neutral-950 text-white"
    >
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className=" bg-neutral-950 text-white py-6 shadow-lg"
          >
            <nav className="mt-[64px] font-display text-5xl font-medium tracking-tight text-white">
              <div className="even:mt-px sm:bg-neutral-950">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 border-t-1 border-neutral-800">
                  <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      <a
                        className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16 text-left border-b-1 border-neutral-800 sm:border-b-0"
                        href="/proces"
                      >
                        Proces
                        <span className="absolute inset-y-0  w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                      </a>
                      <a
                        className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16 text-left"
                        href="/blog"
                      >
                        Galerija
                        <span className="absolute inset-y-0  w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="even:mt-px sm:bg-neutral-950">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 border-y-1 border-neutral-800">
                  <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      <a
                        className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16 text-left border-b-1 border-neutral-800 sm:border-b-0"
                        href="/about"
                      >
                        O Nama
                        <span className="absolute inset-y-0  w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                      </a>
                      <a
                        className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16 text-left"
                        href="/contact"
                      >
                        FAQ
                        <span className="absolute inset-y-0  w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
