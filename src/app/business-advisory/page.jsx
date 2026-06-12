"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import {
  BriefcaseBusiness,
  Scale,
  Lightbulb,
  Shuffle,
  Workflow,
  BarChart3,
  FileText,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import ScrollToTop from "@/components/ScrollToTop";

// -------------------- SERVICES DATA --------------------
const services = [
  {
    id: 1,
    icon: BriefcaseBusiness,
    title: "CFO Service",
    description:
      "End-to-end financial leadership for informed decision-making and profitability improvement.",
  },
  {
    id: 2,
    icon: Scale,
    title: "Business Valuation",
    description:
      "Professional valuation for investors, acquisitions, or financial reporting.",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Business Consultation",
    description:
      "Critical guidance for operational improvement and business scalability.",
  },
  {
    id: 4,
    icon: Shuffle,
    title: "Merger & Acquisition",
    description:
      "Advisory on M&A planning, negotiation, due diligence, and integration.",
  },
  {
    id: 5,
    icon: Workflow,
    title: "Business Process Re-engineering",
    description:
      "Redesigning processes to boost efficiency, reduce cost, and improve productivity.",
  },
  {
    id: 6,
    icon: BarChart3,
    title: "Financial Feasibilities",
    description:
      "Detailed feasibility studies for investment decisions and business expansion.",
  },
  {
    id: 7,
    icon: FileText,
    title: "IFRS Advisory Service",
    description:
      "Expert guidance on IFRS compliance, implementation, and reporting.",
  },
];

// -------------------- ANIMATION VARIANTS --------------------
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

// -------------------- MAIN COMPONENT --------------------
export default function BusinessAdvisoryPage() {
  return (
    <>
      <Navbar />
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden text-white bg-black">
        {/* Background Layer */}
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
            className="object-cover object-center transform-gpu"
            style={{
              WebkitTransform: "translateZ(0)", // ✅ Fix iOS flicker
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80 pointer-events-none" />
        </motion.div>

        {/* Content */}
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
                Business Advisory Service
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
            Business{" "}
            <span className="text-transparent bg-clip-text bg-textprimary">
              Advisory Service
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            Strategic Direction. Sustainable Growth. Business Excellence.
          </motion.p>
        </div>
      </section>

      {/* detail */}

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:space-x-12 items-center">
            {/* LEFT CONTENT */}
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">
                Business Advisory
              </p>

              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
                Helping You Make Confident &
                <br />
                <span className="text-textsecondary">
                  Strategic Business Decisions
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                We work closely with startups, SMEs, and enterprises to guide
                them through strategic decision-making, process improvement,
                financial forecasting, and performance optimization.
              </p>

              <p className="text-lg text-gray-600 mb-10">
                Whether you're scaling, restructuring, or pivoting your
                business, our expert advisors provide clear direction backed by
                data and market insights.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="lg:w-1/2 relative">
              <div className="w-full overflow-hidden rounded-xl">
                <Image
                  width={600}
                  height={500}
                  src="/images/business-advisory.webp"
                  alt="Corporate tax advisory consultation"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
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
              Business Advisory Service
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Strategic Direction. Sustainable Growth. Business Excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map(({ id, icon: Icon, title, description }) => (
              <motion.div
                key={id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="rounded-3xl p-10 bg-secondary text-white relative overflow-hidden group cursor-pointer border border-gray-200"
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

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 max-w-7xl bg-gradient-to-br mx-auto from-gray-900 to-teal-900 rounded-3xl text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Ready to Grow Your Business with Confidence?
        </h2>
        <p className="mt-3 opacity-90 text-lg">
          Let&apos;s work together to unlock new opportunities and improve
          profitability.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block px-10 py-3 bg-white text-teal-700 font-medium rounded-full shadow-md hover:bg-gray-200 transition"
        >
          Book Consultation
        </a>
      </section>

      {/* ================= CONTACT & FOOTER ================= */}
      <ContactSection />
      <ScrollToTop />
      <FloatingMenuButton />
      <Footer />
    </>
  );
}
