import Link from "next/link";
import React from "react";
import { FaHtml5 } from "react-icons/fa";

const HtmlHero = () => {
  return (
    <>
      <section className="relative w-full bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 py-14 md:py-20 px-4 md:px-0 shadow-2xl rounded-b-[2.5rem] mb-6 overflow-hidden">
        {/* Decorative blurred shapes */}
        <div className="absolute -top-10 -left-10 w-56 h-56 bg-orange-300 opacity-30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 right-0 w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div>
            {/* Breadcrumb */}
            <nav className="mb-5" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-orange-100">
                <li>
                  <Link
                    href="/"
                    className="hover:underline hover:text-white transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <span className="mx-2 text-orange-200">/</span>
                </li>
                <li>
                  <Link
                    href="/courses"
                    className="hover:underline hover:text-white transition"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <span className="mx-2 text-orange-200">/</span>
                </li>
                <li className="text-white font-semibold">HTML</li>
              </ol>
            </nav>
            <div className="flex items-center gap-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-xl flex items-center tracking-tight">
                <FaHtml5 className="inline text-orange-200 mr-3" size={56} />
                HTML Mastery
              </h1>
            </div>
            <p className="text-orange-100 md:text-xl max-w-2xl mb-6 md:mb-0 font-medium">
              Learn everything about HTML, from the basics to advanced features,
              and build robust, accessible web pages with confidence.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#start"
                className="inline-block bg-white/90 hover:bg-white text-orange-700 font-bold py-2 px-6 rounded-xl shadow transition-all duration-200 border border-orange-100"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="inline-block bg-orange-700/80 hover:bg-orange-800 text-white font-bold py-2 px-6 rounded-xl shadow transition-all duration-200 border border-orange-900/10"
              >
                Explore Features
              </a>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center">
            <span className="inline-flex items-center justify-center rounded-full bg-white/30 shadow-2xl p-8 border-8 border-white/20">
              <FaHtml5 className="text-white drop-shadow-lg" size={96} />
            </span>
            <span className="mt-4 text-white/80 font-semibold tracking-wide text-lg">
              HTML5 Certified
            </span>
          </div>
        </div>
        {/* Decorative SVG with HTML Icon */}
        <div className="absolute bottom-0 left-0 w-full flex items-end pointer-events-none">
          <svg
            className="w-full"
            height="48"
            viewBox="0 0 1440 48"
            fill="none"
            style={{ zIndex: 1 }}
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,38L48,32C96,26,192,14,288,14C384,14,480,26,576,38C672,50,768,62,864,62C960,62,1056,50,1152,38C1248,26,1344,14,1392,7L1440,0V48H1392C1344,48,1248,48,1152,48C1056,48,960,48,864,48C768,48,672,48,576,48C480,48,384,48,288,48C192,48,96,48,48,48H0V38Z"
            />
          </svg>
          <span
            className="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-white rounded-full shadow-xl p-3 border-4 border-orange-200"
            style={{ zIndex: 2 }}
          >
            <FaHtml5 className="text-orange-500" size={56} />
          </span>
        </div>
      </section>
    </>
  );
};

export default HtmlHero;
