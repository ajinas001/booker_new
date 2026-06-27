"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
    HiOutlineClipboardDocumentCheck, 
    HiOutlineDocumentText, 
    HiOutlineCalculator, 
    HiOutlineBriefcase, 
    HiOutlineBuildingOffice, 
    HiOutlineShieldCheck 
} from "react-icons/hi2";

const services = [
  {
    title: "Audit & Assurance",
    href: "/audit-assurance",
    icon: HiOutlineClipboardDocumentCheck,
  },
  {
    title: "Taxation",
    href: "/taxation",
    icon: HiOutlineDocumentText,
  },
  {
    title: "Accounting & Bookkeeping", // Slightly shortened for UI balance
    href: "/accounting-bookkeeping",
    icon: HiOutlineCalculator,
  },
  {
    title: "Business Advisory",
    href: "/business-advisory",
    icon: HiOutlineBriefcase,
  },
  {
    title: "Business Support",
    href: "/business-support",
    icon: HiOutlineBuildingOffice,
  },
  {
    title: "Anti Money Laundering",
    href: "/aml",
    icon: HiOutlineShieldCheck,
  },
];

export default function FloatingService() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 25, // Smoothed out bouncing slightly
          }}
          className="fixed bottom-4 left-4 right-4 z-50 lg:hidden"
        >
          <div className="overflow-x-auto no-scrollbar rounded-2xl border border-stone-100 bg-white/95 backdrop-blur-md py-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            {/* Using justify-start on mobile for clean overflow scrolling, and justify-around on tablets */}
            <div className="flex min-w-max items-center justify-start md:justify-around gap-1 px-1">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={index}
                    href={service.href}
                    className="flex flex-col items-center gap-1 flex-shrink-0 group cursor-pointer"
                  >
                    {/* Balanced icon container padding and sizing */}
                    <div className="rounded-xl bg-[#f4f7f6] p-2 transition-all duration-200 group-hover:bg-[#1a3c34]/10 group-active:scale-95">
                      <Icon className="h-5 w-5 text-[#1a3c34] sm:h-6 sm:w-6 transition-colors" />
                    </div>

                    {/* Drastically improved text styling: shifted from uppercase to normal tracking-normal */}
                  <span
  className="
    text-center
    text-[8px]
    sm:text-[9px]
    md:text-[10px]
    font-medium
    leading-tight
    text-[#1a3c34]
    group-hover:text-black
    transition-colors
    break-words
    max-w-[65px]
    sm:max-w-[75px]
    md:max-w-[85px]
  "
>
  {service.title}
</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}