import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const LandingSection = () => {
  return (
    <section className="w-full min-h-[80vh] ">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center">
        <div className="flex flex-col md:w-1/2 mt-[5rem] md:mt-0">
          <span className="text-sm uppercase font-bold">
            All-in-one rješenje
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            Vaša vlastita web stranica već od €199 godišnje
          </h1>
          <span className="text-lg sm:text-xl pt-4 text-gray-600 italic">
            Bez skrivenih troškova i dodatnih naknada.
          </span>
          <Link href="/galerija" passHref legacyBehavior>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="inline-block max-w-fit my-6 rounded-sm border-2 border-double border-black bg-white px-6 py-1 font-bold uppercase text-black transition-all duration-300 
            hover:-translate-x-1 hover:-translate-y-1 hover:rounded-md hover:shadow-[4px_4px_0px_black]
            active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none"
            >
              Pogledaj što nudimo
            </motion.a>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/hero-phone.png"
            alt="Hero Phone Mockup"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md object-contain"
            width={500}
            height={700}
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
