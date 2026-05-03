import React, { useMemo, useState } from "react";
import SkillsNavbar from "./SkillsNavbar";
import { skillCategories } from "../../../data/Skills";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const current = useMemo(() => skillCategories[activeTab], [activeTab]);

  return (
    <div className="mt-8">
      <SkillsNavbar activeTab={activeTab} onChange={setActiveTab} />

      <div className="mt-6">

        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {current.items.map((s) => (
            <div
              key={s.name}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-900"
            >
              <img src={s.logo} alt={s.name} className="h-8 w-8" />
              <p className="font-medium">{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;