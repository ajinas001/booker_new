"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  FileCheck2,
  XCircle,
  FileText,
  Users2,
  Globe2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import ScrollToTop from "@/components/ScrollToTop";

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "500+", label: "Companies Formed" },
  { value: "15+", label: "Free Zones Covered" },
  { value: "98%", label: "Client Retention" },
  { value: "24h", label: "Avg. Response Time" },
];

const featureItems = [
  "Expert guidance on entity setup & structuring",
  "Freezone, Mainland & Offshore formation",
  "End-to-end PRO & visa processing support",
  "Compliance, secretarial & governance",
  "ICV score optimization for contracts",
  "Dedicated relationship management",
];

const services = [
  {
    id: 1,
    icon: Building2,
    tag: "Formation",
    title: "Mainland Company Formation",
    description:
      "Full assistance with DED licensing, local sponsorship structuring, and registration to operate freely across the UAE local market.",
    accent: "#14B8A6",
  },
  {
    id: 2,
    icon: Globe2,
    tag: "Freezone",
    title: "Freezone Business Setup",
    description:
      "Streamlined onboarding for 100% foreign ownership, repatriation of profits, and specialized free zone incentives across 40+ zones.",
    accent: "#6366F1",
  },
  {
    id: 3,
    icon: FileCheck2,
    tag: "Compliance",
    title: "Company Secretarial Service",
    description:
      "Regulatory compliance, board resolutions, statutory record maintenance, and annual filings handled by experienced professionals.",
    accent: "#F59E0B",
  },
  {
    id: 4,
    icon: XCircle,
    tag: "Closure",
    title: "Liquidation & De-registration",
    description:
      "Managed wind-down of business entities including debt settlement coordination, cancellation filings, and government clearances.",
    accent: "#EF4444",
  },
  {
    id: 5,
    icon: FileText,
    tag: "Advisory",
    title: "ICV Consultancy",
    description:
      "Strategic support for maximising your In-Country Value score to qualify for lucrative government and semi-government contracts.",
    accent: "#10B981",
  },
  {
    id: 6,
    icon: Users2,
    tag: "PRO",
    title: "PRO Services",
    description:
      "End-to-end government liaison covering visa processing, Emirates ID, labour cards, trade licence renewals, and document attestation.",
    accent: "#8B5CF6",
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We assess your goals, structure, and jurisdiction requirements." },
  { step: "02", title: "Proposal & Plan", desc: "Tailored roadmap with timeline, costs, and entity recommendations." },
  { step: "03", title: "Documentation", desc: "We prepare and review all government and legal paperwork." },
  { step: "04", title: "Submission & Follow-up", desc: "We file, track, and coordinate until approvals are secured." },
];

// ─── ANIMATION VARIANTS ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function BusinessSupportPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <>
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] flex items-end overflow-hidden bg-[#0A1628]"
      >
        {/* Parallax background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 will-change-transform">
          <Image
            src="/images/img3.webp"
            alt="Business support background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30 pointer-events-none select-none"
          />
        </motion.div>

        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/80 via-transparent to-transparent" />

        {/* Decorative teal glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 pt-40 w-full">
          {/* Breadcrumb */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-8 flex items-center gap-2 text-sm text-gray-400"
          >
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <span>Services</span>
            <span>/</span>
            <span className="text-teal-400 font-medium">Business Support</span>
          </motion.div>

          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="inline-block mb-5 px-4 py-1.5 rounded-full border border-teal-500/40 bg-teal-500/10 text-teal-400 text-xs font-semibold tracking-widest uppercase"
            >
              UAE Business Formation Experts
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            >
              Business
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                Support Service
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10"
            >
              Simplified Setup. Seamless Operations. Continuous Compliance.
              <br className="hidden sm:block" />
              We handle the complexities so you can focus on growth.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-teal-500/30 hover:shadow-teal-400/40 hover:-translate-y-0.5"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 hover:border-teal-400/50 text-white font-semibold text-base transition-all duration-200 hover:bg-white/5"
              >
                Explore Services
              </a>
            </motion.div>
          </div>

          {/* Stat bar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-white/5 px-6 py-5 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">{value}</p>
                <p className="text-xs text-gray-400 mt-1 font-medium">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT / INTRO
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/images/business-support.webp"
                alt="Business support UAE"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-4 shadow-xl border border-gray-100">
                <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-0.5">
                  Trusted by 500+ businesses
                </p>
                <p className="text-sm text-gray-600">
                  From solo entrepreneurs to multinational corporations across the UAE.
                </p>
              </div>
            </div>
            {/* Accent block */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl bg-teal-500/15 border border-teal-400/20 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl bg-indigo-500/10 border border-indigo-400/20 -z-10" />
          </motion.div>

          {/* Text side */}
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-teal-600"
            >
              Who We Are
            </motion.span>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
            >
              Your Partner in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
                Business Growth
              </span>{" "}
              & Compliance
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="text-gray-600 text-lg leading-relaxed mb-4"
            >
              Navigating the UAE's regulatory landscape can be overwhelming. Our
              advisory team cuts through the complexity — from initial entity
              selection to ongoing compliance — so your energy stays on what
              matters: building your business.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="text-gray-600 text-lg leading-relaxed mb-10"
            >
              Whether you're launching a startup or restructuring an enterprise,
              we bring deep local expertise and a network across every major
              jurisdiction in the UAE.
            </motion.p>

          
          </div>
          
        </div>
          {/* Feature checklist */}
            <div className="max-w-7xl mx-auto px-6">
              <motion.ul
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              className="grid sm:grid-cols-2 gap-x-6 gap-y-3"
            >
              {featureItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-teal-500 shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>
            </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES GRID
      ═══════════════════════════════════════════ */}
      <section id="services" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <span className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-teal-600">
              What We Offer
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Business Support Services
            </h2>
            <p className="text-gray-500 text-lg">
              Essential services covering every stage of your business lifecycle
              in the UAE.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ id, icon: Icon, tag, title, description, accent }, i) => (
              <motion.div
                key={id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i * 0.5}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Subtle top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
                />

                {/* Tag */}
                <span
                  className="inline-block mb-5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ color: accent, background: `${accent}18` }}
                >
                  {tag}
                </span>

                {/* Icon */}
                <div
                  className="mb-5 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${accent}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: accent }} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: accent }}>
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROCESS
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#0A1628] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-teal-400">
              How It Works
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Our Process
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-teal-500/20 hidden lg:block" />

            {process.map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.6}
                className="relative"
              >
                {/* Step circle */}
                <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <span className="text-teal-400 font-extrabold text-sm tracking-wider">{step}</span>
                </div>

                <h3 className="text-white font-bold text-lg mb-2 text-center lg:text-left">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed text-center lg:text-left">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA BAND
      ═══════════════════════════════════════════ */}
      <section id="contact" className="py-20 bg-gradient-to-br from-teal-500 to-cyan-500">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
            Ready to Set Up Your Business in the UAE?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Talk to an expert today. We'll map out the best structure, jurisdiction,
            and timeline for your specific goals — at no obligation.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-teal-600 font-bold text-base hover:bg-gray-50 transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            Book a Free Consultation <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </section>

      <div id="contact-form">
        <ContactSection />
      </div>

      <ScrollToTop />
      <FloatingMenuButton />
      <Footer />
    </>
  );
}