// components/VideoResources.jsx
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["All", "Corporate Tax", "VAT", "Accounting", "AML Compliance", "Business Setup"];

const videos = [
  { id: 1, title: "UAE Corporate Tax 2026", category: "Corporate Tax", desc: "Latest updates on compliance.", featured: true },
  { id: 2, title: "VAT Filing Basics", category: "VAT", desc: "A guide for small businesses.", featured: false },
  // ... add more videos
];

export default function VideoResources() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos = selectedCategory === "All" 
    ? videos.filter(v => !v.featured)
    : videos.filter(v => v.category === selectedCategory && !v.featured);

  const featured = videos.find(v => v.featured);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold text-[#4B0082] mb-4">Learn, Grow & Stay Compliant</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Explore our latest videos covering accounting, taxation, VAT, and practical financial tips 
          designed to help businesses in the UAE stay compliant and grow with confidence.
        </p>

        {/* Featured Section */}
        {featured && (
          <div className="mb-12 p-6 bg-white rounded-2xl shadow-lg border border-[#4B0082]/10">
            <h3 className="text-lg font-semibold text-[#4B0082] mb-2">Featured Insight</h3>
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              {/* Add Video/Thumbnail Component Here */}
              <button className="bg-white/20 p-4 rounded-full backdrop-blur-sm hover:scale-110 transition">▶</button>
            </div>
            <h4 className="mt-4 text-xl font-bold">{featured.title}</h4>
          </div>
        )}

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition ${selectedCategory === cat ? 'bg-[#4B0082] text-white' : 'bg-white border border-gray-300'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredVideos.map(video => (
              <motion.div layout key={video.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition">
                <div className="h-40 bg-gray-200 flex items-center justify-center">Play</div>
                <div className="p-4">
                  <span className="text-[10px] uppercase tracking-wider text-[#4B0082] font-bold">{video.category}</span>
                  <h3 className="font-bold text-gray-900 mt-1">{video.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">{video.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="mt-16 text-center bg-[#4B0082] p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-2">Need Professional Guidance?</h3>
          <p className="mb-6 opacity-90">Our specialists are ready to help your business stay compliant and achieve sustainable growth.</p>
          <a href="https://wa.me/YOUR_NUMBER?text=Hello%20Booker%20Accounting,%20I%20would%20like%20assistance%20in%20making%20my%20business%20compliant%20and%20supporting%20its%20growth."
            className="inline-block bg-white text-[#4B0082] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}