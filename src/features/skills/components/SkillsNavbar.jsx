import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

const tabs = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "db", label: "DB" },
  { key: "cloud", label: "Cloud / DevOps" },
];

const SkillsNavbar = ({ activeTab, onChange }) => {
  return (
    <div className="p-5">
      {/* Apple-like frosted container */}
      <div
        className="
          rounded-2xl
          bg-white/40 dark:bg-white/10
          backdrop-blur-2xl
          border border-white/30 dark:border-white/15
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          px-3 py-3
        "
      >
        <AnimateSharedLayout>
          <div className="flex flex-wrap gap-3 justify-around">
            {tabs.map((t) => {
              const isActive = activeTab === t.key;

              return (
                <motion.button
                  key={t.key}
                  type="button"
                  layout
                  onClick={() => onChange(t.key)}
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                  className={[
                    // ✅ same size
                    "flex-1 min-w-[120px] sm:min-w-[140px] md:min-w-[160px]",
                    "rounded-xl",
                    "relative",
                    "flex items-center justify-center",
                    "px-4",
                    "text-sm font-semibold",
                    "border",
                    "select-none",
                    "overflow-hidden",

                    // ✅ base glass (inactive)
                    "bg-white/30 dark:bg-white/5",
                    "backdrop-blur-xl",
                    "border-white/25 dark:border-white/10",
                    "text-slate-800 dark:text-slate-200",

                    // ✅ height + depth transition handled by motion
                    isActive
                      ? "h-14 shadow-[0_10px_25px_rgba(0,0,0,0.10)]"
                      : "h-12 shadow-[0_6px_18px_rgba(0,0,0,0.06)]",
                  ].join(" ")}
                >
                  {/* ✅ Animated active glow layer */}
                  {isActive && (
                    <motion.div
                      layoutId="active-glass"
                      className="
                        absolute inset-0
                        rounded-xl
                        bg-white/55 dark:bg-white/12
                        ring-1 ring-white/30 dark:ring-white/10
                      "
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 35,
                      }}
                    />
                  )}

                  {/* ✅ Label always above glow */}
                  <span className="relative z-10">
                    {t.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </AnimateSharedLayout>
      </div>
    </div>
  );
};

export default SkillsNavbar;
