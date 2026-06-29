"use client";

import Head from "next/head";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import ScrollToTop from "@/components/ScrollToTop";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Shield,
  CheckCircle,
  TrendingUp,
  Users,
  FileText,
  Search,
  Building2,
  ClipboardList,
  Handshake,
  Microscope,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

// ─── Static data ────────────────────────────────────────────────────────────

const services = [
  {
    id: 1,
    icon: FileText,
    title: "External Audit",
    tag: "Statutory",
    description:
      "Independent verification of financial statements prepared in line with ISA and UAE regulatory requirements.",
    highlights: [
      "Independent review of financial statements",
      "Compliance with UAE regulatory frameworks",
      "Auditor's report for banks & investors",
      "Identification of material misstatements",
    ],
    forWhom:
      "Companies required by law, businesses seeking investor funding, and free zone entities.",
    accent: "from-teal-600 to-teal-800",
    lightAccent: "bg-teal-50",
    iconColor: "text-teal-600",
    border: "border-teal-100",
  },
  {
    id: 2,
    icon: Building2,
    title: "Real Estate Audit",
    tag: "Specialized",
    description:
      "Property portfolio, construction accounts, and transaction audits ensuring full RERA compliance.",
    highlights: [
      "Audit of property development accounts",
      "Verification of construction project costs",
      "Review of rental income & lease agreements",
      "Compliance with RERA regulations",
    ],
    forWhom:
      "Real estate developers, property management companies, and construction firms.",
    accent: "from-slate-700 to-slate-900",
    lightAccent: "bg-slate-50",
    iconColor: "text-slate-700",
    border: "border-slate-100",
  },
  {
    id: 3,
    icon: Shield,
    title: "Internal Audit",
    tag: "Governance",
    description:
      "Evaluate internal systems and processes to strengthen governance before costly issues arise.",
    highlights: [
      "Assessment of internal controls & risk",
      "Review of operational processes",
      "Governance and compliance gap analysis",
      "Actionable improvement recommendations",
    ],
    forWhom:
      "Mid-to-large businesses, management teams, and boards seeking independent oversight.",
    accent: "from-teal-700 to-teal-900",
    lightAccent: "bg-teal-50",
    iconColor: "text-teal-700",
    border: "border-teal-100",
  },
  {
    id: 4,
    icon: ClipboardList,
    title: "Inventory Audit",
    tag: "Stock & Assets",
    description:
      "Physical and system-based verification ensuring your inventory records reflect operational reality.",
    highlights: [
      "Physical stock count & reconciliation",
      "Verification of inventory valuation",
      "Identification of obsolete or missing stock",
      "Review of inventory management systems",
    ],
    forWhom:
      "Retail businesses, manufacturers, trading companies, and warehouses.",
    accent: "from-slate-600 to-slate-800",
    lightAccent: "bg-slate-50",
    iconColor: "text-slate-600",
    border: "border-slate-100",
  },
  {
    id: 5,
    icon: Handshake,
    title: "Due Diligence Support",
    tag: "M&A",
    description:
      "Complete financial picture of any target business before mergers, acquisitions, or major investments.",
    highlights: [
      "Financial statement analysis & verification",
      "Assessment of liabilities & contingencies",
      "Review of contracts, assets & cash flow",
      "Identification of red flags & deal breakers",
    ],
    forWhom:
      "Investors, acquirers, business owners entering partnerships, and lenders.",
    accent: "from-teal-600 to-teal-900",
    lightAccent: "bg-teal-50",
    iconColor: "text-teal-600",
    border: "border-teal-100",
  },
  {
    id: 6,
    icon: Microscope,
    title: "Forensic Audit",
    tag: "Investigation",
    description:
      "Data-driven investigation of fraud, misappropriation, and financial misconduct with legally defensible documentation.",
    highlights: [
      "Investigation of suspected fraud",
      "Tracing of unauthorized transactions",
      "Evidence gathering for legal proceedings",
      "Expert testimony support",
    ],
    forWhom:
      "Businesses facing internal fraud, legal disputes, regulatory investigations.",
    accent: "from-slate-800 to-black",
    lightAccent: "bg-slate-50",
    iconColor: "text-slate-800",
    border: "border-slate-200",
  },
];

const assurancePillars = [
  {
    icon: Shield,
    title: "Internal Systems Review",
    body: "Assess and improve the reliability of your financial processes and controls.",
  },
  {
    icon: FileText,
    title: "Financial Validation",
    body: "Confirm that reported figures accurately reflect operational reality.",
  },
  {
    icon: TrendingUp,
    title: "Operational Excellence",
    body: "Identify inefficiencies and recommend measurable process improvements.",
  },
  {
    icon: CheckCircle,
    title: "Enhanced Transparency",
    body: "Build stakeholder trust through consistent, accurate reporting standards.",
  },
];

const ifrsItems = [
  "IFRS Compliance Framework Assessment",
  "Financial Statement Preparation under IFRS",
  "Implementation of New Standards Updates",
  "Support for International Competitiveness",
];

const whyChoose = [
  {
    icon: Shield,
    title: "Regulatory Compliance",
    body: "Stay ahead of UAE regulatory changes and avoid penalties with our up-to-date expertise.",
  },
  {
    icon: TrendingUp,
    title: "Business Insights",
    body: "Every audit surfaces strategic opportunities, not just risks.",
  },
  {
    icon: Users,
    title: "Stakeholder Trust",
    body: "Give investors, banks, and partners full confidence in your numbers.",
  },
  {
    icon: CheckCircle,
    title: "Risk Management",
    body: "Identify and address financial and operational vulnerabilities early.",
  },
];

// ─── Animation variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 mb-3">
      {children}
    </p>
  );
}

function ServiceCard({ service, index }) {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      variants={fadeUp}
      custom={index * 0.5}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`group relative flex flex-col rounded-2xl border-purpletint bg-purpletint overflow-hidden  hover:shadow-lg transition-shadow duration-300`}
    >
      {/* Gradient header bar */}


      <div className="p-8 flex flex-col flex-1 gap-5">
        {/* Icon + tag row */}
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-xl ${service.lightAccent}`}>
            <Icon className={`w-6 h-6 text-black`} strokeWidth={1.6} />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 bg-white px-3 py-1 rounded-full border border-white">
            {service.tag}
          </span>
        </div>

        {/* Title + description */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Expandable highlights */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-1.5 text-sm font-medium text-textsecondary hover:text-teal-900 transition-colors self-start"
          aria-expanded={open}
        >
          {open ? "Less detail" : "What we cover"}
          <ChevronRight
            className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-90" : ""}`}
          />
        </button>

        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2 border-t border-gray-100 pt-4"
          >
            {service.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                {h}
              </li>
            ))}
            <li className="flex items-start gap-2 text-sm text-gray-500 italic mt-3 pt-3 border-t border-gray-100">
              <Users className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              {service.forWhom}
            </li>
          </motion.ul>
        )}
      </div>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AuditAssurancePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Head>
        <title>Audit & Assurance Services — BAC</title>
        <meta
          name="description"
          content="Expert audit and assurance services — external audit, internal audit, forensic audit, real estate audit, inventory audit, due diligence support, and IFRS advisory for UAE businesses."
        />
        <meta
          name="keywords"
          content="audit, assurance, IFRS, forensic audit, internal audit, external audit, due diligence, UAE"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://yourdomain.com/services/audit-assurance" />
        <meta property="og:title" content="Audit & Assurance Services — BAC" />
        <meta
          property="og:description"
          content="Expert audit and assurance services to strengthen credibility, ensure compliance, and unlock strategic insights."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/services/audit-assurance" />
        <meta property="og:image" content="https://yourdomain.com/images/og-audit.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "BAC Audit & Assurance",
              url: "https://yourdomain.com/services/audit-assurance",
              description:
                "Audit and assurance services for UAE businesses including external audit, internal audit, forensic audit, and IFRS advisory.",
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
          {/* Parallax image */}
          <motion.div
            style={{ y: heroY }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src="/images/img3.webp"
              alt="Audit & Assurance"
              priority
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
          </motion.div>

          {/* Breadcrumb */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="absolute top-28 left-6 md:left-16 z-10 flex items-center gap-2 text-sm text-gray-300"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Services</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-textprimary font-medium">Audit & Assurance</span>
          </motion.div>

          {/* Hero text */}
          <motion.div
            style={{ opacity: heroOpacity }}
            className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pb-20 md:pb-28 w-full"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate="visible"
              className="text-textprimary text-xs md:text-sm font-semibold  tracking-[0.2em] mb-5"
            >
              BAC Audit & Assurance
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="visible"
              className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.02] mb-6 max-w-4xl"
            >
              Beyond the
              <br />
              <span className="text-transparent bg-clip-text bg-textprimary">
                Checklist.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="visible"
              className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-xl mb-10"
            >
              Client Credibility. Stakeholder Confidence. Regulatory Compliance.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-textprimary hover:bg-white hover:text-textsecondary text-white px-7 py-3.5 rounded-md font-semibold text-sm transition-colors duration-200"
              >
                Get Free Consultation
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

        {/* ── APPROACH ─────────────────────────────────────────────────────── */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Beyond Compliance,{" "}
                <span className="text-textsecondary">Towards Excellence</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-4">
                At BAC, audits are more than a legal requirement — they are a
                strategic opportunity. We don't just verify numbers; we uncover
                what they mean for your business.
              </p>
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-8">
                Our approach is thorough, transparent, and tailored to your
                industry. From identifying operational risks to validating
                financial accuracy, BAC equips leadership with clarity to act
                decisively.
              </p>

              {/* Stat row */}
              <div className="flex gap-10 border-t border-gray-100 pt-8">
                {[
                  { value: "200+", label: "Audits completed" },
                  { value: "15+", label: "Industry sectors" },
                  { value: "100%", label: "ISA compliant" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-xl md:text-3xl font-extrabold text-textsecondary  mb-1">
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
                  src="/images/audit.webp"
                  alt="BAC audit team at work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 max-w-[220px]">
                <div className="w-10 h-10 rounded-full bg-textsecondary flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-snug">
                    ISA-Certified Audits
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Globally recognised standards
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────────────────── */}
        <section id="services" className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16 max-w-2xl"
            >
              <SectionLabel>Our Audit Services</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Comprehensive Solutions for Every Business Need
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ── ASSURANCE ────────────────────────────────────────────────────── */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/audit1.webp"
                    alt="Assurance services"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Corner label */}
                <div className="absolute top-5 right-5 bg-textsecondary text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                  Assurance
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={fadeUp}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <SectionLabel>Assurance Services</SectionLabel>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                  Strengthen Confidence.{" "}
                  <span className="text-textsecondary">Enhance Transparency.</span>
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  Our assurance services go beyond audit preparation. We evaluate
                  your internal controls, streamline reporting workflows, and
                  validate your financial systems — so leadership can make
                  decisions grounded in reliable, accurate information.
                </p>

               
              </motion.div>
              
              
            </div>
             <div className="grid sm:grid-cols-2 gap-5 pt-8">
                  {assurancePillars.map((pillar, i) => {
                    const Icon = pillar.icon;
                    return (
                      <motion.div
                        key={i}
                        variants={fadeUp}
                        custom={i * 0.4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="p-5 rounded-xl border border-purpletint bg-gray-100  hover:bg-purpletint transition-colors duration-200"
                      >
                        <Icon className="w-5 h-5 text-textsecondary mb-3" />
                        <h4 className="font-semibold text-gray-900 text-sm md:text-lg mb-1">
                          {pillar.title}
                        </h4>
                        <p className="text-gray-500 text-xs md:text-md leading-relaxed">
                          {pillar.body}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
          </div>
        </section>

        {/* ── IFRS ─────────────────────────────────────────────────────────── */}
        <section className="  ">
          <div className=" rounded-2xl py-8 md:py-20 max-w-7xl mx-auto px-6 md:px-16 bg-gradient-to-br from-gray-900 to-teal-900">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="inline-block text-xs font-base  tracking-[0.18em] text-textprimary bg-teal-400/10 border border-teal-400/20 px-4 py-1.5 rounded-full mb-6">
                  Global Standards
                </span>
                <h2 className="text-3xl md:text-4xl font-abold text-white leading-tight mb-2">
                  IFRS Advisory
                </h2>
                <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-4">
                  Consistent financial reporting under International Financial
                  Reporting Standards (IFRS) is essential — particularly for UAE
                  businesses operating internationally or seeking foreign
                  investment.
                </p>
                <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-10">
                  BAC's IFRS advisory team provides expert guidance to prepare
                  compliant, transparent financial statements that meet global
                  expectations.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-textsecondary hover:bg-purpletint text-white hover:text-textsecondary px-7 py-3.5 rounded-full font-semibold text-sm transition-colors duration-200"
                >
                  Get IFRS Support
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Right checklist */}
              <motion.div
                variants={fadeUp}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {ifrsItems.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i * 0.4}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 hover:border-teal-500/40 hover:bg-teal-900/20 transition-all duration-200"
                  >
                    <CheckCircle className="w-5 h-5 text-textprimary flex-shrink-0" />
                    <span className="text-white font-medium text-base ">{item}</span>
                  </motion.div>
                ))}
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
          
               <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-black">
              Why Businesses Trust{" "}
              <span className="relative inline-block text-textsecondary pb-3 after:content-[''] after:absolute after:w-full  after:bg-textsecondary after:left-0 after:bottom-0">
                BAC
              </span>
            </h2>
           
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChoose.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i * 0.3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="group text-center p-8 rounded-2xl border border-gray-100 bg-gray-100 hover:bg-purpletint hover:border-  transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-white group-hover:bg-purpletint rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-200">
                      <Icon className="w-7 h-7 text-textsecondary" strokeWidth={1.6} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA BAND ─────────────────────────────────────────────────────── */}
        

        <ContactSection />
        <ScrollToTop />
        <FloatingMenuButton />
        <Footer />
      </div>
    </>
  );
}