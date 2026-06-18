"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HiOutlineDocumentText, HiOutlinePencilSquare, HiOutlineShieldCheck, 
  HiOutlineArrowPath, HiOutlineCalculator, HiOutlineClipboardDocumentCheck, 
  HiOutlineBuildingOffice2 
} from "react-icons/hi2";

const services = [
  { title: "Tax Reg", icon: <HiOutlineDocumentText className="w-4 h-4 text-[#1a3c34]" /> },
  { title: "Tax Filing", icon: <HiOutlinePencilSquare className="w-4 h-4 text-[#1a3c34]" /> },
  { title: "VAT Reg", icon: <HiOutlineShieldCheck className="w-4 h-4 text-[#1a3c34]" /> },
  { title: "VAT Filing", icon: <HiOutlineArrowPath className="w-4 h-4 text-[#1a3c34]" /> },
  { title: "Accounting", icon: <HiOutlineCalculator className="w-4 h-4 text-[#1a3c34]" /> },
  { title: "Audit", icon: <HiOutlineClipboardDocumentCheck className="w-4 h-4 text-[#1a3c34]" /> },
  { title: "Company", icon: <HiOutlineBuildingOffice2 className="w-4 h-4 text-[#1a3c34]" /> },
];

export default function FloatingService() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="lg:hidden fixed bottom-4 left-4 right-4 z-50"
        >
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-stone-100 p-4 overflow-x-auto">
            <div className="flex justify-between items-center gap-2 min-w-max">
              {services.map((service, index) => (
                <button 
                  key={index} 
                  className="flex flex-col items-center gap-1.5"
                >
                  <div className="p-2 bg-[#f4f7f6] rounded-xl">
                    {service.icon}
                  </div>
                  <span className="text-[5px] font-semibold text-[#1a3c34] uppercase tracking-wide whitespace-nowrap">
                    {service.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}