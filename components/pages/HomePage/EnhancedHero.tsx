"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EnhancedHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/SP-COMPANY-PROFILE-2025-01.png"
          alt="SP Inter Service & Supply"
          fill
          className="object-cover"
          priority
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 hero-overlay" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Animated Title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                SP INTER SERVICE & SUPPLY
              </h1>
              <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
            </motion.div>

            {/* Animated Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-xl md:text-2xl lg:text-3xl mb-8 font-light"
            >
              Excellence in Welding Services & Workshop Solutions
            </motion.p>

            {/* Animated CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
            >
              <a
                href="#about"
                className="btn-smooth inline-block bg-white text-[#213559] px-8 py-4 rounded-md font-bold text-lg hover:bg-opacity-90 shadow-lg"
              >
                Discover More
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-white text-center"
        >
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <p className="text-sm mt-2">Scroll Down</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
