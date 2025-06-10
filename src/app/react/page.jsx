// --- Redesigned ReactPage with modern fonts, gradients, glassmorphism, and vibrant color palette ---

"use client";

import { FaChevronRight, FaReact } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import reactSections from "@/components/ReactSections";

// Main App component for React.js Presentation
const ReactPage = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 font-sans text-gray-900">
      {/* Hero Section with Breadcrumb */}
      <section className="relative w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 py-14 md:py-20 px-4 md:px-0 shadow-2xl rounded-b-[2.5rem] mb-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div>
            {/* Breadcrumb */}
            <nav className="mb-5" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-sky-100/80 font-medium">
                <li>
                  <Link
                    href="/"
                    className="hover:underline hover:text-white transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <span className="mx-2 text-sky-200/80">/</span>
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
                  <span className="mx-2 text-sky-200/80">/</span>
                </li>
                <li className="text-white font-bold">React.js</li>
              </ol>
            </nav>
            <div className="flex items-center gap-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-xl flex items-center tracking-tight">
                <FaReact className="inline text-cyan-200 mr-3" size={56} />
                React.js Mastery
              </h1>
            </div>
            <p className="text-sky-100/90 md:text-xl max-w-2xl mb-6 md:mb-0 font-medium drop-shadow">
              Build the future of the web with React. Learn components, hooks,
              state, and modern UI patterns in a vibrant, interactive
              environment.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#start"
                className="inline-block bg-white/90 hover:bg-white text-sky-700 font-extrabold py-2 px-6 rounded-xl shadow transition-all duration-200 border border-sky-100"
                style={{ fontSize: "1.05rem" }}
              >
                Get Started
              </a>
              <a
                href="#features"
                className="inline-block bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-sky-600 hover:from-fuchsia-700 hover:to-sky-700 text-white font-extrabold py-2 px-6 rounded-xl shadow transition-all duration-200 border border-fuchsia-900/10"
                style={{ fontSize: "1.05rem" }}
              >
                Explore Features
              </a>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center">
            <span className="inline-flex items-center justify-center rounded-full bg-white/30 shadow-2xl p-8 border-8 border-white/20">
              <FaReact className="text-white drop-shadow-lg" size={96} />
            </span>
            <span className="mt-4 text-white/80 font-semibold tracking-wide text-lg">
              React Certified
            </span>
          </div>
        </div>
        {/* Decorative SVG with React Icon */}
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
            className="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-white rounded-full shadow-xl p-3 border-4 border-sky-200"
            style={{ zIndex: 2 }}
          >
            <FaReact className="text-sky-500" size={56} />
          </span>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar Navigation for small screens */}
          <nav className="md:hidden w-full bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-6 mb-10 border border-sky-100/40">
            <h2 className="text-2xl font-extrabold text-indigo-700 mb-6 tracking-tight">
              Topics
            </h2>
            <ul className="space-y-2">
              {Object.keys(reactSections).map((key) => (
                <li key={key}>
                  <button
                    onClick={() => setActiveSection(key)}
                    className={`flex items-center w-full text-left py-3 px-5 rounded-xl transition-all duration-200 font-semibold ${
                      activeSection === key
                        ? "bg-indigo-100 text-indigo-700 shadow"
                        : "text-gray-700 hover:bg-indigo-50"
                    }`}
                  >
                    <span className="mr-3 text-xl">
                      {reactSections[key].icon}
                    </span>
                    {reactSections[key].title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Sidebar Navigation */}
          <nav className="hidden md:block w-full md:w-[22%] bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 flex-shrink-0 border border-sky-100/40">
            <h2 className="text-3xl font-extrabold text-indigo-700 mb-8 tracking-tight">
              React.js Features
            </h2>
            <ul className="space-y-2">
              {Object.keys(reactSections).map((key) => (
                <li key={key}>
                  <button
                    onClick={() => setActiveSection(key)}
                    className={`flex items-center w-full text-left py-3 px-6 rounded-xl transition-all duration-200 font-semibold group ${
                      activeSection === key
                        ? "bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 text-white shadow-lg"
                        : "text-gray-700 hover:bg-indigo-50"
                    }`}
                  >
                    <span className="mr-4 text-2xl">
                      {reactSections[key].icon}
                    </span>
                    <span className="flex-1">{reactSections[key].title}</span>
                    {activeSection === key && (
                      <FaChevronRight className="ml-auto text-white group-hover:text-indigo-600" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content Display Area */}
          <main className="flex-grow bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-12 md:w-[70%] min-w-0 border border-sky-100/40">
            <div className="mb-10 flex items-center gap-4">
              <span className="text-4xl">
                {reactSections[activeSection].icon}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 border-b-4 pb-3 border-indigo-100 flex-1 tracking-tight">
                {reactSections[activeSection].title}
              </h2>
            </div>
            <div className="prose max-w-none text-gray-800 prose-headings:text-indigo-700 prose-a:text-sky-600 prose-a:underline hover:prose-a:text-indigo-600 prose-code:bg-indigo-50 prose-code:rounded prose-code:px-2 prose-code:py-1 prose-code:text-base prose-code:font-semibold prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-4 prose-pre:border prose-pre:border-gray-800">
              {reactSections[activeSection].content}
              {reactSections[activeSection].example && (
                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Code Example:
                  </h3>
                  <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-base overflow-x-auto border border-gray-800 shadow-lg">
                    <code>
                      {reactSections[activeSection].example}
                    </code>
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

export default ReactPage;
