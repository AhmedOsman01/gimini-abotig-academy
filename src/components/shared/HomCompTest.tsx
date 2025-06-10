// /* eslint-disable @next/next/no-img-element */
// import Link from 'next/link';
// import SliderHome from "@/components/SliderHome";
// import HeroSection from "@/components/shared/HeroSection";
// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import { cards } from "@/utils/data"; // Assuming you have a data file for cards


// export default function Home() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="min-h-screen h-full bg-gradient-to-br from-blue-50 to-purple-100 font-sans text-gray-800">
//       {/* Navbar (Optional, but good practice) */}
//       <HeroSection />
//       {/* Learning Sections */}
//       <main className="container mx-auto py-8 px-2 sm:px-4 md:px-6 h-full">
//         {/* Motion wrapper for the grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 xl:gap-10 relative h-full">
//           {cards.map((card, idx) => (
//             <motion.div
//               key={card.title}
//               className={`bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col justify-between min-h-[400px] md:min-h-[370px] lg:min-h-[350px] h-full transform transition duration-300 hover:scale-105 hover:shadow-2xl border-t-4 ${card.border} relative z-50`}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: idx * 0.18, ease: "easeOut" }}
//             >
//               <div className="flex flex-col items-center flex-1">
//                 <img src={card.icon} alt={`${card.title} icon`} className="w-12 h-12 md:w-14 md:h-14 mb-4" />
//                 <h2 className={`text-2xl md:text-3xl font-bold ${card.text} mb-3 md:mb-4 text-center`}>{card.title}</h2>
//                 <p className="text-gray-700 mb-4 md:mb-6 text-center text-base md:text-lg">{card.desc}</p>
//               </div>
//               <div className="pt-4 flex w-full">
//                 <Link href={card.href} passHref>
//                   <button className={`${card.btn} text-white px-4 md:px-6 py-2 rounded-full font-semibold transition duration-300 cursor-pointer ease-in-out w-full`}>
//                     Learn More
//                   </button>
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-10">
//           <SliderHome />
//         </div>
//       </main>

//       {/* Responsive Animations */}
//       <style jsx global>{`
//         @keyframes fadeInDown {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes popIn {
//           from {
//             opacity: 0;
//             transform: scale(0.8);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         .animate-fade-in-down {
//           animation: fadeInDown 1s ease-out forwards;
//         }

//         .animate-fade-in-up {
//           animation: fadeInUp 1s ease-out forwards;
//           animation-delay: 0.2s;
//         }

//         .animate-pop-in {
//           animation: popIn 0.6s ease-out forwards;
//           animation-delay: 0.4s;
//         }
//       `}</style>
//     </div>
//   );
// }


/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import SliderHome from "@/components/SliderHome";
import HeroSection from "@/components/shared/HeroSection";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cards, testimonials, features } from "@/utils/data"; // Assuming you have a data file for cards


export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen h-full overflow-hidden bg-gradient-to-br from-blue-50 to-purple-100 font-sans text-gray-800">
      {/* Hero Section */}
      <div className='w-full'>
        <HeroSection />
      </div>
      {/* Learning Sections - Your existing cards */}
      <section className='py-20 mb-2 bg-white/60 backdrop-blur-sm'>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Master Frontend Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your learning path and start building amazing web experiences with our comprehensive courses
            </p>
          </motion.div>
          {/* Motion wrapper for the grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 xl:gap-10 relative h-full">
            {cards.map((card, idx) => (
              <motion.div
                key={card.title}
                className={`bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col justify-between min-h-[400px] md:min-h-[370px] lg:min-h-[350px] h-full transform transition duration-300 hover:scale-105 hover:shadow-2xl border-t-4 ${card.border} relative z-50`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.18, ease: "easeOut" }}
              >
                <div className="flex flex-col items-center flex-1">
                  <img src={card.icon} alt={`${card.title} icon`} className="w-12 h-12 md:w-14 md:h-14 mb-4" />
                  <h2 className={`text-2xl md:text-3xl font-bold ${card.text} mb-3 md:mb-4 text-center`}>{card.title}</h2>
                  <p className="text-gray-700 mb-4 md:mb-6 text-center text-base md:text-lg">{card.desc}</p>
                </div>
                <div className="pt-4 flex w-full">
                  <Link href={card.href} passHref>
                    <button className={`${card.btn} text-white px-4 md:px-6 py-2 rounded-full font-semibold transition duration-300 cursor-pointer ease-in-out w-full`}>
                      Learn More
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-2 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-5">
          <SliderHome />
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 mb-2 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to become a successful frontend developer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 mb-2 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join thousands of successful developers who started their journey with us
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={activeTestimonial}
              className="bg-white rounded-xl p-8 md:p-12 shadow-2xl text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={testimonials[activeTestimonial].avatar}
                alt={testimonials[activeTestimonial].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
              />
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic">
                {testimonials[activeTestimonial].content}
              </blockquote>
              <div className="font-bold text-gray-800 text-lg">
                {testimonials[activeTestimonial].name}
              </div>
              <div className="text-blue-600 font-medium">
                {testimonials[activeTestimonial].role}
              </div>
            </motion.div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial ? 'bg-white' : 'bg-white/40'
                    }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section
      <section className="py-16 mb-5 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}


      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Start Your Frontend Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our community of learners and start building your dream career in frontend development today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/signup">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Learning Now
                </motion.button>
              </Link>
              <Link href="/courses">
                <motion.button
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Course Catalog
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}


      {/* Responsive Animations */}
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          animation-delay: 0.2s;
        }

        .animate-pop-in {
          animation: popIn 0.6s ease-out forwards;
          animation-delay: 0.4s;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
        }
      `}</style>
    </div>
  );
}