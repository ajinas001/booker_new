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

const UAECorporateTaxBlog = () => {
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
            src="/images/uaecorporatetax.webp"
            alt="UAE Corporate Tax"
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
                UAE Corporate Tax: Everything Business Owners Need to Know
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
            No More Tax-Free by Default: <br />
            <span className="text-transparent bg-clip-text bg-textprimary">
              UAE Corporate Tax — Everything Business Owners Need to Know
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl"
          >
            The UAE introduced Corporate Tax in June 2023 — and it applies to
            almost every business operating here. Whether you're a startup, an
            SME, or an established company in a free zone or on the mainland,
            here's a plain-English guide to what you need to know and do right
            now.
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
              <div className="text-4xl font-bold text-textsecondary mb-2">9%</div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                STANDARD CORPORATE TAX RATE ABOVE AED 375,000
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-xl shadow-sm border border-purpletint">
              <div className="text-4xl font-bold text-textsecondary mb-2">AED 3M</div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                REVENUE THRESHOLD FOR SMALL BUSINESS RELIEF
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-xl shadow-sm border border-purpletint">
              <div className="text-4xl font-bold text-textsecondary mb-2">AED 10K</div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                PENALTY FOR FAILING TO REGISTER ON TIME
              </p>
            </div>
          </Section>

          {/* Intro Content */}
          <Section>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For decades, zero corporate tax was one of the UAE's defining
              advantages. That changed in June 2023. Under Federal Decree-Law
              No. 47 of 2022, Corporate Tax now applies to financial years
              starting on or after 1 June 2023 — across the mainland, in free
              zones, and for foreign entities with a UAE presence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The good news: the rates remain among the lowest in the world, and
              there are meaningful reliefs for small businesses and free zone
              operators who qualify. The challenge is knowing which rules apply
              to you, registering correctly, and filing on time — because the
              Federal Tax Authority (FTA) enforces penalties strictly.
            </p>
          </Section>

          {/* What Is CT Section */}
          <Section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is UAE Corporate Tax?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Corporate Tax is a federal tax on the net profits of businesses
              operating in the UAE. The critical distinction: it is calculated
              on your net profit, not your total revenue. Business expenses
              reduce the amount you are taxed on — which means good accounting
              directly reduces your tax bill.
            </p>
            <blockquote className="pl-6 py-2 italic text-gray-700 mb-8 bg-purpletint">
              Corporate Tax is calculated on your net profit — not your total
              revenue. Business expenses reduce the amount you pay tax on, so
              good accounting directly reduces your tax bill.
            </blockquote>

            {/* Tax Rates */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The tax rates — simple and globally competitive
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-purpletint p-6 rounded-lg border border-purpletint text-center">
                <div className="text-5xl font-bold text-textsecondary mb-3">0%</div>
                <p className="text-gray-700 font-semibold">
                  Taxable income up to AED 375,000
                </p>
              </div>
              <div className="bg-purpletint p-6 rounded-lg border border-purpletint text-center">
                <div className="text-5xl font-bold text-textsecondary mb-3">9%</div>
                <p className="text-gray-700 font-semibold">
                  Taxable income above AED 375,000
                </p>
              </div>
              <div className="bg-purpletint p-6 rounded-lg border border-purpletint text-center">
                <div className="text-5xl font-bold text-textsecondary mb-3">15%</div>
                <p className="text-gray-700 font-semibold">
                  Large multinationals only (OECD Pillar Two — global revenue above EUR 750M)
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Most UAE businesses will only ever deal with the 0% and 9% rates.
              The 15% rate is exclusively for the world's largest multinational
              groups and is unlikely to affect the vast majority of companies
              operating here.
            </p>
          </Section>

          {/* Who Must Register */}
          <Section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who must register — almost everyone
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Registration is required even if your profit is zero or you
              qualify for an exemption. Failing to register on time costs AED
              10,000 — a penalty that's entirely avoidable.
            </p>

            <div className="grid gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-xl mb-3 text-teal-900">
                  Companies (Juridical Persons)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• UAE mainland companies — LLCs, sole establishments, branches</li>
                  <li>• Free zone companies and establishments</li>
                  <li>• Foreign companies with a UAE permanent establishment</li>
                  <li>• Foreign companies managed and controlled from the UAE</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-xl mb-3 text-teal-900">
                  Individuals (Natural Persons)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Freelancers, sole traders, and self-employed individuals conducting business in the UAE</li>
                  <li>• Registration required when business turnover exceeds AED 1 million per year</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-xl mb-3 text-teal-900">
                  Who Is Exempt?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• UAE federal and emirate government entities</li>
                  <li>• Extractive businesses (oil, gas, natural resources) taxed at the emirate level</li>
                  <li>• Qualifying public benefit entities and investment funds</li>
                  <li>• Pension and social security funds</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl mb-12">
              <p className="text-amber-900 font-semibold">
                ⚠️ Important: Even if your business is exempt from paying tax,
                you may still need to register. Failing to register on time
                results in a penalty of AED 10,000. For new businesses
                incorporated after March 2024, registration must be completed
                within 3 months of incorporation via the FTA's EmaraTax portal.
              </p>
            </div>
          </Section>

          {/* Small Business Relief */}
          <Section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Small Business Relief — great news for SMEs
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Small Business Relief (SBR) allows qualifying businesses to be
              treated as having zero taxable income — meaning no Corporate Tax
              to pay and substantially simpler compliance. This is one of the
              most valuable reliefs available to startups and small businesses.
            </p>
            <div className="bg-white p-8 rounded-xl border border-slate-200 mb-6">
              <h3 className="font-bold text-xl mb-4 text-teal-900">
                WHO QUALIFIES FOR SMALL BUSINESS RELIEF?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• UAE resident businesses only</li>
                <li>• Annual revenue does not exceed AED 3 million in the tax period or any prior period</li>
                <li>• Not part of a multinational enterprise group</li>
                <li>• Not a Qualifying Free Zone Person (QFZP)</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl mb-6">
              <p className="text-amber-900 font-semibold">
                📅 Time Limit — Act Now: Small Business Relief is only available
                for tax periods ending on or before 31 December 2026. After
                that, the standard 9% rate applies to income above AED 375,000.
                Plan ahead now.
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              One trade-off to be aware of: electing for Small Business Relief
              means you cannot carry forward tax losses or excess interest for
              future use. If your business is growing and may exceed AED 3M
              soon, speak with a tax advisor before making this election — the
              right choice depends on your trajectory.
            </p>
          </Section>

          {/* Free Zone Section */}
          <Section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Free zone businesses — are you actually exempt?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This is the most misunderstood area of UAE Corporate Tax. Free
              zone companies are not automatically exempt. To benefit from the
              0% rate, a free zone company must qualify as a Qualifying Free
              Zone Person (QFZP) — and that requires meeting a specific set of
              conditions.
            </p>

            <div className="bg-white p-8 rounded-xl border border-slate-200 mb-6">
              <h3 className="font-bold text-xl mb-4 text-teal-900">
                TO BE A QFZP, YOU MUST:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Have adequate substance in the UAE — real staff, real operations, a physical presence</li>
                <li>• Earn only Qualifying Income as defined by the FTA</li>
                <li>• Not have elected to be subject to the standard Corporate Tax regime</li>
                <li>• Comply with transfer pricing rules</li>
                <li>• Prepare audited financial statements</li>
                <li>• Not earn income from UAE mainland customers in most cases</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purpletint p-6 rounded-lg border border-purpletint">
                <h3 className="font-bold text-lg mb-3 text-teal-800">
                  Qualifying Income — 0% Tax
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Income from other free zone businesses</li>
                  <li>• Qualifying manufacturing, logistics, fund management</li>
                  <li>• Income from qualifying intellectual property</li>
                  <li>• Qualifying dividends and capital gains</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold text-lg mb-3 text-teal-800">
                  Non-Qualifying Income — 9% Tax
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Income from UAE mainland customers (mostly)</li>
                  <li>• Income from UAE mainland property</li>
                  <li>• Banking income from UAE persons (unless qualifying)</li>
                  <li>• Income from excluded activities</li>
                </ul>
              </div>
            </div>

            <blockquote className="pl-6 py-2 italic text-gray-700 mb-12 bg-purpletint">
              If only part of your income is non-qualifying, only that portion
              is taxed at 9%. You don't lose your QFZP status entirely — but
              you must carefully track and separate your income types.
            </blockquote>
          </Section>

          {/* How Taxable Income Is Calculated */}
          <Section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How taxable income is calculated
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Your taxable income starts with your net accounting profit from
              your financial statements, then adjusted for specific items. It is
              not your total revenue — a distinction that has significant
              practical impact.
            </p>
            <div className="bg-purpletint p-8 rounded-xl mb-8 font-mono text-gray-800 text-lg">
              <p>Accounting Net Profit</p>
              <p>+ Add-backs (disallowed expenses)</p>
              <p>− Allowable deductions &amp; reliefs</p>
              <p className="border-t border-gray-400 mt-4 pt-4 font-bold">
                = Taxable Income × Tax Rate = Corporate Tax Due
              </p>
            </div>

            <div className="grid gap-6 mb-12">
              <div className="bg-purpletint p-6 rounded-lg border border-purpletint">
                <h3 className="font-bold text-xl mb-2 text-teal-800">
                  Expenses you can deduct (reduce your tax bill)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• All ordinary business expenses — salaries, rent, utilities, professional fees</li>
                  <li>• Depreciation on business assets</li>
                  <li>• Donations to approved UAE public benefit entities</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold text-xl mb-2 text-teal-800">
                  Expenses you cannot deduct (add back to taxable income)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Government fines and penalties</li>
                  <li>• Bribes or illegal payments of any kind</li>
                  <li>• Dividends and profit distributions paid to owners</li>
                  <li>• Personal expenses of owners or directors</li>
                  <li>• 50% of entertainment and hospitality expenses</li>
                  <li>• Expenses related to exempt income</li>
                </ul>
              </div>
            </div>

            <blockquote className="pl-6 py-2 italic text-gray-700 mb-12 bg-purpletint">
              Dividends received from UAE companies and qualifying foreign
              subsidiaries are generally exempt from Corporate Tax. Capital
              gains from selling qualifying shares are also exempt — this
              prevents double-taxation.
            </blockquote>
          </Section>

          {/* Filing Section */}
          <Section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Filing your Corporate Tax return
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Returns are filed annually through the EmaraTax portal, with the
              deadline set at 9 months after the end of your financial year.
              Here are the key upcoming deadlines:
            </p>
            <div className="bg-white p-8 rounded-xl border border-slate-200 mb-8">
              <h3 className="font-bold text-xl mb-4 text-teal-900">
                CT RETURN DEADLINES
              </h3>
              <div className="space-y-3">
                {[
                  { period: "31 December 2024", deadline: "30 September 2025" },
                  { period: "31 March 2025", deadline: "31 December 2025" },
                  { period: "31 May 2025", deadline: "28 February 2026" },
                  { period: "31 December 2025", deadline: "30 September 2026" },
                ].map((row) => (
                  <div
                    key={row.period}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-gray-700 font-medium">
                      Financial Year End: {row.period}
                    </span>
                    <span className="text-textsecondary font-bold">
                      {row.deadline}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 mb-12">
              <h3 className="font-bold text-xl mb-4 text-teal-900">
                WHAT YOU NEED TO FILE
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Financial statements — most businesses need audited or reviewed accounts</li>
                <li>• Corporate Tax return form via EmaraTax</li>
                <li>• Transfer pricing disclosure form (if you have related-party transactions)</li>
                <li>• Financial statements must be prepared under IFRS or IFRS for SMEs — simple cash-basis records are not accepted</li>
              </ul>
            </div>
          </Section>

          {/* Penalties Section */}
          <Section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Penalties — what happens if you don't comply
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The FTA enforces strict penalties under Cabinet Decision No. 129
              of 2025, effective April 2026. The good news is that voluntary
              disclosure — coming forward before the FTA finds an issue — is
              significantly cheaper than being caught.
            </p>
            <div className="bg-white p-8 rounded-xl border border-slate-200 mb-8">
              <div className="space-y-4">
                {[
                  {
                    violation: "Failure to register for Corporate Tax on time",
                    penalty: "AED 10,000",
                  },
                  {
                    violation: "Late filing of Corporate Tax return",
                    penalty: "AED 500/month (first year), AED 1,000/month after",
                  },
                  {
                    violation: "Late payment of Corporate Tax",
                    penalty: "14% per annum (non-compounding)",
                  },
                  {
                    violation: "Error discovered by the FTA in your return",
                    penalty: "15% of unpaid tax — fixed penalty",
                  },
                  {
                    violation: "Voluntary disclosure before FTA audit",
                    penalty: "Only 1% per month — much cheaper",
                  },
                  {
                    violation: "Failure to maintain required records",
                    penalty: "AED 10,000 (first offence), AED 50,000 (repeat)",
                  },
                ].map((row) => (
                  <div
                    key={row.violation}
                    className="flex flex-col md:flex-row md:justify-between md:items-center py-3 border-b border-gray-100 last:border-0 gap-1"
                  >
                    <span className="text-gray-700">{row.violation}</span>
                    <span className="text-textsecondary font-bold whitespace-nowrap">
                      {row.penalty}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <blockquote className="pl-6 py-2 italic text-gray-700 mb-12 bg-purpletint">
              If you think there are errors in your previous returns, voluntary
              disclosure is your best option at just 1% per month — far cheaper
              than the 15% fixed penalty if the FTA finds it first. Acting
              proactively also demonstrates good faith.
            </blockquote>
          </Section>

          {/* Checklist Section */}
          <Section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Your Corporate Tax compliance checklist
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Use this as a quick reference to confirm your business is on
              track:
            </p>
            <div className="bg-white p-8 rounded-xl border border-slate-200 mb-12">
              <ul className="space-y-4 text-gray-700">
                {[
                  "Register for Corporate Tax on EmaraTax — do this immediately if not done",
                  "Confirm your first tax period start and end date",
                  "Check if you qualify for Small Business Relief (revenue under AED 3M)",
                  "If you are a free zone company — verify whether you qualify as a QFZP",
                  "Ensure your accounting is under IFRS or IFRS for SMEs",
                  "Identify all related-party transactions and document them properly",
                  "Review which expenses are deductible and which are not",
                  "Know your CT return deadline — 9 months after your financial year end",
                  "Keep all invoices, contracts, and records for at least 7 years",
                  "Work with a qualified tax advisor to review your structure and filing",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-textsecondary font-bold mt-0.5">✅</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* New Business Quick Start */}
          <Section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              New business? Your quick-start plan
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              If you have recently launched or are about to start a business in
              the UAE, follow these three steps to get your Corporate Tax
              position right from day one.
            </p>
            <div className="grid gap-6 mb-12">
              <div className="bg-purpletint p-6 rounded-lg border border-purpletint">
                <h3 className="font-bold text-xl mb-2 text-teal-800">
                  Step 1 — Register immediately
                </h3>
                <p className="text-gray-700">
                  Go to EmaraTax (eservices.tax.gov.ae) and register for
                  Corporate Tax. Note your Tax Registration Number (TRN).
                  Register within 3 months of incorporation — the AED 10,000
                  late penalty is easily avoided by acting early.
                </p>
              </div>
              <div className="bg-purpletint p-6 rounded-lg border border-purpletint">
                <h3 className="font-bold text-xl mb-2 text-teal-800">
                  Step 2 — Set up proper accounting
                </h3>
                <p className="text-gray-700">
                  Use accounting software — Xero, QuickBooks, or Zoho Books
                  from day one. Open a dedicated business bank account and never
                  mix personal and business finances. Make sure your accounts
                  follow IFRS or IFRS for SMEs from the start.
                </p>
              </div>
              <div className="bg-purpletint p-6 rounded-lg border border-purpletint">
                <h3 className="font-bold text-xl mb-2 text-teal-800">
                  Step 3 — Stay compliant from day one
                </h3>
                <p className="text-gray-700">
                  Keep all receipts, invoices, and contracts — the FTA requires
                  7 years of records. File your VAT returns on time if you are
                  VAT-registered. Watch your revenue: if you approach AED 3M,
                  plan your CT position early and get annual financial
                  statements prepared by a qualified accountant.
                </p>
              </div>
            </div>
          </Section>

          {/* CTA */}
          <Section className="mt-16 p-10 bg-teal-900 text-white rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need help with your Corporate Tax?
            </h2>
            <p className="mb-8 opacity-90 text-lg">
              Our tax specialists make Corporate Tax simple, accurate, and
              stress-free — for businesses of all sizes across the UAE.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-teal-900 px-8 py-4 rounded-full font-bold hover:bg-teal-50 transition"
            >
              Book a free consultation →
            </Link>
          </Section>
        </main>
        <ContactSection />
        <FloatingActions />
        <FloatingService />
        <Footer />
      </div>
    </>
  );
};

export default UAECorporateTaxBlog;