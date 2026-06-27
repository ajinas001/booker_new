"use client";
import React, { useState } from "react";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaLocationDot,
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
  {
    icon: FaFacebook,
    href: "#",
    label: "Facebook",
  },
];

const Footer = () => {
  const [openServices, setOpenServices] = useState(false);

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-teal-900 text-white border-t border-white/5 rounded-t-[3rem] md:rounded-t-[4rem] shadow-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
          
          {/* Logo + Description */}
          <div className="max-w-xs md:max-w-sm flex flex-col gap-4">
            <Link href={"/"} className="inline-block hover:opacity-90 transition-opacity w-fit">
              <Image
                src="/images/LogoL.png"
                alt="Booker Accounting Company Logo"
                width={130}
                height={130}
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed font-normal tracking-wide">
              Booker refers to the global organization of accounting and
              consultancy firms, providing trusted financial services with
              integrity and innovation.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row items-start gap-8 lg:gap-12 text-sm font-medium w-full md:w-auto">
            
            {/* Services Dropdown Container */}
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setOpenServices(!openServices)}
                className="text-gray-300 hover:text-teal-400 flex items-center justify-between w-full sm:w-auto focus:outline-none py-1 transition-colors duration-200 group/btn"
              >
                <span className="tracking-wide">Services</span>
                <span
                  className={`ml-2 text-xs transition-transform duration-300 text-gray-500 group-hover/btn:text-teal-400 ${
                    openServices ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Enhanced Minimal Dropdown Menu */}
              <div
                className={`absolute left-0 mt-3 bg-slate-900/95 backdrop-blur-md text-gray-300 border border-white/10 shadow-2xl rounded-xl py-3 px-5 min-w-[240px] z-50 transition-all duration-300 ease-out origin-top-left ${
                  openServices
                    ? "opacity-100 scale-100 visible translate-y-0"
                    : "opacity-0 scale-95 invisible -translate-y-2"
                }`}
              >
                {serviceLinks.map((s, idx) => (
                  <Link
                    key={idx}
                    href={s.href}
                    onClick={() => setOpenServices(false)}
                    className="block py-2 text-gray-400 hover:text-teal-400 transition-colors duration-150 font-normal text-[13px]"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Static Page Links with Animated Line Hover */}
            {pageLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href} 
                className="relative text-gray-300 hover:text-teal-400 transition-colors duration-200 py-1 tracking-wide whitespace-nowrap group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Premium Glassmorphism Location Block */}
          <div className="w-full sm:max-w-xs text-sm border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-8">
            {/* <h4 className="text-teal-400/90 font-semibold mb-3 tracking-widest uppercase text-[11px]">
              Our Headquarters
            </h4> */}
            <div className="flex items-start gap-4 text-gray-300 bg-white/[0.02] border border-white/[0.05] p-4 rounded-2xl backdrop-blur-md shadow-inner">
              <div className=" p-2.5 rounded-xl border border-gray-500 shrink-0 shadow-sm">
                <FaLocationDot size={15} className="text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-white tracking-wide text-sm">Dubai Office</p>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  Business Bay, Exchange Tower,<br />
                  Level 14, Office 1402,<br />
                  Dubai, UAE
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center border-t border-white/10 gap-6">
          <p className="text-xs text-gray-500 leading-relaxed tracking-wide text-center sm:text-left order-2 sm:order-1 font-normal">
            © {new Date().getFullYear()} Booker Accounting and Consulting. All rights reserved.
          </p>

          {/* Social Icons with Micro-Interactions */}
          <div className="flex gap-3.5 order-1 sm:order-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="bg-white/[0.03] hover:bg-teal-500/10 border border-white/[0.08] hover:border-teal-500/40 rounded-xl w-10 h-10 flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-sm group"
              >
                <social.icon size={15} className="text-gray-400 group-hover:text-teal-400 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;