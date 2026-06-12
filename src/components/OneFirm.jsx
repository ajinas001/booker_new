"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Company Formation",
    desc: "Launch your business with confidence through expert entity selection, comprehensive paperwork handling, and seamless registration. We guide you through every legal requirement to establish a solid foundation for your company's success.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M3 21h18M3 7v14M21 7v14M9 21V9M15 21V9M9 3v4M15 3v4M3 7h18M9 7h6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Tax Registration",
    desc: "Navigate the complexities of tax obligations with our comprehensive registration services. From VAT and corporate tax to payroll tax and statutory requirements, we ensure your business is fully compliant from day one.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Accounting & Bookkeeping",
    desc: "Maintain crystal-clear financial records with our professional accounting services. We establish your chart of accounts, manage accounting cycles, and set up robust reporting systems that provide real-time insights into your business performance.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20M9 6h6M9 10h6M9 14h6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Taxation & Compliance",
    desc: "Stay ahead of regulatory requirements with our proactive compliance management. We handle ongoing tax filings, conduct regular reviews, and ensure your business remains in good standing with all relevant authorities.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Audit & Financial Reviews",
    desc: "Prepare for audits with confidence through our thorough preparation services and comprehensive assurance reviews. We ensure your financial statements meet the highest standards of accuracy and transparency.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="11" cy="11" r="8" />
        <path
          d="m21 21-4.35-4.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Advice & Restructuring",
    desc: "Transform your business for maximum efficiency and growth. Our strategic restructuring and optimization services help you adapt to market changes, improve operational effectiveness, and unlock new opportunities for success.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M22 7L13.5 15.5 8.5 10.5 2 17M22 7h-6M22 7v6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Liquidation / De-Registration",
    desc: "When it's time to close a chapter, we provide professional support for orderly business winding-down. Our comprehensive liquidation and de-registration services ensure all legal and financial obligations are properly addressed.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const Card = ({ step, index, range, targetScale, progress }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div
      style={{
        scale,
        top: `calc(5vh + ${index * 25}px)`,
      }}
      className="sticky h-[500px] w-full rounded-3xl bg-secondary text-white p-12 mb-6"
    >
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="text-8xl font-light text-white opacity-90">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div>
          <h3 className="mb-6 text-3xl md:text-5xl font-normal text-white">
            {step.title}
          </h3>
          <p className="leading-relaxed text-white text-sm md:text-lg max-w-lg">
            {step.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function StickyOverlapCards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="min-h-screen py-8 md:py-20 bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Sticky Section */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-wider uppercase text-textsecondary">
                OUR APPROACH
              </p>

              <h1 className="text-3xl font-semibold leading-tight text-black md:text-3xl xl:text-6xl">
                One Firm. Every Step. <br className="hidden sm:block" />{" "}
                <span className="text-textsecondary ">
                  With a Strategic Edge.
                </span>
              </h1>

              <p className="text-base leading-relaxed text-gray-700 pt-8 max-w-md">
                We support your journey at every stage from launch to expansion,
                restructuring, and closure. Backed by strong expertise in UAE
                and global markets, we make your business path seamless,
                compliant, and strategically driven.
              </p>
            </div>
          </div>

          {/* Right Cards Section */}
          <div ref={container} className="relative space-y-6">
            {steps.map((step, i) => {
              const targetScale = 1 - (steps.length - i) * 0.05;
              const range = [i / steps.length, 1];

              return (
                <Card
                  key={i}
                  step={step}
                  index={i}
                  range={range}
                  targetScale={targetScale}
                  progress={scrollYProgress}
                />
              );
            })}
            <div className="h-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
