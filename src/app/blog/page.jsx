"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, FileText, BarChart2 } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import ScrollToTop from "@/components/ScrollToTop";

export default function BlogPage() {
  const POSTS = [
    {
      href: "/e-invoice",
      id: 1,
      title: "UAE E-Invoicing Transformation",
      description:
        "Understanding the UAE’s mandatory e-invoicing rollout, compliance requirements, timelines, and its impact on businesses",
      author: "Content Writer",
      role: "Booker Accounting and Consulting",
      date: "5 November, 2025",
      imageUrl: "/images/e-invoice.webp",
      
      color: "bg-indigo-600",
      icon: FileText,
    },
    {
      id: 2,
      href: "/offshore",
      title:
        "UAE Offshore Corporate TaxRegistration",
        description:"A comprehensive guide to understanding corporate tax registration for offshore companies in the UAE's evolving tax framework",
      author: "Head of Content ",
      role: "Booker Accounting and Consulting",
      date: "4 November, 2025",
      imageUrl: "/images/tax.webp",
      category: "Ad Creative",
      category2: "Performance",
      color: "bg-teal-500",
      icon: Users,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* ✅ HERO SECTION */}
        <section className="relative overflow-hidden text-white bg-black">
          {/* Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src="/images/img3.webp"
              alt="Blog"
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

          {/* Text Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="text-sm md:text-lg flex flex-wrap text-gray-300 gap-x-2">
                <Link
                  href="/"
                  className="text-white hover:text-textprimary transition-colors"
                >
                  Home
                </Link>
                <span>›</span>

                <span className="text-teal-400 font-medium">Blog</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              Latest{" "}
              <span className="text-transparent bg-clip-text bg-textprimary">
                Blogs
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl"
            >
              Dive into our latest research, actionable guides, and expert
              opinions on performance marketing and ad creative strategies.
            </motion.p>
          </div>
        </section>

        {/* ✅ BLOG SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All the posts you need to succeed.
            </p>
          </div>

          {/* Blog Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
  {POSTS.map((post) => {
    const Icon = post.icon;
    return (
      <motion.div
        key={post.id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl overflow-hidden transition-all border border-gray-200"
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col h-full">
          <h3 className="text-xl font-bold leading-snug mb-3 text-textsecondary">
            {post.title}
          </h3>

          {/* Description (NEW — no design change) */}
          <p className="text-lg text-black leading-relaxed">
            {post.description}
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-3 mt-4">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${post.color}`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">{post.author}</p>
              <p className="text-xs text-gray-500">{post.role}</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-4 pt-4 border-t border-gray-200">
            {post.date}
          </p>

          {/* Read More */}
          <Link
            href={`/blog/${post.href}`}
            className="mt-6 inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors group"
          >
            Read More
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </motion.div>
    );
  })}
</div>

        </section>

        {/* ✅ FOOTER SECTION */}
        <ScrollToTop />
        <FloatingMenuButton />
        <Footer />
      </div>
    </>
  );
}
