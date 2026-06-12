import React from "react";
import {
  CheckCircle,
  TrendingUp,
  Wallet,
  FileText,
  BarChart3,
  ArrowRight,
  Zap,
  Target,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// --- Framer Motion Variants ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardSlideUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

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

const iconPopVariant = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      delay: 0.2,
    },
  },
};

// --- Star Rating Component (Re-usable for testimonials) ---
const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5 mt-2">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
          }`}
        strokeWidth={1}
      />
    ))}
  </div>
);

// --- Component Data ---
const results = [
  {
    icon: Wallet,
    label: "Average Tax Savings",
    value: "AED 45K+",
    color: "bg-secondary",
  },
  {
    icon: TrendingUp,
    label: "Financial Clarity",
    value: "100%",
    color: "bg-secondary",
  },
  {
    icon: FileText,
    label: "Compliance Rate",
    value: "99.8%",
    color: "bg-secondary",
  },
  {
    icon: BarChart3,
    label: "Time Saved",
    value: "20+ hrs/month",
    color: "bg-secondary",
  },
];

const benefits = [
  "Complete financial health diagnosis before service initiation.",
  "Custom strategic plan built specifically for your business needs.",
  "Transparent, fixed pricing—know exactly what you are paying for.",
  "Monthly clarity on cash flow, profitability, and performance.",
  "Peace of mind knowing all UAE taxes are filed correctly and on time.",
  "Strategic recommendations to save thousands in corporate taxes.",
  "Organized financial records ready for any internal or external audit.",
  "Reclaim 20+ hours per month to focus solely on business growth.",
];

const testimonials = [
  {
    text: "Had an great experience with the BAC team. They are truly amazing with phenomenal expertise in Taxation, humble approach, attention to detail and always available for support 24/7 which is incredible. Had a great support on Corporate Tax from them , One of the best Tax Consultant in UAE.",
    name: " Mohammed Fazal",
    place: "Dubai",
    rating: 5,
  },
  {
    text: "Among all the firms I’ve tried, Booker Accounting is the most responsive and reliable. Their attention to detail is excellent, and their depth of knowledge is beyond expectations. Definitely a 5-star service! Highly Recommend",
    name: " ABHILASH METTAMMAL",
    place: "Abu Dhabi",
    rating: 5,
  },
  {
    text: "It was great working with Booker Accounting Services! The team was professional, efficient, and got the work done without me having to follow up. Really appreciated the smooth experience, highly recommend their services!",
    name: "Mohammed Taha",
    place: "Sharjah",
    rating: 5,
  },
];

// --- Testimonials Section (Light Mode, Exact Match to Image) ---

export default function Testimonials() {
  return (
    // Base font changed to serif for the entire component
    <div className="py-28 px-4 sm:px-8 lg:px-12 bg-white text-gray-900  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* SECTION 1: Testimonials (Exact Match to Image Style - Light) */}
        <section className="mb-32">
          <motion.div
            className="mb-16 max-w-4xl"
            variants={textRevealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Using a font class that closely matches the image's "Success Stories" style */}
            <h2 className="text-4xl md:text-6xl c font-normal text-gray-900 mb-8 tracking-tight leading-none ">
              Success{" "}
              <span className="font-['Playfair_Display',_serif] italic text-secondary">
                Stories
              </span>
            </h2>
            {/* Keeping this description for context, adjust as needed */}
            <p className="text-xl text-gray-600">
              Hear directly from our valued clients.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={cardSlideUpVariant}
                whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
                // Card background and border for light theme match
                className="p-10 bg-gray-200  rounded-3xl cursor-pointer h-full flex flex-col" // Removed justify-between
              >
                {/* Name and Date - Top of card */}
                <div className="mb-6">
                  <h4 className="text-gray-900 text-xl font-bold tracking-wide leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-800 text-sm italic mt-1">
                    {/* {testimonial.place} */}
                  </p>
                </div>

                {/* Testimonial Quote */}
                <p className="text-lg text-gray-800 mb-8 leading-relaxed grow">
                  {" "}
                  {/* Adjusted text size */}"{testimonial.text}"
                </p>

                {/* Rating - Bottom of card, matching exact style */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-700 text-base font-semibold">
                    Rating
                  </p>
                  <StarRating rating={testimonial.rating} />
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Review Us Button */}
          <motion.div
            variants={textRevealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 flex justify-center"
          >
            <Link
              href="https://www.trustpilot.com/review/bookeraccounting.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-10 py-4 rounded-full border border-gray-300 bg-transparent text-gray-900 text-lg font-semibold hover:border-secondary transition-all"
            >
              {/* Trustpilot Logo */}
              <Image
                src="/images/trustpilot.png"
                alt="Trustpilot"
                width={28}
                height={28}
                className="object-contain"
              />

              <span className="group-hover:text-secondary transition-colors">
                Review us on Trustpilot
              </span>
            </Link>
          </motion.div>
        </section>

        {/* SECTION 2: Results Grid (Metrics) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {results.map((result, idx) => {
            const Icon = result.icon;
            return (
              <div
                key={idx}
                className={`${result.color} p-8 rounded-lg text-white shadow-lg hover:shadow-xl transition-shadow `}
              >
                <Icon className="w-12 h-12 mb-4 opacity-90" />
                <div className="text-sm opacity-80 mb-2">{result.label}</div>
                <div className="text-4xl font-bold">{result.value}</div>
              </div>
            );
          })}
        </div>

        {/* SECTION 4: Client Benefits (Checklist) */}

        {/* Client Benefits */}
        <div className="bg-gray-200 p-16 py-4 md:py-16 rounded-3xl  space-y-8 mb-8 ">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            What Our Clients Actually Get
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Complete diagnosis of your financial health before we start",
              "Custom plan built specifically for YOUR business needs",
              "Transparent pricing—you know exactly what you're paying for",
              "Monthly clarity on cash flow, profitability, and performance",
              "Peace of mind knowing all taxes are filed correctly",
              "Strategic recommendations to save thousands in taxes",
              "Organized financial records ready for any audit",
              "20+ hours per month back to focus on growing your business",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-secondary text-white p-16  rounded-3xl ">
          <h3 className="text-2xl font-bold  mb-6">
            Why Clients Choose Booker Accounting
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-teal-600 rounded-full mt-2 shrink-0"></div>
              <div>
                <h4 className="font-bold ">We Assess First, Not Sell First</h4>
                <p className=" text-lg">
                  No pressure. We diagnose your financial situation before
                  recommending solutions. This ensures you only pay for what you
                  actually need.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-teal-600 rounded-full mt-2 shrink-0"></div>
              <div>
                <h4 className="font-bold ">
                  Custom Solutions, Not One-Size-Fits-All
                </h4>
                <p className=" text-lg">
                  Your plan is built specifically for your business, industry,
                  and complexity. From AED 200 to AED 200K+, we scale to YOUR
                  needs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-teal-600 rounded-full mt-2 shrink-0"></div>
              <div>
                <h4 className="font-bold ">Complete Transparency</h4>
                <p className=" text-lg">
                  We explain what we do, why we do it, and what you'll gain. No
                  hidden fees. No surprises. Just honest, clear communication.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-teal-600 rounded-full mt-2 shrink-0"></div>
              <div>
                <h4 className="font-bold ">UAE Expertise</h4>
                <p className=" text-lg">
                  Deep understanding of UAE tax regulations, VAT compliance, and
                  corporate requirements across all emirates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
