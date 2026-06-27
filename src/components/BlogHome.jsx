import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogHome() {
  const POSTS = [
    {
      id: 1,
      href: "/blog/e-invoice",
      title: "UAE E-INVOICING TRANSFORMATION & MANDATORY STRATEGY",
      excerpt: "Understanding the UAE’s mandatory e-invoicing rollout, compliance requirements, timelines, and its impact on businesses.",
      image: "/images/e-invoice.webp",
    },
    {
      id: 2,
      href: "/blog/offshore",
      title: "UAE OFFSHORE CORPORATE TAX REGISTRATION PRACTICES",
      excerpt: "A comprehensive guide to understanding corporate tax registration for offshore companies in the UAE's evolving tax framework.",
      image: "/images/tax.webp",
    },
    {
      id: 3,
      href: "/blog/e-invoicing",
      title: "THE PAPER TRAIL ENDS HERE : WHY E-INVOICING IS NO LONGER OPTIONAL?",
      excerpt: "Slow payments, manual errors, and compliance risk are symptoms of the same root cause paper-based invoicing. Here's what the shift looks like.",
      image: "/images/office-workers.webp",
    }
  ];

  const mainFeaturedPost = POSTS[0];
  const secondaryPostLarge = POSTS[1];
  const secondaryPostSmall = POSTS[2];

  return (
    <section className="bg-white text-slate-900 py-16 px-6 md:px-12 lg:px-16 selection:bg-[#1f626d]/20 selection:text-[#1f626d]">
      <div className="max-w-7xl mx-auto">

        {/* Minimalist Editorial Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="text-[11px] text-[#1f626d] tracking-[0.25em] font-bold uppercase mb-2">
            Corporate Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-900 ">
            Latest <span className="text-[#1f626d]">Blogs</span>
          </h2>
          <div className="h-[3px] w-12 bg-[#1f626d] mt-4 rounded-full" />
        </div>

        {/* Dynamic Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* LEFT: Highlight Hero Card (Article 1) */}
          {mainFeaturedPost && (
            <div className="lg:col-span-6 group relative flex flex-col justify-end min-h-[500px] md:min-h-[600px] rounded-[2rem] overflow-hidden bg-neutral-900 border border-neutral-200/40 shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 w-full h-full z-0">
                <Image
                  src={mainFeaturedPost.image}
                  alt={mainFeaturedPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out will-change-transform"
                  priority
                />
                {/* Multi-layered cinematic gradient for text protection */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              </div>

              {/* Glassmorphism Lower Content Plate */}
              <div className="relative z-10 m-5 p-6 md:p-8 bg-neutral-950/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <Link href={mainFeaturedPost.href} className="block group/link">
                  <span className="text-[10px] font-bold tracking-widest text-teal-400 uppercase mb-2 block">
                    Featured Analysis
                  </span>
                  <h4 className="text-lg md:text-xl font-bold tracking-wide leading-snug uppercase text-white group-hover/link:text-teal-300 transition-colors duration-200">
                    {mainFeaturedPost.title}
                  </h4>
                  <p className="mt-3 text-xs md:text-sm text-neutral-200 line-clamp-2 font-normal opacity-90">
                    {mainFeaturedPost.excerpt}
                  </p>
                </Link>
              </div>
            </div>
          )}

          {/* RIGHT: Compound Layout Column */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">

            {/* Top Row: Secondary Large Card (Article 2) */}
            {secondaryPostLarge && (
              <div className="group relative flex flex-col justify-end h-[260px] md:h-[286px] rounded-[2rem] overflow-hidden bg-neutral-900 border border-neutral-200/40 shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={secondaryPostLarge.image}
                    alt={secondaryPostLarge.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                </div>

                {/* Inline Premium Glass Plate */}
                <div className="relative z-10 m-4 p-5 md:p-6 bg-neutral-950/40 backdrop-blur-md rounded-xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <Link href={secondaryPostLarge.href} className="group/sub">
                    <h4 className="text-base md:text-lg font-bold tracking-wide uppercase text-white group-hover/sub:text-teal-300 transition-colors duration-200">
                      {secondaryPostLarge.title}
                    </h4>
                    <p className="mt-2 text-xs text-neutral-200 line-clamp-2 font-normal opacity-90">
                      {secondaryPostLarge.excerpt}
                    </p>
                  </Link>
                </div>
              </div>
            )}

            {/* Bottom Row: Two Balanced Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Left Column: Small Article Card (Article 3) */}
              {secondaryPostSmall && (
                <div className="group relative flex flex-col justify-end h-[250px] md:h-[286px] rounded-[2rem] overflow-hidden bg-neutral-900 border border-neutral-200/40 shadow-sm hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={secondaryPostSmall.image}
                      alt={secondaryPostSmall.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out will-change-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
                  </div>

                  {/* Micro Glass Card Base */}
                  <div className="relative z-10 m-4 p-4 bg-neutral-950/50 backdrop-blur-md rounded-xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    <Link href={secondaryPostSmall.href} className="group/mini">
                      <h4 className="text-xs md:text-sm font-bold tracking-wide leading-snug uppercase text-white group-hover:mini:text-teal-300 transition-colors duration-200 line-clamp-3">
                        {secondaryPostSmall.title}
                      </h4>
                      <p className="mt-1.5 text-[11px] text-neutral-300 line-clamp-2 font-normal opacity-85">
                        {secondaryPostSmall.excerpt}
                      </p>
                    </Link>
                  </div>
                </div>
              )}

              {/* Right Column: Premium Action Trigger Dashboard Block */}
              <div className="group relative flex flex-col justify-between h-[250px] md:h-[286px] rounded-[2rem] p-6 bg-gradient-to-br from-neutral-950 via-neutral-900 to-[#1f626d]/30 border border-neutral-800 shadow-xl overflow-hidden">
                {/* Minimalist ambient background light orb */}
                <div className="absolute -right-12 -top-12 w-40 h-40 bg-[#1f626d]/20 rounded-full blur-2xl pointer-events-none group-hover:bg-[#1f626d]/30 transition-all duration-500" />

                <div className="relative z-10">
                  <span className="text-[9px] font-bold tracking-widest text-teal-400 uppercase bg-white/[0.04] border border-white/5 px-2.5 py-1 rounded-md shadow-sm">
                    Knowledge Hub
                  </span>
                  <h4 className="text-base font-bold text-white tracking-wide mt-5 leading-snug uppercase">
                    Explore all corporate insights
                  </h4>
                  <p className="text-xs text-neutral-400 mt-2 line-clamp-3 font-normal leading-relaxed">
                    Stay ahead of corporate compliance timelines, asset strategy maps, and legal updates in the UAE.
                  </p>
                </div>

                <div className="pt-2 relative z-10">
                  <Link
                    href="/blog"
                    className="inline-flex w-full items-center justify-between px-4 py-3 bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-xs tracking-wide rounded-xl shadow-md transition-colors duration-200 focus:outline-none"
                  >
                    <span>View More Articles</span>
                    <svg
                      className="w-4 h-4 text-neutral-950 transform transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div> {/* End of Bottom Grid */}
          </div> {/* End of Right Column Layout */}
        </div> {/* End of Bento System */}

      </div>
    </section>
  );
}