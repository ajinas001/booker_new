"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  FileText,
  ClipboardCheck,
  Handshake,
  Search,
  ShieldAlert,
  BookOpen,
  Activity,
  UserCheck,
  GraduationCap,
  Send,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Shield,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingService from "@/components/FloatingService";

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "AED 5M", label: "Max Fine Per Violation" },
  { value: "FATF", label: "Aligned Standards" },
  { value: "goAML", label: "Portal Certified" },
  { value: "100%", label: "Tailored Programs" },
];

const regulatoryTable = [
  {
    label: "UAE Federal AML Law",
    detail:
      "Federal Decree-Law No. 20 of 2018 on Anti-Money Laundering and Combating the Financing of Terrorism",
  },
  {
    label: "Supervisory Authorities",
    detail: "CBUAE, SCA, DFSA, ADGM FSRA, MOE (for DNFBPs)",
  },
  {
    label: "goAML Portal",
    detail:
      "Mandatory platform for filing Suspicious Transaction Reports (STRs) and other regulatory reports",
  },
  {
    label: "FATF Membership",
    detail:
      "UAE is a FATF member — businesses must align with international AML/CFT standards",
  },
  {
    label: "DNFBPs",
    detail:
      "Designated Non-Financial Businesses and Professions (real estate, gold, legal, accounting) face specific AML obligations",
  },
];

const services = [
  {
    id: 1,
    icon: ShieldAlert,
    tag: "Risk",
    lightAccent: "bg-red-50",
    title: "AML Risk Assessment",
    subtitle: "Identify Your Exposure Before Regulators Do",
    description:
      "The foundation of any effective AML compliance program is a thorough, documented risk assessment. We evaluate your business's exposure across customers, products, services, geography, and delivery channels — then provide a clear risk rating and remediation roadmap.",
    bullets: [
      "Business-wide AML/CFT risk assessment aligned with UAE requirements",
      "Customer risk profiling and segmentation",
      "Product and service risk evaluation",
      "Geographic risk mapping and sanctions screening",
      "Inherent and residual risk scoring",
      "Written risk assessment report with regulatory-standard documentation",
      "Remediation recommendations and risk mitigation action plan",
      "Annual review and update of risk assessment",
    ],
    forWhom:
      "All regulated businesses in the UAE — including DNFBPs (real estate agents, gold dealers, lawyers, accountants), financial institutions, and free zone companies.",
  },
  {
    id: 2,
    icon: BookOpen,
    tag: "Program",
    lightAccent: "bg-slate-50",
    title: "Compliance Program Design",
    subtitle: "Build a Framework That Stands Up to Scrutiny",
    description:
      "A well-designed AML compliance program is your first line of defense against financial crime. We design comprehensive, customized compliance programs that go beyond a basic policy document, giving your business a fully operational, regulator-ready AML framework.",
    bullets: [
      "AML/CFT Policy and Procedures Manual tailored to your business",
      "Appointment and training of a qualified Compliance Officer (MLRO)",
      "Internal controls design and implementation",
      "Sanctions screening and PEP procedures",
      "Record-keeping and data retention frameworks",
      "Whistleblowing and internal reporting mechanisms",
      "Compliance calendar and regulatory deadline tracking",
      "Gap analysis against UAE AML standards and FATF recommendations",
    ],
    forWhom:
      "New businesses establishing their AML framework, existing businesses upgrading outdated policies, and any entity that has received a regulatory finding or notice.",
  },
  {
    id: 3,
    icon: Activity,
    tag: "Monitoring",
    lightAccent: "bg-teal-50",
    title: "Transaction Monitoring",
    subtitle: "Detect Suspicious Activity Before It Becomes a Problem",
    description:
      "Effective transaction monitoring is a regulatory requirement and a critical tool for detecting unusual financial activity. Our team helps you establish robust monitoring processes — whether manual, system-based, or hybrid — and ensures your team knows how to act when red flags are identified.",
    bullets: [
      "Transaction monitoring framework design and implementation",
      "Red flag indicator definition specific to your business and industry",
      "Threshold and alert rule configuration support",
      "Review and assessment of existing monitoring processes",
      "Case management and escalation procedure design",
      "STR preparation and goAML filing support",
      "Periodic monitoring reviews and effectiveness testing",
      "Documentation and audit trail standards",
    ],
    forWhom:
      "Financial institutions, money service businesses, real estate companies, gold and precious metals dealers, and any business handling high-value or complex financial transactions.",
  },
  {
    id: 4,
    icon: UserCheck,
    tag: "KYC / CDD",
    lightAccent: "bg-teal-50",
    title: "KYC & Customer Due Diligence",
    subtitle: "Know Your Customer. Protect Your Business.",
    description:
      "KYC and Customer Due Diligence procedures are at the heart of AML compliance. We design, implement, and review KYC/CDD frameworks that balance regulatory compliance with a smooth customer experience — helping you onboard legitimate customers while managing higher-risk relationships.",
    bullets: [
      "KYC policy and CDD framework design",
      "Enhanced Due Diligence (EDD) procedures for high-risk customers and PEPs",
      "Simplified Due Diligence (SDD) criteria for lower-risk customers",
      "Beneficial ownership identification and verification procedures",
      "Customer onboarding workflow design and documentation",
      "Ongoing monitoring and periodic review processes",
      "Sanctions and adverse media screening procedures",
      "KYC remediation for existing customer base",
    ],
    forWhom:
      "Banks, exchange houses, insurance companies, real estate agents, legal professionals, accountants, and any business required to verify customer identity under UAE AML regulations.",
  },
  {
    id: 5,
    icon: GraduationCap,
    tag: "Training",
    lightAccent: "bg-slate-50",
    title: "AML Training & Awareness",
    subtitle: "An Informed Team Is Your Best Defense",
    description:
      "Regulations require that all relevant staff receive regular, role-appropriate AML training. Our AML training programs are practical, engaging, and tailored to your industry — not generic off-the-shelf content. From frontline staff to senior management, we build genuine competency.",
    bullets: [
      "Staff AML awareness training (all levels)",
      "Compliance Officer / MLRO-specific training and responsibilities briefing",
      "Role-based training modules (customer-facing, back office, finance)",
      "Red flag recognition and suspicious activity identification workshops",
      "goAML portal usage training (STR filing, reporting procedures)",
      "Annual refresher training programs",
      "Training records and attendance documentation for regulatory files",
      "Post-training assessment and competency testing",
    ],
    forWhom:
      "All businesses with AML obligations in the UAE — mandatory for regulated entities and strongly recommended for all businesses handling financial transactions or customer onboarding.",
  },
  {
    id: 6,
    icon: Send,
    tag: "Reporting",
    lightAccent: "bg-red-50",
    title: "Regulatory Reporting",
    subtitle: "File Accurately. Meet Deadlines. Stay Protected.",
    description:
      "Regulatory reporting is one of the most critical — and most scrutinized — aspects of AML compliance. Failure to file required reports, or filing inaccurate reports, can trigger regulatory investigations and significant penalties. We manage your AML reporting obligations end-to-end.",
    bullets: [
      "STR preparation and goAML portal filing",
      "Suspicious Activity Report (SAR) drafting and internal escalation support",
      "Cash Transaction Report (CTR) filing for qualifying transactions",
      "Annual AML compliance report preparation",
      "Regulatory correspondence and authority liaison",
      "Response drafting for regulatory inspections or information requests",
      "goAML account setup, registration, and portal management",
      "Reporting obligation calendar management and deadline monitoring",
    ],
    forWhom:
      "All regulated businesses and DNFBPs in the UAE with active reporting obligations — including financial institutions, real estate brokers, gold dealers, law firms, and accountancy practices.",
  },
];

const whyBAC = [
  {
    title: "Certified AML Specialists",
    desc: "Our team holds internationally recognized AML qualifications (CAMS, ICA, etc.).",
  },
  {
    title: "UAE Regulatory Expertise",
    desc: "We understand goAML, CBUAE, DFSA, and DNFBP-specific requirements inside out.",
  },
  {
    title: "Tailored Compliance Programs",
    desc: "No template solutions — every compliance framework is built around your business and risk profile.",
  },
  {
    title: "Ongoing Support",
    desc: "We don't disappear after implementation — we provide continuous monitoring and advisory.",
  },
  {
    title: "Confidential & Professional",
    desc: "All engagements handled with strict professional confidentiality and discretion.",
  },
];

const assurancePillars = [
  {
    icon: Shield,
    title: "Risk-Based Approach",
    body: "Every program is built around your specific risk profile — not a generic template.",
  },
  {
    icon: FileText,
    title: "Regulatory Documentation",
    body: "Comprehensive, regulator-ready records and reports prepared to the highest standard.",
  },
  {
    icon: Activity,
    title: "Ongoing Monitoring",
    body: "Continuous transaction surveillance and periodic reviews to keep your program effective.",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Compliance",
    body: "From initial risk assessment through to regulatory reporting — full lifecycle coverage.",
  },
];

// ─── ANIMATION VARIANTS ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

// ─── SECTION LABEL ────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 mb-3">
      {children}
    </p>
  );
}

// ─── SERVICE CARD ─────────────────────────────────────────────────────────────

function ServiceCard({ service, index }) {
  const [open, setOpen] = useState(false);
  const {
    icon: Icon,
    tag,
    lightAccent,
    title,
    subtitle,
    description,
    bullets,
    forWhom,
  } = service;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={index * 0.5}
      className="group relative flex flex-col rounded-2xl border border-purpletint bg-purpletint overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-8 flex flex-col flex-1 gap-5">
        {/* Icon + tag row */}
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-xl ${lightAccent}`}>
            <Icon className="w-6 h-6 text-black" strokeWidth={1.6} />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-700 bg-white px-3 py-1 rounded-full border border-white">
            {tag}
          </span>
        </div>

        {/* Title + subtitle + description */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
          <p className="text-xs font-semibold text-textsecondary mb-2">
            {subtitle}
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Expandable highlights */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-1.5 text-sm font-medium text-textsecondary hover:text-teal-900 transition-colors self-start"
          aria-expanded={open}
        >
          {open ? "Show less" : "See what's included"}
          <ChevronRight
            className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-90" : ""}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ul className="space-y-2 border-t border-gray-100 pt-4">
                {bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
                <li className="flex items-start gap-2 text-sm text-gray-500 italic mt-3 pt-3 border-t border-gray-100">
                  <Users className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  {forWhom}
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function AntiMoneyLaunderingPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
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
            alt="AML compliance background"
            fill
            priority
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
          <span className="text-textprimary font-medium">
            Anti-Money Laundering
          </span>
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
            className="text-textprimary text-xs md:text-sm  font-semibold  tracking-[0.2em] mb-5"
          >
            BAC AML Compliance Specialists
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.02] mb-6 max-w-4xl"
          >
            Anti-Money
            <br />
            <span className="text-transparent bg-clip-text bg-textprimary">
              Laundering.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="visible"
            className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-xl mb-10"
          >
            Risk Prevention. Financial Transparency. Regulatory Compliance.
            <br className="hidden sm:block" />
            Protecting your business against financial crime and UAE regulatory
            penalties.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 bg-textprimary hover:bg-white hover:text-textsecondary text-white px-7 py-3.5 rounded-md font-semibold text-sm transition-colors duration-200"
            >
              Schedule a Compliance Review
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white/70 px-7 py-3.5 rounded-md font-semibold text-sm transition-colors duration-200"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Stat bar */}
          {/* <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="visible"
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-white/5 px-6 py-5 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">
                  {value}
                </p>
                <p className="text-xs text-gray-400 mt-1 font-medium">
                  {label}
                </p>
              </div>
            ))}
          </motion.div> */}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          OVERVIEW / INTRO
      ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionLabel>UAE AML Compliance</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Implementing Strong Controls Against{" "}
              <span className="text-textsecondary">Financial Crime</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-4">
              Money laundering and terrorist financing pose significant legal,
              financial, and reputational risks to businesses operating in the
              UAE. Regulatory authorities are actively enforcing AML obligations
              — and non-compliance can result in heavy fines, license
              suspension, or criminal liability.
            </p>
            <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-8">
              At BAC, our AML compliance solutions help you build a robust,
              regulator-ready framework that protects your business and meets
              all UAE requirements — from initial risk assessment through to
              ongoing monitoring and regulatory reporting.
            </p>

            {/* Quick service tags */}
            <div className="flex flex-wrap gap-2">
              {[
                "AML Risk Assessments",
                "Compliance Program Design",
                "KYC & Due Diligence",
                "Regulatory Reporting",
                "Transaction Monitoring",
                "AML Training",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-purpletint text-textsecondary text-xs font-semibold border border-purpletint"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stat row */}
            <div className="flex gap-10 border-t border-gray-100 pt-8 mt-8">
              {[
                { value: "AED 5M", label: "Max fine per violation" },
                { value: "FATF", label: "Aligned standards" },
                { value: "100%", label: "Tailored programs" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-xl md:text-3xl font-extrabold text-textsecondary mb-1">
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
                src="/images/aml.webp"
                alt="AML compliance UAE"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Warning badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-start gap-3 max-w-[260px]">
              <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-0.5">
                  Non-compliance risk
                </p>
                <p className="text-sm text-gray-600">
                  Fines up to AED 5 million per violation, licence cancellation,
                  and criminal prosecution.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          UAE REGULATORY FRAMEWORK
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 max-w-2xl"
          >
            <SectionLabel>Know the Rules</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3">
              UAE AML Regulatory Framework
            </h2>
            <p className="text-gray-500 text-base">
              The UAE has significantly strengthened its AML/CFT regime,
              aligning with FATF recommendations and international best
              practices. Understanding the landscape is the first step to
              staying compliant.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
          >
            {regulatoryTable.map(({ label, detail }, i) => (
              <div
                key={label}
                className={`grid sm:grid-cols-[220px,1fr] gap-4 sm:gap-0 px-6 py-5 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                } ${i !== regulatoryTable.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="text-sm font-bold text-gray-800 sm:border-r border-gray-200 sm:pr-6">
                  {label}
                </div>
                <div className="text-sm text-gray-600 sm:pl-6">{detail}</div>
              </div>
            ))}
          </motion.div>

          {/* Warning banner */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="mt-6 flex items-start gap-4 bg-red-50 border border-red-200 rounded-2xl px-6 py-5"
          >
            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <p className="text-sm text-red-700 leading-relaxed">
              <span className="font-bold">Non-compliance warning: </span>
              Failure to maintain active AML programs can result in fines of up
              to AED 5 million per violation, licence cancellation, and criminal
              prosecution. All DNFBPs and financial institutions must comply.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES GRID
      ═══════════════════════════════════════════ */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <SectionLabel>Our AML Services</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Our Structured AML Compliance Process
            </h2>
            <p className="text-gray-500 text-lg mt-3">
              Six disciplines covering every dimension of AML compliance —
              expand each card to see exactly what's included.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ASSURANCE / PROGRAM PILLARS
      ═══════════════════════════════════════════ */}
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
                  src="/images/aml.webp"
                  alt="AML compliance program"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="absolute top-5 right-5 bg-textsecondary text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                AML Program
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
              <SectionLabel>Our Compliance Approach</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Protect Your Business.{" "}
                <span className="text-textsecondary">Stay Ahead of Risk.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Our AML compliance programs go beyond checkbox compliance. We
                build fully operational, risk-based frameworks tailored to your
                business — from risk assessment and customer due diligence
                through to transaction monitoring and regulatory reporting.
                Every engagement is supported by certified specialists who
                understand UAE regulations inside out.
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
                  className="p-5 rounded-xl border border-purpletint bg-gray-100 hover:bg-purpletint transition-colors duration-200"
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

      {/* ═══════════════════════════════════════════
          WHY BAC — dark section (matching IFRS dark section style)
      ═══════════════════════════════════════════ */}
      <section>
        <div className="rounded-2xl py-8 md:py-20 max-w-7xl mx-auto px-6 md:px-16 bg-gradient-to-br from-gray-900 to-teal-900">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs font-base tracking-[0.18em] text-textprimary bg-teal-400/10 border border-teal-400/20 px-4 py-1.5 rounded-full mb-6">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
                Why Businesses Across the UAE Trust BAC
              </h2>
              <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-4">
                Non-compliance with UAE AML regulations carries severe
                consequences — fines, licence cancellation, and criminal
                prosecution. Businesses across the UAE choose BAC because we
                deliver more than policy documents. We build compliance programs
                that actually work.
              </p>
              <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-10">
                Our certified specialists combine international AML
                qualifications with deep knowledge of UAE-specific regulatory
                requirements — so you get expert guidance that's practical,
                accurate, and immediately actionable.
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-textsecondary hover:bg-purpletint text-white hover:text-textsecondary px-7 py-3.5 rounded-full font-semibold text-sm transition-colors duration-200"
              >
                Schedule a Compliance Review
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Right — why BAC checklist */}
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {whyBAC.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i * 0.4}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 hover:border-teal-500/40 hover:bg-teal-900/20 transition-all duration-200"
                >
                  <CheckCircle className="w-5 h-5 text-textprimary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-base mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY CHOOSE — cards (matching audit page "Why BAC" section)
      ═══════════════════════════════════════════ */}
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
              Need Expert Assistance with{" "}
              <span className="relative inline-block text-textsecondary pb-3 after:content-[''] after:absolute after:w-full after:bg-textsecondary after:left-0 after:bottom-0">
                UAE AML Compliance?
              </span>
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
              Protect your business against financial crime, regulatory
              penalties, and reputational risk. Schedule a compliance review
              with our AML specialists today.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldAlert,
                title: "Regulatory Compliance",
                body: "Stay ahead of UAE AML regulatory changes and avoid penalties with our up-to-date expertise.",
              },
              {
                icon: Activity,
                title: "Risk Management",
                body: "Identify and address financial crime vulnerabilities before they become regulatory problems.",
              },
              {
                icon: Users,
                title: "Stakeholder Trust",
                body: "Give investors, banks, and partners full confidence in your compliance program.",
              },
              {
                icon: CheckCircle,
                title: "Certified Specialists",
                body: "Our team holds internationally recognised AML qualifications (CAMS, ICA, and more).",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i * 0.3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group text-center p-8 rounded-2xl border border-gray-100 bg-gray-100 hover:bg-purpletint hover:border- transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-white group-hover:bg-purpletint rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-200">
                    <Icon
                      className="w-7 h-7 text-textsecondary"
                      strokeWidth={1.6}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div id="contact-form">
        <ContactSection />
      </div>

      <ScrollToTop />
      <FloatingService />
      <Footer />
    </>
  );
}
