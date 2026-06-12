"use client";
import React, { useState } from "react";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { name: "Audit & Assurance", href: "/audit-assurance" },
  { name: "Taxation", href: "/taxation" },
  { name: "Accounting & Bookkeeping", href: "/accounting-bookkeeping" },
  { name: "Business-Support", href: "/business-support" },
  { name: "Business Advisory", href: "/business-advisory" },
  { name: "Anti-Money Laundering", href: "/aml" },
];

const pageLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Faq", href: "/faq" },
  { name: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/bookeraccounting/",
    label: "LinkedIn",
  },

  { icon: FaWhatsapp, href: "https://wa.me/971567678156", label: "WhatsApp" },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/booker_accounting?igsh=dzZ5MGZwMHJscjh4&utm_source=qr",
    label: "Instagram",
  },
  {
    icon: FaEnvelope,
    href: "mailto:info@bookeraccounting.com",
    label: "Email",
  },
];

const Footer = () => {
  const [openServices, setOpenServices] = useState(false);

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-teal-900 text-white border-t rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo + Description */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-3">
              <Link href={"/"}>
                <Image
                  src="/images/LogoL.png"
                  alt="Booker Accounting Company Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </Link>
            </div>
            <p className="text-sm text-gray-50 leading-relaxed">
              Booker refers to the global organization of accounting and
              consultancy firms, providing trusted financial services with
              integrity and innovation.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 text-sm font-medium w-full md:w-auto">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setOpenServices(!openServices)}
                className="text-gray-50 flex items-center justify-between w-full md:w-auto focus:outline-none"
              >
                Services
                <span
                  className={`ml-1 transition-transform duration-300 ${
                    openServices ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <div
                className={`absolute md:left-0 mt-2 bg-white md:bg-transparent text-gray-700 md:text-gray-50 shadow-xl md:shadow-none rounded-lg md:rounded-none py-4 px-6 md:p-0 min-w-[220px] z-50 transition-all duration-300 ${
                  openServices
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {serviceLinks.map((s, idx) => (
                  <Link
                    key={idx}
                    href={s.href}
                    onClick={() => setOpenServices(false)}
                    className="block py-2"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Static Page Links */}
            {pageLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-gray-50">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-700">
          <p className="text-sm text-gray-50 leading-relaxed max-w-2xl text-center md:text-left order-2 md:order-1 mt-6 md:mt-0">
            © {new Date().getFullYear()} Booker Accounting and Consulting
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 order-1 md:order-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="bg-white/10 border border-white/20 rounded-xl w-10 h-10 flex items-center justify-center backdrop-blur-sm"
              >
                <social.icon size={16} className="text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
