import React, { useEffect, useState } from "react";
import Link from "next/link";

const gradients = [
  "linear-gradient(135deg, #fbbf24 0%, #3b82f6 40%, #06b6d4 70%, #a78bfa 100%)",
  "linear-gradient(135deg, #f472b6 0%, #60a5fa 50%, #818cf8 100%)",
  "linear-gradient(135deg, #34d399 0%, #3b82f6 50%, #a78bfa 100%)",
  "linear-gradient(135deg, #fbbf24 0%, #f472b6 50%, #818cf8 100%)",
];

function HeroSection() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % gradients.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 py-14 md:py-20 px-4 md:px-0 rounded-b-[2.5rem] mb-6 overflow-hidden"
        style={{
          background: gradients[bgIndex],
          minHeight: "40vh",
          maxHeight: "60vh",
          transition: "background 1.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Decorative blurred shapes */}
        <div className="absolute -top-10 -left-10 w-56 h-56 bg-blue-300 opacity-30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 right-0 w-72 h-72 bg-cyan-400 opacity-20 rounded-full blur-3xl pointer-events-none" />

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
                <li className="text-white font-semibold">Courses</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-xl flex items-center tracking-tight">
              Ahmed Osman{" "}
              <span className="ml-3 text-cyan-100">Courses</span>
            </h1>
            <p className="text-blue-100 md:text-xl max-w-2xl mb-6 md:mb-0 font-medium">
              Dive into the world of web development with comprehensive courses on
              HTML, CSS, JavaScript, and React.js. Your journey to becoming a
              skilled front-end developer starts here.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="/html"
                className="inline-block bg-white/90 hover:bg-white text-blue-700 font-bold py-2 px-6 rounded-xl shadow transition-all duration-200 border border-blue-100"
              >
                Start Learning Now
              </Link>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center">
            <span className="inline-flex items-center justify-center rounded-full bg-white/30 shadow-2xl p-8 border-8 border-white/20">
              <span className="text-5xl text-blue-400 font-bold">🌙</span>
            </span>
            <span className="mt-4 text-white/80 font-semibold tracking-wide text-lg">
              Front-End Academy
            </span>
          </div>
        </div>
        {/* Decorative SVG */}
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
            <span className="text-blue-500 text-3xl">🌙</span>
          </span>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
