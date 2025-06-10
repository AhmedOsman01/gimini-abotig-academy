/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-sans text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-600 to-indigo-700 py-14 md:py-20 px-4 md:px-0 shadow-lg mb-6 overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-white"></div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="md:w-2/3">
            {/* Breadcrumb */}
            <nav className="mb-5" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-blue-100">
                <li>
                  <Link href="/" className="hover:text-white transition">Home</Link>
                </li>
                <li>
                  <span className="mx-2 text-blue-200">/</span>
                </li>
                <li className="text-white font-semibold">Contact</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mb-6">
              Reach out to Ahmed Osman Elhady for collaboration, questions, or just to say hello!
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="tel:01101476854"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-medium py-2.5 px-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <FaPhone /> Call Now
              </a>
              <a
                href="mailto:ahmed@example.com"
                className="inline-flex items-center gap-2 bg-indigo-800 text-white font-medium py-2.5 px-5 rounded-lg shadow-sm hover:bg-indigo-900 transition-all duration-200"
              >
                <FaEnvelope /> Email Me
              </a>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-lg opacity-70"></div>
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=Ahmed+Osman+Elhady&backgroundColor=4f46e5"
                alt="Ahmed Osman Elhady"
                className="relative z-10 object-cover w-40 h-40 rounded-full border-4 border-white/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4 md:px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <img
                  src="https://api.dicebear.com/7.x/initials/svg?seed=Ahmed+Osman+Elhady&backgroundColor=4f46e5"
                  alt="Ahmed Osman Elhady"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Ahmed Osman Elhady</h2>
                <p className="text-blue-600">Full Stack Developer</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <FaPhone className="text-blue-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:01101476854" className="text-gray-800 hover:text-blue-600">+20 110 147 6854</a>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <FaEnvelope className="text-blue-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:ahmed@example.com" className="text-gray-800 hover:text-blue-600">ahmed@example.com</a>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4 mt-6">
                <a href="https://github.com" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <FaGithub className="text-gray-700 text-xl" />
                </a>
                <a href="https://linkedin.com" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <FaLinkedin className="text-gray-700 text-xl" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
              <FaReact className="text-4xl text-blue-500 mb-2" />
              <span className="font-medium">React</span>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
              <FaJs className="text-4xl text-yellow-500 mb-2" />
              <span className="font-medium">JavaScript</span>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
              <FaPython className="text-4xl text-blue-600 mb-2" />
              <span className="font-medium">Python</span>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
              <FaHtml5 className="text-4xl text-orange-500 mb-2" />
              <span className="font-medium">HTML5</span>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
              <FaCss3Alt className="text-4xl text-blue-400 mb-2" />
              <span className="font-medium">CSS3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
