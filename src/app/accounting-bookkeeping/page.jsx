"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import ScrollToTop from "@/components/ScrollToTop";

const offerings = [
  {
    title: "Accounting & Financial Reporting",
    details:
      "Complete management of your general ledger, accounts payable/receivable, and generation of financial statements (P&L, Balance Sheet, Cash Flow).",
  },
  {
    title: "Cloud-Based Accounting Solutions",
    details:
      "Implementation and support of cloud accounting platforms like QuickBooks & Xero — real-time financial access from anywhere.",
  },
  {
    title: "Audit Preparation & Compliance Support",
    details:
      "Preparation and organization of required documents for audits, ensuring full compliance with UAE regulations.",
  },
  {
    title: "Chart of Accounts & Compliance Structuring",
    details:
      "Design and optimization of chart of accounts aligned with UAE Corporate Tax & VAT regulations.",
  },
  {
    title: "Inventory & Fixed Asset Verification",
    details:
      "Physical verification and reconciliation of inventory & fixed assets ensuring accurate asset valuation.",
  },
];

const features = [
  {
    icon: (
      <svg
        className="w-12 h-12 text-teal-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          d="M12 3l8 4v5c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V7l8-4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description:
      "Local expertise with global standards (IFRS, UAE VAT, Corporate Tax)",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-teal-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          d="M3 17l6-6 4 4 7-7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14 4h7v7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description: "Scalable solutions for startups, SMEs, and large businesses",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-teal-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M7 8h10M7 12h6" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 16l2 2 3-3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description: "Transparent pricing & reliable communication",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-teal-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8l3 4-3 4-3-4 3-4z" fill="currentColor" />
      </svg>
    ),
    description: "AI-powered insights & automation",
  },
];

export default function AccountingPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>

    <Navbar/>
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white bg-black">
        {/* Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/images/img3.webp"
            alt="Accounting & Bookkeeping"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transform-gpu"
            style={{
              WebkitTransform: "translateZ(0)",
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80 pointer-events-none" />
        </motion.div>

        {/* Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="text-sm md:text-lg flex flex-wrap text-gray-300 gap-x-2">
              <Link
                href="/"
                className="text-white hover:text-textprimary transition-colors"
              >
                Home
              </Link>
              <span>›</span>
              <span>Services</span>
              <span>›</span>
              <span className="text-textprimary font-medium">
                Accounting & Bookkeeping
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Accounting &{" "}
            <span className="text-transparent bg-clip-text bg-textprimary">
              Bookkeeping
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            End-to-end accounting and bookkeeping solutions that ensure
            financial accuracy, compliance, and better business control.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:space-x-12 items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 space-y-6">
            <p className="text-lg text-gray-600">
              In today’s fast-moving business environment, accurate bookkeeping
              and compliant financial reporting are the backbone of sustainable
              growth.
            </p>
            <p className="text-lg text-gray-600">
              We offer expert bookkeeping and accounting services that combine
              local insights, global standards, and cloud-based technology.
            </p>
          </div>
          <div className="lg:w-1/2 relative rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/accounting.webp"
              alt="Accounting team"
              width={600}
              height={500}
              className="object-cover w-full h-full transform-gpu"
            />
          </div>
        </div>
      </section>

      {/* Offerings Accordion */}
      <section className="max-w-7xl mx-auto pb-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          BAC Accounting &{" "}
          <span className="text-transparent bg-clip-text bg-textsecondary">
            Compliance Offering
          </span>
        </motion.h2>

        <div className="space-y-6">
          {offerings.map((item, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full text-left"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-gray-400 italic text-lg font-light">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <span className="text-lg md:text-2xl font-medium">
                    {item.title}
                  </span>
                </div>
                <span className="text-2xl font-light">
                  {openIndex === index ? "–" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-3 ml-12 text-gray-600 text-base md:text-lg leading-relaxed"
                  >
                    {item.details}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Callout Section */}
      <div className="relative rounded-3xl overflow-hidden  mx-8 md:mx-20 p-6 md:p-12">
        <div className="absolute inset-0">
          <Image
            src="/images/business.webp"
            alt="Professional bookkeeping service"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
        </div>
        <div className="relative z-10 p-8 md:p-16 max-w-xl">
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
            Professional{" "}
            <span className="font-light text-white/80">
              Bookkeeping Services
            </span>
          </h2>
          <p className="text-white/90 text-lg leading-relaxed">
            Your business's financial health depends on accurate bookkeeping. We
            ensure every transaction is recorded correctly and compliant with
            UAE VAT & Corporate Tax laws.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the clarity and confidence of working with expert
            accountants.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <p className="text-gray-700 leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
      <FloatingMenuButton/>
      <ScrollToTop/>
      <Footer />
    </>
  );
}
