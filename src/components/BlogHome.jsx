import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Mock data reflecting your exact layout titles from "Screenshot 2026-06-26 112327.jpg"
const mainFeaturedPost = {
  title: "BLOOMING VELOCITY A LEADER IN HEALTHCARE MARKETING SHINES AT THE AEEDC 2025 EVENT IN DUBAI",
  excerpt: "AEEDC 2025 At Blooming...",
  image: "/images/service.webp", 
  href: "/blog/aeedc-2025"
};

const secondaryPosts = [
  {
    title: "DIGITAL MARKETING TRENDS IN DUBAI, UAE",
    excerpt: "In the ever-evolving...",
    image: "/images/handshake.webp",
    href: "/blog/digital-marketing-trends",
    size: "large"
  },
  {
    title: "THE MOST STRIKING BRANDING TRENDS IN 2023",
    excerpt: "The trends Are you curious...",
    image: "/images/img.webp",
    href: "/blog/branding-trends",
    size: "small"
  },
  {
    title: "WHY BLOOMING VELOCITY IS ONE OF THE BEST MARKETING AGENCIES IN THE UAE",
    excerpt: "One of the Best Marketing...",
    image: "/images/office-workers.webp",
    href: "/blog/best-marketing-agency",
    size: "small"
  }
];

export default function BlogHome() {
  return (
    <section className="bg-white text-slate-900 py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Modern Section Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-slate-500 mb-3">
            Our Insights
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-slate-900">
            Blogs
          </h3>
          <div className="h-[3px] w-12 bg-white mt-4 rounded-full" />
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Massive Highlight Hero Card */}
          <div className="lg:col-span-6 group relative flex flex-col justify-end min-h-[500px] md:min-h-[600px] rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src={mainFeaturedPost.image} 
                alt={mainFeaturedPost.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              {/* Neutral dark gradient layer for safe contrast overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            </div>
            
            {/* Overlay Content */}
            <div className="relative z-10 p-8 md:p-10 text-white">
              <Link href={mainFeaturedPost.href} className="block">
                <h4 className="text-xl md:text-2xl font-bold tracking-wide leading-snug uppercase text-white group-hover:text-white transition-colors duration-200">
                  {mainFeaturedPost.title}
                </h4>
                <p className="mt-3 text-sm text-slate-300 font-medium">
                  {mainFeaturedPost.excerpt}
                </p>
              </Link>
            </div>
          </div>

          {/* RIGHT: Compound Layout Grid Column */}
          <div className="lg:col-span-6 flex flex-col gap-8 justify-between">
            
            {/* Top Row: Wide Secondary Card */}
            {secondaryPosts.filter(p => p.size === 'large').map((post, idx) => (
              <div key={idx} className="group relative flex flex-col justify-end h-[240px] md:h-[280px] rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>
                <div className="relative z-10 p-6 md:p-8 text-white">
                  <Link href={post.href}>
                    <h4 className="text-lg md:text-xl font-bold tracking-wide uppercase text-white group-hover:text-white transition-colors">
                      {post.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-300">
                      {post.excerpt}
                    </p>
                  </Link>
                </div>
              </div>
            ))}

            {/* Bottom Row: Side-by-Side Dual Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {secondaryPosts.filter(p => p.size === 'small').map((post, idx) => (
                <div key={idx} className="group relative flex flex-col justify-end h-[240px] md:h-[280px] rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  </div>
                  <div className="relative z-10 p-6 text-white">
                    <Link href={post.href}>
                      <h4 className="text-sm md:text-base font-bold tracking-wide leading-snug uppercase text-white group-hover:text-white transition-colors line-clamp-3">
                        {post.title}
                      </h4>
                      <p className="mt-2 text-xs text-slate-300 line-clamp-1">
                        {post.excerpt}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}