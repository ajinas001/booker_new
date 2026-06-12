"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center bg-primary text-white"
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/business5.webp"
          alt="Accounting Team"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay Layers */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-primary/90 via-dark-primary/70 to-transparent z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 w-full flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">
            <span className="block">Strategic Expertise From</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-secondary animate-gradient">
              Dedicated Advisors
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            At Booker Accounting, we deliver tailored, technology-driven
            solutions to drive your success in the UAE's dynamic financial
            landscape.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block text-white text-lg font-semibold px-8 py-3 rounded-full border-2 hover:shadow-xl transition-all"
          >
            Get Started
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
