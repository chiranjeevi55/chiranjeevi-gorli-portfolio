import React from "react";
import { motion } from "framer-motion";
import SkillsSection from "./SkillSection";

/* ================= Animations ================= */

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

const scaleFade = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ================= Component ================= */

const SkillsOverview = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Backend / Frontend Description */}
      <motion.div
        variants={fadeUp}
        className="bg-gray-200 rounded-xl p-15"
      >
        <div className="p-5 md:mx-8">
          <motion.h2
            variants={fadeUp}
            className="text-lg font-black uppercase mb-3"
          >
            Backend
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mb-5"
          >
            I build scalable and maintainable backend applications using{" "}
            <strong>Java (Spring, Spring Boot)</strong> and{" "}
            <strong>Python (FastAPI, Flask)</strong>. I specialize in REST API
            development, microservices, data processing, and AI-powered
            integrations using <strong>Azure OpenAI API</strong>.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-lg font-black uppercase mb-3"
          >
            Frontend
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mb-5"
          >
            I build modern single-page applications using{" "}
            <strong>React.js</strong>, focusing on clean component-based
            architecture, responsive design, and seamless integration with
            backend services using{" "}
            <strong>HTML, CSS, JavaScript, and Tailwind CSS</strong>.
          </motion.p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        variants={scaleFade}
        className="p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mt-8"
      >
        <motion.p
          variants={fadeUp}
          className="capitalize mt-2 text-lg"
        >
          What I Work With
        </motion.p>

        <motion.div variants={fadeUp}>
          <SkillsSection />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsOverview;