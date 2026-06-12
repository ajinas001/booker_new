"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  FileText,
  ClipboardCheck,
  Handshake,
  Search,
} from "lucide-react";
import Link from "next/link";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import ScrollToTop from "@/components/ScrollToTop";

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

const amlFlowSteps = [
  {
    icon: Users,
    title: "AML Consultancy and Implementation",
    description:
      "Expert guidance to tailor and establish effective AML controls.",
  },
  {
    icon: FileText,
    title: "AML Policy Implementation and Training",
    description: "Developing robust policies and training staff for adherence.",
  },
  {
    icon: ClipboardCheck,
    title: "AML Inspection and Other Support",
    description: "Regular checks and assistance to maintain AML controls.",
  },
  {
    icon: Handshake,
    title: "AML Compliance Support",
    description:
      "Ongoing expert support to address compliance challenges effectively.",
  },
  {
    icon: Search,
    title: "Internal and External AML Audit Support",
    description:
      "Comprehensive audit assistance to ensure regulatory confidence.",
  },
];

export default function AntiMoneyLaunderingPage() {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden text-white bg-black">
        {/* Background Image Layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/images/img3.webp"
            alt="Business Advisory Service"
            priority
            fill
            sizes="100vw"
            className="object-cover object-center transform-gpu select-none"
            style={{
              WebkitTransform: "translateZ(0)",
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80 pointer-events-none" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          {/* Breadcrumb */}
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
                Anti-Money Laundering
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Anti-Money{" "}
            <span className="text-transparent bg-clip-text bg-textprimary">
              Laundering
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            Risk Prevention. Financial Transparency. Regulatory Compliance.
          </motion.p>
        </div>
      </section>

      {/* ================= OVERVIEW SECTION ================= */}
      {/* <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-teal-600 font-semibold tracking-wide uppercase">
              UAE AML Compliance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-snug">
              Implementing Strong Controls Against Financial Crime
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Our AML compliance services help businesses establish and maintain
              robust systems to prevent money laundering and terrorist
              financing, ensuring alignment with UAE regulatory standards.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Through risk assessments, compliance training, and policy
              development, we enable organizations to build a transparent,
              compliant financial environment.
            </p>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src="/images/aml.webp"
              alt="AML Process"
              width={550}
              height={500}
              className="rounded-xl shadow-lg object-cover transform-gpu"
              style={{ WebkitTransform: "translateZ(0)" }}
            />
          </motion.div>
        </div>
      </section> */}

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:space-x-12 items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">
              UAE AML Compliance
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Implementing Strong Controls Against  <span className="text-textsecondary">Financial Crime</span>
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Our AML compliance solutions help businesses implement strong
              controls to prevent money laundering and terrorist financing.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We offer comprehensive risk assessments, compliance training,
              policy development, and ongoing monitoring to ensure full
              adherence to UAE AML regulations. With our expertise, we safeguard
              your company's reputation and mitigate legal risks effectively.
            </p>
          </div>

          <div className="lg:w-1/2 relative overflow-hidden rounded-xl">
            <Image
              width={600}
              height={500}
              src="/images/aml.webp"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= AML PROCESS FLOW ================= */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Our Structured AML Compliance Process
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ensuring effective Anti-Money Laundering compliance through a
              strategic and structured approach.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {amlFlowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  className="rounded-3xl p-10 bg-secondary text-white relative overflow-hidden group border border-gray-200"
                >
                  {/* Hover Gradient */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.15 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 rounded-3xl"
                  />

                  <div className="relative z-10 flex flex-col gap-5 text-left">
                    <Icon className="h-14 w-14 opacity-90" />
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24 max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-teal-900 rounded-3xl text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Need Expert Assistance with UAE AML Compliance?
        </h2>
        <p className="mt-3 opacity-90 text-lg">
          Protect your business against financial risk and regulatory penalties.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-block px-10 py-3 bg-white text-teal-700 font-medium rounded-full shadow-md hover:bg-gray-200 transition"
        >
          Schedule a Compliance Review
        </Link>
      </section>

      <ContactSection />
      <ScrollToTop/>
      <FloatingMenuButton/>
      <Footer />
    </>
  );
}
