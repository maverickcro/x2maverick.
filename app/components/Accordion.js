import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";

export default function Accordion({
  index,
  expanded,
  setExpanded,
  question,
  answer,
}) {
  const isOpen = index === expanded;
  return (
    <motion.section
      initial={false}
      onClick={() => setExpanded(isOpen ? false : index)}
      className={cn(
        "flex cursor-pointer flex-col py-4",
        index === 0 && "pt-3 sm:pt-4"
      )}
    >
      <motion.h2 className="w-full flex justify-between items-center cursor-pointer hover:text-neutral-950 transition-all duration-300 py-2 font-semibold leading-[1.15] text-neutral-700 sm:text-lg">
        <span>{question}</span>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="w-6 h-6 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="w-6 h-6 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </motion.h2>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapse"
            animate="open"
            exit="collapse"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapse: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.3,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="overflow-hidden"
          >
            <motion.div className="pb-2 pt-4 text-[0.915rem] leading-[1.425] text-faq-grayish-purple sm:text-base sm:leading-normal">
              {answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
