"use client";

import React from "react";
import { Download, Instagram } from "lucide-react";

export default function LeadMagnet() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto bg-purpletint rounded-[2rem] p-8 md:p-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-medium text-textsecondary mb-4">
              FREE RESOURCES & GUIDES
            </span>

            <h2 className="text-3xl md:text-5xl font-semibold text-black leading-tight mb-5">
              Download Free UAE Tax & Compliance Resources
            </h2>

            <p className="text-black/70 text-lg max-w-xl">
              Free downloadable PDF resources designed to educate UAE business
              owners about accounting, taxation, compliance, and business setup.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-start lg:items-end gap-6">
            
            {/* Stats */}
            <div className="flex items-center gap-8">
              <div>
                <h3 className="text-3xl font-bold text-black">1+</h3>
                <p className="text-sm text-black/70">
                  Free PDF Guides
                </p>
              </div>

              <div className="w-px h-12 bg-black/20" />

              <div>
                <h3 className="text-3xl font-bold text-black">100%</h3>
                <p className="text-sm text-black/70">
                  UAE Focused
                </p>
              </div>
            </div>

            {/* Download Card */}
            <div className="bg-textsecondary text-white rounded-2xl p-5 px-4 md:px-8 ">
              <h4 className="font-semibold mb-2">
                UAE Corporate Tax Guide
              </h4>

              <ul className="text-sm text-white/80 space-y-1 mb-5">
                <li>• Overview of 9% Corporate Tax</li>
                <li>• Who Needs to Register</li>
                <li>• Key Compliance Requirements</li>
              </ul>

              <div className="space-y-3">
                <a
                  href="https://instagram.com/bookeraccounting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-white/20 rounded-xl py-3 px-8 text-sm hover:bg-white/10 transition"
                >
                  <Instagram size={16} />
                  Step 1: Follow on Instagram
                </a>

                <a
                  href="/pdfs/uae-corporate-tax-guide.pdf"
                  className="flex items-center justify-center gap-2 w-full bg-white text-black rounded-xl py-3 font-medium hover:scale-[1.02] transition"
                >
                  Step 2: Download Guide
                  <Download size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}