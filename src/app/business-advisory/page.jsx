"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseBusiness,
  Scale,
  Lightbulb,
  Shuffle,
  Workflow,
  BarChart3,
  FileText,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import ScrollToTop from "@/components/ScrollToTop";

// ─── DATA ────────────────────────────────────────────────────────────────────

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
    tag: "CFO",
    accent: "#14B8A6",
    title: "CFO Service",
    subtitle: "Your Financial Leader, On Demand",
    description:
      "Not every business needs a full-time CFO — but every business needs CFO-level thinking. Our outsourced CFO service gives you end-to-end financial leadership without the overhead. We manage your financial strategy, cash flow planning, budgeting, and reporting so you can focus on growing your business.",
    bullets: [
      "Financial planning & analysis (FP&A)",
      "Cash flow management and forecasting",
      "Budgeting and variance analysis",
      "Board-level financial reporting",
      "KPI development and performance monitoring",
      "Risk management and internal controls",
      "Investor relations and fundraising support",
    ],
    forWhom: "Startups, SMEs, and growing businesses that need strategic financial guidance without a full-time hire.",
  },
  {
    id: 2,
    icon: Scale,
    tag: "Valuation",
    accent: "#6366F1",
    title: "Business Valuation",
    subtitle: "Know What Your Business Is Really Worth",
    description:
      "Whether you're preparing for a sale, attracting investors, planning a merger, or simply want clarity on your company's financial standing — an accurate business valuation is essential. Our certified valuation experts use internationally recognized methodologies to deliver credible, defensible reports.",
    bullets: [
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
    tag: "Consultation",
    accent: "#F59E0B",
    title: "Business Consultation",
    subtitle: "Clarity, Strategy, and a Roadmap to Success",
    description:
      "Every business faces moments of uncertainty — whether it's entering a new market, navigating financial pressure, or deciding on the right structure for growth. Our business consultants bring a 360-degree view of your operations and provide practical, actionable guidance tailored to your specific situation.",
    bullets: [
      "Business health assessments and diagnostics",
      "Strategic planning and goal-setting",
      "Operational improvement recommendations",
      "Market entry and expansion strategy",
      "Financial restructuring advice",
      "Business model development and review",
      "Competitive analysis and benchmarking",
    ],
    forWhom: "Entrepreneurs, executives, and leadership teams seeking expert outside perspective.",
  },
  {
    id: 4,
    icon: Shuffle,
    tag: "M&A",
    accent: "#EF4444",
    title: "Merger & Acquisition",
    subtitle: "Navigate M&A with Confidence and Precision",
    description:
      "Mergers and acquisitions are among the most complex — and highest-stakes — decisions a business can make. Our M&A advisory team guides you through every stage: from identifying targets and structuring deals, to conducting due diligence, negotiating terms, and managing post-merger integration.",
    bullets: [
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
    tag: "Process",
    accent: "#10B981",
    title: "Business Process Re-engineering",
    subtitle: "Redesign Your Operations. Multiply Your Results.",
    description:
      "Inefficient processes cost businesses time, money, and competitive advantage. Our BPR service takes a deep look at how your organization operates and redesigns workflows from the ground up — eliminating waste, reducing cost, and unlocking productivity.",
    bullets: [
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
    tag: "Feasibility",
    accent: "#8B5CF6",
    title: "Financial Feasibilities",
    subtitle: "Before You Invest — Know the Numbers",
    description:
      "Every major business decision deserves a solid foundation. Our financial feasibility studies give you a comprehensive, data-driven picture of whether a project, investment, or new venture is viable — before you commit capital or resources.",
    bullets: [
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
    tag: "IFRS",
    accent: "#0EA5E9",
    title: "IFRS Advisory Service",
    subtitle: "Full Compliance. Zero Confusion. Complete Confidence.",
    description:
      "IFRS compliance is a requirement for businesses operating in the UAE and accessing international markets. Our IFRS specialists help you navigate complex standards, implement compliant reporting frameworks, and ensure your financial statements meet the highest international benchmarks.",
    bullets: [
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
    title: "Tailored Strategies",
    desc: "No one-size-fits-all — every plan is built around your specific goals and market context.",
  },
  {
    title: "Senior-Level Expertise",
    desc: "All engagements are led by qualified advisors with deep cross-industry experience across the UAE and beyond.",
  },
  {
    title: "UAE Market Knowledge",
    desc: "We understand local regulations, free zone structures, and the business environment inside out.",
  },
  {
    title: "End-to-End Support",
    desc: "From strategy through execution — we stay involved, not just advisory on paper.",
  },
  {
    title: "Long-Term Partnership",
    desc: "We build relationships that grow with your business, not one-off engagements.",
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

// ─── SERVICE CARD (expandable) ───────────────────────────────────────────────

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
      {/* Top accent bar */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />

      <div className="p-7">
        {/* Tag + Icon row */}
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

        {/* Expand toggle */}
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

export default function BusinessAdvisoryPage() {
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
        {/* Parallax bg */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 will-change-transform">
          <Image
            src="/images/img3.webp"
            alt="Business Advisory background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30 pointer-events-none select-none"
          />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/80 via-transparent to-transparent" />

        {/* Glow accents */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />

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
            <span className="text-teal-400 font-medium">Business Advisory</span>
          </motion.div>

          <div className="max-w-4xl">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="inline-block mb-5 px-4 py-1.5 rounded-full border border-indigo-400/40 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-widest uppercase"
            >
              UAE Business Advisory Experts
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
                Advisory Service
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10"
            >
              Strategic Direction. Sustainable Growth. Business Excellence.
              <br className="hidden sm:block" />
              No matter your role or goal — BAC adapts to your needs.
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
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-teal-500/30 hover:shadow-teal-400/40 hover:-translate-y-0.5"
              >
                Book Free Consultation <ArrowRight className="w-4 h-4" />
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
          INTRO / ABOUT
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/images/business-advisory.webp"
                alt="Business advisory consultation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-4 shadow-xl border border-gray-100">
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-0.5">
                  Across all industries
                </p>
                <p className="text-sm text-gray-600">
                  Startups, SMEs, and enterprises across the UAE trust our advisors for critical decisions.
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl bg-indigo-500/10 border border-indigo-400/20 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl bg-teal-500/10 border border-teal-400/20 -z-10" />
          </motion.div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-indigo-600"
            >
              Business Advisory
            </motion.span>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
            >
              Helping You Make{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500">
                Confident & Strategic
              </span>{" "}
              Business Decisions
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="text-gray-600 text-lg leading-relaxed mb-4"
            >
              We work closely with startups, SMEs, and enterprises across the UAE to guide them through strategic
              decision-making, financial forecasting, process improvement, and performance optimization.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              Whether you're scaling, restructuring, entering a new market, or preparing for investment — our
              expert advisors provide clear direction backed by data, industry experience, and deep market insights.
            </motion.p>

            {/* Why BAC mini-list */}
            <motion.ul
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              className="space-y-3"
            >
              {whyBAC.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-teal-500 shrink-0" />
                  <div>
                    <span className="text-sm font-bold text-gray-800">{item.title} — </span>
                    <span className="text-sm text-gray-500">{item.desc}</span>
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES GRID (expandable cards)
      ═══════════════════════════════════════════ */}
      <section id="services" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
              Business Advisory Services
            </h2>
            <p className="text-gray-500 text-lg">
              Strategic expertise across 7 disciplines — each card expands to show exactly what's included.
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
          WHY BAC — FULL TABLE
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
      <section className="py-20 bg-gradient-to-br from-teal-500 to-indigo-600">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
            Ready to Grow Your Business with Confidence?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to unlock new opportunities, improve profitability,
            and build a resilient business for the long term.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-700 font-bold text-base hover:bg-gray-50 transition-all duration-200 shadow-lg hover:-translate-y-0.5"
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