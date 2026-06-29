"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search, MessageCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingActions from "@/components/FloatingActions";
import FloatingService from "@/components/FloatingService";

const faqs = [
  {
    question: "What is e-invoicing in the UAE?",
    answer:
      "E-invoicing is the process of issuing, transmitting, and storing invoices in a structured electronic format that can be automatically processed by systems.",
  },
  {
    question: "When will e-invoicing become mandatory in the UAE?",
    answer:
      "The UAE plans a phased implementation starting July 2026, with mandatory compliance for large businesses first, followed by SMEs in 2027.",
  },
  {
    question: "What format will e-invoices use?",
    answer:
      "E-invoices must be issued in structured formats such as XML or JSON, based on standards defined by the UAE Ministry of Finance.",
  },
  {
    question: "What is an Accredited Service Provider (ASP)?",
    answer:
      "An ASP is a government-approved platform that enables businesses to generate, validate, transmit, and archive e-invoices.",
  },
  {
    question: "Will e-invoices be reported to the tax authority in real time?",
    answer:
      "Yes, e-invoices are transmitted to the tax authority via the ASP in near real time, improving VAT reporting accuracy.",
  },
  {
    question: "What information must an e-invoice include?",
    answer:
      "An e-invoice includes seller/buyer details, TRNs, invoice number/date, line-item details, VAT rates, and total value.",
  },
  {
    question: "How long must e-invoices be stored?",
    answer:
      "E-invoices must be securely stored for at least five years in accordance with UAE VAT regulations.",
  },
  {
    question: "Are there penalties for non-compliance?",
    answer:
      "Yes, failure to comply may result in monetary penalties, invoice rejection, and VAT compliance issues.",
  },
  {
    question: "Do businesses need to change their accounting or ERP systems?",
    answer:
      "Not always, many systems can be integrated with an ASP, though configuration changes may be required.",
  },
  {
    question:
      "Do all businesses in the UAE need to register for Corporate Tax?",
    answer:
      "Most businesses must assess their obligations. Requirements depend on the nature of the business and specific FTA regulations.",
  },
  {
    question: "What is the Corporate Tax rate in the UAE?",
    answer:
      "The standard rate is 9% on taxable profits above the applicable threshold.",
  },
  {
    question: "How often do VAT returns need to be filed?",
    answer:
      "Most businesses submit VAT returns quarterly, though the FTA may assign different periods.",
  },
  {
    question: "What records should businesses maintain for tax compliance?",
    answer:
      "Businesses should maintain invoices, receipts, bank statements, contracts, payroll records, and accounting reports.",
  },
  {
    question: "What happens if I miss a VAT or Corporate Tax filing deadline?",
    answer:
      "Missing deadlines may result in penalties, fines, and additional compliance issues.",
  },
  {
    question: "Is bookkeeping mandatory for businesses in the UAE?",
    answer:
      "Yes, maintaining proper records is essential for tax compliance, audits, and financial reporting.",
  },
  {
    question: "What is the difference between bookkeeping and accounting?",
    answer:
      "Bookkeeping records financial transactions, while accounting involves analyzing data and providing financial insights.",
  },
  {
    question: "Why is an external audit important?",
    answer:
      "An external audit provides independent verification of records, strengthens stakeholder confidence, and helps identify risks.",
  },
  {
    question: "What is AML compliance and who needs it?",
    answer:
      "AML helps prevent financial crimes. Certain regulated sectors and designated non-financial businesses must comply with UAE AML regulations.",
  },
  {
    question: "How can Booker Accounting help my business?",
    answer:
      "We provide accounting, bookkeeping, VAT, Corporate Tax, audit, and advisory services to ensure compliance and sustainable growth.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [search, setSearch] = useState("");

  const filteredFaqs = useMemo(
    () =>
      faqs.filter((f) =>
        f.question.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white bg-black">
        {/* Background Layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/images/faq.webp"
            alt="Business Advisory Service"
            priority
            fill
            sizes="100vw"
            className="object-cover object-center transform-gpu"
            style={{
              WebkitTransform: "translateZ(0)", // ✅ Fix iOS flicker
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80 pointer-events-none" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="text-sm md:text-lg flex flex-wrap text-gray-300 gap-x-2">
              <Link
                href="/"
                className="text-white hover:text-textprimary transition-colors"
              >
                Home
              </Link>

              <span>›</span>
              <span className="text-textprimary font-medium">FAQ's</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-textprimary">
              Questions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            Clear Answers. Confident Decisions. Lasting Trust.
          </motion.p>
        </div>
      </section>

      {/* FAQ Utility Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        {/* Sticky Search Bar */}
        <div className="mb-16 sticky top-24 z-20 bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-gray-200">
          <div className="flex items-center gap-3 px-4">
            <Search className="text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full py-4 text-lg bg-transparent focus:outline-none text-gray-900 placeholder-gray-400"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <motion.div
                layout
                key={index}
                className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <Plus
                    className={`transition-transform duration-300 ${activeIndex === index ? "rotate-45" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p className="px-8 pb-8 text-gray-600 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20 text-gray-500">
              No results found for your search.
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-purpletint rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-green-500/10 overflow-hidden relative">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

          {/* Left Content */}
          <div className="flex-1 space-y-4 relative z-10">
            <span className="text-black/60 font-semibold tracking-wider uppercase text-sm">
              Need Expert Advice?
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-textsecondary tracking-tight leading-tight">
              Still Have Questions?
            </h2>
            <p className="text-black/70 text-lg md:text-xl max-w-lg leading-relaxed">
              Speak with one of our specialists today and get expert guidance
              tailored to your specific business needs.
            </p>
          </div>

          {/* CTA Section */}
          <div className="relative z-10">
            <Link
              href="https://wa.me/YOUR_NUMBER?text=I%20would%20like%20a%20free%20consultation"
              target="_blank"
              className="group flex items-center gap-3 bg-textsecondary text-white px-8 py-5 rounded-2xl hover:text-textsecondary font-semibold text-lg hover:bg-white transition-all hover:shadow-xl active:scale-95"
            >
              Book Your Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

     
      <ContactSection />
      <Footer />
    </>
  );
}
