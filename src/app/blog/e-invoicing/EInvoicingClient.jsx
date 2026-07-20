"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import Footer from "@/components/Footer";
import Image from "next/image";
import FloatingActions from "@/components/FloatingActions";
import FloatingService from "@/components/FloatingService";

const EInvoicingBlog = () => {
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
      {/* Hero Section */}
      
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
            alt="Business Advisory Service"
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
              <Link
                href="/"
                className="text-white hover:text-textprimary transition-colors"
              >
                Home
              </Link>
              <span>›</span>
              <Link href={"/blog"}>
                <span>Blog</span>
              </Link>

              <span>›</span>
              <span className="text-textprimary font-medium">
                Why E-Invoicing Is No Longer Optional
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            The Paper Trail Ends Here: <br />
            <span className="text-transparent bg-clip-text bg-textprimary">
              Why E-Invoicing Is No Longer Optional
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl"
          >
            Slow payments, manual errors, and compliance risk are symptoms of
            the same root cause — paper-based invoicing. Here's what the shift
            to e-invoicing actually looks like, and why the businesses moving
            now will have a significant structural advantage.
          </motion.p>
        </div>
      </section>
      <div className="min-h-screen bg-white">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-textsecondary origin-left z-50"
          style={{ scaleX }}
        />

        <main className="max-w-7xl mx-auto px-6 py-16">
          {/* Stats Grid */}
          <Section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
            <div className="p-6 bg-purpletint rounded-xl shadow-sm border border-purpletint">
              <div className="text-4xl font-bold text-textsecondary  mb-2">$11</div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                AVERAGE COST TO PROCESS A PAPER INVOICE
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-xl shadow-sm border border-purpletint">
              <div className="text-4xl font-bold text-textsecondary mb-2">60%</div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                REDUCTION IN PROCESSING TIME WITH E-INVOICING
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-xl shadow-sm border border-purpletint">
              <div className="text-4xl font-bold text-textsecondary mb-2">80+</div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                COUNTRIES WITH MANDATORY E-INVOICING LEGISLATION
              </p>
            </div>
          </Section>

          {/* Intro Content */}
          <Section>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every finance team knows the cycle. An invoice arrives by email —
              or worse, in the post. Someone re-keys the data into an accounting
              system. A manager approves it, sometimes on paper. Payment runs on
              a fixed cycle, often 30 or 45 days out, regardless of when the
              work was actually delivered. Somewhere in that chain, a figure
              gets transposed, a document gets lost, and a supplier relationship
              frays.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Electronic invoicing — e-invoicing — doesn't just speed this
              process up. It fundamentally restructures it, removing human
              handling from the parts that don't need it and redirecting your
              team's attention to the decisions that do.
            </p>
          </Section>

          {/* Meaning Section */}
          <Section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What e-invoicing actually means
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A common misconception is that e-invoicing means sending a PDF by
              email. It doesn't. A true e-invoice is a structured digital
              document — typically formatted in XML or a standard like PEPPOL —
              transmitted directly between systems. The data flows automatically
              into your accounting software, ERP, or accounts payable platform
              without a human ever having to type it in.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The distinction matters. A PDF invoice still requires manual
              processing. A structured e-invoice does not. That difference
              compounds quickly across hundreds or thousands of transactions.
            </p>
            <blockquote className=" pl-6 py-2 italic text-gray-700 mb-12 bg-purpletint">
              The goal isn't just speed. It's removing the category of errors
              that only humans can make — and only humans have to fix. —
              ACCOUNTS PAYABLE BENCHMARK REPORT, 2025
            </blockquote>
          </Section>

          {/* Compliance Section */}
          <Section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The compliance pressure is real — and growing
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For years, e-invoicing was framed as a best practice.
              Increasingly, it's becoming a legal requirement. The European
              Union's VAT in the Digital Age (ViDA) directive is accelerating
              mandatory e-invoicing across member states. Italy was the first EU
              country to mandate it for B2B transactions; France, Germany, and
              Spain are rolling out requirements that affect businesses of all
              sizes. Outside Europe, countries like Brazil, Mexico, and
              Singapore have had mandatory frameworks in place for over a
              decade.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              For any business with cross-border trading partners, the
              compliance case alone justifies acting now. Waiting until mandates
              arrive in your jurisdiction means a reactive, pressured
              implementation — exactly the conditions under which integrations
              fail and audits find problems.
            </p>

            <div className="bg-white p-8 rounded-xl border border-slate-200 mb-12">
              <h3 className="font-bold text-xl mb-4 text-teal-900">
                WHAT E-INVOICING COMPLIANCE TYPICALLY REQUIRES
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  • Structured invoice format meeting the relevant national or
                  EU standard
                </li>
                <li>
                  • Transmission via an approved network (such as PEPPOL) or
                  government portal
                </li>
                <li>
                  • Real-time or near-real-time reporting to tax authorities in
                  some jurisdictions
                </li>
                <li>
                  • Secure, auditable archiving of invoice records for the
                  legally required period
                </li>
                <li>
                  • Buyer and supplier both registered on the applicable
                  platform
                </li>
              </ul>
            </div>
          </Section>

          {/* Savings Section */}
          <Section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The operational case: where the savings actually come from
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Compliance is the floor; efficiency is the ceiling. Businesses
              that implement e-invoicing well don't just save on postage and
              paper — they unlock measurable improvements across their entire
              order-to-cash and procure-to-pay cycles.
            </p>
            <div className="grid gap-6 mb-12">
              <div className="bg-purpletint p-6 rounded-lg border border-purpletint">
                <h3 className="font-bold text-xl mb-2 text-teal-800">
                  Faster payment cycles
                </h3>
                <p className="text-gray-700">
                  When invoice data arrives pre-validated in your system,
                  approval workflows can begin immediately. Early payment
                  discount programmes—long theoretically attractive but hard to
                  operationalise— become practically viable. Suppliers get paid
                  sooner; buyers capture discounts they'd otherwise miss.
                </p>
              </div>
              <div className="bg-purpletint p-6 rounded-lg border border-purpletint">
                <h3 className="font-bold text-xl mb-2 text-teal-800">
                  Fewer disputes
                </h3>
                <p className="text-gray-700">
                  Invoice disputes typically stem from mismatched data: a
                  purchase order number that doesn't match, a price that's
                  drifted from the agreed contract, a quantity that wasn't
                  verified. Structured e-invoices can be automatically matched
                  against PO data the moment they arrive, catching discrepancies
                  before they become disputes rather than weeks after.
                </p>
              </div>
              <div className="bg-purpletint p-6 rounded-lg border border-purpletint">
                <h3 className="font-bold text-xl mb-2 text-teal-800">
                  Better cash visibility
                </h3>
                <p className="text-gray-700">
                  When payables data is structured and arriving in real time,
                  your treasury function can forecast with genuine accuracy. The
                  "what do we owe and when" question— often answered with a
                  spreadsheet and significant uncertainty— becomes a live
                  dashboard figure.
                </p>
              </div>
              <div className="bg-purpletint p-6 rounded-lg border border-purpletint">
                <h3 className="font-bold text-xl mb-2 text-teal-800">
                  Reduced fraud risk
                </h3>
                <p className="text-gray-700">
                  Paper invoices and PDF emails are relatively easy to intercept
                  and falsify. Authenticated e-invoice networks with digital
                  signatures make invoice fraud substantially harder— a
                  meaningful concern given that business email compromise and
                  invoice fraud cost companies billions each year.
                </p>
              </div>
            </div>
          </Section>

          {/* Implementation Section */}
          <Section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Implementation: the practical path
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The most common implementation mistake is treating e-invoicing as
              a technology project rather than a process project. The
              technology—whether you connect via PEPPOL, integrate with a
              third-party platform, or use your ERP's native capability—is the
              easier part. The harder work is mapping your current processes,
              aligning with your suppliers and customers, and deciding how
              exceptions will be handled.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A sensible approach starts with your highest-volume trading
              relationships. Onboarding a handful of suppliers who together
              represent the majority of your invoice volume delivers most of the
              operational benefit quickly and creates a working model you can
              replicate for smaller partners over time.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Plan for a parallel period. Running paper and electronic processes
              simultaneously for a quarter gives your team confidence, surfaces
              edge cases that specification documents never anticipate, and
              provides a fallback if a supplier has technical difficulties
              during transition.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Choosing the right platform
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The market for e-invoicing platforms ranges from standalone tools
              to modules within major ERP systems to specialist networks. The
              right choice depends on your existing technology stack, the volume
              and complexity of your invoice flows, and the jurisdictions in
              which you operate.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Key questions to ask any potential provider: Does the platform
              support PEPPOL connectivity? Which country-specific formats and
              portals does it cover? How does it handle the inevitable
              exceptions— invoices that arrive by email, from suppliers who
              aren't yet on the network? What does the onboarding process look
              like for your trading partners, and what support do they receive?
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The strongest platforms treat supplier onboarding as a shared
              responsibility, not something left entirely to you. If a vendor
              can't demonstrate how they help bring your suppliers onto the
              network, look elsewhere.
            </p>
            <blockquote className="border- pl-6 py-2 italic text-gray-700 mb-12 bg-purpletint">
              E-invoicing isn't a feature you turn on. It's a capability you
              build — one trading relationship at a time. — DIGITAL FINANCE
              TRANSFORMATION GUIDE, KPMG 2025
            </blockquote>
          </Section>

          {/* Closing Section */}
          <Section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The window for proactive action is open — briefly
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              There's a useful asymmetry in the timing right now. Businesses
              that move before mandates hit their jurisdiction can choose their
              implementation timeline, negotiate better platform terms, bring
              suppliers along at a manageable pace, and build internal
              capability that becomes a genuine competitive advantage.
              Businesses that wait will face the same implementation work under
              regulatory deadline pressure, with every other company in their
              sector doing the same thing at the same time.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              E-invoicing isn't coming. For most businesses, it's already here—
              whether as a requirement from a key trading partner, a mandate
              taking effect in a market you operate in, or simply the standard
              that your competitors have already adopted. The question isn't
              whether to make the transition. It's whether you make it on your
              terms or someone else's.
            </p>
          </Section>

          <Section className="mt-16 p-10 bg-teal-900 text-white rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to make the switch?
            </h2>
            <p className="mb-8 opacity-90 text-lg">
              Our team helps businesses of all sizes implement e-invoicing
              that's compliant, connected, and built to scale.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-teal-900 px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition"
            >
              Talk to an expert →
            </Link>
          </Section>
        </main>
        <ContactSection />
       
       <FloatingActions/>
       <FloatingService/>
        <Footer />
      </div>
    </>
  );
};

export default EInvoicingBlog;
