"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Triggers the appearance after exactly 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed right-0 top-3/5 -translate-y-1/2 z-50 flex flex-col items-center overflow-hidden rounded-l-xl shadow-2xl bg-[#0B2545]"
        >
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors duration-300"
            aria-label="Chat on WhatsApp"
          >
            {/* Custom SVG used for exact WhatsApp branding match */}
            <svg 
              className="w-6 h-6 fill-current" 
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.179.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.239 3.48 8.421-.003 6.557-5.338 11.906-11.891 11.906-2.003-.001-3.973-.507-5.729-1.476L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.736.001-2.599-1.01-5.043-2.848-6.882-1.839-1.838-4.285-2.85-6.884-2.851-5.441 0-9.866 4.372-9.87 9.739a9.611 9.611 0 0 0 1.491 5.153l-.982 3.585 3.677-.952zm11.383-6.935c-.3-.15-1.771-.875-2.046-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.206-.6-2.106-1.049-2.946-2.493-.22-.379.22-.351.63-.1.37.224.425.375.625.775.2.4.1.75-.05.15-.15-.3-1.65-3.975-1.65-3.975-.3-.725-.6-.625-.825-.625l-.7-.012c-.25 0-.65.1-1 .5-.35.4-1.325 1.3-1.325 3.175s1.35 3.675 1.55 3.95c.2.275 2.65 4.05 6.425 5.675.9.387 1.6.62 2.15.792.906.288 1.725.247 2.375.15.725-.108 1.775-.725 2.025-1.388.25-.662.25-1.238.175-1.388-.075-.15-.275-.25-.575-.4z" />
            </svg>
          </a>

          {/* Border Divider */}
          <div className="w-full h-[1px] bg-white/10" />

          {/* Call Button */}
          <a
            href="tel:+97100000000"
            className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300"
            aria-label="Call Us"
          >
            <Phone className="w-5 h-5" />
          </a>

          {/* Border Divider */}
          <div className="w-full h-[1px] bg-white/10" />

         
        </motion.div>
      )}
    </AnimatePresence>
  );
}