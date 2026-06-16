"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
// --- Static Data ---
const SERVICES_DATA_RAW = [
  {
    title: "Audit & Assurance",
    link: "/audit-assurance",
    description:
      "• External Audit\n• Real Estate Audit\n• Internal Audit\n• Inventory Audit\n• Due Diligence Support\n• Forensic Audit",
  },
  {
    title: "Taxation",
    link: "/taxation",
    description:
      "• Corporate Tax\n• Value Added Tax (VAT)\n• Tax Agent Service",
  },
  {
    title: "Accounting & Bookkeeping",
    link: "/accounting-bookkeeping",
    description:
      "• Accounts Regulation\n• Cloud Accounting Services\n• Audit Preparation & Support\n• Accounting & Financial Reporting\n• Inventory & Asset Verification",
  },
  {
    title: "Business Advisory Services",
    link: "/business-advisory",
    description:
      "• CFO Service\n• Business Valuation\n• Business Consultation\n• Merger & Acquisition\n• Business Process Re-engineering\n• Financial Feasibilities\n• IFRS Advisory Service",
  },
  {
    title: "Business Support Services",
    link: "/business-support",
    description:
      "• Mainland Company Formation\n• Freezone Business Setup\n• Company Secretarial Service\n• Liquidation / De-registration\n• ICV Consultancy\n• PRO Service",
  },
  {
    title: "Anti–Money Laundering (AML)",
    link: "/aml",
    description:
      "• AML Risk Assessment\n• Compliance Program Design\n• Transaction Monitoring\n• KYC & Customer Due Diligence\n• AML Training & Awareness\n• Regulatory Reporting",
  },
];

const NAV_LINKS = ["Home", "About", "Services", "Faq", "Blog", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const processedServices = useMemo(() => {
    return SERVICES_DATA_RAW.map((service) => ({
      ...service,
      descriptionPoints: service.description
        .split("\n")
        .map((p) => p.replace("•", "").trim())
        .filter(Boolean),
    }));
  }, []);

  const toggleMobileServices = () => setServicesOpen((prev) => !prev);
  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <nav className="font-heading fixed top-0 left-0 w-full z-50  bg-white text-black ">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/LogoD.png"
                alt="Booker Accounting Company Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {NAV_LINKS.map((link) => {
                const href = link === "Home" ? "/" : `/${link.toLowerCase()}`;

                if (link === "Services") {
                  return (
                    <div
                      key={link}
                      className="relative group"
                      onMouseEnter={() => {
                        if (window.innerWidth >= 1024) setServicesOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (window.innerWidth >= 1024) setServicesOpen(false);
                      }}
                    >
                      <button className="px-4 py-2 flex items-center gap-1 text-md  font-semibold text-textsecondary hover:text-textprimary transition">
                        {link}
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-textprimary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                  );
                }

                return (
                  <Link
                    key={link}
                    href={href}
                    className="px-4 py-2 text-md  font-semibold text-textsecondary hover:text-textprimary transition relative group"
                  >
                    {link}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-textprimary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                );
              })}
            </div>
            <div className="hidden lg:flex justify-center items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 p-2 flex items-center justify-center rounded-full border border-textsecondary text-textsecondary text-lg hover:bg-blue-600 hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 p-2 flex items-center justify-center rounded-full border border-textsecondary text-textsecondary text-lg hover:bg-pink-600 hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 p-2 flex items-center justify-center rounded-full border border-textsecondary text-textsecondary text-lg hover:bg-gray-800 hover:text-white transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 p-2 flex items-center justify-center rounded-full border border-textsecondary text-textsecondary text-lg hover:bg-blue-700 hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 p-2 flex items-center justify-center rounded-full border border-textsecondary text-textsecondary text-lg hover:bg-red-600 hover:text-white transition"
              >
                <FaYoutube />
              </a>

              <Link
                href="/contact"
                className="bg-textsecondary text-white hidden rounded-md lg:block ml-4 px-4 py-2 border-2 border-white hover:border-textsecondary font-small hover:bg-white transition hover:text-textsecondary"
              >
                Book Free Assessment
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition"
              onClick={() => {
                setIsOpen(!isOpen);
                setServicesOpen(false); // close when toggling
              }}
            >
              <svg
                className="w-6 h-6 text-textprimary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* --- Mobile Menu --- */}
         <div
            className={`fixed top-14 inset-0 z-50 lg:hidden transition-[opacity] duration-300 ease-in-out bg-white flex flex-col ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Top Section: Nav Links (Takes up remaining space) */}
            <div className="flex-grow overflow-y-auto py-4">
              {NAV_LINKS.map((link) => {
                const href = link === "Home" ? "/" : `/${link.toLowerCase()}`;

                if (link === "Services") {
                  return (
                    <div key={link} className="flex flex-col items-center">
                      <button
                        onClick={toggleMobileServices}
                        className="w-full px-4 py-3 flex items-center justify-center gap-1 hover:text-textprimary font-medium transition"
                      >
                        Services
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`transition-[max-height,opacity] duration-300 overflow-hidden ${servicesOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"} w-full text-start px-6`}
                      >
                        {processedServices.map((s) => (
                          <Link
                            key={s.title}
                            href={s.link}
                            onClick={closeAllMenus}
                            className="block py-2 text-textsecondary hover:text-textprimary text-sm transition"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link}
                    href={href}
                    onClick={closeAllMenus}
                    className="block px-4 py-3 text-center hover:text-textprimary font-medium transition"
                  >
                    {link}
                  </Link>
                );
              })}
            </div>

            {/* Bottom Section: CTA and Socials (Pinned to bottom) */}
            <div className="pb-8 border-t border-gray-100">
              <div className="px-6 pt-5">
                <Link
                  href="/contact"
                  onClick={closeAllMenus}
                  className="block w-full text-center bg-secondary text-white font-medium py-3 rounded-md border border-secondary hover:bg-transparent hover:text-secondary transition duration-300"
                >
                  Book Free Assessment
                </Link>
              </div>

              <div className="flex justify-center items-center gap-3 pt-5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-textsecondary text-textsecondary hover:bg-blue-600 hover:text-white transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-textsecondary text-textsecondary hover:bg-pink-600 hover:text-white transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-textsecondary text-textsecondary hover:bg-black hover:text-white transition"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-textsecondary text-textsecondary hover:bg-blue-700 hover:text-white transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-textsecondary text-textsecondary hover:bg-red-600 hover:text-white transition"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

        </div>
      </nav>

      {/* --- Desktop Mega Menu --- */}
      {typeof window !== "undefined" && window.innerWidth >= 1024 && (
        <div
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
          className={` font-heading fixed top-0 left-0 right-0 z-40 transition-all duration-300 shadow-md ${
            servicesOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <div className=" mt-12 p-4 bg-white text-black ">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-1 pr-6  py-48">
                  <h3 className="text-3xl font-bold mb-4">Our Services</h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                    No matter your role or goal{" "}
                    <span className="text-textprimary font-bold">BAC</span>{" "}
                    adapts to your needs
                  </p>
                </div>
                <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 pt-12 text-start">
                  {processedServices.map((service) => (
                    <div key={service.title} className="space-y-2">
                      <Link
                        href={service.link}
                        onClick={closeAllMenus}
                        className="block text-lg font-semibold text-textprimary  hover:text-textsecondary transition"
                      >
                        {service.title}

                        <ul className="list-disc pl-5 space-y-1 text-gray-500">
                          {service.descriptionPoints.map((point, i) => (
                            <li key={i} className="text-sm leading-relaxed">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
