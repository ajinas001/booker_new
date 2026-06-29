"use client";

import Head from "next/head";
import ContactSection from "@/components/ContactSection";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  FileText,
  Shield,
  TrendingUp,
  Briefcase,
  Layers,
  ClipboardCheck,
  CheckCircle,
  ChevronRight,
  ArrowRight,
  Users,
  Globe,
  Building2,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

// ─── Static data ─────────────────────────────────────────────────────────────

const taxServices = [
  {
    id: 1,
    icon: Building2,
    title: "Corporate Tax",
    tag: "Advisory",
    desc: "End-to-end corporate tax support — from FTA registration to ongoing compliance and strategic planning.",
    highlights: [
      "Corporate tax registration with the FTA",
      "Tax return preparation and timely filing",
      "Tax exposure assessment and risk review",
      "Identification of applicable exemptions and reliefs",
      "Strategic tax planning and business structuring",
      "Deferred tax accounting and reporting support",
    ],
    forWhom:
      "Startups, SMEs, and multinational businesses subject to UAE corporate tax obligations.",
  },
  {
    id: 2,
    icon: FileText,
    title: "Value Added Tax (VAT)",
    tag: "Compliance",
    desc: "Full-spectrum VAT services — simplified, accurate, and tailored for specialized sectors including free zones and oil & gas.",
    highlights: [
      "VAT registration and deregistration with the FTA",
      "VAT return preparation and timely filing",
      "Input tax recovery and optimization",
      "VAT health checks and compliance reviews",
      "Voluntary disclosure preparation and submission",
      "Sector-specific VAT advisory (free zones, oil & gas, real estate)",
    ],
    forWhom:
      "All VAT-registered UAE businesses, e-commerce, real estate, and businesses approaching the registration threshold.",
  },
  {
    id: 3,
    icon: Shield,
    title: "Tax Agent Service",
    tag: "FTA Approved",
    desc: "Your official, FTA-authorized representative — managing all correspondence, filings, and disputes on your behalf.",
    highlights: [
      "Official FTA representation on your behalf",
      "Tax return filing and documentation management",
      "Handling of FTA audits and tax assessments",
      "Dispute resolution and appeals management",
      "Response to FTA queries and notices",
      "Full compliance monitoring and deadline tracking",
    ],
    forWhom:
      "Businesses of any size wanting a licensed professional handling all FTA interactions.",
  },
];

const transferPricingItems = [
  {
    icon: ClipboardCheck,
    text: "Transfer pricing documentation and benchmarking",
  },
  {
    icon: Layers,
    text: "Policy development for IP, financing, procurement, and services",
  },
  {
    icon: FileText,
    text: "Tax dispute support and advance pricing agreement (APA) guidance",
  },
  {
    icon: Briefcase,
    text: "Related-party transaction advisory and risk assessment",
  },
];

const whyChoose = [
  {
    icon: CheckCircle,
    title: "FTA Approved",
    body: "Fully authorized to represent your business before the Federal Tax Authority.",
  },
  {
    icon: TrendingUp,
    title: "Proactive Planning",
    body: "We don't just file — we plan to minimize tax exposure and structure for growth.",
  },
  {
    icon: AlertCircle,
    title: "Penalty Protection",
    body: "Every deadline and filing requirement tracked so you never face avoidable fines.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    body: "IFRS and international tax standards applied to keep you competitive across borders.",
  },
  {
    icon: Users,
    title: "All Business Sizes",
    body: "From freelancers and startups to established SMEs and multinationals — we scale with you.",
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 mb-3">
      {children}
    </p>
  );
}

function TaxServiceCard({ service, index, open, onToggle }) {
  const Icon = service.icon;
  return (
    <motion.div
      layout
      variants={fadeUp}
      custom={index}
      initial="hidden"
      animate="visible"
      className={`flex flex-col bg-white border-r border-b border-gray-100 transition-colors duration-200 ${
        open ? "bg-teal-50/40" : "hover:bg-gray-50/60"
      }`}
    >
      <div className="p-8 flex flex-col gap-4 flex-1">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-teal-700" strokeWidth={1.6} />
          </div>
          <span className="text-[10px] font-semibold  tracking-widest text-gray-800 bg-purpletint border border-purpletint px-2.5 py-1 rounded-full">
            {service.tag}
          </span>
        </div>

        {/* Title + desc */}
        <div>
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1.5 leading-snug">
            {service.title}
          </h3>
          <p className="text-sm md:text-[16px] text-gray-500 leading-relaxed">{service.desc}</p>
        </div>

        {/* Toggle */}
        <button
          onClick={onToggle}
          aria-expanded={open}
          className="flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-900 transition-colors self-start mt-auto pt-2"
        >
          <ChevronRight
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              open ? "rotate-90" : ""
            }`}
          />
          {open ? "Less detail" : "What we cover"}
        </button>

        {/* Expandable */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="detail"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-gray-100 pt-4 flex flex-col gap-2.5">
                {service.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs md:text-[13px] text-gray-600 leading-relaxed"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-textprimary mt-0.5 flex-shrink-0" />
                    {h}
                  </div>
                ))}
                <div className="flex items-start gap-2 text-[11px] md:text-[14px] text-gray-400 leading-relaxed border-t border-gray-100 pt-2.5 mt-1">
                  <Users className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-gray-300" />
                  {service.forWhom}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TaxationPage() {
  const heroRef = useRef(null);
  const [openId, setOpenId] = useState(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Head>
        <title>Taxation Services — BAC</title>
        <meta
          name="description"
          content="Expert UAE corporate tax advisory, VAT compliance, FTA-approved tax agent services, and transfer pricing support for startups, SMEs, and multinationals."
        />
        <meta
          name="keywords"
          content="corporate tax UAE, VAT compliance, FTA tax agent, transfer pricing, tax advisory Dubai"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://yourdomain.com/services/taxation" />
        <meta property="og:title" content="Taxation Services — BAC" />
        <meta
          property="og:description"
          content="Smart tax strategy, full compliance, zero surprises. Corporate tax, VAT, and FTA agent services for UAE businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/services/taxation" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "BAC Taxation Services",
              url: "https://yourdomain.com/services/taxation",
              description:
                "Corporate tax advisory, VAT compliance, and FTA-approved tax agent services for UAE businesses.",
            }),
          }}
        />
      </Head>

      <div className="bg-white text-gray-800 antialiased">
        <Navbar />

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative h-[92vh] min-h-[580px] flex items-end overflow-hidden"
        >
          <motion.div
            style={{ y: heroY }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src="/images/img3.webp"
              alt="Taxation"
              priority
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
          </motion.div>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="absolute top-28 left-6 md:left-16 z-10 flex items-center gap-2 text-sm text-gray-300"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Services</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-textprimary font-medium">Taxation</span>
          </motion.div>

          {/* Hero text */}
          <motion.div
            style={{ opacity: heroOpacity }}
            className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pb-20 md:pb-28 w-full"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-textprimary text-sm font-semibold uppercase tracking-[0.2em] mb-5"
            >
              BAC Taxation
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.02] mb-6 max-w-4xl"
            >
              Smart Tax.
              <br />
              <span className="text-transparent bg-clip-text bg-textprimary">
                Zero Surprises.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300 max-w-xl mb-10"
            >
              Corporate tax advisory, VAT compliance, and FTA-approved representation
              for startups, SMEs, and multinationals across the UAE.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-textprimary text-white px-7 py-3.5 rounded-md hover:text-textsecondary hover:bg-white font-semibold text-sm transition-colors duration-200"
              >
                Get Free Tax Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white/70 px-7 py-3.5 rounded-md font-semibold text-sm transition-colors duration-200"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ── INTRO ─────────────────────────────────────────────────────────── */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionLabel>Corporate Tax Advisory</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Strategic Guidance in a{" "}
                <span className="text-textsecondary">Complex, Evolving Landscape</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-4">
                In today's highly regulated and digitally transparent UAE tax
                environment, managing your tax obligations is more than just
                compliance — it's about adding value, minimizing risk, and
                supporting sustainable business growth.
              </p>
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-10">
                BAC offers expert tax advisory and compliance services designed to
                help you navigate the evolving UAE tax framework with confidence.
              </p>

              {/* Stat row */}
              <div className="flex gap-10 border-t border-gray-100 pt-8">
                {[
                  { value: "FTA", label: "Registered tax agent" },
                  { value: "3", label: "Core tax disciplines" },
                  { value: "0", label: "Missed deadlines" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-extrabold text-textsecondary mb-1">
                      {s.value}
                    </p>
                    <p className="text-sm text-gray-400 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/taxation.webp"
                  alt="Corporate tax advisory consultation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 max-w-[230px]">
                <div className="w-10 h-10 rounded-full bg-textsecondary flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-snug">
                    FTA-Approved Tax Agent
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Authorized UAE representation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES GRID ────────────────────────────────────────────────── */}
        <section id="services" className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            {/* Header */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 max-w-2xl"
            >
              <SectionLabel>Our Tax Services</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Full-Spectrum <span className="text-textsecondary">Tax Solutions</span>
              </h2>
            </motion.div>

            {/* Bordered grid */}
            <div className="border border-gray-100 bg-gray-200 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-3 divide-x divide-y divide-gray-100">
                {taxServices.map((service, index) => (
                  <TaxServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                    open={openId === service.id}
                    onToggle={() =>
                      setOpenId((prev) =>
                        prev === service.id ? null : service.id
                      )
                    }
                  />
                ))}
              </div>
            </div>

            {/* Footer nudge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-800">
                  Not sure where to start?
                </span>{" "}
                Most businesses begin with corporate tax registration or VAT compliance.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
              >
                Talk to a tax advisor
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── TRANSFER PRICING ─────────────────────────────────────────────── */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/office-workers.webp"
                    alt="Transfer pricing advisory"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="absolute top-5 right-5 bg-textsecondary text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                  Specialized
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={fadeUp}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <SectionLabel>Transfer Pricing Advisory</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                  Defensible Policies.{" "}
                  <span className="text-textsecondary">Global Scrutiny, Met.</span>
                </h2>
                <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-10">
                  With increased global scrutiny on intercompany transactions, our
                  experts help you develop defensible transfer pricing policies
                  aligned with UAE regulations and international standards.
                </p>

                
              </motion.div>
            </div>
            <div className="flex flex-col gap-4 py-8 ">
                  {transferPricingItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={i}
                        variants={fadeUp}
                        custom={i * 0.4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-100 hover:border-purpletint hover:bg-purpletint transition-colors duration-200"
                      >
                        <div className="w-9 h-9 rounded-lg bg-gray-200 border border-gray-200 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-textsecondary" strokeWidth={1.8} />
                        </div>
                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed pt-1.5">
                          {item.text}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
          </div>
        </section>

        {/* ── WHY BAC ──────────────────────────────────────────────────────── */}
        <section className="py-6  md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <SectionLabel>Why Choose Us</SectionLabel>
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-black">
             Why Businesses Trust <spam className="text-textsecondary" >BAC</spam> for Taxation
            </h2>
              
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {whyChoose.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i * 0.25}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="group text-center p-7 rounded-2xl border border-gray-100 bg-white hover:border-teal-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-teal-50 group-hover:bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors duration-200">
                      <Icon className="w-6 h-6 text-textsecondary" strokeWidth={1.6} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── VAT DEEP DIVE ─────────────────────────────────────────────────── */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionLabel>Value Added Tax</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                VAT Made Simple.{" "}
                <span className="text-teal-700">Compliance + Optimization.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-4">
                VAT compliance remains a critical focus for businesses operating
                across the UAE. BAC supports your business with a full spectrum of
                VAT services — designed to simplify complexity, ensure total
                accuracy, and protect you from costly penalties.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                We offer tailored VAT expertise for specialized sectors including
                free zone businesses and the oil and gas industry.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: FileText, label: "VAT Registration & Return Filing" },
                  { icon: Shield, label: "Audits & Voluntary Disclosures" },
                  { icon: TrendingUp, label: "Real-time VAT Reporting" },
                  { icon: Globe, label: "Sector-specific Advisory" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 bg-gray-50 hover:border-teal-200 hover:bg-teal-50 transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4 text-teal-600 flex-shrink-0" strokeWidth={1.8} />
                      <span className="text-sm font-medium text-gray-800">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/taxation2.webp"
                  alt="FTA approved tax agent service"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA BAND ─────────────────────────────────────────────────────── */}
        <section className="bg-teal-700 py-16 px-6 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                Take Control of Your Tax Position Today
              </h2>
              <p className="text-teal-200 text-lg">
                Corporate tax registration, VAT compliance, or FTA representation — BAC has you covered.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-teal-700 hover:bg-teal-50 font-bold px-8 py-4 rounded-full text-sm transition-colors duration-200 shadow-lg"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        <ContactSection />
        <ScrollToTop />
        <FloatingMenuButton />
        <Footer />
      </div>
    </>
  );
}