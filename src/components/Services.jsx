"use client";

import Link from "next/link";
import { TrendingUp, Sparkles } from "lucide-react"; // ✅ Normal icons (clean & minimal)

/* ---------------------- SERVICES DATA ---------------------- */
const services = [
  {
    id: 1,
    title: "Accounting & Bookkeeping",
    description:
      "Accounts Regulation • Cloud Accounting Services • Audit Preparation & Support • Accounting & Financial Reporting • Inventory & Asset Verification",
    buttonText: "Learn More",
    link: "/accounting-bookkeeping",
    bgColor: "bg-secondary",
    textColor: "text-white",
    span: "lg:col-span-2 lg:row-span-1",
    borderRadius: "rounded-tr-[60px]",
    height: "min-h-[380px]",
    type: "content",
  },

  {
    id: 2,
    type: "icon",
    iconType: "arrow",
    bgColor: "bg-neutral-300",
    span: "lg:col-span-1 lg:row-span-1",
    borderRadius: "rounded-tl-[60px]",
    height: "min-h-[280px]",
  },

  {
    id: 3,
    title: "Audit & Assurance",
    description:
      "External Audit • Real Estate Audit • Internal Audit • Inventory Audit • Due Diligence Support • Forensic Audit",
    buttonText: "Explore",
    link: "/audit-assurance",
    bgColor: "bg-black",
    textColor: "text-white",
    span: "lg:col-span-1 lg:row-span-1",
    borderRadius: "rounded-[50px]",
    height: "min-h-[320px]",
    type: "content",
  },

  {
    id: 4,
    type: "image",
    imageUrl:
      "/images/service.webp",
    bgColor: "bg-neutral-300",
    span: "lg:col-span-1 lg:row-span-2",
    borderRadius: "rounded-[45px]",
    height: "min-h-[450px]",
  },

  {
    id: 5,
    title: "AML Consultancy",
    description:
      "AML Risk Assessment • Compliance Program Design • Transaction Monitoring • KYC & Customer Due Diligence • AML Training & Awareness • Regulatory Reporting",
    buttonText: "Discover",
    link: "/aml",
    bgColor: "bg-secondary",
    textColor: "text-white",
    span: "lg:col-span-2 lg:row-span-1",
    borderRadius: "rounded-tl-[70px] rounded-tr-[70px] rounded-br-[70px]",
    height: "min-h-[400px]",
    type: "content",
  },

  {
    id: 8,
    title: "Taxation & Compliance",
    description: "Corporate Tax • Value Added Tax (VAT) • Tax Agent Service",
    buttonText: "More About",
    link: "/taxation",
    bgColor: "bg-secondary",
    textColor: "text-white",
    span: "lg:col-span-1 lg:row-span-1",
    borderRadius: "rounded-[45px]",
    height: "min-h-[360px]",
    type: "content",
  },

  {
    id: 6,
    type: "icon",
    iconType: "spark",
    bgColor: "bg-neutral-300",
    span: "lg:col-span-1 lg:row-span-1",
    borderRadius: "rounded-[35px]",
    height: "min-h-[260px]",
  },

  {
    id: 7,
    title: "Business Advisory Services",
    description:
      "CFO Service • Business Valuation • Business Consultation • Merger & Acquisition • Business Process Re-engineering • Financial Feasibilities • IFRS Advisory Service",
    buttonText: "Learn More",
    link: "/business-advisory",
    bgColor: "bg-primary",
    textColor: "text-black",
    span: "lg:col-span-1 lg:row-span-1",
    borderRadius: "rounded-[55px]",
    height: "min-h-[340px]",
    type: "content",
  },

  {
    id: 9,
    title: "Business Support Services",
    description:
      "Mainland Company Formation • Freezone Business Setup • Company Secretarial Service • Liquidation / De-registration • ICV Consultancy • PRO Service",
    buttonText: "More Details",
    link: "/business-support",
    bgColor: "bg-black",
    textColor: "text-white",
    span: "lg:col-span-1 lg:row-span-1",
    borderRadius: "rounded-tl-[70px] rounded-tr-[70px] rounded-br-[70px]",
    height: "min-h-[300px]",
    type: "content",
  },
];

/* ---------------------- MAIN COMPONENT ---------------------- */
export default function AccountingServices() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] p-4 md:p-8">
      <section className="py-12 px-6 md:px-16">
        <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight">
          Business Consultants <br />
          for a <span className="font-semibold text-textsecondary">Growth Mindset</span>
        </h1>
      </section>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-dense">
        {services.map((item) => {
          const cardClasses = `${item.bgColor} ${item.borderRadius} ${item.span} ${item.height} overflow-hidden`;

          // ✅ Normal icons instead of custom SVG
          if (item.type === "icon") {
            return (
              <div
                key={item.id}
                className={`${cardClasses} flex items-center justify-center`}
              >
                {item.iconType === "arrow" && (
                  <TrendingUp size={80} strokeWidth={1.2} />
                )}
                {item.iconType === "spark" && (
                  <Sparkles size={80} strokeWidth={1.2} />
                )}
              </div>
            );
          }

          // Image Card
          if (item.type === "image") {
            return (
              <div key={item.id} className={cardClasses}>
                <img
                  src={item.imageUrl}
                  alt="service"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            );
          }

          // Content Card
          return (
            <div key={item.id} className={cardClasses}>
              <div
                className={`p-8 md:p-12 flex flex-col justify-between h-full ${item.textColor}`}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 tracking-tight">
                  {item.title}
                </h2>
                <p className="text-sm md:text-base leading-relaxed opacity-90 mb-8">
                  {item.description}
                </p>
                <Link href={item.link}>
                  <button
                    className={`px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full border-2 text-sm font-light hover:opacity-80 transition-opacity`}
                  >
                    {item.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
