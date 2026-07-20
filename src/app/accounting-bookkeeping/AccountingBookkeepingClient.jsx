"use client";

import ContactSection from "@/components/ContactSection";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  ChevronRight,
  ArrowRight,
  Users,
  Cloud,
  ClipboardCheck,
  BarChart3,
  Package,
  BookOpen,
  Globe,
  Zap,
  Scale,
  MessageSquare,
  ShieldCheck,
  Plus,
  Minus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import FloatingService from "@/components/FloatingService";

// ─── Static data ──────────────────────────────────────────────────────────────

const services = [
  {
    id: 1,
    icon: BookOpen,
    title: "Accounts Regulation",
    tag: "Compliance",
    desc: "Books maintained in strict accordance with UAE Commercial Companies Law, free zone requirements, and applicable regulatory frameworks.",
    highlights: [
      "Maintenance of books of accounts in line with UAE law",
      "Compliance with free zone and mainland regulatory requirements",
      "Statutory record-keeping and document management",
      "Chart of accounts setup and structuring for compliance",
      "Regulatory filing support and deadline management",
      "Review and remediation of non-compliant records",
    ],
    forWhom:
      "All UAE-registered businesses including mainland companies, free zone entities, and branches of foreign companies.",
  },
  {
    id: 2,
    icon: Cloud,
    title: "Cloud Accounting Services",
    tag: "Technology",
    desc: "Real-time financial data via Xero, QuickBooks, and Zoho Books — automated, accurate, accessible from anywhere.",
    highlights: [
      "Cloud platform setup and onboarding (Xero, QuickBooks, Zoho Books)",
      "Migration from manual or legacy systems to cloud",
      "Automated transaction recording and bank reconciliation",
      "Real-time dashboards and financial reporting",
      "Multi-currency and multi-entity accounting",
      "AI-powered bookkeeping insights and automation",
    ],
    forWhom:
      "Startups, growing SMEs, and businesses replacing manual spreadsheets or legacy desktop software.",
  },
  {
    id: 3,
    icon: ClipboardCheck,
    title: "Audit Preparation & Support",
    tag: "Readiness",
    desc: "Clean, complete, and fully audit-ready books — well before your auditors arrive. No scramble, no stress.",
    highlights: [
      "Pre-audit review and gap analysis",
      "Reconciliation of accounts and ledgers",
      "Preparation and organization of supporting documents",
      "Resolution of discrepancies and journal adjustments",
      "Liaison with external auditors on your behalf",
      "Post-audit support and recommendations implementation",
    ],
    forWhom:
      "Companies requiring statutory audits, businesses preparing for investor or bank audits.",
  },
  {
    id: 4,
    icon: BarChart3,
    title: "Accounting & Financial Reporting",
    tag: "IFRS",
    desc: "Timely, IFRS-compliant financial reports that give you a true picture of business performance for better decisions.",
    highlights: [
      "Preparation of profit & loss statements",
      "Balance sheet and cash flow statement preparation",
      "Monthly, quarterly, and annual management accounts",
      "IFRS-compliant financial statement preparation",
      "Variance analysis and financial commentary",
      "Consolidated financial reporting for group entities",
    ],
    forWhom:
      "Business owners, CFOs, boards, and management teams needing accurate, timely financial reports.",
  },
  {
    id: 5,
    icon: Package,
    title: "Inventory & Asset Verification",
    tag: "Stock & Assets",
    desc: "Systematic inventory counts and asset verification ensuring your records reflect exactly what you own.",
    highlights: [
      "Physical inventory count and stock reconciliation",
      "Fixed asset register review and verification",
      "Identification of obsolete, damaged, or unrecorded assets",
      "Valuation review and depreciation schedule accuracy checks",
      "System-to-physical reconciliation reporting",
      "Recommendations for improved stock and asset controls",
    ],
    forWhom:
      "Retail businesses, manufacturers, trading companies, warehouses, and businesses with significant inventory.",
  },
];

const whyChoose = [
  {
    icon: Globe,
    title: "Local + Global Expertise",
    body: "Deep UAE regulatory knowledge combined with international standards (IFRS, UAE VAT, Corporate Tax).",
  },
  {
    icon: Zap,
    title: "Cloud-First Approach",
    body: "AI-powered tools and leading cloud platforms to automate tasks, reduce errors, and give real-time visibility.",
  },
  {
    icon: Scale,
    title: "Scalable Solutions",
    body: "From a startup's first registration to an SME growing across multiple entities — our services scale with you.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    body: "No jargon, no hidden surprises. You always know what we're doing, why, and what it means for your business.",
  },
  {
    icon: ShieldCheck,
    title: "Always Audit-Ready",
    body: "Books maintained to the standard expected by external auditors — so there's no scramble when the time comes.",
  },
];

const platforms = ["Xero", "QuickBooks", "Zoho Books"];

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
          <div className="w-7 h-7   flex items-center justify-center font-extrabold text-gray-800 group-hover:border-teal-300 group-hover:text-teal-600 transition-colors duration-150 flex-shrink-0">
            {open ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
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

export default function AccountingPage() {
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
              src="/images/accountingpage.webp"
              alt="Accounting & Bookkeeping"
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
              Accounting & Bookkeeping
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
              BAC Accounting & Bookkeeping
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.02] mb-6 max-w-4xl"
            >
              Accounting & <br />
              <span className="text-transparent bg-clip-text bg-textprimary">
                Bookkeeping Services in Dubai, UAE
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-xl mb-10"
            >
              End-to-end accounting and bookkeeping solutions built for UAE
              businesses — local expertise, IFRS standards, cloud-first
              technology.
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
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white/70 px-7 py-3.5 rounded-md   font-semibold text-sm transition-colors duration-200"
              >
                Explore Services
              </Link>
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
              <SectionLabel>Who We Are</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Beyond Recording.{" "}
                <span className="text-textsecondary">Real Financial Clarity.</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-4">
                In today's fast-moving business environment, accurate
                bookkeeping and compliant financial reporting are the backbone
                of sustainable growth.
              </p>
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-10">
                At BAC, we go beyond recording transactions — we give you a
                clear, real-time picture of your financial health so you can
                make better decisions, faster.
              </p>

              {/* Platform pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                {platforms.map((p) => (
                  <span
                    key={p}
                    className="px-4 py-2 text-sm font-medium text-textsecondary bg-purpletint border-purpletint rounded-full"
                  >
                    {p}
                  </span>
                ))}
              </div>

              {/* Stat row */}
              <div className="flex gap-10 border-t border-gray-100 pt-8">
                {[
                  { value: "5", label: "Core service areas" },
                  { value: "IFRS", label: "Compliant reporting" },
                  { value: "Cloud", label: "First approach" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl md:text-3xl font-bold text-textsecondary mb-1">
                      {s.value}
                    </p>
                    <p className="text-xs md:text-sm text-gray-400 font-medium">{s.label}</p>
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
                  src="/images/accounting.webp"
                  alt="Accounting team at work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 max-w-[230px]">
                <div className="w-10 h-10 rounded-full bg-textsecondary flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-snug">
                    Always Audit-Ready
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    IFRS-compliant books
                  </p>
                </div>
              </div>
            </motion.div>
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
                <SectionLabel>Our Services</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                  Complete Accounting Solutions
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-8">
                  From day-to-day transaction recording to full financial
                  statement preparation — we handle every layer of your
                  accounting function.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm md:text-lg font-semibold text-textsecondary hover:text-textprimary transition-colors"
                >
                  Talk to an accountant
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
                        prev === service.id ? null : service.id
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
                alt="Professional bookkeeping service"
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
                  Bookkeeping
                </p>
                <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                  Every Transaction.
                  <br />
                  <span className="font-light text-white/70">
                    Recorded Correctly.
                  </span>
                </h2>
                <p className="text-white/80 text-base leading-relaxed mb-8">
                  Your business's financial health depends on accurate
                  bookkeeping. We ensure every transaction is compliant with UAE
                  VAT & Corporate Tax laws.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-textsecondary hover:bg-white text-white hover:text-textsecondary px-6 py-3 rounded-md font-semibold text-sm transition-colors duration-200"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── WHY BAC ──────────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <SectionLabel>Why Choose Us</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Businesses Trust <span className="text-textsecondary"> BAC</span> 
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
                    className="group text-center p-7 rounded-2xl border border-purpletint hover:border-purpletint  bg-purpletint transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-teal-50 group-hover:bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors duration-200">
                      <Icon className="w-6 h-6 text-textsecondary" strokeWidth={1.6} />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm md:text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA BAND ─────────────────────────────────────────────────────── */}
        {/* <section className="bg-teal-700 py-16 px-6 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                Ready for Accounting That Actually Works?
              </h2>
              <p className="text-teal-200 text-lg">
                Clean daily bookkeeping to full IFRS-compliant statements —
                BAC handles it all.
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
        </section> */}

        <ContactSection />
        <ScrollToTop />
  
        <Footer />
      </div>
    </>
  );
}