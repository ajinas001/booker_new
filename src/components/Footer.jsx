"use client";
import React from "react";
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
    href: "https://www.instagram.com/booker_accounting",
    label: "Instagram",
  },
  {
    icon: FaEnvelope,
    href: "mailto:info@bookeraccounting.com",
    label: "Email",
  },
  { icon: FaFacebook, href: "#", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-teal-900 text-white border-t border-gray-800 rounded-t-[2rem] md:rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Layout Framework */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 items-start">
          {/* Column 1: Identity */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/images/LogoL.png"
                alt="Booker Accounting Company Logo"
                width={130}
                height={130}
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Booker refers to the global organization of accounting and
              consultancy firms, providing trusted financial services with
              integrity and innovation.
            </p>
          </div>

          {/* Column 2: Services List (Static & Stable) */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wide text-gray-200">
              Services
            </h3>
            <div className="flex flex-col gap-2">
              {serviceLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-150 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Company Pages */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wide text-gray-200">
              Company
            </h3>
            <div className="flex flex-col gap-2">
              {pageLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-150 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Location Block */}
          <div className="flex flex-col gap-3 border-t md:border-t-0 pt-6 md:pt-0 border-gray-800">
            {/* <h3 className="text-sm font-semibold tracking-wide text-gray-200">Headquarters</h3> */}
            <Link href={"https://www.google.com/maps?q=25.2474167,55.3088056"}>
              <div className="flex items-start gap-3 text-gray-400">
                <FaLocationDot
                  size={16}
                  className="text-white shrink-0 mt-0.5"
                />
                <div className="text-sm leading-relaxed">
                  <p className="font-medium text-white">Dubai Office</p>
                  <p>R364 Al Wasl Building</p>
                  <p>Unique World Business Center</p>
                  <p>Office 12 (2nd Floor)</p>
                  <p>Opp. Civil Defence Station</p>
                  <p>Al Karama, Dubai, United Arab Emirates</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 gap-6">
          <p className="text-xs text-gray-500 text-center sm:text-left order-2 sm:order-1">
            &copy; {new Date().getFullYear()} Booker Accounting and Consulting.
            All rights reserved.
          </p>

          {/* Clean Social Links */}
          <div className="flex gap-3 order-1 sm:order-2">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
                className="bg-gray-50 hover:bg-teal-900 border border-gray-700 w-9 h-9 flex items-center justify-center rounded-lg text-gray-800 hover:text-white transition-colors duration-150"
              >
                <social.icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
