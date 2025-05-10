"use client";
import { useEffect, useState } from "react";
import classNames from "classnames";

export default function Maintenance() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="flex items-center justify-center h-screen bg-black text-white overflow-hidden">
      <div className="relative text-center px-4">
        <h1
          className={classNames(
            "text-5xl sm:text-7xl font-extrabold uppercase tracking-widest",
            "neon-text"
          )}
        >
          Stranica u izradi
        </h1>
        <p className="mt-4 text-lg sm:text-2xl opacity-70">
          Vidimo se u lipnju 2025.
        </p>
        <div className="absolute inset-0 neon-border"></div>
      </div>

      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 4px #00fff0, 0 0 8px #00fff0, 0 0 16px #00fff0,
            0 0 32px #00ffea, 0 0 64px #00ffea;
          animation: glow 2s ease-in-out infinite alternate;
        }

        .neon-border {
          border: 4px solid #00fff0;
          box-shadow: 0 0 4px #00fff0, 0 0 8px #00fff0, 0 0 16px #00fff0;
          border-radius: 16px;
          pointer-events: none;
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes glow {
          from {
            text-shadow: 0 0 4px #00fff0;
          }
          to {
            text-shadow: 0 0 8px #00ffea, 0 0 16px #00ffea;
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 8px #00fff0;
          }
          50% {
            box-shadow: 0 0 16px #00ffea;
          }
          100% {
            box-shadow: 0 0 8px #00fff0;
          }
        }
      `}</style>
    </main>
  );
}
