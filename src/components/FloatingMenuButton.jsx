"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiChevronUp } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

// Contact items
import { FaStar } from "react-icons/fa6";

const reviewItem = {
  // 🔁 replace with your Google review link
};
const contactItems = [
  {
    icon: FiPhone,
    label: "Call us now",
    href: "tel:+971567678156",
    isImage: false,
  },
  {
    icon: FiMail,
    label: "Mail us now",
    href: "mailto:Info@bookeraccounting.com",
    isImage: false,
  },
  {
    label: "Review us on Trustpilot",
    href: "https://www.trustpilot.com/review/bookeraccounting.com",
    isImage: true,
    imageSrc: "/images/trustpilot.png", // 🔁 your PNG icon path
  },
];

const socialItems = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/bookeraccounting/",
    label: "LinkedIn",
  },
  { icon: FaWhatsapp, href: "https://wa.me/971567678156 ", label: "WhatsApp" },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/booker_accounting?igsh=dzZ5MGZwMHJscjh4&utm_source=qr",
    label: "Instagram",
  },
];

// Framer Motion Variants
const menuContainerVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: { duration: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function FloatingMenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  // 🖼️ Replacing the cursor icon with a logo image
  const LogoButton = () => (
    <motion.div
      animate={{
        y: [0, -3, 0],
        transition: {
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
        },
      }}
      className=" bg-white rounded-2xl shadow-md cursor-pointer border border-gray-100"
    >
      <div className="relative w-10 h-10">
        <Image
          src="/images/Logo.png" // replace with your image path
          alt="Logo"
          fill
          className="object-contain"
          sizes="40px"
        />
      </div>
    </motion.div>
  );

  return (
    <div className="fixed bottom-6 right-8 z-40">
      <AnimatePresence>
        {isOpen ? (
          // --- Menu Pop-up ---
          <motion.div
            key="menu"
            variants={menuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-64 md:w-72 bg-white p-3 rounded-3xl shadow-2xl backdrop-blur-md border border-gray-100 relative"
          >
            {/* 🏢 Logo at the Top Center */}
            <div className="flex justify-center mb-4">
              <Link href="/" className="inline-block">
                <div className="relative w-16 h-16">
                  <Image
                    src="/images/LogoD.png"
                    alt="Company Logo"
                    fill
                    className="object-contain"
                    priority
                    sizes="64px"
                  />
                </div>
              </Link>
            </div>

            {/* Contact Section */}
            <motion.div className="mb-4">
              <ul className="space-y-2">
                {contactItems.map((item) => (
                  <motion.li key={item.label} variants={itemVariants}>
                    <a
                      href={item.href}
                      className="flex items-center px-4 py-2 text-gray-700 hover:text-cyan-600 transition-colors"
                    >
                      {item.isImage ? (
                        <Image
                          src={item.imageSrc}
                          alt={item.label}
                          width={20}
                          height={20}
                          className="mr-3 object-contain"
                        />
                      ) : (
                        <item.icon className="w-5 h-5 mr-3" />
                      )}

                      <span className="text-sm md:text-lg font-medium">{item.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div className="flex justify-center space-x-6 pt-4 border-t border-gray-100">
              {socialItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-500 hover:text-cyan-600 transition-colors"
                  aria-label={item.label}
                >
                  <item.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>

            {/* Close Button */}
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute -bottom-4 right-1/2 translate-x-1/2 p-2 bg-white rounded-full shadow-lg border border-gray-100 hover:bg-gray-50 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronUp className="w-5 h-5 text-gray-500" />
            </motion.button>
          </motion.div>
        ) : (
          // --- Floating Logo Button ---
          <motion.button
            key="button"
            className="relative"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogoButton />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
