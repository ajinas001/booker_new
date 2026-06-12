"use client";

import Head from "next/head";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Shield, CheckCircle, TrendingUp, Users, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import ScrollToTop from "@/components/ScrollToTop";

// Data moved outside the component for better rendering
const services = [
  {
    id: 1,
    count: "01",
    title: "Internal Audit",
    description:
      "Evaluate internal systems and processes to strengthen governance and operational effectiveness.",
    bgColor: "bg-secondary",
  },
  {
    id: 2,
    count: "02",
    title: "Inventory Audit",
    description:
      "Ensure accuracy and compliance in stock and asset management through detailed inventory verification.",
    bgColor: "bg-black",
  },
  {
    id: 3,
    count: "03",
    title: "Due Diligence Support",
    description:
      "Facilitate smooth mergers, acquisitions, and investments with comprehensive due diligence analysis.",
    bgColor: "bg-secondary",
  },
  {
    id: 4,
    count: "04",
    title: "External Audit",
    description:
      "Independent verification of financial statements to maintain transparency and regulatory compliance.",
    bgColor: "bg-black",
  },
  {
    id: 5,
    count: "05",
    title: "Real Estate Audit",
    description:
      "Specialized audit services for property portfolios, construction projects, and real estate transactions.",
    bgColor: "bg-secondary",
  },
  {
    id: 6,
    count: "06",
    title: "Forensic Audit",
    description:
      "Investigate financial irregularities and detect fraud using data-driven forensic audit techniques.",
    bgColor: "bg-black",
  },
];

const features = [
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Stay ahead of changing regulations",
  },
  {
    icon: TrendingUp,
    title: "Business Insights",
    description: "Unlock strategic opportunities",
  },
  {
    icon: Users,
    title: "Stakeholder Trust",
    description: "Build confidence with investors",
  },
  {
    icon: CheckCircle,
    title: "Risk Management",
    description: "Identify and mitigate risks early",
  },
];

export default function AuditAssurancePage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.15 },
    },
  };

  return (
    <>
      {/* metadata */}

      <Head>
        <title>
          Audit & Assurance Services — Booker Accounting & Cunsulting
        </title>
        <meta
          name="description"
          content="Booker Accounting provides audit, assurance and IFRS advisory services to help businesses improve compliance, transparency and stakeholder confidence."
        />
        <meta
          name="keywords"
          content="audit, assurance, IFRS, forensic audit, internal audit, external audit, due diligence"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://yourdomain.com/services/audit-assurance"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Audit & Assurance Services — Booker Accounting"
        />
        <meta
          property="og:description"
          content="Expert audit and assurance services to strengthen credibility, ensure compliance, and unlock strategic insights."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourdomain.com/services/audit-assurance"
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/og-audit.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Audit & Assurance Services — Booker Accounting"
        />
        <meta
          name="twitter:description"
          content="Expert audit and assurance services to strengthen credibility, ensure compliance, and unlock strategic insights."
        />

        {/* Structured data (Organization) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Booker Accounting",
              url: "https://yourdomain.com",
              logo: "https://yourdomain.com/images/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/your-company",
                "https://www.facebook.com/your-company",
              ],
            }),
          }}
        />
      </Head>

      <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800">
        <Navbar />

        {/* HERO */}
        <section className="relative overflow-hidden text-white ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src="/images/img3.webp"
              alt="Audit & Assurance"
              priority
              fill
              sizes="100vw"
              className="object-cover object-center"
              style={{ transform: "translateZ(0)" }} // ✅ Forces GPU to not over-allocate memory
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
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
                ›<span>Services</span>›
                <span className="text-textprimary font-medium">
                  Audit & Assurance
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              Audit{" "}
              <span className="text-transparent bg-clip-text bg-textprimary">
                & Assurance
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl"
            >
              Client Credibility. Stakeholder Confidence. Regulatory Compliance.
            </motion.p>
          </div>
        </section>

        {/* APPROACH */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:space-x-12 items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">
                OUR APPROACH
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Beyond Compliance,
                <br />
                <span className="text-textsecondary">Towards Excellence</span>
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                At Booker Accounting, we believe audits are more than regulatory
                requirements. They are opportunities to strengthen your
                business.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                Our audit services go beyond checklists. We deliver clear,
                insight-driven results that support confident decision-making.
              </p>
            </div>

            <div className="lg:w-1/2 relative overflow-hidden rounded-xl">
              <Image
                width={600}
                height={500}
                src="/images/audit.webp"
                alt="Team working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-20">
              <h3 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Our Comprehensive Audit Services
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Tailored solutions to enhance trust, compliance, and
                transparency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-3xl p-10 text-white relative overflow-hidden group cursor-pointer ${service.bgColor}`}
                >
                  <div className="relative z-10 flex flex-col gap-6">
                    {/* NUMBER / LOGO BOX */}
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                      <span className="text-2xl font-bold text-white opacity-90">
                        {service.count}
                      </span>
                      {/* If using logo / icon instead:  {service.icon} */}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ASSURANCE SPLIT LAYOUT */}
        <section className="py-16 md:py-24 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
              {/* LEFT IMAGE */}
              <div className="lg:w-1/2 w-full lg:order-1 mb-10 lg:mb-0">
                <div className="relative w-full overflow-hidden rounded-3xl">
                  <Image
                    src="/images/audit1.webp"
                    alt="Professional collaboration"
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
                  Assurance Services
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Strengthen Confidence,
                  <br />
                  <span className="text-transparent bg-clip-text bg-textsecondary">
                    Enhance Transparency
                  </span>
                </h2>

                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Our assurance services go beyond audit preparation — we ensure
                  your financial systems, processes, and reporting reflect
                  accuracy, integrity, and long-term reliability.
                </p>

                <p className="text-gray-600 leading-relaxed text-base mb-8">
                  We evaluate your internal controls, streamline workflows, and
                  provide insights that help leadership make informed decisions.
                </p>

                {/* ICON GRID */}
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-900 font-semibold text-sm">
                      Internal Systems Review
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-900 font-semibold text-sm">
                      Financial Validation
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-900 font-semibold text-sm">
                      Operational Excellence
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-900 font-semibold text-sm">
                      Enhanced Transparency
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IFRS ADVISORY */}
        <section className="w-full mx-auto  px-6 md:px-20 py-24">
          <div className="bg-gradient-to-br from-gray-900 to-teal-900 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              {/* LEFT CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 md:p-16 text-white"
              >
                <span className="bg-teal-500/20 border border-teal-400/30 rounded-full px-4 py-1 text-sm font-medium text-teal-300 inline-block mb-6">
                  Global Standards
                </span>

                <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                  IFRS Advisory
                </h2>

                <p className="text-gray-300 leading-relaxed md:text-lg mb-4">
                  In today's global business environment, consistent financial
                  reporting under International Financial Reporting Standards
                  (IFRS) is essential—particularly for UAE businesses operating
                  internationally or seeking foreign investment.
                </p>

                <p className="text-gray-300 leading-relaxed md:text-lg mb-8">
                  Booker Accounting's IFRS advisory offers expert guidance to
                  prepare compliant, transparent financial statements that meet
                  global expectations.
                </p>

                <button className=" w-fit  rounded-tl-full rounded-tr-full rounded-br-full border-2 inline-block px-8 py-3 hover:text-secondary  bordeer-secondary bg- text-white rounded-md hover:bg-white transition">
                  Get IFRS Support
                </button>
              </motion.div>

              {/* RIGHT LIST */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 md:p-16 bg- flex justify-center"
              >
                <div className="space-y-5 w-full max-w-sm">
                  {[
                    "IFRS Compliance Framework",
                    "Financial Statement Preparation",
                    "Standards Update Implementation",
                    "International Competitiveness",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                    >
                      <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0" />
                      <span className="text-white font-medium text-base">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Us
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="w-12 h-12 mx-auto mb-6 text-teal-600" />
                <h3 className="text-2xl font-normal mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <ContactSection />
        <ScrollToTop />
        <FloatingMenuButton />
        <Footer />
      </div>
    </>
  );
}
