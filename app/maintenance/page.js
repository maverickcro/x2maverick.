// app/maintenance/page.js
"use client";

export default function Maintenance() {
  return (
    <main className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center space-y-4 px-4">
        <h1 className="text-6xl sm:text-8xl font-extrabold uppercase neon-text">
          Coming Soon
        </h1>
        <p className="text-xl sm:text-2xl opacity-70">06/2025</p>
        <a
          href="mailto:kontakt@xtwo.dev"
          className="mt-6 inline-block text-lg italic text-gray-300 hover:text-gray-100 transition duration-300"
        >
          kontakt@xtwo.dev
        </a>
      </div>
      <style jsx>{`
        .neon-text {
          color: #0ff;
          text-shadow: 0 0 4px #0ff, 0 0 8px #0ff, 0 0 16px #0ff, 0 0 32px #0ff;
          animation: glow 1.5s ease-in-out infinite alternate;
        }
        @keyframes glow {
          from {
            text-shadow: 0 0 4px #0ff;
          }
          to {
            text-shadow: 0 0 16px #0ff, 0 0 32px #0ff;
          }
        }
      `}</style>
    </main>
  );
}
