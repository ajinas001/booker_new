"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import ScrollToTop from "@/components/ScrollToTop";

const officeAddress = [
  "R364 Al Wasl Building",
  "Unique World Business Center",
  "Office 12 (2nd floor)",
  "Opp Civil Defence Station",
  "Al Karama, Dubai, United Arab Emirates",
];

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* --- HERO --- */}
        <section className="relative overflow-hidden text-white bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/contactus.webp"
            alt="Contact Background"
            fill
            priority
            className="object-cover object-center transform-gpu"
            style={{
              WebkitTransform: "translateZ(0)",
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-lg flex justify-center md:justify-start flex-wrap text-gray-300 gap-x-2 mb-4"
          >
            <Link href="/" className="hover:text-textprimary transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-textprimary font-medium">Contact Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-textprimary">
              Contact Us
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl"
          >
            Connect with our experts to ensure financial precision, compliance,
            and complete peace of mind.
          </motion.p>
        </div>
      </section>

      {/* --- CONTACT INFO --- */}
      <motion.section
        className="py-20 px-6 md:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto space-y-4">
          {/* Office Location */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between pt-8 pb-8 border-b border-gray-200"
          >
            <div className="flex items-center gap-3 text-3xl font-normal text-gray-800 md:w-1/3">
              <MapPin className="w-8 h-8 text-gray-500" />
              <p>Office</p>
            </div>
            <div className="flex flex-col text-lg md:w-1/3 space-y-1">
              {officeAddress.map((line, i) => (
                <p key={i} className="text-gray-700 font-medium">
                  {line}
                </p>
              ))}
              <Link
                href="https://www.google.com/maps?q=25.2474167,55.3088056"
                target="_blank"
                className="inline-flex items-center text-gray-900 font-semibold mt-6 group w-fit hover:text-blue-600 transition-colors"
              >
                <span>View on Google Maps</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between pt-8 pb-8 border-b border-gray-200"
          >
            <div className="flex items-center gap-3 text-3xl font-normal text-gray-800 md:w-1/3">
              <Clock className="w-8 h-8 text-gray-500" />
              <p>Business Hours</p>
            </div>
            <div className="text-lg text-gray-700 md:w-1/3">
              <p className="font-semibold">Monday – Saturday</p>
              <p>9:00 AM – 6:00 PM</p>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between pt-8 pb-8 border-b border-gray-200"
          >
            <p className="text-3xl font-normal text-gray-800 md:w-1/3">
              Get in Touch
            </p>
            <div className="flex flex-col gap-4 text-lg md:w-1/3">
              <Link
                href="tel:+971567678156"
                className="flex items-center gap-3 hover:text-gray-600"
              >
                <Phone className="w-5 h-5" /> +971 567678156
              </Link>
              <Link
                href="mailto:info@bookeraccounting.com"
                className="flex items-center gap-3 hover:text-gray-600"
              >
                <Mail className="w-5 h-5" /> Info@bookeraccounting.com
              </Link>
              <Link
                href="https://wa.me/971567678156"
                target="_blank"
                className="flex items-center gap-3 hover:text-green-600"
              >
                <MessageCircle className="w-5 h-5" /> Message on WhatsApp
              </Link>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between pt-8 pb-4"
          >
            <p className="text-3xl font-normal text-gray-800 md:w-1/3">
              Social Media
            </p>
            <div className="flex gap-6 md:w-1/3 items-center">
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <Facebook className="w-8 h-8" />
              </Link>
              <Link href="#" className="hover:text-pink-600 transition-colors">
                <Instagram className="w-8 h-8" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/bookeraccounting/"
                target="_blank"
                className="hover:text-blue-700 transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      
      <ScrollToTop />
      <Footer />
    </div>
  );
}
