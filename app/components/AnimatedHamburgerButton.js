import { MotionConfig, motion } from "framer-motion";

const AnimatedHamburgerButton = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        exit={false}
        animate={isNavOpen ? "open" : "closed"}
        onClick={() => setIsNavOpen(!isNavOpen)}
        className={`relative h-15 w-15 rounded-full bg-white/0 transition-colors ${
          isNavOpen ? "hover:bg-white/20" : "hover:bg-black/20"
        }`}
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10"
          style={{
            y: "-50%",
            left: "50%",
            x: "-50%",
            top: "35%",
            backgroundColor: isNavOpen ? "white" : "black",
          }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 "
          style={{
            left: "50%",
            x: "-50%",
            top: "50%",
            y: "-50%",
            backgroundColor: isNavOpen ? "white" : "black",
          }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 "
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
            backgroundColor: isNavOpen ? "white" : "black",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default AnimatedHamburgerButton;

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
