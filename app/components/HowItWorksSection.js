"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Odaberite idealan predložak",
    description:
      "Odaberite predložak koji najbolje odgovara vašem poslovanju, a mi ćemo ga prilagoditi vašim bojama, sadržaju i brendu – brzo i jednostavno. Svi naši web dizajnovi izrađeni su modernim tehnologijama i optimizirani za dugotrajnu kvalitetu.",
  },
  {
    number: "02",
    title: "Podijelite detalje projekta",
    description:
      "Što nam više informacija date, to bolje – logo, kontakt podaci, opisi usluga... sve pomaže da vaš web bude spreman bez odgađanja. Ako vam trebaju savjeti ili pomoć oko sadržaja, tu smo za vas.",
  },
  {
    number: "03",
    title: "Razvoj i prilagodba",
    description:
      "Vaš odabrani web predložak prilagođavamo tako da ne izgleda generički, već da se uklopi u vaše brendiranje. Radimo precizne dorade i optimizacije kako bi stranica ostavila pravi dojam na vaše klijente.",
  },
  {
    number: "04",
    title: "Završni pregled i lansiranje projekta",
    description:
      "Prije lansiranja, provjeravamo svaku stranicu, testiramo na svim uređajima i osiguravamo da sve radi besprijekorno. Vaš web projekt bit će spreman za rast i nove prilike.",
  },
];

export default function ScrollRevealSteps() {
  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-6xl mx-auto">
        <div
          className="max-w-2xl py-[3rem]"
          style={{ opacity: "1", transform: "none" }}
        >
          <h2>
            <span className="text-sm uppercase font-bold">
              Kako ovo funkcionira?
            </span>
            <span className="sr-only"> - </span>
            <span className="block font-display tracking-tight [text-wrap:balance] text-5xl font-medium sm:text-6xl text-neutral-950">
              Proces je dizajniran da bude jednostavan i intuitivan.
            </span>
          </h2>
          <div className="mt-6 text-xl text-neutral-600">
            <p>U svega 4 koraka prezentirajte svoj biznis online.</p>
          </div>
        </div>

        <ul className="mb-[3rem]">
          {steps.map((step, index) => (
            <StepItem key={index} step={step} index={index} />
          ))}
        </ul>
        <div className="flex justify-center items-center">
          <Link href="/proces" passHref legacyBehavior>
            <a
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="inline-block max-w-fit my-6 rounded-sm border-2 border-double border-black bg-white px-6 py-1 font-bold uppercase text-black transition-all duration-300 
            hover:-translate-x-1 hover:-translate-y-1 hover:rounded-md hover:shadow-[4px_4px_0px_black]
            active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none"
            >
              Više o procesu
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "end 85%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["70%", "100%"]);

  return (
    <li ref={ref}>
      <motion.div className="pt-[3rem]" style={{ scale }}>
        <div className="relative w-full mb-6">
          <motion.div
            style={{ width: lineWidth }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-0.5 bg-neutral-950 absolute left-0 top-1/2 transform -translate-y-1/2"
          />
        </div>
        <h3 className="text-neutral-950 text-2xl font-bold flex items-center gap-4">
          <span className="text-2xl text-gray-600 font-semibold">
            <span>{`/  `}</span>
            {step.number}
          </span>{" "}
          {step.title}
        </h3>
        <p className="text-gray-700 text-lg mt-2 max-w-3xl">
          {step.description}
        </p>
      </motion.div>
    </li>
  );
}
