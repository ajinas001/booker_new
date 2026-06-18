"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineDocumentText,
  HiOutlinePencilSquare,
  HiOutlineShieldCheck,
  HiOutlineArrowPath,
  HiOutlineCalculator,
  HiOutlineClipboardDocumentCheck,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

const services = [
  {
    title: "Tax Reg",
    icon: HiOutlineDocumentText,
  },
  {
    title: "Tax Filing",
    icon: HiOutlinePencilSquare,
  },
  {
    title: "VAT Reg",
    icon: HiOutlineShieldCheck,
  },
  {
    title: "VAT Filing",
    icon: HiOutlineArrowPath,
  },
  {
    title: "Accounting",
    icon: HiOutlineCalculator,
  },
  {
    title: "Audit",
    icon: HiOutlineClipboardDocumentCheck,
  },
  {
    title: "Company",
    icon: HiOutlineBuildingOffice2,
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
            damping: 20,
          }}
          className="fixed bottom-3 left-3 right-3 z-50 lg:hidden sm:bottom-4 sm:left-4 sm:right-4"
        >
          <div className="overflow-x-auto rounded-xl border border-stone-100 bg-white p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:rounded-2xl sm:p-3 md:p-4">
            <div className="flex min-w-max items-center justify-between gap-2 sm:gap-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <button
                    key={index}
                    className="flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2 flex-shrink-0"
                  >
                    <div className="rounded-lg bg-[#f4f7f6] p-1.5 transition-all duration-300 sm:rounded-xl sm:p-2 md:p-2.5">
                      <Icon className="h-4 w-4 text-[#1a3c34] sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    </div>

                    <span className="whitespace-nowrap text-[8px] font-semibold uppercase tracking-wide text-[#1a3c34] sm:text-[9px] md:text-[10px]">
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}