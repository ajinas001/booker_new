"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Building,
  FileCheck,
  XCircle,
  FileText,
  Users,
} from "lucide-react";
import {
  LuSettings2,
  LuMapPinned,
  LuRocket,
  LuShieldCheck,
} from "react-icons/lu";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import ScrollToTop from "@/components/ScrollToTop";
const featureItems = [
  {
    icon: <LuSettings2 className="text-teal-500 text-2xl" />,
    text: "Expert guidance on entity setup & structuring",
  },
  {
    icon: <LuMapPinned className="text-teal-500 text-2xl" />,
    text: "Freezone, Mainland & Offshore formation",
  },
  {
    icon: <LuRocket className="text-teal-500 text-2xl" />,
    text: "End-to-end PRO & visa processing support",
  },
  {
    icon: <LuShieldCheck className="text-teal-500 text-2xl" />,
    text: "Compliance, secretarial & governance",
  },
];

const services = [
  {
    id: 1,
    icon: Building,
    title: "Mainland Company Formation",
    description:
      "Full assistance with licensing and registration for conducting business across the local market.",
  },
  {
    id: 2,
    icon: Building,
    title: "Freezone Business Setup",
    description:
      "Streamlined processes for 100% foreign ownership and specialized free zone benefits.",
  },
  {
    id: 3,
    icon: FileCheck,
    title: "Company Secretarial Service",
    description:
      "Ensuring regulatory compliance, corporate governance, and maintenance of statutory records.",
  },
  {
    id: 4,
    icon: XCircle,
    title: "Liquidation / De-registration",
    description:
      "Managing the complex official process for closing down or de-registering a business entity.",
  },
  {
    id: 5,
    icon: FileText,
    title: "ICV Consultancy",
    description:
      "Support for increasing your In-Country Value (ICV) score to qualify for government and semi-government contracts.",
  },
  {
    id: 6,
    icon: Users,
    title: "PRO Service",
    description:
      "Public Relations Officer (PRO) services for government liaison, visa processing, and document clearance.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function BusinessSupportPage() {
  return (
    <>
    <Navbar/>
      {/* ✅ HERO SECTION (iOS optimized) */}
      <section className="relative text-white overflow-hidden will-change-transform">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* ✅ Next.js Image handles memory better than CSS background on iOS */}
          <div className="relative w-full h-full">
            <Image
              src="/images/img3.webp"
              alt="Business support background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center pointer-events-none select-none"
              style={{
                transform: "translate3d(0,0,0)",
                backfaceVisibility: "hidden",
              }}
            />
          </div>

          {/* ✅ Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
        </motion.div>

        {/* ✅ Foreground content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="text-sm md:text-lg flex justify-center md:justify-start text-gray-300 flex-wrap gap-x-2">
              <Link href="/">
                <span className="text-white hover:text-textprimary transition-colors">
                  Home
                </span>
              </Link>
              &nbsp;›&nbsp;<span>Services</span>&nbsp;›&nbsp;
              <span className="text-textprimary font-medium">
                Business Support Service
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Business{" "}
            <span className="text-transparent bg-clip-text bg-textprimary">
              Support Service
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto md:mx-0"
          >
            Simplified Setup. Seamless Operations. Continuous Compliance.
          </motion.p>
        </div>
      </section>

      {/* ✅ ABOUT SECTION */}
      <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:space-x-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Your Partner in <br />
            <span className="text-textsecondary">
              Business Growth & Compliance
            </span>
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            From company setup to compliance, we handle complexities so you can
            focus on growth.
          </p>

          <p className="text-lg text-gray-600 mb-10">
            Our advisory team ensures your business stays structured, compliant,
            and takes advantage of UAE's economic benefits.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-y-6">
            {featureItems.map((item, i) => (
              <div key={i} className="flex items-center space-x-3">
                {item.icon}
                <p className="text-base font-medium text-gray-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:w-1/2">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              width={600}
              height={500}
              src="/images/business-support.webp"
              alt="Business support UAE"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

      {/* ✅ SERVICES GRID */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Business Support Services
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Essential services for company setup, maintenance, and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map(({ id, icon: Icon, title, description }) => (
              <motion.div
                key={id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="relative p-10 rounded-3xl bg-secondary text-white overflow-hidden border border-gray-200"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.15 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 rounded-3xl"
                />

                <div className="relative z-10 flex flex-col gap-5">
                  <Icon className="h-14 w-14 opacity-90" />
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="text-base leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <ContactSection />
      <ScrollToTop/>
      <FloatingMenuButton/>
      <Footer />
    </>
  );
}

export default BusinessSupportPage;
