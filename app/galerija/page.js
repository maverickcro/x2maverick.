"use client";
import Image from "next/image";
import { useEffect } from "react";
import { GallerySection } from "../components/GallerySection";
import { products } from "../lib/products";

export default function Proces() {
  return (
    <main className="w-full flex-auto min-h-screen  flex flex-col bg-white text-black">
      <GallerySection products={products} />
    </main>
  );
}
