"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import Link from 'next/link';

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
          className="fixed right-0 top-3/6 -translate-y-1/2 z-50 flex flex-col items-center overflow-hidden rounded-l-xl shadow-2xl bg-[#0B2545]"
        >
          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors duration-300"
            aria-label="Chat on WhatsApp"
          >
            {/* Custom SVG used for exact WhatsApp branding match */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-6 h-6"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M16.02 3C8.83 3 3 8.73 3 15.81c0 2.27.6 4.48 1.74 6.42L3 29l6.98-1.82a13.1 13.1 0 0 0 6.04 1.48H16c7.18 0 13-5.73 13-12.81C29 8.73 23.2 3 16.02 3zm0 23.49h-.02a10.9 10.9 0 0 1-5.56-1.53l-.4-.24-4.14 1.08 1.11-4.03-.26-.42a10.66 10.66 0 0 1-1.63-5.54c0-5.92 4.9-10.74 10.92-10.74 2.92 0 5.66 1.12 7.72 3.16a10.54 10.54 0 0 1 3.2 7.58c0 5.92-4.9 10.68-10.94 10.68zm6-8.12c-.33-.16-1.96-.96-2.26-1.07-.3-.11-.52-.16-.74.16-.22.32-.85 1.07-1.05 1.29-.19.21-.38.24-.71.08-.33-.16-1.39-.5-2.64-1.59-.98-.86-1.64-1.92-1.83-2.24-.19-.32-.02-.49.14-.65.15-.15.33-.38.49-.57.16-.19.22-.32.33-.54.11-.21.05-.4-.03-.56-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.4-.3.32-1.15 1.12-1.15 2.73 0 1.61 1.18 3.16 1.34 3.38.16.21 2.31 3.52 5.59 4.93.78.34 1.39.54 1.87.69.79.25 1.51.22 2.08.13.63-.09 1.96-.8 2.24-1.57.27-.77.27-1.43.19-1.57-.08-.13-.3-.21-.63-.37z" />
            </svg>
          </Link>

          {/* Border Divider */}
          <div className="w-full h-[1px] bg-white/10" />

          {/* Call Button */}
          <Link
            href="tel:+97100000000"
            className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300"
            aria-label="Call Us"
          >
            <Phone className="w-5 h-5" />
          </Link>

          {/* Border Divider */}
          <div className="w-full h-[1px] bg-white/10" />


        </motion.div>
      )}
    </AnimatePresence>
  );
}