"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import {
  TrendingUp, Building2, Droplets, Utensils, Stethoscope,
  Factory, Laptop, Briefcase, Landmark, Truck, GraduationCap,
  Sparkles, Globe,
} from "lucide-react";
import Image from "next/image";

const industries = [
  {
    title: "Trading",
    fullTitle: "Trading & Import/Export",
    icon: TrendingUp,
    image: "/images/trading.webp",
    subtitle: "Cross-border finance built for volume and velocity.",
    tags: [
      "Retail Trading Companies",
      "Wholesale Distributors",
      "Import/Export Businesses",
      "General Trading Companies",
    ],
  },
  {
    title: "Freezone",
    fullTitle: "Freezone Business",
    icon: Globe,
    image: "/images/freezone.webp",
    subtitle: "Streamlined compliance for international trade zones.",
    tags: [
      "Freezone Entities",
      "Offshore Companies",
      "Branch Offices",
      "Holding Companies",
    ],
  },
  {
    title: "Real Estate",
    fullTitle: "Construction & Real Estate",
    icon: Building2,
    image: "/images/construction.webp",
    subtitle: "Project accounting that keeps pace with every milestone.",
    tags: [
      "Construction Companies",
      "Real Estate Developers",
      "Property Management Firms",
      "Engineering Contractors",
    ],
  },
  {
    title: "Oil & Gas",
    fullTitle: "Oil & Gas Industry",
    icon: Droplets,
    image: "/images/oil.webp",
    subtitle: "Precision reporting for high-stakes energy operations.",
    tags: [
      "Exploration & Production Companies",
      "Oilfield Service Providers",
      "Energy Contractors",
      "Industrial Suppliers",
    ],
  },
  {
    title: "Hospitality",
    fullTitle: "Hospitality & Tourism",
    icon: Utensils,
    image: "/images/hospitality.webp",
    subtitle: "Revenue intelligence from bookings to balance sheet.",
    tags: [
      "Hotels & Hotel Apartments",
      "Restaurants & Cafés",
      "Travel Agencies",
      "Tourism Operators",
    ],
  },
  {
    title: "Healthcare",
    fullTitle: "Healthcare & Medical",
    icon: Stethoscope,
    image: "/images/healthcare.webp",
    subtitle: "Compliant financial systems for patient-first operations.",
    tags: [
      "Clinics & Hospitals",
      "Medical Centers",
      "Pharmacies",
      "Healthcare Service Providers",
    ],
  },
  {
    title: "Manufacturing",
    fullTitle: "Manufacturing & Industrial",
    icon: Factory,
    image: "/images/manufacturing.webp",
    subtitle: "End-to-end costing from raw materials to finished goods.",
    tags: [
      "Factories & Production Units",
      "Industrial Manufacturers",
      "Packaging Companies",
      "Heavy Industry Operators",
    ],
  },
  {
    title: "Technology",
    fullTitle: "Technology & IT",
    icon: Laptop,
    image: "/images/technology.webp",
    subtitle: "Scalable finance for companies moving at startup speed.",
    tags: [
      "Software Companies",
      "IT Service Providers",
      "SaaS Businesses",
      "E-commerce Platforms",
    ],
  },
  {
    title: "Professional",
    fullTitle: "Professional Services",
    icon: Briefcase,
    image: "/images/professional.webp",
    subtitle: "Time-to-invoice tracking and utilization analytics.",
    tags: [
      "Law Firms",
      "Consultancy Firms",
      "Marketing Agencies",
      "Engineering Consultants",
    ],
  },
  {
    title: "Financial",
    fullTitle: "Financial Services",
    icon: Landmark,
    image: "/images/financial.webp",
    subtitle: "Regulatory-ready books for licensed and exempt firms.",
    tags: [
      "Insurance Brokers",
      "Financial Advisory Firms",
      "Investment Companies",
      "Fintech Startups",
    ],
  },
  {
    title: "Logistics",
    fullTitle: "Transportation & Logistics",
    icon: Truck,
    image: "/images/transportation.webp",
    subtitle: "Fleet economics and freight margins at a glance.",
    tags: [
      "Freight & Shipping Companies",
      "Logistics Providers",
      "Cargo & Supply Chain Firms",
      "Transport Operators",
    ],
  },
  {
    title: "Education",
    fullTitle: "Education & Training",
    icon: GraduationCap,
    image: "/images/education.webp",
    subtitle: "Fee management and grant compliance made simple.",
    tags: [
      "Schools & Training Institutes",
      "Coaching Centers",
      "Professional Development Academies",
    ],
  },
  {
    title: "SMEs",
    fullTitle: "SMEs & Startups",
    icon: Sparkles,
    image: "/images/smes.webp",
    subtitle: "Founder-friendly finance that grows with your ambition.",
    tags: [
      "Small & Medium Enterprises",
      "Startups Across All Industries",
      "Freelancers & Entrepreneurs",
    ],
  },
];

const CARD_W = 460;
const GAP = 48;

// ─── PARALLAX CARD COMPONENT ──────────────────────────────────────────────────
function IndustryCard({ item, index, scrollX }) {
  const offset = index * (CARD_W + GAP);
  const imgX = useTransform(scrollX, [-offset - 800, -offset, -offset + 800], [40, 0, -40]);

  return (
    <div
      className="relative flex-shrink-0 rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden group"
      style={{ width: CARD_W, height: 540 }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <motion.div style={{ x: imgX }} className="absolute inset-0 w-[116%] h-full -left-[8%]">
          <Image
            src={item.image} alt={item.fullTitle} fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="500px"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-900/10 mix-blend-multiply opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-tr from-stone-950/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex justify-between items-start">
        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
          <item.icon size={20} strokeWidth={1.5} />
        </div>
        <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
          Sector // {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative z-10">
        <h3 className="text-3xl font-light tracking-tight text-white mb-4">{item.fullTitle}</h3>
        <p className="text-stone-200/80 text-sm leading-relaxed max-w-[320px] mb-8 font-light">{item.subtitle}</p>
        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
          {item.tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-wider text-secondary px-3 py-1.5 rounded-full bg-white backdrop-blur-sm border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── NAVIGATION PILL BAR COMPONENT ──────────────────────────────────────────
function SectorPillBar({ activeIndex, onSelect }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current?.querySelector(`[data-pill="${activeIndex}"]`);
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeIndex]);

  return (
    <div className="absolute bottom-10 left-0 right-0 flex justify-center pointer-events-none z-30">
      <div
        className="pointer-events-auto flex items-center px-2 py-2 rounded-full"
        style={{
          background: "rgba(20, 18, 14, 0.72)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          border: "0.5px solid rgba(255,255,255,0.14)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.06) inset",
          maxWidth: "min(840px, 92vw)",
        }}
      >
        <div
          ref={trackRef}
          className="flex items-center gap-1 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {industries.map((item, idx) => {
            const active = idx === activeIndex;
            const Icon = item.icon;
            return (
              <button
                key={idx}
                data-pill={idx}
                onClick={() => onSelect(idx)}
                className="flex items-center gap-2 rounded-full flex-shrink-0 transition-all duration-300 focus:outline-none"
                style={{
                  padding: active ? "8px 16px 8px 12px" : "8px 12px",
                  background: active ? "#ffffff" : "transparent",
                  color: active ? "#1c1a17" : "rgba(255,255,255,0.6)",
                }}
              >
                <Icon
                  size={15}
                  strokeWidth={active ? 2 : 1.5}
                  style={{ flexShrink: 0, transition: "stroke-width 0.2s" }}
                />
                <span
                  className="font-medium text-[12px] tracking-tight whitespace-nowrap overflow-hidden transition-all duration-300"
                  style={{
                    maxWidth: active ? 90 : 0,
                    opacity: active ? 1 : 0,
                  }}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN CONTAINER EXPORT ────────────────────────────────────────────────────
export default function PremiumHorizontalIndustries() {
  const sectionRef = useRef(null);
  const stripRef = useRef(null);
  const mobileRef = useRef(null);
  const [range, setRange] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef });
  const x = useTransform(scrollYProgress, [0, 1], [0, -range]);

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

  // Synchronize dynamic horizontal transformations back into specific index values cleanly
  useEffect(() => {
    return x.on("change", (val) => {
      if (range === 0) return;
      const progress = Math.abs(val) / range;
      const idx = Math.round(progress * (industries.length - 1));
      setActiveIndex(Math.max(0, Math.min(industries.length - 1, idx)));
    });
  }, [x, range]);

  useEffect(() => {
    const calc = () => {
      if (stripRef.current) {
        setRange(stripRef.current.scrollWidth - window.innerWidth + 96);
      }
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // Recalculates screen space coordinates cleanly to remove alignment issues on custom resolutions
  const handleDesktopSelect = useCallback((idx) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = rect.top + scrollTop;
    const totalScrollableHeight = sectionRef.current.offsetHeight - window.innerHeight;
    const progress = idx / (industries.length - 1);

    window.scrollTo({
      top: sectionTop + (progress * totalScrollableHeight),
      behavior: "smooth"
    });
  }, []);

  const handleMobileSelect = useCallback((idx) => {
    if (!mobileRef.current) return;
    const card = mobileRef.current.children[idx];
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActiveIndex(idx);
  }, []);

  const handleMobileScroll = useCallback(() => {
    if (!mobileRef.current) return;
    const el = mobileRef.current;
    const w = el.offsetWidth * 0.85 + 24;
    const idx = Math.round(Math.max(0, Math.min(industries.length - 1, el.scrollLeft / w)));
    setActiveIndex(idx);
  }, []);

  return (
    <div>
      {/* ══════════════════ MOBILE CONTROLS ══════════════════ */}
      <div className="lg:hidden bg-white py-24 p-8">
        <motion.div
          className="mb-16 max-w-4xl"
          variants={textRevealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Using a font class that closely matches the image's "Success Stories" style */}

          <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-black">
            Industries <span className="relative inline-block text-textsecondary pb-3 after:content-[''] after:absolute after:w-full  after:left-0 after:bottom-0">We Serve</span>
          </h2>
          <p className=" sm:text-md md:text-lg text-textsecondary max-w-7xl  mx-auto  leading-relaxed">
            Native financial architectures calibrated specifically for growth-focused markets across the UAE.
          </p>
        </motion.div>

        <div className="flex gap-2 overflow-x-auto px-6 pb-4" style={{ scrollbarWidth: "none" }}>
          {industries.map((item, idx) => {
            const active = idx === activeIndex;
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => handleMobileSelect(idx)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full flex-shrink-0 transition-all duration-200 text-[11px] font-medium border"
                style={{
                  background: active ? "#1f626d" : "#ffffff",
                  color: active ? "#ffffff" : "#1f626d",
                  border: active ? "1px solid #1c1a17" : "1px solid #e7e5e4",
                }}
              >
                <Icon size={12} strokeWidth={active ? 2 : 1.5} />
                {item.title}
              </button>
            );
          })}
        </div>

        <div
          ref={mobileRef}
          onScroll={handleMobileScroll}
          className="flex gap-6 overflow-x-auto px-6 pb-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {industries.map((item, idx) => (
            <div
              key={idx}
              className="snap-center relative flex-shrink-0 aspect-[4/5] rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden shadow-md"
              style={{ width: "85vw", maxWidth: 340 }}
            >
              <Image src={item.image} alt={item.fullTitle} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="relative z-10 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                <item.icon size={18} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-light text-white mb-2">{item.fullTitle}</h3>
                <p className="text-stone-300 text-xs font-light mb-4">{item.subtitle}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[9px] uppercase tracking-wider text-white/90 px-2 py-1 bg-white/10 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════ DESKTOP CONTROLS ══════════════════ */}
      <section
        ref={sectionRef}
        className="hidden lg:block relative bg-textsecondary py-12"
        style={{ height: "650vh" }}
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pl-24">

          <motion.div
            className="mb-16 max-w-4xl"
            variants={textRevealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Using a font class that closely matches the image's "Success Stories" style */}

            <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-white">
              Industries <span className="relative inline-block text-white pb-3 after:content-[''] after:absolute after:w-full  after:left-0 after:bottom-0">We Serve</span>
            </h2>
            <p className=" sm:text-md md:text-lg text-white max-w-7xl  mx-auto  leading-relaxed">
              Native financial architectures calibrated specifically for growth-focused markets across the UAE.
            </p>
          </motion.div>

          <div className="relative w-full">
            <motion.div
              ref={stripRef}
              style={{ x }}
              className="flex gap-12 will-change-transform"
            >
              {industries.map((item, idx) => (
                <IndustryCard key={idx} item={item} index={idx} scrollX={x} />
              ))}
              <div aria-hidden="true" className="w-1 flex-shrink-0 invisible" />
            </motion.div>
          </div>

          {/* <SectorPillBar activeIndex={activeIndex} onSelect={handleDesktopSelect} /> */}
        </div>
      </section>
    </div>
  );
}