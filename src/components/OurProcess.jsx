"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const textRevealVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
export default function OurProcess() {
  const [openIndex, setOpenIndex] = useState(null);

  const processSteps = [
    {
      num: "01",
      title: "Financial Health Check & Assessment",
      description:
        "We diagnose your current financial situation and identify exactly what you need.",
      details: [
        "✓ Analyze your current bookkeeping setup (or lack thereof)",
        "✓ Review all existing financial records and identify gaps",
        "✓ Assess VAT compliance status and tax filing history",
        "✓ Understand your business model, transaction volume, and cash flow",
        "✓ Identify pain points and compliance risks",
        "✓ Evaluate current systems and processes",
      ],
      time: "1–2 weeks",
    },
    {
      num: "02",
      title: "Customized Plan & Recommendations",
      description:
        "Based on our assessment, we create a tailored strategy and recommend the exact services you need.",
      details: [
        "✓ Present detailed findings from health check",
        "✓ Identify what’s working and what needs fixing",
        "✓ Recommend specific services (bookkeeping, tax planning, audit)",
        "✓ Provide transparent pricing based on YOUR actual needs",
        "✓ Create a timeline and implementation plan",
        "✓ Answer all your questions and address concerns",
      ],
      time: "1 week",
      highlight: true,
    },
    {
      num: "03",
      title: "System Setup & Organization",
      description:
        "We implement proper bookkeeping systems and set up accounting processes tailored to your business.",
      details: [
        "✓ Set up accounting software (QuickBooks, Zoho, etc.)",
        "✓ Create proper chart of accounts for your industry",
        "✓ Establish VAT/tax filing structure",
        "✓ Clean up historical records if needed",
        "✓ Train your team on new processes",
      ],
      time: "2–3 weeks",
    },
    {
      num: "04",
      title: "Monthly Bookkeeping & Reconciliation",
      description:
        "We handle all monthly transactions, ensure accuracy, and keep your books reconciled.",
      details: [
        "✓ Record all invoices and expenses accurately",
        "✓ Bank reconciliation and payment tracking",
        "✓ Monthly financial reports generation",
        "✓ Regular review and quality checks",
        "✓ Instant access to your financial data",
      ],
      time: "Ongoing",
    },
    {
      num: "05",
      title: "Tax Planning & Optimization",
      description:
        "We identify tax-saving opportunities and ensure you pay only what you owe.",
      details: [
        "✓ Quarterly tax planning reviews",
        "✓ VAT compliance and timely filing",
        "✓ Deduction optimization and tax strategy",
        "✓ Corporate tax planning aligned with UAE regulations",
        "✓ Proactive alerts for tax deadlines",
      ],
      time: "Quarterly",
    },
    {
      num: "06",
      title: "Reporting, Insights & Compliance",
      description:
        "We provide clear reports, actionable insights, and handle all regulatory requirements.",
      details: [
        "✓ Monthly P&L statements and cash flow analysis",
        "✓ Key business metrics dashboard",
        "✓ Year-end financial statements",
        "✓ Annual audit preparation and support",
        "✓ Regulatory compliance and documentation",
      ],
      time: "Monthly + Annual",
    },
  ];

  return (
    <>
      <section className="max-w-7xl mx-auto pb-24 px-6 py-8 md:py-20">
        <motion.div
          className="mb-16 max-w-4xl"
          variants={textRevealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Using a font class that closely matches the image's "Success Stories" style */}
          <h2 className="text-4xl md:text-6xl font-normal text-gray-900 mb-8 tracking-tight leading-none font-bold">
            Our{" "}
            <span className="font-['Playfair_Display',_serif] italic text-secondary">
              Process
            </span>
          </h2>
          {/* Keeping this description for context, adjust as needed */}
          <p className="text-xl text-gray-600">
            A clear, strategic process that powers your business forward.
          </p>
        </motion.div>

        <div className="space-y-8">
          {processSteps.map((item, index) => (
            <div
              key={index}
              className={`border-b border-gray-400 pb-5  p-2 md:p-5 ${
                item.highlight ? " rounded-2xl border" : ""
              }`}
            >
              {/* Header Section */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-start w-full text-left"
              >
                <div>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-gray-800 italic text-xl font-light">
                      {item.num}.
                    </span>

                    <span className="text-xl md:text-3xl font-semibold text-textsecondary">
                      {item.title}
                    </span>

                    {item.highlight && (
                      <span className="bg-secondary text-white text-xs md:text-sm font-medium px-3 py-1 rounded-full">
                        Key Step
                      </span>
                    )}
                  </div>

                  {/* Description always visible */}
                  <p className="mt-2 ml-10 text-gray-600 text-base md:text-lg">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <span className="text-sm md:text-md">{item.time}</span>

                  <motion.span
                    initial={false}
                    animate={{ rotate: openIndex === index ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-light "
                  >
                    {openIndex === index ? "-" : "+"}
                  </motion.span>
                </div>
              </button>

              {/* Expandable Details */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden mt-4 ml-10 text-gray-700 text-lg leading-relaxed"
                  >
                    <ul className="space-y-2">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto pb-24 px-6 py-12">
        <div className="mt-12 bg-secondary p-10 rounded-3xl text-white ">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-5 leading-snug">
            Why Our Assessment-First Approach Works
          </h3>

          <p className="mb-10 text-teal-100 text-lg leading-relaxed max-w-3xl">
            After step 2, you'll receive a detailed proposal outlining exactly
            what you need and the exact cost—no guessing, no surprises. Just
            complete transparency. Your pricing is fully dependent on your
            assessment results — from
            <span className="font-semibold text-white"> AED 200</span> for
            minimal needs to
            <span className="font-semibold text-white"> AED 200K+</span> for
            enterprise-grade solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* CARD 1 */}
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md  hover:bg-white/20 transition-all duration-300">
              <div className="text-sm font-semibold mb-3 text-teal-200 tracking-wide">
                WHAT YOU NEED
              </div>
              <p className="text-teal-50">
                Services tailored to your exact business needs — not generic
                packages.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md  hover:bg-white/20 transition-all duration-300">
              <div className="text-sm font-semibold mb-3 text-teal-200 tracking-wide">
                TRANSPARENT PRICING
              </div>
              <p className="text-teal-50">
                Clear pricing based on your transactions, complexity & overall
                workload.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md shadow-md hover:bg-white/20 transition-all duration-300">
              <div className="text-sm font-semibold mb-3 text-teal-200 tracking-wide">
                CLEAR TIMELINE
              </div>
              <p className="text-teal-50">
                Know exactly when you'll start seeing improvements in your
                finances.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
