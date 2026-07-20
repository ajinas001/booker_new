"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Newspaper } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { useRef } from "react";
import FloatingService from "@/components/FloatingService";

export default function BlogPage() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  // Header/Main Title variants (smoother animation for the big text)
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const POSTS = [
    {
      id: 1,
      href: "/e-invoice",
      title: "UAE E-Invoicing Transformation & Mandatory Strategy",
      description:
        "Understanding the UAE’s mandatory e-invoicing rollout, compliance requirements, timelines, and its impact on businesses.",
      author: "Content Writer",
      imageUrl: "/images/e-invoice.webp",
      readTime: "",
    },
    {
      id: 2,
      href: "/offshore",
      title: "UAE Offshore Corporate Tax Registration Practices",
      description:
        "A comprehensive guide to understanding corporate tax registration for offshore companies in the UAE's evolving tax framework.",
      author: "Content Writer",
      imageUrl: "/images/tax.webp",
      readTime: "",
    },
    {
      id: 3,
      href: "/e-invoicing",
      title: "The Paper Trail Ends Here : Why E-Invoicing Is No Longer Optional?",
      description:
        "Slow payments, manual errors, and compliance risk are symptoms of the same root cause  paper-based invoicing. Here's what the shift to e-invoicing actually looks like, and why the businesses moving now will have a significant structural advantage.",
      author: "Content Writer ",
      imageUrl: "/images/office-workers.webp",
      readTime: "9 Min Read",
    },
    {
      id: 4,
      href: "/uaecorporatetaxblog",
      title: "No More Tax-Free by Default: UAE Corporate Tax — Everything Business Owners Need to Know",
      description:
        "The UAE introduced Corporate Tax in June 2023 — and it applies to almost every business operating here. Whether you're a startup, an SME, or an established company in a free zone or on the mainland, here's a plain-English guide to what you need to know and do right now.",
      author: "Content Writer",
      imageUrl: "/images/uaecorporatetax.webp",
      readTime: "11 Min Read",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-slate-900 font-sans">

        {/* ✅ HERO BACKGROUND SECTION */}
        <section className="relative overflow-hidden text-white bg-black">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src="/images/blog.webp"
              alt="Blog Background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center transform-gpu"
              style={{
                WebkitTransform: "translateZ(0)",
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80 pointer-events-none" />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="text-sm md:text-lg flex flex-wrap text-gray-300 gap-x-2">
                <Link href="/" className="text-white hover:text-textsecondary transition-colors">
                  Home
                </Link>
                <span>›</span>
                <span className="text-textprimary font-medium">Blog</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              Latest <span className="text-transparent bg-clip-text bg-textprimary">Blogs</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl"
            >
              We believe business owners deserve clear and practical guidance. That's why we share valuable insights, compliance updates, and expert advice to help you stay compliant.
            </motion.p>
          </div>
        </section>

        {/* ✅ DYNAMIC NEW INSIGHTS / MAIN GRID SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-24 bg-white">

          {/* Centered Top Badge & Header Typography Framework */}
          {/* <div className="text-center mb-16 flex flex-col items-center">
           
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Explore Our Blog
            </h2>
            
            <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-normal">
              Dive into our blog for expert insights, tips, and industry trends to elevate your business operations and compliance management journey.
            </p>
          </div> */}
          <motion.header
            ref={headerRef}
            className="max-w-7xl mx-auto text-center mb-8"
            variants={headerVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
          >

            <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-black">
              Explore <span className="relative inline-block text-textsecondary pb-3 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-textsecondary after:left-0 after:bottom-0">Our</span> Blog.
            </h2>
            <p className=" sm:text-md md:text-lg text-gray-500 max-w-7xl px-4 mx-auto m-3 leading-relaxed">
              Dive into our blog for expert insights, tips, and industry trends to elevate your business operations and compliance management journey.

            </p>
          </motion.header>

          {/* Clean Three-Column Grid Setup */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group"
              >
                {/* Visual Image Container with Balanced Border-Radius Padding */}
                <div className="p-3 pb-0">
                  <Link href={`/blog${post.href}`} className="relative block h-56 w-full overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-103"
                    />
                  </Link>
                </div>

                {/* Info Text Area Block */}
                <div className="p-6 flex flex-col flex-grow">
                  <Link href={`/blog${post.href}`} className="block mb-2">
                    <h3 className="text-base font-semibold leading-snug text-slate-900 group-hover:text-textsecondary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-gray-400 leading-relaxed font-normal line-clamp-2 mb-3">
                    {post.description}
                  </p>

                  {/* Clean Modern Inline "Read More" Trigger */}
                  <Link
                    href={`/blog${post.href}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-textsecondary hover:text-teal-700 transition-colors w-fit mb-6"
                  >
                    <span>Read Article</span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>

                  {/* Clean Footer Profile Row */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-7 h-7 rounded-full overflow-hidden bg-slate-200">
                        <div className="w-full h-full bg-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-600">
                          {post.author.charAt(0)}
                        </div>
                      </div>
                      <span className="text-xs font-medium text-slate-700">{post.author}</span>
                    </div>

                    {/* Muted Accent Time Tag */}
                    <span className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Centered Secondary Nav Call-To-Action Button */}
          {/* <div className="mt-16 flex justify-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 bg-white hover:bg-gray-50 text-slate-700 font-medium text-xs rounded-xl shadow-sm transition-all duration-200 group"
            >
              <span>View All Blogs</span>
              <svg
                className="w-3.5 h-3.5 text-gray-500 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div> */}

        </section>

        <FloatingService />
        <Footer />
      </div>
    </>
  );
}