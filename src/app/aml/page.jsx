"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
} from "lucide-react";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import ScrollToTop from "@/components/ScrollToTop";

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "AED 5M", label: "Max Fine Per Violation" },
  { value: "FATF", label: "Aligned Standards" },
  { value: "goAML", label: "Portal Certified" },
  { value: "100%", label: "Tailored Programs" },
];

const regulatoryTable = [
  { label: "UAE Federal AML Law", detail: "Federal Decree-Law No. 20 of 2018 on Anti-Money Laundering and Combating the Financing of Terrorism" },
  { label: "Supervisory Authorities", detail: "CBUAE, SCA, DFSA, ADGM FSRA, MOE (for DNFBPs)" },
  { label: "goAML Portal", detail: "Mandatory platform for filing Suspicious Transaction Reports (STRs) and other regulatory reports" },
  { label: "FATF Membership", detail: "UAE is a FATF member — businesses must align with international AML/CFT standards" },
  { label: "DNFBPs", detail: "Designated Non-Financial Businesses and Professions (real estate, gold, legal, accounting) face specific AML obligations" },
];

const services = [
  {
    id: 1,
    icon: ShieldAlert,
    tag: "Risk",
    accent: "#EF4444",
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
    accent: "#6366F1",
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
    accent: "#F59E0B",
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
    accent: "#14B8A6",
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
    accent: "#10B981",
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
    accent: "#8B5CF6",
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
  { title: "Certified AML Specialists", desc: "Our team holds internationally recognized AML qualifications (CAMS, ICA, etc.)." },
  { title: "UAE Regulatory Expertise", desc: "We understand goAML, CBUAE, DFSA, and DNFBP-specific requirements inside out." },
  { title: "Tailored Compliance Programs", desc: "No template solutions — every compliance framework is built around your business and risk profile." },
  { title: "Ongoing Support", desc: "We don't disappear after implementation — we provide continuous monitoring and advisory." },
  { title: "Confidential & Professional", desc: "All engagements handled with strict professional confidentiality and discretion." },
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

// ─── SERVICE CARD ─────────────────────────────────────────────────────────────

function ServiceCard({ service, index }) {
  const [open, setOpen] = useState(false);
  const { icon: Icon, tag, accent, title, subtitle, description, bullets, forWhom } = service;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index * 0.4}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />

      <div className="p-7">
        <div className="flex items-start justify-between mb-5">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide"
            style={{ color: accent, background: `${accent}18` }}
          >
            {tag}
          </span>
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `${accent}15` }}
          >
            <Icon className="w-5 h-5" style={{ color: accent }} />
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-1 leading-snug">{title}</h3>
        <p className="text-xs font-semibold mb-3" style={{ color: accent }}>{subtitle}</p>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-5 flex items-center gap-1.5 text-xs font-semibold transition-colors"
          style={{ color: accent }}
        >
          {open ? "Show less" : "See what's included"}
          {open ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
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
              <ul className="mt-4 space-y-2">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: accent }} />
                    {b}
                  </li>
                ))}
              </ul>
              <div
                className="mt-4 rounded-xl px-4 py-3 text-xs leading-relaxed"
                style={{ background: `${accent}10`, color: accent }}
              >
                <span className="font-bold">Who it's for: </span>
                {forWhom}
              </div>
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
        <motion.div style={{ y: heroY }} className="absolute inset-0 will-change-transform">
          <Image
            src="/images/img3.webp"
            alt="AML compliance background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30 pointer-events-none select-none"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/80 via-transparent to-transparent" />

        {/* Red warning glow — thematically appropriate for compliance/risk */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-red-500/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-teal-500/8 blur-[100px] pointer-events-none" />

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
            <span className="text-teal-400 font-medium">Anti-Money Laundering</span>
          </motion.div>

          <div className="max-w-4xl">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="inline-block mb-5 px-4 py-1.5 rounded-full border border-red-400/40 bg-red-500/10 text-red-300 text-xs font-semibold tracking-widest uppercase"
            >
              UAE AML Compliance Specialists
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            >
              Anti-Money
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-400">
                Laundering
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10"
            >
              Risk Prevention. Financial Transparency. Regulatory Compliance.
              <br className="hidden sm:block" />
              Protecting your business against financial crime and UAE regulatory penalties.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-teal-500/30 hover:-translate-y-0.5"
              >
                Schedule a Compliance Review <ArrowRight className="w-4 h-4" />
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
          OVERVIEW / INTRO
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/images/aml.webp"
                alt="AML compliance UAE"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Warning badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-4 shadow-xl border border-gray-100">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-0.5">
                      Non-compliance risk
                    </p>
                    <p className="text-sm text-gray-600">
                      Fines up to AED 5 million per violation, licence cancellation, and criminal prosecution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl bg-red-500/10 border border-red-400/20 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl bg-teal-500/10 border border-teal-400/20 -z-10" />
          </motion.div>

          {/* Text */}
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-red-600"
            >
              UAE AML Compliance
            </motion.span>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
            >
              Implementing Strong Controls Against{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-teal-500">
                Financial Crime
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="text-gray-600 text-lg leading-relaxed mb-4"
            >
              Money laundering and terrorist financing pose significant legal, financial, and reputational risks
              to businesses operating in the UAE. Regulatory authorities are actively enforcing AML obligations —
              and non-compliance can result in heavy fines, license suspension, or criminal liability.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              At BAC, our AML compliance solutions help you build a robust, regulator-ready framework that
              protects your business and meets all UAE requirements — from initial risk assessment through
              to ongoing monitoring and regulatory reporting.
            </motion.p>

            {/* Quick service tags */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              className="flex flex-wrap gap-2"
            >
              {["AML Risk Assessments", "Compliance Program Design", "KYC & Due Diligence", "Regulatory Reporting", "Transaction Monitoring", "AML Training"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-lg bg-red-50 text-red-700 text-xs font-semibold border border-red-100">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          UAE REGULATORY FRAMEWORK
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 max-w-2xl"
          >
            <span className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-teal-600">
              Know the Rules
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
              UAE AML Regulatory Framework
            </h2>
            <p className="text-gray-500 text-base">
              The UAE has significantly strengthened its AML/CFT regime, aligning with FATF recommendations
              and international best practices. Understanding the landscape is the first step to staying compliant.
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
                <div className="text-sm font-bold text-gray-800 sm:border-r border-gray-200 sm:pr-6">{label}</div>
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
              Failure to maintain active AML programs can result in fines of up to AED 5 million per violation,
              licence cancellation, and criminal prosecution. All DNFBPs and financial institutions must comply.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES GRID
      ═══════════════════════════════════════════ */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <span className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-teal-600">
              Our AML Services
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Our Structured AML Compliance Process
            </h2>
            <p className="text-gray-500 text-lg">
              Six disciplines covering every dimension of AML compliance — expand each card to see exactly what's included.
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
          WHY BAC
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-teal-400">
              Why Choose Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Why Businesses Across the UAE Trust BAC
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyBAC.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 hover:border-teal-500/30 transition-colors duration-300"
              >
                <div className="w-8 h-0.5 bg-teal-500 mb-5 rounded-full" />
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA BAND
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-teal-600">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
            Need Expert Assistance with UAE AML Compliance?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Protect your business against financial crime, regulatory penalties, and reputational risk.
            Schedule a compliance review with our AML specialists today.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-red-700 font-bold text-base hover:bg-gray-50 transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            Schedule a Compliance Review <ArrowRight className="w-5 h-5" />
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