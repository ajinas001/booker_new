"use client";

import React, { useRef } from "react";
import {
  CheckCircle,
  TrendingUp,
  Wallet,
  FileText,
  BarChart3,
  Star,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardSlideUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        strokeWidth={1}
        className={`w-3.5 h-3.5 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
          }`}
      />
    ))}
  </div>
);

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const results = [
  { icon: Wallet, label: "Average Tax Savings", value: "AED 45K+", },
  { icon: TrendingUp, label: "Financial Clarity", value: "100%", },
  { icon: FileText, label: "Compliance Rate", value: "99.8%", },
  { icon: BarChart3, label: "Time Saved", value: "20+ hrs/mo", },
];

const benefits = [
  "Complete diagnosis of your financial health before we start",
  "Custom plan built specifically for your business needs",
  "Transparent pricing — you know exactly what you're paying for",
  "Monthly clarity on cash flow, profitability, and performance",
  "Peace of mind knowing all UAE taxes are filed correctly and on time",
  "Strategic recommendations to save thousands in corporate taxes",
  "Organised financial records ready for any internal or external audit",
  "Reclaim 20+ hours per month to focus solely on business growth",
];

const whyItems = [
  {
    title: "We assess first, not sell first",
    desc: "No pressure. We diagnose your financial situation before recommending solutions. This ensures you only pay for what you actually need.",
  },
  {
    title: "Custom solutions, not one-size-fits-all",
    desc: "Your plan is built specifically for your business, industry, and complexity. From AED 200 to AED 200K+, we scale to your needs.",
  },
  {
    title: "Complete transparency",
    desc: "We explain what we do, why we do it, and what you'll gain. No hidden fees. No surprises. Just honest, clear communication.",
  },
  {
    title: "UAE expertise",
    desc: "Deep understanding of UAE tax regulations, VAT compliance, and corporate requirements across all emirates.",
  },
];

const testimonials = [
  {
    text: "Had a great experience with the BAC team. Truly amazing with phenomenal expertise in Taxation, humble approach, attention to detail and always available for support 24/7. One of the best Tax Consultants in UAE.",
    name: "Mohammed Fazal",
    place: "Dubai",
    rating: 5,
  },
  {
    text: "Among all the firms I've tried, Booker Accounting is the most responsive and reliable. Their attention to detail is excellent and their depth of knowledge is beyond expectations. Definitely a 5-star service!",
    name: "Abhilash Mettammal",
    place: "Abu Dhabi",
    rating: 5,
  },
  {
    text: "It was great working with Booker Accounting Services! The team was professional, efficient, and got the work done without me having to follow up. Really appreciated the smooth experience — highly recommend!",
    name: "Mohammed Taha",
    place: "Sharjah",
    rating: 5,
  },
];

// ---------------------------------------------------------------------------
// Hero section (sticky background)
// ---------------------------------------------------------------------------

function HeroBg() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Subtle Ken-Burns zoom on the bg image as the user scrolls
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div
      ref={ref}
      className="sticky top-0 h-screen overflow-hidden z-0 flex items-center justify-center"
    >
      {/* Background image with parallax scale */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          scale,
          backgroundImage: "url('/images/samplebg.jpg')", // Your local image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#0f2d33]/55 to-[#0f2d33]/70" />

      {/* Hero copy */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-xs uppercase tracking-[0.2em] text-teal-300 font-semibold mb-4"
        >
          Trusted Across the UAE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-5"
        >
          Real Results for
          <br />
          <span className="text-[#008f95]">Real Businesses</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg text-white/75 leading-relaxed max-w-xl mx-auto"
        >
          From Dubai to Sharjah — see how Booker Accounting helps businesses
          save money, stay compliant, and grow with confidence.
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        {/* <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span> */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          className="w-5 h-5 border-r-2 border-b-2 border-white/40 rotate-45"
        />
      </motion.div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function Testimonials() {
  return (
    /**
     * IMPORTANT: The parent that wraps <HeroBg> + <ContentLayer> must NOT have
     * overflow:hidden or overflow:scroll — the stickiness depends on normal
     * document flow. If this component is inside a container with overflow:hidden,
     * add  overflow-visible  to that wrapper.
     */
    <div className="relative">
      {/* ── Sticky background image ── */}
      <HeroBg />

      {/* ── Content slides up over the background ── */}
      <div
        className="relative z-10 bg-white"
        style={{
          borderRadius: "36px 36px 0 0",
          marginTop: "-48px",         // pulls panel up to partially overlap the hero
          boxShadow: "0 -12px 48px rgba(0,0,0,0.14)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-24">

          {/* ──────────────────────────────────────────
              SECTION 1 — Testimonials
          ────────────────────────────────────────── */}
          <section className="mb-28">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mb-14"
            >
              <p className="text-xs uppercase tracking-[0.18em] font-bold text-[#1f626d] mb-3">
                Client stories
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-black leading-tight mb-2">
                Success{" "}
                <span className="text-teritory">Stories</span>
              </h2>
              <p className="text-gray-500 text-lg">
                Hear directly from our valued clients.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  variants={cardSlideUp}
                  whileHover={{ y: -6, transition: { duration: 0.28 } }}
                  className="group relative flex flex-col justify-between p-8 bg-gradient-to-b from-neutral-50 to-neutral-100/40 hover:from-white hover:to-neutral-50/20 rounded-[2rem] border border-neutral-200/60 hover:border-[#1f626d]/30 hover:shadow-2xl hover:shadow-[#1f626d]/8 transition-all duration-500"
                >
                  {/* Ambient glow */}
                  <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#1f626d]/6 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div>
                        <h4 className="text-neutral-900 text-[17px] font-black tracking-tight">
                          {t.name}
                        </h4>
                        <p className="text-[#1f626d] text-[9px] font-bold tracking-[0.16em] uppercase mt-1">
                          Verified Client · {t.place}
                        </p>
                      </div>
                      <span className="text-5xl font-serif font-black text-[#1f626d]/10 leading-none -mt-2 select-none">
                        "
                      </span>
                    </div>

                    {/* Body */}
                    <p className="text-[14.5px] text-neutral-600 font-medium leading-relaxed italic flex-1 mb-7">
                      "{t.text}"
                    </p>
                  </div>

                  {/* Footer panel */}
                  <div className="relative z-10 flex items-center justify-between gap-4 bg-white/50 backdrop-blur-md border border-neutral-200/50 rounded-2xl px-4 py-3 group-hover:bg-white/70 transition-colors duration-300">
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] font-bold tracking-widest uppercase text-neutral-400">
                        Client Rating
                      </span>
                      <StarRating rating={t.rating} />
                    </div>
                    <div className="bg-white/90 border border-neutral-200/70 rounded-xl px-3 py-1.5">
                      <span className="text-xs font-black text-[#1f626d] tracking-wide">
                        {t.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trustpilot CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 flex justify-center"
            >
              <Link
                href="https://www.trustpilot.com/review/bookeraccounting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 px-10 py-4 rounded-full border border-gray-300 bg-transparent text-gray-900 text-base font-semibold hover:border-[#1f626d] transition-all duration-300"
              >
                <Image
                  src="/images/trustpilot.png"
                  alt="Trustpilot"
                  width={26}
                  height={26}
                  className="object-contain"
                />
                <span className="group-hover:text-[#1f626d] transition-colors duration-300">
                  Review us on Trustpilot
                </span>
              </Link>
            </motion.div>
          </section>

          {/* ──────────────────────────────────────────
              SECTION 2 — Metrics grid
          ────────────────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10"
          >
            {results.map(({ icon: Icon, label, value }, idx) => (
              <motion.div
                key={idx}
                variants={cardSlideUp}
                className="bg-[#1f626d] p-7 rounded-2xl text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className="w-10 h-10 mb-4 opacity-85" />
                <p className="text-sm text-white/75 mb-1">{label}</p>
                <p className="text-3xl font-bold">{value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* ──────────────────────────────────────────
              SECTION 3 — Benefits checklist
          ────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#f0faf7] rounded-3xl px-8 sm:px-12 py-12 mb-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-8">
              What our clients actually get
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-[15px] leading-relaxed">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ──────────────────────────────────────────
              SECTION 4 — Why choose us
          ────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#1f626d] text-white rounded-3xl px-8 sm:px-12 py-12"
          >
            <h3 className="text-xl font-bold mb-8">
              Why clients choose Booker Accounting
            </h3>
            <div className="space-y-7">
              {whyItems.map(({ title, desc }, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400 shrink-0 mt-[6px]" />
                  <div>
                    <h4 className="font-bold text-[15px] mb-1">{title}</h4>
                    <p className="text-white/80 text-[15px] leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}