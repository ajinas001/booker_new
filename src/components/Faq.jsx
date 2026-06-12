"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What is e-invoicing in the UAE?",
    answer: "E-invoicing is the process of issuing, transmitting, and storing invoices in a structured electronic format. Unlike PDF or paper, these are machine-readable and exchanged digitally through approved platforms.",
  },
  {
    question: "When will it become mandatory?",
    answer: "The UAE plans a phased implementation starting July 2026, with mandatory compliance for large businesses first, followed by SMEs in 2027.",
  },
  {
    question: "What is an Accredited Service Provider?",
    answer: "An ASP is a government-approved platform that enables businesses to generate, validate, and archive e-invoices in compliance with UAE regulations.",
  },
  {
    question: "Are there penalties for non-compliance?",
    answer: "Yes. Failure to comply may result in monetary penalties, rejection of invoices, and VAT compliance issues once the mandate is enforced for your business category.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0); // Default first one open like the image

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Column: Heading and Description */}
        <div className="flex flex-col justify-start">
          <h2 className="text-4xl md:text-5xl font-bold text-textsecondary leading-tight mb-8">
            Frequently Asked<br />
           <span className=" text-secondary">
              Questions
            </span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-md">
            Everything you need to know about the new UAE E-Invoicing 
            regulations and how our platform ensures your business remains compliant.
          </p>
          <Link 
            href="/faq" 
            className="text-textsecondary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            More FAQs <span className="text-xl">→</span>
          </Link>
        </div>

        {/* Right Column: Accordion List */}
        <div className="flex flex-col border-t border-slate-300">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="border-b border-slate-300">
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className={`text-xl font-semibold transition-colors duration-300 ${
                    isOpen ? "text-slate-900" : "text-slate-800"
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className="text-slate-500">
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[3px]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[3px]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pb-8 text-slate-600 leading-relaxed text-[17px]">
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
  );
}