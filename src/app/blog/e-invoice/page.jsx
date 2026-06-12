"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import Footer from "@/components/Footer";

const BlogPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const Section = ({ children, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <>
      <Navbar />
      {/* hero */}
      <section className="relative overflow-hidden text-white bg-black">
        {/* Background Image Layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/images/img3.webp" 
            alt="UAE E-Invoicing Transformation"
            priority
            fill
            sizes="100vw"
            className="object-cover object-center transform-gpu select-none"
            style={{
              WebkitTransform: "translateZ(0)",
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80 pointer-events-none" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="text-sm md:text-lg flex flex-wrap text-gray-300 gap-x-2">
              <Link href="/" className="text-white hover:text-textprimary transition-colors">
                Home
              </Link>
              <span>›</span>
              <Link href="/blog" className="text-white hover:text-textprimary transition-colors">
                Blog
              </Link>
              <span>›</span>
              <span className="text-textprimary font-medium">UAE E-Invoicing</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            UAE E-Invoicing <br />
            <span className="text-transparent bg-clip-text bg-textprimary">
              Transformation
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl"
          >
            Understanding the UAE’s mandatory e-invoicing rollout, compliance requirements, timelines, and its impact on businesses.
          </motion.p>
        </div>
      </section>

      {/* main */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-teal-600 origin-left z-50"
          style={{ scaleX }}
        />

        <main className="max-w-7xl mx-auto px-6 py-16">
          {/* Introduction */}
          <Section>
            <div className="rounded-2xl p-8 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The UAE is undergoing one of its most significant regulatory and digital transformations in business operations with the rollout of mandatory e-invoicing. From July 2026, businesses must transition from traditional invoices (PDFs or paper) to structured, machine-readable electronic invoices.
              </p>
            </div>
          </Section>

          {/* Why UAE Mandating */}
          <Section>
            <div className="rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-textsecondary mb-6 inline-block pb-2 ">
                Why the UAE Is Mandating E-Invoicing
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-300 p-6 rounded-xl ">
                  <h3 className="font-bold text-xl mb-2">Transparency & Compliance</h3>
                  <p className="text-gray-600">Real-time validation of VAT data reduces tax evasion and ensures accurate reporting.</p>
                </div>
                <div className="bg-gray-300 p-6 rounded-xl ">
                  <h3 className="font-bold text-xl mb-2">Efficiency</h3>
                  <p className="text-gray-600">Automation eliminates manual data entry, reducing human errors and administrative overhead.</p>
                </div>
                <div className="bg-gray-300 p-6 rounded-xl  ">
                  <h3 className="font-bold text-xl mb-2">Business Ecosystem</h3>
                  <p className="text-gray-600">Standardized formats improve interoperability between different accounting systems and analytics.</p>
                </div>
                <div className="bg-gray-300 p-6 rounded-xl ">
                  <h3 className="font-bold text-xl mb-2">Sustainability</h3>
                  <p className="text-gray-600">Digital invoices significantly reduce paper usage, resource waste, and physical storage needs.</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Key Requirements */}
          <Section>
            <div className="rounded-2xl p-8 mb-12 ">
              <h2 className="text-3xl font-bold text-textsecondary mb-6">Key Requirements Businesses Must Know</h2>
              <div className="space-y-6">
                {[
                  { title: "Structured Digital Format", text: "Only XML/JSON formats aligned with standards like PINT AE or UBL are accepted." },
                  { title: "Accredited Service Providers (ASPs)", text: "Businesses must issue invoices via FTA-approved ASPs to ensure compliance." },
                  { title: "Real-Time Reporting", text: "Near real-time invoice transmission to the tax authority is mandatory." },
                  { title: "Data Compliance", text: "Seller & buyer details, TRNs, VAT breakdowns, and unique IDs are required." },
                  { title: "Scope", text: "Initially applies to B2B and B2G (Government) transactions." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-bold">✓</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Implementation Timeline */}
          <Section>
            <div className="rounded-2xl p-8 mb-12 bg-teal-900 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">Implementation Timeline</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { date: "July 1, 2026", event: "Pilot phase begins" },
                  { date: "July 31, 2026", event: "Large enterprises appoint ASPs" },
                  { date: "Jan 1, 2027", event: "Mandatory for large taxpayers" },
                  { date: "Mar – July 2027", event: "SME implementation" },
                  { date: "Oct 2027", event: "Government entities comply" }
                ].map((item, i) => (
                  <div key={i} className="bg-teal-800/50 p-6 rounded-xl ">
                    <div className="text-white font-bold text-lg mb-2"> {item.event}</div>
                    <p className="text-teal-50">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Impact Table */}
          <Section>
            <div className="rounded-2xl p-8 mb-12 overflow-x-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Business Impact: Opportunities & Challenges</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-teal-900 text-white">
                    <th className="p-4 text-left font-semibold">Factor</th>
                    <th className="border border-gray-300 p-4 text-left font-semibold">Positive Impacts</th>
                    <th className="border border-gray-300 p-4 text-left font-semibold">Challenges & Considerations</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="bg-white">
                    <td className="border border-gray-300 p-4 font-semibold">Operational</td>
                    <td className="border border-gray-300 p-4">Up to 60–66% cost reduction in invoice processing; faster approvals.</td>
                    <td className="border border-gray-300 p-4">ERP and system upgrades; staff training and change management.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">Financial</td>
                    <td className="border border-gray-300 p-4">Improved cash flow and reduced manual error costs.</td>
                    <td className="border border-gray-300 p-4">Initial implementation costs and software licensing fees.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 p-4 font-semibold">Legal</td>
                    <td className="border border-gray-300 p-4">Improved audit readiness and total transparency.</td>
                    <td className="border border-gray-300 p-4">Strict penalties for non-compliance and data errors.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          {/* Strategic Impact Checklist */}
          <Section>
            <div className="rounded-2xl p-8 mb-12 bg-white">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Impact Assessment</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "System capability review",
                  "Process mapping",
                  "Training & resource planning",
                  "Data governance & security",
                  "Financial forecasting"
                ].map((step, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-lg">
                    <div className="w-2 h-2 bg-teal-600 rounded-full" />
                    <span className="text-gray-700 font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Final Thoughts */}
          <Section>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 mb-12  ">
              <h2 className="text-3xl font-bold text-teal-900 mb-4">Final Thoughts: A Step Toward Digital Leadership</h2>
              <p className="text-lg text-teal-800 leading-relaxed">
                E-invoicing is more than compliance—it’s a strategic enabler. Early adoption helps businesses enhance efficiency, ensure tax compliance, and gain a competitive advantage while aligning with the UAE’s digital vision.
              </p>
            </div>
          </Section>
        </main>

        <ContactSection />
        <ScrollToTop />
        <FloatingMenuButton />
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;