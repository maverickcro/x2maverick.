"use client";
import { faqs } from "../lib/faq";
import Accordion from "./Accordion";
import { useState } from "react";

export default function FAQComponent() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="max-w-6xl w-full mx-auto flex flex-col items-center">
      <h2 className="bg-white text-3xl font-bold py-2.5 mx-auto">
        FAQ / Česta pitanja
      </h2>
      <div className="relative h-full w-full divide-y">
        {faqs.map((faq, index) => (
          <Accordion
            key={faq.id}
            index={index}
            expanded={expanded}
            setExpanded={setExpanded}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}
