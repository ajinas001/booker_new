"use client";

import ContactSection from "@/components/ContactSection";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  TrendingUp,
  Briefcase,
  Layers,
  ClipboardCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden text-white ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/img3.webp"
            alt="Taxation"
            priority
            fill
            sizes="100vw"
            className="object-cover object-center"
            style={{ transform: "translateZ(0)" }} // ✅ Forces GPU to not over-allocate memory
          />

          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="text-sm md:text-lg flex text-gray-300 gap-x-2">
              <Link href="/">
                <span className="text-white cursor-pointer hover:text-textprimary transition-colors">
                  Home
                </span>
              </Link>
              &nbsp;›&nbsp;
              <span>Services</span>
              &nbsp;›&nbsp;
              <span className="text-textprimary font-medium">Taxation</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            {" "}
            <span className="text-transparent bg-clip-text bg-textprimary">
              Taxation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl"
          >
            Comprehensive corporate tax advisory and compliance services for
            startups, SMEs, and multinational businesses.
          </motion.p>
        </div>
      </section>

      {/* FIRST CONTENT */}

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:space-x-12 items-center">
            {/* LEFT CONTENT */}
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">
                CORPORATE TAX ADVISORY
              </p>

              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
                Strategic Tax Guidance
                <br />
                <span className="text-textsecondary">
                  in a Complex and Evolving Landscape
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                In today&apos;s highly regulated and digitally transparent UAE
                tax environment, managing your tax obligations is more than just
                compliance — it&apos;s about adding value, minimizing risk, and
                supporting sustainable business growth.
              </p>

              <p className="text-lg text-gray-600 mb-10">
                Booker Accounting offers expert corporate tax advisory and
                comprehensive tax compliance services designed to help startups,
                SMEs, and multinational businesses navigate the complexities of
                the tax framework with confidence.
              </p>

              <div className="grid grid-cols-2 gap-y-6">
                <div className="flex items-center space-x-2">
                  <span className="text-xl text-teal-500">•</span>
                  <p className="text-base font-medium text-gray-700">
                    Value-Driven Compliance
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xl text-teal-500">•</span>
                  <p className="text-base font-medium text-gray-700">
                    For All Business Sizes
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="lg:w-1/2 relative">
              <div className="w-full overflow-hidden rounded-xl">
                <Image
                  width={600}
                  height={500}
                  src="/images/taxation.webp"
                  alt="Corporate tax advisory consultation"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd SECTION */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
            {/* LEFT IMAGE */}
            <div className="lg:w-1/2 w-full lg:order-1 mb-10 lg:mb-0">
              <div className="relative w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/office-workers.webp"
                  alt="VAT advisory consultation"
                  className="object-cover rounded-3xl"
                  priority
                  width={600}
                  height={500}
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:w-1/2 w-full lg:order-2">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-secondary mb-3">
                VALUE ADDED TAX (VAT)
              </p>

              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                VAT Made Simple,
                <br />
                <span className="text-transparent bg-clip-text bg-textsecondary">
                  Compliance + Optimization
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed text-base mb-4">
                VAT compliance remains a critical focus for businesses operating
                across the UAE. Booker Accounting supports your business with a
                full spectrum of VAT services designed to simplify complexity
                and ensure total accuracy.
              </p>

              <p className="text-gray-600 leading-relaxed text-base mb-8">
                Our team offers tailored VAT expertise for specialized sectors,
                including free zone businesses and the oil and gas industry —
                ensuring full compliance and helping you avoid costly penalties.
              </p>

              {/* ICON GRID */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-900 font-semibold text-sm">
                    VAT Registration & Return Filing
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-900 font-semibold text-sm">
                    Audits, Voluntary Disclosures & Advisory
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-900 font-semibold text-sm">
                    Real-time VAT Reporting & Optimization
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd SECTION */}

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:space-x-12 items-center">
            {/* LEFT CONTENT */}
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">
                TAX AGENT SERVICE (FTA APPROVED)
              </p>

              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
                Your Trusted Representation,
                <br />
                <span className="text-textsecondary">
                  Before the FTA & Authorities
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                Appointing a tax agent ensures your business stays compliant
                with UAE tax laws — without stress. We act as your official
                representative with the{" "}
                <strong>Federal Tax Authority (FTA).</strong>
              </p>

              <p className="text-lg text-gray-600 mb-10">
                From handling your tax filings to managing audits and appeals,
                we protect your business and ensure hassle-free tax compliance.
              </p>

              <div className="grid grid-cols-2 gap-y-6">
                <div className="flex items-center space-x-2">
                  <span className="text-xl text-teal-500">•</span>
                  <p className="text-base font-medium text-gray-700">
                    FTA Representation
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xl text-teal-500">•</span>
                  <p className="text-base font-medium text-gray-700">
                    Tax Filings & Documentation
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xl text-teal-500">•</span>
                  <p className="text-base font-medium text-gray-700">
                    Audit & Dispute Handling
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xl text-teal-500">•</span>
                  <p className="text-base font-medium text-gray-700">
                    Full Compliance Assurance
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="lg:w-1/2 relative">
              <div className="w-full overflow-hidden rounded-xl">
                <Image
                  width={600}
                  height={500}
                  src="/images/taxation2.webp"
                  alt="FTA approved tax agent service"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 NEW SECTION: Corporate Tax & Transfer Pricing Advisory */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Corporate Tax Advisory &{" "}
            <span className="text-transparent bg-clip-text bg-textsecondary">
              Compliance
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team provides clear guidance on UAE corporate tax compliance,
            from strategic tax planning and efficient structuring to timely
            filing and reporting. We help you understand your tax exposure,
            identify applicable incentives and reliefs, and ensure your business
            structure supports long-term growth in an evolving regulatory
            landscape.
          </p>
        </motion.div>

        {/* Specialized Areas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-10 "
        >
          <h3 className="text-2xl font-bold mb-6 text-teal-700">
            Specialized Tax Advisory Areas – Transfer Pricing Advisory
          </h3>
          <p className="text-gray-700 mb-6">
            With increased global scrutiny on intercompany transactions, our
            experts assist you in developing defensible transfer pricing
            policies aligned with UAE regulations and international standards.
            We offer comprehensive support in:
          </p>

          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-3">
              <ClipboardCheck className="text-teal-600 w-5 h-5 mt-1" />
              Transfer pricing documentation and benchmarking.
            </li>
            <li className="flex items-start gap-3">
              <Layers className="text-teal-600 w-5 h-5 mt-1" />
              Policy development for intellectual property, financing,
              procurement, and services.
            </li>
            <li className="flex items-start gap-3">
              <FileText className="text-teal-600 w-5 h-5 mt-1" />
              Tax dispute support and advance pricing agreement (APA) guidance.
            </li>
            <li className="flex items-start gap-3">
              <Briefcase className="text-teal-600 w-5 h-5 mt-1" />
              Related-party transaction advisory and risk assessment.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* CONTACT */}

      <ContactSection />
      <FloatingMenuButton />
      <Footer />
    </>
  );
}
