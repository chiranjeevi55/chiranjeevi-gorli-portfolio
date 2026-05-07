import React, { useState } from "react";
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
  "bg-white border border-slate-200 ring-1 ring-slate-200 shadow-[0_8px_20px_rgba(0,0,0,0.10)] text-slate-900";

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "works", label: "My Works" },
    { to: "career", label: "Career" },
    { to: "contact", label: "Contact" },
  ];

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-15 pr-15">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer pr-4"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${baseLink} text-base block ${isActive ? activeLink : inactiveLink}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}

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