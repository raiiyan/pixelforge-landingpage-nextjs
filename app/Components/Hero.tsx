"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-img.jpg')" }} // Replace with your own image path
    >
      {/* Optional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#93C5FD]/20 via-[#C4B5FD]/15 to-[#FBCFE8]/10 backdrop-blur-[1px]"></div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-3xl space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-oswald text-4xl sm:text-5xl font-extrabold text-white"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Designing Tomorrow’s Interfaces, Today.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-white/90 max-w-xl mx-auto"
        >
          At PixelForge Studio, we blend creativity with code to craft seamless,
          conversion-focused digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
        >
          <Link
            href="#portfolio"
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition mx-auto sm:mx-0"
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className="mx-auto sm:mx-0 border border-white text-white px-8 py-3 rounded-xl text-sm font-semibold hover:bg-white hover:text-black transition"
          >
            Get a Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
