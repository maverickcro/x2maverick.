"use client";
import FAQComponent from "./components/FAQ";
import LandingSection from "./components/LandingSection";
import HowItWorksSection from "./components/HowItWorksSection";
import { useEffect } from "react";
import Lenis from "lenis";
import { GallerySection } from "./components/GallerySection";
import { products } from "./lib/products";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="flex flex-col bg-white">
      <LandingSection />
      {/* Projekti kao na enterwell */}
      <HowItWorksSection />
      {/* <GallerySection products={products} /> */}
      {/* Zasto mi? - sve u jednom */}
      {/* Cijene paketa */}
      {/* Za koga je ovo */}
      {/* Testimoniiali */}
      {/* kontakt */}
      {/* <FAQComponent /> */}
    </main>
  );
}
