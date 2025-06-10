import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 text-white pt-12 pb-8 overflow-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute -top-10 -left-10 w-56 h-56 bg-blue-300 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 right-0 w-72 h-72 bg-cyan-400 opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/30 flex items-center justify-center rounded-xl shadow-lg">
                <span className="text-2xl text-blue-500 font-bold">🌙</span>
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white drop-shadow">
                Front-End Academy
              </span>
            </div>
            <p className="text-cyan-50/90">
              Dive into modern web development with Ahmed Osman’s courses. Learn,
              build, and grow your skills for the future.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white/90">Courses</h4>
            <ul className="space-y-2 text-cyan-50/80">
              <li>
                <a
                  href="/html"
                  className="hover:text-white transition-colors"
                >
                  HTML Basics
                </a>
              </li>
              <li>
                <a
                  href="/css"
                  className="hover:text-white transition-colors"
                >
                  CSS Mastery
                </a>
              </li>
              <li>
                <a
                  href="/javascript"
                  className="hover:text-white transition-colors"
                >
                  JavaScript Pro
                </a>
              </li>
              <li>
                <a
                  href="/react"
                  className="hover:text-white transition-colors"
                >
                  React Expert
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white/90">Academy</h4>
            <ul className="space-y-2 text-cyan-50/80">
              <li>
                <a
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white/90">Connect</h4>
            <ul className="space-y-2 text-cyan-50/80">
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cyan-100/20 mt-10 pt-8 text-center text-cyan-50/80">
          <p>
            &copy; 2025 Ahmed Osman’s Front-End Academy. All rights reserved.
          </p>
        </div>
      </div>
      {/* Decorative SVG */}
      <div className="absolute top-0 left-0 w-full flex items-start pointer-events-none">
        <svg
          className="w-full"
          height="48"
          viewBox="0 0 1440 48"
          fill="none"
          style={{ zIndex: 1 }}
        >
          <path
            fill="#fff"
            fillOpacity="0.15"
            d="M0,10L48,16C96,22,192,34,288,34C384,34,480,22,576,10C672,-2,768,-14,864,-14C960,-14,1056,-2,1152,10C1248,22,1344,34,1392,41L1440,48V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0V10Z"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
