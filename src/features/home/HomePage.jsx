import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import HomeContent from "./components/HomeContent";
import WorksPage from "../works/WorksPage";
import CareerPage from "../career/CareerPage";
import ContactPage from "../contact/ContactPage";

const baseLink =
  "px-4 py-2 rounded-full text-xl font-bold transition-colors"; // remove transition if you don't want it
const inactiveLink =
  "text-slate-700 hover:bg-slate-100/60";
const activeLink =
  "bg-white/15 backdrop-blur-xl border border-white/25 ring-1 ring-white/15 shadow-[0_8px_20px_rgba(0,0,0,0.10)] text-slate-900";

const HomePage = () => {
  return (
    <div className="mx-15 my-10 h-max rounded-3xl shadow-2xl shadow-black px-15 py-10">
      <div className="flex justify-between items-center">
        <div>
          <NavLink
            to="/"
            end
            className="text-5xl font-extrabold font-sans tracking-wide"
          >
            CG
          </NavLink>
        </div>

        <div className="flex gap-15 pr-15">
          <NavLink
            to="works"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : inactiveLink}`
            }
          >
            My Works
          </NavLink>

          <NavLink
            to="career"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : inactiveLink}`
            }
          >
            Career
          </NavLink>

          <NavLink
            to="contact"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeLink : inactiveLink}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="works" element={<WorksPage />} />
        <Route path="career" element={<CareerPage /> }/>
        <Route path="contact" element={<ContactPage />}/>
      </Routes>
    </div>
  );
};

export default HomePage;