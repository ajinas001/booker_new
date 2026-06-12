"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import ScrollToTop from "@/components/ScrollToTop";

const faqs = [
  {
    question: "What is e-invoicing in the UAE?",

    answer:
      "E-invoicing is the process of issuing, transmitting, and storing invoices in a structured electronic format that can be automatically processed by systems. Unlike PDF or paper invoices, e-invoices are machine-readable and exchanged digitally through approved platforms.",
  },

  {
    question: "When will e-invoicing become mandatory in the UAE?",

    answer:
      "The UAE plans a phased implementation starting July 2026, with mandatory compliance for large businesses first, followed by SMEs in 2027. Exact dates may vary depending on business size and transaction type.",
  },

  {
    question: "What format will e-invoices use?",

    answer:
      "E-invoices must be issued in structured formats such as XML or JSON, based on standards defined by the UAE Ministry of Finance (for example, PINT AE). These formats enable automated validation and data exchange.",
  },

  {
    question: "What is an Accredited Service Provider (ASP)?",

    answer:
      "An Accredited Service Provider (ASP) is a government-approved platform that enables businesses to generate, validate, transmit, and archive e-invoices in compliance with UAE regulations. Businesses must connect to an ASP to issue compliant e-invoices.",
  },

  {
    question: "Will e-invoices be reported to the tax authority in real time?",

    answer:
      "Yes. E-invoices are transmitted to the tax authority via the Accredited Service Provider in near real time, improving VAT reporting accuracy and reducing audit risks.",
  },

  {
    question: "What information must an e-invoice include?",

    answer:
      "An e-invoice typically includes seller and buyer details, Tax Registration Numbers (TRNs), invoice number and date, line-item details, applicable VAT rates and amounts, and the total invoice value.",
  },

  {
    question: "How long must e-invoices be stored?",

    answer:
      "E-invoices must be securely stored for at least five years, in accordance with UAE VAT record-keeping requirements. Storage can be managed through your ASP or internal systems.",
  },

  {
    question: "Are there penalties for non-compliance?",

    answer:
      "Yes. Failure to comply with e-invoicing requirements may result in monetary penalties, rejection of invoices, and VAT compliance issues. Penalties will be enforced once e-invoicing becomes mandatory for your business category.",
  },

  {
    question: "Do businesses need to change their accounting or ERP systems?",

    answer:
      "Not always. Many existing accounting or ERP systems can be integrated with an Accredited Service Provider. However, businesses should assess whether upgrades or configuration changes are required to support structured e-invoicing.",
  },
];

export default function page() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    // Background color updated to match the image's light grey/off-white
    <>
      <Navbar />
      <section className="relative overflow-hidden text-white bg-black">
        {/* Background Layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/images/img3.webp"
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

      <section className="w-full py-28 px-6 min-h-screen font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}

          {/* FAQ List */}
          <div className="flex flex-col">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              const displayIndex = (index + 1).toString().padStart(2, "0");

              return (
                <div
                  key={index}
                  className="border-b border-black/20 last:border-b"
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-12 text-left group"
                  >
                    <div className="flex items-center gap-10">
                      {/* Italic Numbering */}
                      <span className="text-4xl italic font-serif text-[#333] opacity-80">
                        {displayIndex}.
                      </span>

                      {/* Question Text */}
                      <span className="text-3xl font-normal text-[#1a1a1a] tracking-tight">
                        {faq.question}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="transition-transform duration-300">
                      <Plus
                        className={`w-7 h-7 stroke-[1.5px] transition-transform duration-500 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      >
                        <div className="pl-[5rem] pb-12 pr-14 text-[#444] text-3xl leading-relaxed ">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <FloatingMenuButton />
      <ScrollToTop />
      <ContactSection />
      <Footer />
    </>
  );
}
