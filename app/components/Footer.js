"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer({}) {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">X2</span>
            </Link>
            <p className="mt-4 text-white/60">
              Nemojte čekati prilike – stvorite ih. Pokažite tko ste i što
              nudite na pravi način.
            </p>
            <button className="mt-4 rounded-sm border-2 border-double border-black bg-white px-6 py-1 font-bold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              Javite se
            </button>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-base font-semibold uppercase">
                Navigacija
              </h2>
              <ul className="text-white/60 font-normal space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Proces
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Galerija
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    O nama
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-base font-semibold uppercase">
                Pravni dokumenti
              </h2>
              <ul className="text-white/60 font-normal space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Postavke privatnosti
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Uvjeti korištenja
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-base font-semibold uppercase">
                Kontakt
              </h2>
              <p className="text-white/60 font-normal">Mostar, BiH / Online</p>
              <p className="text-white/60 font-normal">
                Dostupni: 08:00 - 22:00
              </p>
              <p className="text-white/60 font-normal mt-2">
                Email:{" "}
                <a
                  href="mailto:info@x2maverick.com"
                  className="hover:underline"
                >
                  info@x2maverick.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-base text-gray-400">
            © 2025 X2 Maverick. Sva prava pridržana.
          </span>
        </div>
      </div>
    </footer>
  );
}
