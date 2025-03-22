"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "00",
    title: "PRVI KONTAKT",
    description:
      "Vaš email pokreće proces. Prikupljamo informacije, definiramo ciljeve i šaljemo vremenski okvir.",
  },
  {
    number: "01",
    title: "ISTRAŽIVANJE",
    description:
      "Kroz dubinsku analizu definiramo ciljeve i pripremamo specifikacije i prototip.",
  },
  {
    number: "02",
    title: "DIZAJN",
    description: "Kvalitetan dizajn optimiziran za uspjeh vašeg projekta.",
  },
  {
    number: "03",
    title: "IZRADA I LANSIRANJE",
    description:
      "Web stranica ide online. Pratimo performanse i nudimo podršku.",
  },
];

export default function ScrollRevealSteps() {
  return (
    <section className="w-full bg-white py-32 z-111">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-neutral-950 mb-6">
          Pouzdan proces
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mb-16">
          Naš proces vodi te jasno od prvog kontakta do gotove stranice. Bez
          stresa, sve pod kontrolom.
        </p>

        <ul className="space-y-20">
          {steps.map((step, index) => (
            <StepItem key={index} step={step} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function StepItem({ step, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "center 85%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["70%", "100%"]);

  return (
    <li ref={ref}>
      <motion.div
        style={{ scale }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative w-full mb-6">
          <motion.div
            style={{ width: lineWidth }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-0.5 bg-neutral-950 absolute left-0 top-1/2 transform -translate-y-1/2"
          />
        </div>
        <h3 className="text-neutral-950 text-2xl font-bold flex items-center gap-4">
          <span className="text-red-600 text-xl font-semibold w-10">
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
