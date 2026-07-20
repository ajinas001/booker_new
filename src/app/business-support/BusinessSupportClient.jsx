"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
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
  CheckCircle,
  ChevronRight,
  Plus,
  Minus,
  Users,
  ShieldCheck,
} from "lucide-react";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingService from "@/components/FloatingService";

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
    desc: "Full assistance with DED licensing, local sponsorship structuring, and registration to operate freely across the UAE local market.",
    highlights: [
      "DED licensing and trade name registration",
      "Local sponsorship structuring and MOA drafting",
      "Initial approval and activity selection",
      "Office space and Ejari registration support",
      "Bank account opening assistance",
      "Post-registration compliance setup",
    ],
    forWhom:
      "Businesses seeking to operate freely across the UAE mainland market and engage directly with government entities.",
  },
  {
    id: 2,
    icon: Globe2,
    tag: "Freezone",
    title: "Freezone Business Setup",
    desc: "Streamlined onboarding for 100% foreign ownership, repatriation of profits, and specialized free zone incentives across 40+ zones.",
    highlights: [
      "Free zone selection and comparison advisory",
      "100% foreign ownership structuring",
      "License application and approval coordination",
      "Flexi-desk, office, and warehouse options",
      "Visa quota allocation and processing",
      "Repatriation of profits and capital structuring",
    ],
    forWhom:
      "Foreign investors and entrepreneurs seeking 100% ownership, tax benefits, and streamlined setup across 40+ UAE free zones.",
  },
  {
    id: 3,
    icon: FileCheck2,
    tag: "Compliance",
    title: "Company Secretarial Service",
    desc: "Regulatory compliance, board resolutions, statutory record maintenance, and annual filings handled by experienced professionals.",
    highlights: [
      "Statutory record keeping and minute books",
      "Board and shareholder resolution drafting",
      "Annual return and renewal filings",
      "Registered agent and office services",
      "Corporate governance advisory",
      "Regulatory change monitoring and alerts",
    ],
    forWhom:
      "All UAE-registered entities requiring ongoing statutory compliance, governance support, and annual filing management.",
  },
  {
    id: 4,
    icon: XCircle,
    tag: "Closure",
    title: "Liquidation & De-registration",
    desc: "Managed wind-down of business entities including debt settlement coordination, cancellation filings, and government clearances.",
    highlights: [
      "Liquidation strategy and timeline planning",
      "Debt settlement and creditor coordination",
      "License cancellation and de-registration filings",
      "Employee visa and labour card cancellations",
      "Government clearance certificates",
      "Final audit and statutory sign-off",
    ],
    forWhom:
      "Companies planning to close, restructure, or exit the UAE market requiring managed wind-down and full government clearance.",
  },
  {
    id: 5,
    icon: FileText,
    tag: "Advisory",
    title: "ICV Consultancy",
    desc: "Strategic support for maximising your In-Country Value score to qualify for lucrative government and semi-government contracts.",
    highlights: [
      "ICV score assessment and gap analysis",
      "Procurement and supply chain optimization",
      "Emiratization and workforce planning advice",
      "ICV certificate application support",
      "Vendor registration for government contracts",
      "Ongoing ICV score improvement strategy",
    ],
    forWhom:
      "Businesses targeting ADNOC, government, and semi-government contracts requiring ICV certification and score optimization.",
  },
  {
    id: 6,
    icon: Users2,
    tag: "PRO",
    title: "PRO Services",
    desc: "End-to-end government liaison covering visa processing, Emirates ID, labour cards, trade licence renewals, and document attestation.",
    highlights: [
      "Employment and investor visa processing",
      "Emirates ID and biometrics coordination",
      "Labour card and work permit applications",
      "Trade licence renewals and amendments",
      "Document attestation and notarisation",
      "Ministry of Labour and immigration liaison",
    ],
    forWhom:
      "All UAE businesses and individuals needing government document processing, visa services, and regulatory submissions.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We assess your goals, structure, and jurisdiction requirements.",
  },
  {
    step: "02",
    title: "Proposal & Plan",
    desc: "Tailored roadmap with timeline, costs, and entity recommendations.",
  },
  {
    step: "03",
    title: "Documentation",
    desc: "We prepare and review all government and legal paperwork.",
  },
  {
    step: "04",
    title: "Submission & Follow-up",
    desc: "We file, track, and coordinate until approvals are secured.",
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

function ServiceAccordionItem({ service, index, open, onToggle }) {
  const Icon = service.icon;
  return (
    <motion.div
      variants={fadeUp}
      custom={index * 0.4}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="border-b border-gray-100 last:border-0"
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        {/* Left: number + icon + title */}
        <div className="flex items-center gap-5 flex-1 min-w-0">
          <span className="text-xs font-semibold text-gray-600 w-6 flex-shrink-0 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors duration-150">
            <Icon className="w-4 h-4 text-textsecondary" strokeWidth={1.7} />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-base md:text-lg font-semibold text-gray-900 leading-snug">
              {service.title}
            </span>
          </div>
        </div>

        {/* Right: tag + toggle */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="hidden sm:block text-[10px] font-semibold uppercase tracking-widest text-gray-400 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
            {service.tag}
          </span>
          <div className="w-7 h-7 flex items-center justify-center font-extrabold text-gray-800 group-hover:border-teal-300 group-hover:text-teal-600 transition-colors duration-150 flex-shrink-0">
            {open ? (
              <Minus className="w-3 h-3" />
            ) : (
              <Plus className="w-3 h-3" />
            )}
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-[3.25rem] md:pl-[4.25rem] pr-4">
              <p className="text-sm md:text-lg text-gray-500 leading-relaxed mb-5">
                {service.desc}
              </p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 mb-5">
                {service.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs md:text-sm text-gray-600 leading-relaxed"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-textprimary mt-0.5 flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-2 text-[11px] md:text-[14px] text-gray-400 leading-relaxed pt-4 border-t border-gray-100">
                <Users className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-gray-300" />
                {service.forWhom}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BusinessSupportPage() {
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
              src="/images/business-supportpage.webp"
              alt="Business Support Services"
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
            <span className="text-textprimary font-medium">
              Business Support
            </span>
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
              className="text-textprimary text-xs md:text-sm font-semibold  tracking-[0.2em] mb-5"
            >
              BAC Business Support
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.02] mb-6 max-w-4xl"
            >
              Company Formation & <br />
              <span className="text-transparent bg-clip-text bg-textprimary">
                Business Support in Dubai
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-xl mb-10"
            >
              Simplified Setup. Seamless Operations. Continuous Compliance.
              <br />
              We handle the complexities so you can focus on growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-textprimary hover:bg-white text-white hover:text-textsecondary px-7 py-3.5 rounded-md font-semibold text-sm transition-colors duration-200"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white/70 px-7 py-3.5 rounded-md font-semibold text-sm transition-colors duration-200"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* ── STAT BAR ─────────────────────────────────────────────────────── */}
        <section className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-200">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  custom={i * 0.15}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="px-6 py-8 text-center"
                >
                  <p className="text-2xl md:text-3xl font-extrabold text-textsecondary mb-1">
                    {value}
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 font-medium">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTRO ─────────────────────────────────────────────────────────── */}
        <section className="pt-8 md:pt-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionLabel>Who We Are</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Your Partner in{" "}
                <span className="text-textsecondary">Business Growth</span>{" "}
                &amp; Compliance
              </h2>
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-4">
                Navigating the UAE's regulatory landscape can be overwhelming.
                Our advisory team cuts through the complexity — from initial
                entity selection to ongoing compliance — so your energy stays on
                what matters: building your business.
              </p>
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-10">
                Whether you're launching a startup or restructuring an
                enterprise, we bring deep local expertise and a network across
                every major jurisdiction in the UAE.
              </p>

              {/* Feature checklist pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                {["Mainland", "Freezone", "PRO Services", "ICV"].map((p) => (
                  <span
                    key={p}
                    className="px-4 py-2 text-sm font-medium text-textsecondary bg-purpletint border-purpletint rounded-full"
                  >
                    {p}
                  </span>
                ))}
              </div>

              {/* Feature checklist */}

              {/* Stat row */}
              <div className="flex gap-10 border-t border-gray-100 pt-8">
                {[
                  { value: "500+", label: "Companies formed" },
                  { value: "15+", label: "Free zones covered" },
                  { value: "98%", label: "Client retention" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl md:text-3xl font-bold text-textsecondary mb-1">
                      {s.value}
                    </p>
                    <p className="text-xs md:text-sm text-gray-400 font-medium">
                      {s.label}
                    </p>
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
                  src="/images/business-support.webp"
                  alt="Business support UAE"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 max-w-[260px]">
                <div className="w-10 h-10 rounded-full bg-textsecondary flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-snug">
                    Trusted by 500+ businesses
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    From solo entrepreneurs to multinational corporations across
                    the UAE.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
            <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
              {featureItems.map((item, i) => (
                <li
                  key={i}
                  className="group flex items-start gap-4 text-sm md:text-base text-gray-700 font-medium leading-relaxed transition-all duration-200 hover:text-gray-900"
                >
                  <div className="mt-1 flex items-center justify-center shrink-0 w-5 h-5 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-textsecondary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── SERVICES ACCORDION ───────────────────────────────────────────── */}
        <section id="services" className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
              {/* Sticky label column */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:sticky lg:top-28"
              >
                <SectionLabel>What We Offer</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                  Business Support Services
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-8">
                  Essential services covering every stage of your business
                  lifecycle in the UAE.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm md:text-lg font-semibold text-textsecondary hover:text-textprimary transition-colors"
                >
                  Talk to an expert
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Accordion list */}
              <div className="bg-gray-50 rounded-2xl border border-gray-50 divide-y divide-gray-200 px-6 md:px-8">
                {services.map((service, index) => (
                  <ServiceAccordionItem
                    key={service.id}
                    service={service}
                    index={index}
                    open={openId === service.id}
                    onToggle={() =>
                      setOpenId((prev) =>
                        prev === service.id ? null : service.id,
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CALLOUT BANNER ───────────────────────────────────────────────── */}
        <section className="py-10 md:py-14 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden min-h-[320px] flex items-center">
              <Image
                src="/images/business.webp"
                alt="Business support services UAE"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/60 to-transparent" />

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 p-10 md:p-16 max-w-lg"
              >
                <p className="text-textprimary text-xs font-semibold uppercase tracking-[0.18em] mb-4">
                  Business Support
                </p>
                <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                  Ready to Set Up Your Business
                  <br />
                  <span className="font-light text-white/70">in the UAE?</span>
                </h2>
                <p className="text-white/80 text-base leading-relaxed mb-8">
                  Talk to an expert today. We'll map out the best structure,
                  jurisdiction, and timeline for your specific goals — at no
                  obligation.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-textsecondary hover:bg-white text-white hover:text-textsecondary px-6 py-3 rounded-md font-semibold text-sm transition-colors duration-200"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <SectionLabel>How It Works</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our <span className="text-textsecondary">Process</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Connecting line */}
              <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gray-200 hidden lg:block" />

              {process.map(({ step, title, desc }, i) => (
                <motion.div
                  key={step}
                  variants={fadeUp}
                  custom={i * 0.25}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group text-center p-7 rounded-2xl border border-purpletint bg-purpletint transition-all duration-300 relative"
                >
                  <div className="w-14 h-14 rounded-full bg-teal-50 group-hover:bg-teal-100 border border-teal-100 flex items-center justify-center mx-auto mb-5 transition-colors duration-200">
                    <span className="text-textsecondary font-extrabold text-sm tracking-wider">
                      {step}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-lg mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
        <ScrollToTop />
        
        <Footer />
      </div>
    </>
  );
}
