"use client";
import cssSections from "@/data/cssSections";
import { SiCss3 } from "react-icons/si"; // Add this line
import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";

// Helper function to apply basic syntax highlighting to CSS code

// Main App component for CSS Presentation
const CssPage = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 font-sans text-gray-900">
      <>
        {/* Hero Section with Breadcrumb */}
        <section className="relative w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 py-14 md:py-20 px-4 md:px-0 shadow-2xl rounded-b-[2.5rem] mb-6 overflow-hidden">
          {/* Decorative blurred shapes */}
          <div className="absolute -top-10 -left-10 w-56 h-56 bg-blue-400 opacity-30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 right-0 w-72 h-72 bg-purple-400 opacity-20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-5" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-sm text-blue-100">
                  <li>
                    <Link
                      href="/"
                      className="hover:underline hover:text-white transition"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <span className="mx-2 text-blue-200">/</span>
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
                    <span className="mx-2 text-blue-200">/</span>
                  </li>
                  <li className="text-white font-semibold">CSS</li>
                </ol>
              </nav>
              <div className="flex items-center gap-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-xl flex items-center tracking-tight">
                  <SiCss3 className="inline text-blue-200 mr-3" size={56} />
                  CSS Mastery
                </h1>
              </div>
              <p className="text-blue-100 md:text-xl max-w-2xl mb-6 md:mb-0 font-medium">
                Learn everything about CSS, from the basics to advanced
                features, and build beautiful, responsive web interfaces with
                confidence.
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="#start"
                  className="inline-block bg-white/90 hover:bg-white text-blue-700 font-bold py-2 px-6 rounded-xl shadow transition-all duration-200 border border-blue-100"
                >
                  Get Started
                </a>
                <a
                  href="#features"
                  className="inline-block bg-blue-700/80 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-xl shadow transition-all duration-200 border border-blue-900/10"
                >
                  Explore Features
                </a>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-center">
              <span className="inline-flex items-center justify-center rounded-full bg-white/30 shadow-2xl p-8 border-8 border-white/20">
                <SiCss3 className="text-white drop-shadow-lg" size={96} />
              </span>
              <span className="mt-4 text-white/80 font-semibold tracking-wide text-lg">
                CSS3 Certified
              </span>
            </div>
          </div>
          {/* Decorative SVG with CSS Icon */}
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
              className="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-white rounded-full shadow-xl p-3 border-4 border-blue-200"
              style={{ zIndex: 2 }}
            >
              <SiCss3 className="text-blue-500" size={56} />
            </span>
          </div>
        </section>
      </>

      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation for small screens */}
          <nav className="md:hidden w-full bg-white rounded-2xl shadow-lg p-5 mb-8">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Topics</h2>
            <ul className="space-y-2">
              {Object.keys(cssSections).map((key) => (
                <li key={key}>
                  <button
                    onClick={() => setActiveSection(key)}
                    className={`flex items-center w-full text-left py-2 px-4 rounded-lg transition-all duration-200 ${
                      activeSection === key
                        ? "bg-blue-100 text-blue-700 font-semibold"
                        : "text-gray-700 hover:bg-blue-50"
                    }`}
                  >
                    <span className="mr-2">{cssSections[key].icon}</span>
                    {cssSections[key].title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Sidebar Navigation */}
          <nav className="hidden md:block w-full md:w-[20%] bg-white rounded-2xl shadow-xl p-6 flex-shrink-0">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">
              CSS Features
            </h2>
            <ul className="space-y-2">
              {Object.keys(cssSections).map((key) => (
                <li key={key}>
                  <button
                    onClick={() => setActiveSection(key)}
                    className={`flex items-center w-full text-left py-3 px-5 rounded-xl transition-all duration-200 group ${
                      activeSection === key
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-blue-50"
                    }`}
                  >
                    <span className="mr-3 text-lg">
                      {cssSections[key].icon}
                    </span>
                    <span className="flex-1">{cssSections[key].title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content Display Area */}
          <main className="flex-grow bg-white rounded-2xl shadow-xl p-8 md:w-[70%] min-w-0">
            <div className="mb-8 flex items-center gap-3">
              <span className="text-3xl">
                {cssSections[activeSection].icon}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 border-b-2 pb-2 border-blue-100 flex-1">
                {cssSections[activeSection].title}
              </h2>
            </div>
            <div className="prose max-w-none text-gray-700">
              {cssSections[activeSection].content}
              {cssSections[activeSection].example && (
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    Code Example:
                  </h3>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto border border-gray-800">
                    <code
                      dangerouslySetInnerHTML={highlightCss(
                        cssSections[activeSection].example
                      )}
                    />
                  </pre>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CssPage;
