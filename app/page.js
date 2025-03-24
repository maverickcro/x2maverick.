"use client";
import FAQComponent from "./components/FAQ";
import LandingSection from "./components/LandingSection";
import HowItWorksSection from "./components/HowItWorksSection";
import { useEffect } from "react";
import Lenis from "lenis";
import { GallerySection } from "./components/GallerySection";
import ProjectsSection from "./components/ProjectsSection";
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
      <ProjectsSection />
      <HowItWorksSection />
      <GallerySection products={products} />
      {/* Zasto mi? - sve u jednom */}
      {/* Cijene paketa */}
      {/* Za koga je ovo */}
      {/* Testimoniiali */}
      {/* kontakt */}
      {/* <FAQComponent /> */}
    </main>
  );
}
