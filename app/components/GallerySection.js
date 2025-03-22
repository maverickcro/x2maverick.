"use client";
import React from "react";
import { useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const GallerySection = ({ products }) => {
  const firstRow = products;
  const secondRow = products;
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 500, damping: 30, bounce: 50 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 2700]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -2700]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-400, 300]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="bg-white h-[180vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div style={{ opacity: "1", transform: "none" }}>
          <h1>
            <span className="block font-display text-xl uppercase font-semibold text-neutral-950">
              Galerija
            </span>
            <span className="sr-only"> - </span>
            <span className="mt-6 block max-w-5xl font-display text-5xl md:text-7xl font-bold tracking-tight [text-wrap:balance] text-neutral-950 sm:text-6xl">
              Izaberite savršen dizajn <br /> za svoj web
            </span>
          </h1>
          <div className="mt-6 max-w-3xl text-xl text-neutral-800">
            <p>
              Koristeći premium tehnologije i moderna rješenja, stvaramo webove
              koji su brži, atraktivniji i jasniji od ostalih. Svaki dizajn
              prilagođavamo Vama i Vašem biznisu, osiguravajući maksimalne
              performanse i jedinstven doživljaj koji će klijenti odmah
              primjetiti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-76 w-[25rem] relative shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
