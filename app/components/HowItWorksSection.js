"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="max-w-2xl" style={{ opacity: "1", transform: "none" }}>
          <h2>
            <span className="mb-6 block font-display text-base font-semibold text-neutral-950">
              Services
            </span>
            <span className="sr-only"> - </span>
            <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">
              We help you identify, explore and respond to new opportunities.
            </span>
          </h2>
          <div className="mt-6 text-xl text-neutral-600">
            <p>
              As long as those opportunities involve giving us money to
              re-purpose old projects — we can come up with an endless number of
              those.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
