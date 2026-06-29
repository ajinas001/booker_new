"use client";

import Head from "next/head";
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
  Globe,
  Zap,
  Scale,
  MessageSquare,
  ShieldCheck,
  Plus,
  Minus,
  BriefcaseBusiness,
  Lightbulb,
  Shuffle,
  Workflow,
  BarChart3,
  FileText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import FloatingService from "@/components/FloatingService";

// ─── Static data ──────────────────────────────────────────────────────────────

const stats = [
  { value: "360°", label: "Business View" },
  { value: "7+", label: "Advisory Disciplines" },
  { value: "UAE", label: "Market Specialists" },
  { value: "100%", label: "Tailored Strategy" },
];

const services = [
  {
    id: 1,
    icon: BriefcaseBusiness,
    title: "CFO Service",
    tag: "CFO",
    desc: "Not every business needs a full-time CFO — but every business needs CFO-level thinking. Our outsourced CFO service gives you end-to-end financial leadership without the overhead. We manage your financial strategy, cash flow planning, budgeting, and reporting so you can focus on growing your business.",
    highlights: [
      "Financial planning & analysis (FP&A)",
      "Cash flow management and forecasting",
      "Budgeting and variance analysis",
      "Board-level financial reporting",
      "KPI development and performance monitoring",
      "Risk management and internal controls",
      "Investor relations and fundraising support",
    ],
    forWhom:
      "Startups, SMEs, and growing businesses that need strategic financial guidance without a full-time hire.",
  },
  {
    id: 2,
    icon: Scale,
    title: "Business Valuation",
    tag: "Valuation",
    desc: "Whether you're preparing for a sale, attracting investors, planning a merger, or simply want clarity on your company's financial standing — an accurate business valuation is essential. Our certified valuation experts use internationally recognized methodologies to deliver credible, defensible reports.",
    highlights: [
      "Fair market value assessments",
      "Asset-based, income-based & market-based valuation approaches",
      "Valuations for M&A, investment, and exit planning",
      "Valuations for financial reporting and IFRS compliance",
      "Shareholder dispute or litigation support valuations",
      "Startup and early-stage company valuation",
    ],
    forWhom:
      "Business owners, investors, legal teams, and financial institutions requiring a reliable third-party valuation.",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Business Consultation",
    tag: "Consultation",
    desc: "Every business faces moments of uncertainty — whether it's entering a new market, navigating financial pressure, or deciding on the right structure for growth. Our business consultants bring a 360-degree view of your operations and provide practical, actionable guidance tailored to your specific situation.",
    highlights: [
      "Business health assessments and diagnostics",
      "Strategic planning and goal-setting",
      "Operational improvement recommendations",
      "Market entry and expansion strategy",
      "Financial restructuring advice",
      "Business model development and review",
      "Competitive analysis and benchmarking",
    ],
    forWhom:
      "Entrepreneurs, executives, and leadership teams seeking expert outside perspective.",
  },
  {
    id: 4,
    icon: Shuffle,
    title: "Merger & Acquisition",
    tag: "M&A",
    desc: "Mergers and acquisitions are among the most complex — and highest-stakes — decisions a business can make. Our M&A advisory team guides you through every stage: from identifying targets and structuring deals, to conducting due diligence, negotiating terms, and managing post-merger integration.",
    highlights: [
      "M&A strategy and target identification",
      "Buy-side and sell-side advisory",
      "Financial due diligence",
      "Deal structuring and negotiation support",
      "Regulatory and compliance review",
      "Post-merger integration planning",
      "Business valuation for M&A purposes",
    ],
    forWhom:
      "Companies planning acquisitions, business owners considering a sale, and investors evaluating targets.",
  },
  {
    id: 5,
    icon: Workflow,
    title: "Business Process Re-engineering",
    tag: "Process",
    desc: "Inefficient processes cost businesses time, money, and competitive advantage. Our BPR service takes a deep look at how your organization operates and redesigns workflows from the ground up — eliminating waste, reducing cost, and unlocking productivity.",
    highlights: [
      "End-to-end process mapping and analysis",
      "Identification of bottlenecks and inefficiencies",
      "Process redesign and optimization",
      "Technology and automation integration recommendations",
      "Change management support",
      "Performance benchmarking before and after",
      "Implementation roadmap and follow-up",
    ],
    forWhom:
      "Organizations looking to improve operational efficiency, reduce overhead, or scale without growing complexity.",
  },
  {
    id: 6,
    icon: BarChart3,
    title: "Financial Feasibilities",
    tag: "Feasibility",
    desc: "Every major business decision deserves a solid foundation. Our financial feasibility studies give you a comprehensive, data-driven picture of whether a project, investment, or new venture is viable — before you commit capital or resources.",
    highlights: [
      "Market and demand analysis",
      "Revenue projection and financial modeling",
      "Cost-benefit analysis",
      "Break-even and ROI calculations",
      "Risk identification and sensitivity analysis",
      "Funding requirements and financing structure",
      "Feasibility reports for banks, investors, or internal boards",
    ],
    forWhom:
      "Entrepreneurs, real estate developers, project managers, and executives planning new investments or expansions.",
  },
  {
    id: 7,
    icon: FileText,
    title: "IFRS Advisory Service",
    tag: "IFRS",
    desc: "IFRS compliance is a requirement for businesses operating in the UAE and accessing international markets. Our IFRS specialists help you navigate complex standards, implement compliant reporting frameworks, and ensure your financial statements meet the highest international benchmarks.",
    highlights: [
      "IFRS gap assessments and impact analysis",
      "IFRS implementation and transition support",
      "Technical accounting advice on specific standards (IFRS 9, 15, 16, 17, etc.)",
      "Financial statement preparation under IFRS",
      "Staff training and capacity building",
      "Ongoing IFRS compliance monitoring",
      "Liaison with auditors and regulators",
    ],
    forWhom:
      "Companies transitioning to IFRS, preparing for audit, listing on exchanges, or seeking international investment.",
  },
];

const whyBAC = [
  {
    icon: Lightbulb,
    title: "Tailored Strategies",
    body: "No one-size-fits-all — every plan is built around your specific goals and market context.",
  },
  {
    icon: Globe,
    title: "UAE Market Knowledge",
    body: "We understand local regulations, free zone structures, and the business environment inside out.",
  },
  {
    icon: Zap,
    title: "Senior-Level Expertise",
    body: "All engagements are led by qualified advisors with deep cross-industry experience across the UAE and beyond.",
  },
  {
    icon: MessageSquare,
    title: "End-to-End Support",
    body: "From strategy through execution — we stay involved, not just advisory on paper.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Partnership",
    body: "We build relationships that grow with your business, not one-off engagements.",
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

export default function BusinessAdvisoryPage() {
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
        <title>Business Advisory Services — BAC</title>
        <meta
          name="description"
          content="Expert business advisory services for UAE businesses — CFO service, business valuation, M&A advisory, feasibility studies, IFRS advisory, and business consultation."
        />
        <meta
          name="keywords"
          content="business advisory UAE, CFO service Dubai, business valuation UAE, M&A advisory, IFRS advisory, feasibility study UAE"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://yourdomain.com/services/business-advisory" />
        <meta property="og:title" content="Business Advisory Services — BAC" />
        <meta
          property="og:description"
          content="Strategic Direction. Sustainable Growth. Business Excellence. End-to-end advisory for UAE businesses."
        />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "BAC Business Advisory",
              url: "https://yourdomain.com/services/business-advisory",
              description:
                "End-to-end business advisory solutions built for UAE businesses.",
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
              alt="Business Advisory Services"
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
              Business Advisory
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
              BAC Business Advisory
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.02] mb-6 max-w-4xl"
            >
              Strategic Direction.
              <br />
              <span className="text-transparent bg-clip-text bg-textprimary">
                Sustainable Growth.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-xl mb-10"
            >
              Strategic Direction. Sustainable Growth. Business Excellence.
              <br />
              No matter your role or goal — BAC adapts to your needs.
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
                Book Free Consultation
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
                  <p className="text-xs md:text-sm text-gray-400 font-medium">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
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
              <SectionLabel>Business Advisory</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Helping You Make{" "}
                <span className="text-textsecondary">Confident & Strategic</span>{" "}
                Business Decisions
              </h2>
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-4">
                We work closely with startups, SMEs, and enterprises across the UAE to guide them through strategic
                decision-making, financial forecasting, process improvement, and performance optimization.
              </p>
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-10">
                Whether you're scaling, restructuring, entering a new market, or preparing for investment — our
                expert advisors provide clear direction backed by data, industry experience, and deep market insights.
              </p>

              {/* Discipline pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                {["CFO Service", "Valuation", "M&A", "IFRS", "Feasibility", "BPR", "Consultation"].map((p) => (
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
                  { value: "7+", label: "Advisory disciplines" },
                  { value: "360°", label: "Business view" },
                  { value: "100%", label: "Tailored strategy" },
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
                  src="/images/business-advisory.webp"
                  alt="Business advisory consultation"
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
                    Across all industries
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Startups, SMEs &amp; enterprises across the UAE trust our advisors for critical decisions.
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
                <SectionLabel>What We Offer</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                  Business Advisory Services
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-8">
                  Strategic expertise across 7 disciplines — each service expands to show exactly what's included.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm md:text-lg font-semibold text-textsecondary hover:text-textprimary transition-colors"
                >
                  Talk to an advisor
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
                alt="Professional business advisory service"
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
                  Business Advisory
                </p>
                <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                  Ready to Grow Your Business
                  <br />
                  <span className="font-light text-white/70">
                    with Confidence?
                  </span>
                </h2>
                <p className="text-white/80 text-base leading-relaxed mb-8">
                  Let's work together to unlock new opportunities, improve profitability,
                  and build a resilient business for the long term.
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
                Why Businesses Across the UAE Trust{" "}
                <span className="text-textsecondary">BAC</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {whyBAC.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i * 0.25}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="group text-center p-7 rounded-2xl border border-purpletint hover:border-purpletint bg-purpletint transition-all duration-300"
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

        <ContactSection />
        <ScrollToTop />
        <FloatingService />
        <Footer />
      </div>
    </>
  );
}