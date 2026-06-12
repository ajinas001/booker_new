"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import ScrollToTop from "@/components/ScrollToTop";
import { ArrowRight } from "lucide-react";


const officeAddress = [
  ' R364 Al Wasl Building',
  'Unique World Business Center',
  'Office No: 12 3rd floor',
  'Opp Civil Defence Station',
  'Al Karama, Dubai, United Arab Emirates'
];

export default function ContactPage() {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // --- Contact Form State ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  // --- Handlers ---
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 1000)); // Simulated request
      setFormData({ name: "", email: "", subject: "", message: "" });
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      <Navbar />
      {/* --- HERO --- */}
      <section className="relative overflow-hidden text-white bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/img3.webp"
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
      {/* <ContactSection /> */}

      <motion.section
        className="py-20 px-6 md:px-20 bg-primary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto space-y-10">

          {/* --- Office --- */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-col md:flex-row justify-between pt-8 pb-4">
              <p className="text-3xl font-normal text-gray-800 md:w-1/3">Office</p>

              <div className="flex flex-col text-lg md:w-1/3">
                {officeAddress.map((line, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed">{line}</p>
                ))}

                {/* Google Maps Link */}
                <Link
                  href="https://www.google.com/maps?q=25.2474167,55.3088056"
                  target="_blank"
                  className="flex items-center text-gray-800 font-medium mt-4 group w-fit"
                >
                  <span className="pb-1 border-b border-gray-800 group-hover:border-gray-600 transition-colors">
                    Google Maps
                  </span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>


              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full h-px bg-gray-300" />

          {/* --- Phone --- */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-col md:flex-row justify-between pt-8 pb-4">
              <p className="text-3xl font-normal text-gray-800 md:w-1/3">Phone</p>

              <div className="flex flex-col text-lg md:w-1/3">
                <Link
                  href="tel:+971567678156"
                  className="text-gray-800 hover:text-gray-600 underline underline-offset-4 transition-colors"
                >
                  +971 567678156
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full h-px bg-gray-300" />

          {/* --- Email --- */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-col md:flex-row justify-between pt-8 pb-4">
              <p className="text-3xl font-normal text-gray-800 md:w-1/3">Email</p>

              <div className="flex flex-col text-lg md:w-1/3">
                <Link
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bookeraccounting.com"
                  className="text-gray-800 hover:text-gray-600 underline underline-offset-4 transition-colors"
                  target="_blank"
                >
                  Info@bookeraccounting.com
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full h-px bg-gray-300" />

          {/* --- LinkedIn --- */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-col md:flex-row justify-between pt-8 pb-4">
              <p className="text-3xl font-normal text-gray-800 md:w-1/3">LinkedIn</p>

              <div className="flex flex-col text-lg md:w-1/3">
                <Link
                  href="https://www.linkedin.com/company/bookeraccounting/"
                  target="_blank"
                  className="text-gray-800 hover:text-gray-600 underline underline-offset-4 transition-colors"
                >
                  Visit our LinkedIn
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full h-px bg-gray-300" />

          {/* --- WhatsApp --- */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-col md:flex-row justify-between pt-8 pb-4">
              <p className="text-3xl font-normal text-gray-800 md:w-1/3">WhatsApp</p>

              <div className="flex flex-col text-lg md:w-1/3">
                <Link
                  href="https://wa.me/971567678156"
                  target="_blank"
                  className="text-gray-800 hover:text-gray-600 underline underline-offset-4 transition-colors"
                >
                  Message on WhatsApp
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.section>


      {/* --- FORM --- */}
      {/* <section className="py-20 px-6 md:px-20 bg-primary">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-secondary text-center mb-12"
        >
          Send us a Message
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary"
            />
          </div>

          {status === "success" && (
            <p className="text-green-600 font-semibold text-center">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-semibold text-center">
              ❌ Failed to send message. Please try again.
            </p>
          )}

          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={status === "loading"}
            className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 mt-6 text-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-full transition-all disabled:opacity-60"
          >
            <Send className="w-5 h-5" />
            <span>
              {status === "loading" ? "Sending..." : "Submit Message"}
            </span>
          </motion.button>
        </motion.form>
      </section> */}


      <FloatingMenuButton />
      <ScrollToTop />
      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}
