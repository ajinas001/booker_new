import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram, FaXmark } from "react-icons/fa6";

const reelsData = [
  {
    id: 1,
    title: "We will be number one",
    subtitle: "Booker Accounting & Consultancy",
    thumbnail: "/images/reel1.png",
    videoSrc: "/videos/reel1.mp4",
    link: "https://www.instagram.com/reel/DZsLXPXsFRI/",
  },
  {
    id: 2,
    title:
      "Dubai Investment Funds Reality Want to invest in Dubai real estate but don't know how to legally transfer your funds from India?",
    subtitle: "Booker Accounting & Consultancy",
    thumbnail: "/images/reel2.png",
    videoSrc: "/videos/reel2.mp4",
    link: "https://www.instagram.com/reel/DaDWra7MSlC/",
  },
  {
    id: 3,
    title: "Handle your finance with experts.",
    subtitle: "Booker Accounting & Consultancy",
    thumbnail: "/images/reel3.png",
    videoSrc: "/videos/reel3.mp4",
    link: "https://www.instagram.com/reel/DQZDrcSD-9S/",
  },
  {
    id: 4,
    title: "So when are you contacting Booker",
    subtitle: "Booker Accounting & Consultancy",
    thumbnail: "/images/reel4.png",
    videoSrc: "/videos/reel4.mp4",
    link: "https://www.instagram.com/reel/DZ41kyQsGcI/",
  },
];

const PremiumReelsLight = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handlePlayInline = (e, reel) => {
    if (reel.videoSrc) {
      e.preventDefault();
      setActiveVideo(reel);
    }
  };

  return (
    <section className="bg-white text-neutral-900 py-20 px-6 sm:px-8 lg:px-12 selection:bg-[#1f626d]/20 selection:text-[#1f626d]">
      <div className="max-w-7xl mx-auto">
        {/* ================= EDITORIAL INSTAGRAM HEADER ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-neutral-100 pb-10 mb-14 gap-6">
          <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-teritory flex items-center justify-center text-white shadow-lg shadow-rose-500/10">
              <FaInstagram size={26} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 uppercase">
                Explore Our Media
              </h2>
              <p className="text-sm text-neutral-500 mt-1 font-medium">
                Stay updated with regular financial insights on Instagram{" "}
                <Link
                  href="https://www.instagram.com/booker_consulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1f626d] font-bold hover:underline"
                >
                  @booker_consulting
                </Link>
              </p>
            </div>
          </div>

          <Link
            href="https://www.instagram.com/booker_consulting"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 border-2 border-[#1f626d] hover:bg-[#1f626d] text-[#1f626d] hover:text-white text-xs font-bold tracking-widest rounded-xl transition-all duration-200"
          >
            FOLLOW FOR MORE
            <span className="transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        {/* ================= CINEMATIC VIDEO GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {reelsData.map((reel) => (
            <Link
              key={reel.id}
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handlePlayInline(e, reel)}
              className="group relative block aspect-[9/16] w-full bg-neutral-100 rounded-[1.5rem] overflow-hidden border border-neutral-200/80 transition-all duration-300 hover:border-[#1f626d]/40 shadow-sm hover:shadow-xl focus:outline-none"
            >
              {/* Media Layer */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Image
                  src={reel.thumbnail}
                  alt={reel.title}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-103 will-change-transform"
                />
              </div>

              {/* Vignette Lighting Protectors */}
              <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10 pointer-events-none" />

              {/* Instagram Identity Badge */}
              <div className="absolute top-0 inset-x-0 p-5 z-20 flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
                  <FaInstagram size={15} className="text-white" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-[14px] font-bold leading-snug tracking-wide text-white line-clamp-2 drop-shadow-md">
                    {reel.title}
                  </h3>
                  <p className="text-[11px] text-neutral-200 font-medium tracking-wide mt-0.5 opacity-90">
                    {reel.subtitle}
                  </p>
                </div>
              </div>

              {/* Minimal Glass-Ring Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 group-hover:bg-black/10">
                <div className="relative text-white transition-all duration-300 group-hover:scale-105 flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 ml-1 text-white filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
                  >
                    <path d="M424.4 214.7L144.1 46.5c-23.9-14.1-54.6 3.1-54.6 31.1v356.8c0 28 30.7 45.2 54.6 31.1l280.3-168.2c23.5-14.1 23.5-48.4 0-62.6z" />
                  </svg>
                </div>
              </div>

              {/* Micro Indicator Prompt */}
              <div className="absolute bottom-5 inset-x-5 z-20 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/70 group-hover:text-white transition-colors duration-300">
                  Watch Video
                </span>
                <span className="text-white/60 text-xs transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ================= LIGHTBOX POPUP PLAYER ================= */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors focus:outline-none"
            onClick={() => setActiveVideo(null)}
          >
            <FaXmark size={28} />
          </button>

          <div
            className="relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo.videoSrc}
              className="w-full h-full object-cover"
              controls
              autoPlay
              playsInline
              loop
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PremiumReelsLight;
