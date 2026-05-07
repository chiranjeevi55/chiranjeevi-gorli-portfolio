import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import ProfilePic from "../../../assets/ProfilePic.jpg";

/* ===================== Variants ===================== */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageAnim = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ===================== Typewriter Component ===================== */
/* Character-by-character reveal using motion value + transform + animate() [1](https://www.framer.com/academy/lessons/framer-animations-text-effects) */
const TypewriterText = ({
  text,
  className = "",
  duration = 3.2, // typing speed (seconds)
  delay = 0.6,    // delay before typing starts
  cursor = true,
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration,
      ease: "linear",
      delay,
    });

    return controls.stop;
  }, [count, text, duration, delay]);

  return (
    <p className={className}>
      <motion.span>{displayText}</motion.span>

      {cursor ? (
        <motion.span
          className="inline-block ml-1 w-[2px] h-[1em] bg-slate-700 align-[-2px]"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      ) : null}
    </p>
  );
};

/* ===================== Hero ===================== */

const Hero = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-5 flex flex-col md:flex-row md:justify-around gap-8 px-4 sm:px-6 md:px-10 py-6 md:py-10"
    >
      {/* Left */}
      <div className="w-full md:w-1/3 md:-ml-10">
        <motion.h3
          variants={fadeUp}
          className="text-3xl font-semibold mb-2 mt-6 md:mt-10 font-sans"
        >
          Chiranjeevi Gorli
        </motion.h3>

        <motion.h2
          variants={fadeUp}
          className="text-xl font-semibold mb-5 uppercase font-sans"
        >
          Senior Software Engineer
        </motion.h2>

        {/* ✅ Typing paragraph (wrapped with variants for entrance timing) */}
        <motion.div variants={fadeUp} className="h-[72px] md:h-[64px]">
          <TypewriterText
            text="Software Developer from Hyderabad, India, with strong experience in building scalable backend and full‑stack applications using modern technologies."
            className="text-gray-700 font-mono"
            duration={3.2}
            delay={0.6}
            cursor={true}
          />
        </motion.div>
      </div>

      {/* Right image */}
      <motion.div
        variants={imageAnim}
        className="mt-15 w-full md:w-auto flex items-center justify-center md:justify-start"
      >
        {/* Vanishing gradient border */}
        <div className="w-full md:w-auto flex items-center justify-center md:justify-start">
          <div
            className="
              relative
              p-[2px]
              rounded-full
              bg-gradient-to-br
              from-slate-300/80
              via-slate-200/40
              to-transparent
            "
          >
            <div
              className="
                h-44 w-44
                md:h-52 md:w-52
                rounded-full
                bg-white
                border border-slate-200
                shadow-xl shadow-black/10
                overflow-hidden
              "
            >
              <img
                src={ProfilePic}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
