"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Building2,
  Droplets,
  Utensils,
  Stethoscope,
  Factory,
  Laptop,
  Briefcase,
  Landmark,
  Truck,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const industries = [
  {
    title: "Trading & Import/Export",
    icon: TrendingUp,
    subtitle: "Cross-border finance built for volume and velocity.",
    tags: [
      "Retail Trading Companies",
      "Wholesale Distributors",
      "Import/Export Businesses",
      "General Trading Companies",
    ],
    accent: "secondary",
  },
  {
    title: "Construction & Real Estate",
    icon: Building2,
    subtitle: "Project accounting that keeps pace with every milestone.",
    tags: [
      "Construction Companies",
      "Real Estate Developers",
      "Property Management Firms",
      "Engineering Contractors",
    ],
    accent: "black",
  },
  {
    title: "Oil & Gas Industry",
    icon: Droplets,
    subtitle: "Precision reporting for high-stakes energy operations.",
    tags: [
      "Exploration & Production Companies",
      "Oilfield Service Providers",
      "Energy Contractors",
      "Industrial Suppliers",
    ],
    accent: "secondary",
  },
  {
    title: "Hospitality & Tourism",
    icon: Utensils,
    subtitle: "Revenue intelligence from bookings to balance sheet.",
    tags: [
      "Hotels & Hotel Apartments",
      "Restaurants & Cafés",
      "Travel Agencies",
      "Tourism Operators",
    ],
    accent: "black",
  },
  {
    title: "Healthcare & Medical",
    icon: Stethoscope,
    subtitle: "Compliant financial systems for patient-first operations.",
    tags: [
      "Clinics & Hospitals",
      "Medical Centers",
      "Pharmacies",
      "Healthcare Service Providers",
    ],
    accent: "secondary",
  },
  {
    title: "Manufacturing & Industrial",
    icon: Factory,
    subtitle: "End-to-end costing from raw materials to finished goods.",
    tags: [
      "Factories & Production Units",
      "Industrial Manufacturers",
      "Packaging Companies",
      "Heavy Industry Operators",
    ],
    accent: "black",
  },
  {
    title: "Technology & IT",
    icon: Laptop,
    subtitle: "Scalable finance for companies moving at startup speed.",
    tags: [
      "Software Companies",
      "IT Service Providers",
      "SaaS Businesses",
      "E-commerce Platforms",
    ],
    accent: "secondary",
  },
  {
    title: "Professional Services",
    icon: Briefcase,
    subtitle: "Time-to-invoice tracking and utilization analytics.",
    tags: [
      "Law Firms",
      "Consultancy Firms",
      "Marketing Agencies",
      "Engineering Consultants",
    ],
    accent: "black",
  },
  {
    title: "Financial Services",
    icon: Landmark,
    subtitle: "Regulatory-ready books for licensed and exempt firms.",
    tags: [
      "Insurance Brokers",
      "Financial Advisory Firms",
      "Investment Companies",
      "Fintech Startups",
    ],
    accent: "secondary",
  },
  {
    title: "Transportation & Logistics",
    icon: Truck,
    subtitle: "Fleet economics and freight margins at a glance.",
    tags: [
      "Freight & Shipping Companies",
      "Logistics Providers",
      "Cargo & Supply Chain Firms",
      "Transport Operators",
    ],
    accent: "black",
  },
  {
    title: "Education & Training",
    icon: GraduationCap,
    subtitle: "Fee management and grant compliance made simple.",
    tags: [
      "Schools & Training Institutes",
      "Coaching Centers",
      "Professional Development Academies",
    ],
    accent: "secondary",
  },
  {
    title: "SMEs & Startups",
    icon: Sparkles,
    subtitle: "Founder-friendly finance that grows with your ambition.",
    tags: [
      "Small & Medium Enterprises",
      "Startups Across All Industries",
      "Freelancers & Entrepreneurs",
    ],
    accent: "black",
  },
];

function Tag({ label }) {
  return (
    <span className="text-[11px] uppercase tracking-wider font-semibold px-4 py-2 rounded-md bg-purpletint text-stone-900 border border-purpletint">
      {label}
    </span>
  );
}

export default function PremiumIndustries() {
  const [active, setActive] = useState(0);
  const activeItem = industries[active];

  return (
    <section className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- MOBILE VIEW: Simple Stacked Cards --- */}
        <div className="lg:hidden">
          <div className="mb-12">
           <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-black">
                  Industries{" "}
                  <span className="relative inline-block text-textsecondary pb-3 after:content-[''] after:absolute after:w-full  after:bg-textsecondary after:left-0 after:bottom-0">
                    We Serve
                  </span>
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed max-w-md">
                  Booker Accounting works with a wide range of industries across
                  the UAE, providing tailored accounting, tax, audit, and
                  compliance solutions.
                </p>
          </div>
          <div className="flex flex-col gap-6">
            {industries.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2rem] p-8 border border-stone-200 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-textsecondary flex items-center justify-center text-white">
                    <item.icon size={22} />
                  </div>
                  <h3 className="text-xl font-medium text-stone-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-stone-500 text-sm mb-6 leading-relaxed">
                  {item.subtitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- DESKTOP VIEW: Sticky Layout --- */}
        <div className="hidden lg:grid grid-cols-12 gap-16">
          <div className="col-span-5 relative">
            <div className="sticky top-24">
              <div className="mb-12">
                <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-black">
                  Industries{" "}
                  <span className="relative inline-block text-textsecondary pb-3 after:content-[''] after:absolute after:w-full  after:bg-textsecondary after:left-0 after:bottom-0">
                    We Serve
                  </span>
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed max-w-md">
                  Booker Accounting works with a wide range of industries across
                  the UAE, providing tailored accounting, tax, audit, and
                  compliance solutions.
                </p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-gradient-to-br from-gray-900 to-teal-900 rounded-xl p-12 text-white shadow-2xl min-h-[420px] flex flex-col justify-between"
                >
                  <div>
                    <activeItem.icon
                      size={48}
                      className="text-white mb-8"
                      strokeWidth={1.5}
                    />
                    <h3 className="text-3xl font-light mb-4">
                      {activeItem.title}
                    </h3>
                    <p className="text-stone-300 text-base leading-relaxed">
                      {activeItem.subtitle}
                    </p>
                  </div>
                  <div className="text-gray-100 font-mono text-sm pt-8 border-t border-gray-100">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(industries.length).padStart(2, "0")}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="col-span-7 pt-12">
            {industries.map((item, idx) => (
              <motion.div
                key={idx}
                onViewportEnter={() => setActive(idx)}
                viewport={{ margin: "-20% 0px -60% 0px" }}
                className="mb-32 last:mb-20 border-l border-stone-300 pl-10"
              >
                <h3 className="text-3xl md:text-3xl lg:text-4xl font-semibold  text-textsecondary mb-8">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {item.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
