"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-40 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
        <p>Logo..</p>
        <div className="flex items-center gap-x-6">
          <a
            href="/contact"
            className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200"
          >
            Contact us
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-black text-white py-6"
          >
            <nav className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-3xl font-medium">
              <a href="/work" className="py-4 hover:text-gray-300">
                Our Work
              </a>
              <a href="/about" className="py-4 hover:text-gray-300">
                About Us
              </a>
              <a href="/process" className="py-4 hover:text-gray-300">
                Our Process
              </a>
              <a href="/blog" className="py-4 hover:text-gray-300">
                Blog
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
