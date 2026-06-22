"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ShoppingCart,
  Building2,
  Fuel,
  Hotel,
  HeartPulse,
  Factory,
  Cpu,
  Briefcase,
  LineChart,
  Truck,
  GraduationCap,
  Rocket,
  ArrowUpRight,
} from "lucide-react"

const industries = [
  {
    id: "01",
    slug: "trading-import-export",
    title: "Trading & Import/Export",
    icon: ShoppingCart,
    items: [
      "Retail trading companies",
      "Wholesale distributors",
      "Import/export businesses",
      "General trading companies",
    ],
  },
  {
    id: "02",
    slug: "construction-real-estate",
    title: "Construction & Real Estate",
    icon: Building2,
    items: [
      "Construction companies",
      "Real estate developers",
      "Property management firms",
      "Engineering contractors",
    ],
  },
  {
    id: "03",
    slug: "oil-gas",
    title: "Oil & Gas",
    icon: Fuel,
    items: [
      "Exploration and production companies",
      "Oilfield service providers",
      "Energy contractors",
      "Industrial suppliers",
    ],
  },
  {
    id: "04",
    slug: "hospitality-tourism",
    title: "Hospitality & Tourism",
    icon: Hotel,
    items: [
      "Hotels and hotel apartments",
      "Restaurants and cafés",
      "Travel agencies",
      "Tourism operators",
    ],
  },
  {
    id: "05",
    slug: "healthcare-medical",
    title: "Healthcare & Medical",
    icon: HeartPulse,
    items: [
      "Clinics and hospitals",
      "Medical centers",
      "Pharmacies",
      "Healthcare service providers",
    ],
  },
  {
    id: "06",
    slug: "manufacturing-industrial",
    title: "Manufacturing & Industrial",
    icon: Factory,
    items: [
      "Factories and production units",
      "Industrial manufacturers",
      "Packaging companies",
      "Heavy industry operators",
    ],
  },
  {
    id: "07",
    slug: "technology-it",
    title: "Technology & IT",
    icon: Cpu,
    items: [
      "Software companies",
      "IT service providers",
      "SaaS businesses",
      "E-commerce platforms",
    ],
  },
  {
    id: "08",
    slug: "professional-services",
    title: "Professional Services",
    icon: Briefcase,
    items: [
      "Law firms",
      "Consultancy firms",
      "Marketing agencies",
      "Engineering consultants",
    ],
  },
  {
    id: "09",
    slug: "financial-services",
    title: "Financial Services",
    icon: LineChart,
    items: [
      "Insurance brokers",
      "Financial advisory firms",
      "Investment companies",
      "Fintech startups",
    ],
  },
  {
    id: "10",
    slug: "transportation-logistics",
    title: "Transportation & Logistics",
    icon: Truck,
    items: [
      "Freight and shipping companies",
      "Logistics providers",
      "Cargo and supply chain firms",
      "Transport operators",
    ],
  },
  {
    id: "11",
    slug: "education-training",
    title: "Education & Training",
    icon: GraduationCap,
    items: [
      "Schools and training institutes",
      "Coaching centers",
      "Professional development academies",
    ],
  },
  {
    id: "12",
    slug: "smes-startups",
    title: "SMEs & Startups",
    icon: Rocket,
    items: [
      "Small and medium enterprises",
      "Startups across all industries",
      "Freelancers and entrepreneurs",
    ],
  },
]

function IndustryCard({ industry }) {
  const [open, setOpen] = useState(false)
  const Icon = industry.icon

  return (
    <Link
      href={`/industries/${industry.slug}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative flex flex-col border border-[#d9d2c2] bg-[#fbf9f4] p-6 transition-colors duration-300 hover:bg-[#0f2e2b] cursor-pointer sm:p-7"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-[11px] tracking-[0.18em] text-[#9c8f6f] transition-colors duration-300 group-hover:text-[#c9a45c]">
          {industry.id}
        </span>
        <ArrowUpRight
          className="h-4 w-4 text-[#9c8f6f] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#c9a45c] group-hover:rotate-45"
          strokeWidth={1.5}
        />
      </div>

      <div className="mt-5 flex items-center gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d9d2c2] bg-white transition-colors duration-300 group-hover:border-[#c9a45c]/40 group-hover:bg-[#143832]">
          <Icon
            className="h-5 w-5 text-[#0f2e2b] transition-colors duration-300 group-hover:text-[#c9a45c]"
            strokeWidth={1.5}
          />
        </div>
        <h3 className="font-serif text-[1.05rem] leading-snug text-[#1c2b27] transition-colors duration-300 group-hover:text-[#f6f1e4] sm:text-[1.15rem]">
          {industry.title}
        </h3>
      </div>

      <div
        className={`mt-4 overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1.5 border-t border-[#d9d2c2]/60 pt-4 group-hover:border-[#c9a45c]/20">
          {industry.items.map((item) => (
            <li
              key={item}
              className="flex items-baseline gap-2 text-[13.5px] leading-snug text-[#5c5747] transition-colors duration-300 group-hover:text-[#cfd8d4]"
            >
              <span className="text-[#c9a45c]">—</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  )
}

export default function IndustriesWeServe() {
  return (
    <div className="min-h-screen w-full bg-[#fbf9f4]">
      {/* Intro */}
      <section className="border-b border-[#d9d2c2] px-6 py-20 sm:px-10 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs tracking-[0.25em] text-[#9c8f6f]">
            BOOKER ACCOUNTING — INDUSTRY EXPERTISE
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-[#1c2b27] sm:text-5xl lg:text-6xl">
            Industries We Serve
          </h1>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:gap-12">
            <p className="text-[15px] leading-relaxed text-[#4a473c] sm:text-base">
              Booker Accounting works with a wide range of industries across
              the UAE, providing tailored accounting, tax, audit, and
              compliance solutions.
            </p>
            <p className="text-[15px] leading-relaxed text-[#4a473c] sm:text-base">
              Each industry has unique financial, regulatory, and operational
              requirements — our role is to ensure full compliance while
              supporting business growth and financial clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Industries grid */}
      <section className="px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="font-serif text-xl text-[#1c2b27] sm:text-2xl">
              Twelve Sectors. One Standard of Care.
            </h2>
            <span className="hidden font-mono text-[11px] tracking-[0.18em] text-[#9c8f6f] sm:inline">
              CLICK TO VIEW INDUSTRY
            </span>
          </div>

          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3 [&>*]:-ml-px [&>*]:-mt-px">
            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA strip */}
      <section className="border-t border-[#d9d2c2] bg-[#0f2e2b] px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-[#c9a45c]">
              DON'T SEE YOUR INDUSTRY?
            </p>
            <p className="mt-3 max-w-md font-serif text-xl leading-snug text-[#f6f1e4] sm:text-2xl">
              We tailor our approach to your sector's specific compliance
              needs.
            </p>
          </div>
          <button className="group flex items-center gap-2 whitespace-nowrap border border-[#c9a45c]/40 px-6 py-3 text-sm text-[#f6f1e4] transition-colors duration-300 hover:bg-[#c9a45c] hover:text-[#0f2e2b]">
            Talk to an Advisor
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45"
              strokeWidth={1.5}
            />
          </button>
        </div>
      </section>
    </div>
  )
}