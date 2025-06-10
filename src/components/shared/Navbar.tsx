/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: "/html", label: "HTML" },
  { href: "/css", label: "CSS" },
  { href: "/js", label: "JavaScript" },
  { href: "/react", label: "React.js" },
  { href: "/python", label: "Python" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 shadow-2xl overflow-hidden sticky top-0 z-[900]">
      <nav className="relative z-10 p-4 md:p-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-bold text-white drop-shadow">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
            alt="Logo"
            className="w-9 h-9 bg-white/30 rounded-xl shadow-lg"
          />
          <Link
            href="/"
            className="transition-transform duration-300 hover:scale-110 hover:text-cyan-100"
            style={{ display: "inline-block" }}
          >
            AhmedOsman
          </Link>
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-4 md:space-x-6 font-bold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center text-base font-bold py-2 px-4 rounded-xl transition-all duration-300
                    ${isActive
                      ? "bg-white/90 text-blue-700 shadow-md"
                      : "hover:bg-white/70 hover:text-blue-800 hover:scale-110 text-white"
                    }`}
                  aria-current={isActive ? "page" : undefined}
                  style={{ display: "inline-block" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* Mobile Navigation (Hamburger) */}
        <div className="lg:hidden">
          <button
            aria-label="Open menu"
            className="text-white text-3xl focus:outline-none"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 bg-opacity-95 z-[1000] flex justify-end items-start">
            <div className="w-72 h-full shadow-2xl flex flex-col p-6 animate-slide-in text-gray-800 relative bg-white/90 rounded-l-3xl border-l-4 border-cyan-200">
              <button
                aria-label="Close menu"
                className="self-end text-2xl mb-6 text-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                <FaTimes />
              </button>
              <div className="flex items-center gap-3 mb-8">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
                  alt="Logo"
                  className="w-9 h-9 bg-white/60 rounded-xl shadow"
                />
                <span className="text-xl font-extrabold text-blue-700 tracking-tight">AhmedOsman</span>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block py-2 px-4 rounded-xl text-lg font-bold transition-all duration-200
                          ${isActive
                            ? "bg-blue-600 text-white shadow"
                            : "hover:bg-blue-50 hover:text-blue-700"
                          }`}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto pt-10">
                <div className="text-center text-cyan-700 font-semibold text-base">
                  Dive into modern web development with Ahmed Osman’s courses.
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Decorative SVG wave */}
      <div className="absolute bottom-0 left-0 w-full flex items-end pointer-events-none">
        <svg
          className="w-full"
          height="32"
          viewBox="0 0 1440 32"
          fill="none"
          style={{ zIndex: 1 }}
        >
          <path
            fill="#fff"
            fillOpacity="0.18"
            d="M0,10L48,16C96,22,192,34,288,34C384,34,480,22,576,10C672,-2,768,-14,864,-14C960,-14,1056,-2,1152,10C1248,22,1344,34,1392,41L1440,32V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0V10Z"
          />
        </svg>
      </div>
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.3s cubic-bezier(0.4,0,0.2,1) forwards;
        }
      `}</style>
    </header>
  );
};

export default Navbar;