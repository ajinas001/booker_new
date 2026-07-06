"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
        icon: <HiOutlineClipboardDocumentCheck className="w-14 h-14 text-black" />,
    },
    {
        title: "Taxation",
        href: "/taxation",
        icon: <HiOutlineDocumentText className="w-14 h-14 text-black" />,
    },
    {
        title: "Accounting and Bookkeeping",
        href: "/accounting-bookkeeping",
        icon: <HiOutlineCalculator className="w-14 h-14 text-black" />,
    },
    {
        title: "Business Advisory Service",
        href: "/business-advisory",
        icon: <HiOutlineBriefcase className="w-14 h-14 text-black" />,
    },
    {
        title: "Business Support Service",
        href: "/business-support",
        icon: <HiOutlineBuildingOffice className="w-14 h-14 text-black" />,
    },
    {
        title: "Anti Money Laundering",
        href: "/aml",
        icon: <HiOutlineShieldCheck className="w-14 h-14 text-black" />,
    },
];
export default function HeroSection() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const borderRadius = useTransform(
        scrollYProgress,
        [0, 0.3],
        ["0px", "60px"]
    );

    const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

    return (
        <div ref={containerRef} className="relative w-full bg-[#f8f9fa]">

            {/* PART 1: Compact Navy Banner (Optimized height for Laptop screen visibility) */}
            <motion.section
                id="home"
                style={{
                    borderBottomLeftRadius: borderRadius,
                    borderBottomRightRadius: borderRadius
                }}
                className="relative overflow-hidden min-h-[420px] lg:min-h-[50vh] xl:min-h-[60vh] flex items-center bg-[#e6e9ed] text-white z-20 shadow-md"
            >
                {/* Background Image Setup */}
                {/* Desktop Image */}
                <div className="absolute inset-0 w-full h-full hidden md:block">
                    <Image
                        src="/images/newbanner.webp"
                        alt="Your Trusted Accounting Partner"
                        fill
                        priority
                        className="object-cover object-center opacity-90"
                    />
                </div>

                {/* Mobile Image */}
                <div className="absolute inset-0 w-full h-full block md:hidden">
                    <Image
                        src="/images/mobilebanner.webp"
                        alt="Your Trusted Accounting Partner"
                        fill
                        priority
                        className="object-cover object-center opacity-90"
                    />
                </div>

                {/* Overlays */}
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20 z-10" />


                <div className="absolute inset-y-0 left-0 w-2/4 bg-gradient-to-r from-black/95 to-transparent z-10" />


                <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/95 to-transparent z-10" />

                {/* Main Dynamic Grid Content */}
                <motion.div
                    style={{ y: contentY }}
                    className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-8"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">

                        {/* Copy Block */}
                        <div className="lg:col-span-8 flex flex-col justify-center text-left mt-16">
                            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2] mb-4">
                                Your Trusted <br />
                                <span className="text-white">Accounting Partner</span> <br />
                                in the UAE
                            </h1>

                            <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-6 max-w-lg leading-relaxed">
                                From Compliance to Growth – We Simplify Your Finance, So You Can Focus on Your Business.
                            </p>

                            <Link
                                href="/contact"
                                className="group inline-flex items-center justify-center gap-2 bg-textsecondary hover:bg-white hover:text-textsecondary text-white text-xs md:text-sm font-bold w-fit px-5 py-3 rounded transition-all duration-300 shadow-md"
                            >
                                Book Free Assessment
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                    stroke="currentColor"
                                    className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                        </div>

                        {/* Badges Column Stack */}
                        {/* Right side floating trust badges */}
                        <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end mt-24">
                            <div className="flex flex-col space-y-6">
                                {[
                                    {
                                        label: "500+",
                                        desc: "Happy Clients",
                                        icon: (
                                            <svg className="w-7 h-7 text-textprimary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        label: "Zoho",
                                        desc: "Authorized Partner",
                                        icon: (
                                            <svg className="w-7 h-7 text-textprimary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        label: "UAE",
                                        desc: "Compliance Experts",
                                        icon: (
                                            <svg className="w-7 h-7 text-textprimary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        label: "10+ Years",
                                        desc: "of Experience",
                                        icon: (
                                            <svg className="w-7 h-7 text-textprimary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        )
                                    }
                                ].map((badge, idx) => (
                                    <div key={idx} className="flex items-center gap-4 w-full">
                                        <div className="flex-shrink-0">
                                            {badge.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sm md:text-base leading-tight text-white">{badge.label}</h4>
                                            <p className="text-xs md:text-sm text-gray-300 whitespace-nowrap">{badge.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </motion.div>
            </motion.section>

            {/* PART 2: Services Section (Sits snug under the banner, instantly visible above-the-fold) */}
            <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-8 lg:py-12 bg-[#f8f9fa]">

                {/* Heading Block */}
                <div className="text-center mb-4">
                    <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-black">
                        Need <span className="relative inline-block text-textsecondary pb-3 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-textsecondary after:left-0 after:bottom-0">Help</span> With?
                    </h2>
                    <p className=" sm:text-md md:text-lg text-gray-500 max-w-7xl mx-auto m-3 leading-relaxed">
                        We provide end-to-end accounting, tax, and business advisory services tailored for UAE businesses.
                    </p>
                </div>

                {/* Compact Row Matrix Grid Grid Container */}
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 justify-center justify-items-center w-full max-w-7xl mx-auto">
    {services.map((service, index) => (
        <Link key={index} href={service.href} className="w-full max-w-[200px]">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-between text-center hover:shadow-md transition-all duration-300 group cursor-pointer min-h-[145px] h-full">
                <div className="mb-2 transform group-hover:scale-105 transition-transform duration-300">
                    {service.icon}
                </div>

                <h5 className="text-[15px] text-black tracking-tight mb-1">
                    {service.title}
                </h5>

                <div className="w-6 h-[2px] bg-textsecondary mt-1" />
            </div>
        </Link>
    ))}
</div>

            </section>
        </div>
    );
}