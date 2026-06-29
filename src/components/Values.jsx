"use client";

import { motion } from "framer-motion";
import MottoSwiper from "./MottoSwiper";

const MainVisionSection = () => {
  // Sophisticated icon components
  const BuildIcon = () => (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="buildGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#008f95" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
      </defs>
      <motion.rect
        x="10"
        y="32.5"
        width="30"
        height="4"
        fill="url(#buildGrad)"
        opacity="0.3"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ transformOrigin: "25px 34.5px" }}
      />
      <motion.rect
        x="12.5"
        y="26"
        width="25"
        height="4"
        fill="url(#buildGrad)"
        opacity="0.5"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ transformOrigin: "25px 28px" }}
      />
      <motion.rect
        x="15"
        y="19.5"
        width="20"
        height="4"
        fill="url(#buildGrad)"
        opacity="0.7"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{ transformOrigin: "25px 21.5px" }}
      />
      <motion.rect
        x="17.5"
        y="13"
        width="15"
        height="4"
        fill="url(#buildGrad)"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{ transformOrigin: "25px 15px" }}
      />
    </svg>
  );

  const BalanceIcon = () => (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="balGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#008f95" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
      </defs>
      <motion.line
        x1="25"
        y1="12.5"
        x2="25"
        y2="35"
        stroke="url(#balGrad)"
        strokeWidth="1.25"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.line
        x1="10"
        y1="17.5"
        x2="40"
        y2="17.5"
        stroke="url(#balGrad)"
        strokeWidth="1.25"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      <motion.path
        d="M 10 17.5 L 7.5 22.5 L 12.5 22.5 Z"
        fill="url(#balGrad)"
        opacity="0.6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ transformOrigin: "10px 20px" }}
      />
      <motion.path
        d="M 40 17.5 L 37.5 22.5 L 42.5 22.5 Z"
        fill="url(#balGrad)"
        opacity="0.6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ transformOrigin: "40px 20px" }}
      />
      <motion.rect
        x="20"
        y="35"
        width="10"
        height="2"
        rx="1"
        fill="url(#balGrad)"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        style={{ transformOrigin: "25px 36px" }}
      />
    </svg>
  );

  const BrillianceIcon = () => (
    <svg viewBox="0 0 50 50" className="w-full h-full">
      <defs>
        <linearGradient id="brillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#008f95" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
      </defs>
      <motion.path
        d="M 25 10 L 35 20 L 25 37.5 L 15 20 Z"
        fill="none"
        stroke="url(#brillGrad)"
        strokeWidth="1.25"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.line
        x1="15"
        y1="20"
        x2="25"
        y2="20"
        stroke="url(#brillGrad)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      <motion.line
        x1="35"
        y1="20"
        x2="25"
        y2="20"
        stroke="url(#brillGrad)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      <motion.line
        x1="25"
        y1="20"
        x2="25"
        y2="37.5"
        stroke="url(#brillGrad)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      <motion.circle
        cx="25"
        cy="10"
        r="1.5"
        fill="url(#brillGrad)"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.6, delay: 1.2 }}
      />
    </svg>
  );

  const CentralVision = () => (
    <svg viewBox="0 0 400 250" className="w-full h-auto">
      <defs>
        <linearGradient id="mainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#008f95" />
          <stop offset="50%" stopColor="#0e7490" />
          <stop offset="100%" stopColor="#008f95" />
        </linearGradient>
        <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#008f95" />
          <stop offset="100%" stopColor="#155e75" />
        </linearGradient>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feComposite in="blur" in2="SourceGraphic" operator="over"/>
        </filter>
      </defs>

      <circle 
        cx="200" cy="125" r="100" 
        fill="none" stroke="#e0f2fe" strokeWidth="0.5" strokeDasharray="4 4" 
      />

      <motion.g
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 125px" }}
      >
        <motion.g 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{ transformOrigin: "100px 125px" }}
        >
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 125px" }}
          >
            <circle cx="100" cy="125" r="32.5" fill="white" stroke="#e0f2fe" strokeWidth="1" />
            <circle cx="100" cy="125" r="29" fill="none" stroke="url(#mainGrad)" strokeWidth="1" />
            <text x="100" y="122.5" textAnchor="middle" fill="#0e7490" fontSize="7.5" fontWeight="600">BALANCE</text>
            <text x="100" y="132.5" textAnchor="middle" fill="#008f95" fontSize="5.5" fontWeight="500">Compliance</text>
          </motion.g>
        </motion.g>

        <motion.g 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{ transformOrigin: "300px 125px" }}
        >
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "300px 125px" }}
          >
            <circle cx="300" cy="125" r="32.5" fill="white" stroke="#e0f2fe" strokeWidth="1" />
            <circle cx="300" cy="125" r="29" fill="none" stroke="url(#mainGrad)" strokeWidth="1" />
            <text x="300" y="122.5" textAnchor="middle" fill="#0e7490" fontSize="7.5" fontWeight="600">BRILLIANCE</text>
            <text x="300" y="132.5" textAnchor="middle" fill="#008f95" fontSize="5.5" fontWeight="500">Excellence</text>
          </motion.g>
        </motion.g>
      </motion.g>

      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <circle cx="200" cy="125" r="42.5" fill="url(#coreGrad)" filter="url(#softGlow)" />
        <motion.circle
          cx="200" cy="125" r="42.5"
          fill="none" stroke="white" strokeWidth="1"
          animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />
        <text x="200" y="127.5" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="1.5">BUILD</text>
        <text x="200" y="137.5" textAnchor="middle" fill="white" fontSize="6" fontWeight="500" opacity="0.9">Core Foundation</text>
      </motion.g>

      {[
        { cx: 150, cy: 75, d: 0 }, 
        { cx: 250, cy: 75, d: 1 }, 
        { cx: 150, cy: 175, d: 2 }, 
        { cx: 250, cy: 175, d: 0.5 }
      ].map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx} cy={dot.cy} r="1.5"
          fill="#008f95"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.2, 0.6, 0.2] 
          }}
          transition={{ duration: 4, repeat: Infinity, delay: dot.d }}
        />
      ))}
    </svg>
  );

  return (
    <>
      {/* <MottoSwiper/> */}
      <section 
        className="relative w-full min-h-[100vh] flex flex-col items-center justify-center py-16 px-4 bg-white overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(#d1cbc0 1px, transparent 1px)',
          backgroundSize: '100% 12px',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col items-center">
          
          {/* Redesigned Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto flex flex-col items-center select-none text-center mb-16"
          >
            {/* Line 1: Script/Handwritten Subtitle */}
           {/* Line 1: Script/Handwritten Subtitle */}
        <p className="font-serif italic text-[#5a6b73] text-sm sm:text-base md:text-lg lg:text-xl tracking-wide mb-1 lowercase">
          we have...
        </p>

        {/* Line 2: Main Highlighted Heading */}
        <h2 className="font-sans font-normal text-[#008f95] text-4xl sm:text-6xl md:text-7xl lg:text-7xl tracking-wide leading-none uppercase">
          Everything
        </h2>

        {/* Line 3: Script/Handwritten Subtitle */}
        <p className="font-serif italic text-[#5a6b73] text-xs sm:text-sm md:text-base lg:text-lg tracking-wide my-2 lowercase">
          you need to
        </p>

        {/* Line 4: Core Value Heading */}
        <h1 className="font-sans font-normal text-[#008f95] text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide leading-none uppercase break-words w-full">
          Simplify Accounting
        </h1>

        {/* Line 5: Script/Handwritten Subtitle */}
        <p className="font-serif italic text-[#5a6b73] text-xs sm:text-sm md:text-base lg:text-lg tracking-wide my-2 lowercase">
          and get on with
        </p>

        {/* Line 6: Final Impact Heading */}
        <h2 className="font-sans font-normal text-[#008f95] text-4xl sm:text-6xl md:text-7xl lg:text-9xl tracking-widest leading-none uppercase">
          Business
        </h2>
          </motion.div>

          {/* Central Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-20 max-w-3xl mx-auto w-full"
          >
            <CentralVision />
          </motion.div>

         

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center pt-16 border-t border-gray-200/60 w-full"
          >
            <blockquote className="text-xl  font-serif italic font-light text-gray-700 mx-auto leading-relaxed mb-8 px-4">
              <motion.span
                className="text-[#008f95] text-3xl font-serif"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                "
              </motion.span >
                Where financial clarity, regulatory confidence, and business growth are accessible to all <br/>
                powered by integrity, insight, and intelligent technology.
              <motion.span
                className="text-[#008f95] text-3xl font-serif"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                "
              </motion.span>
            </blockquote>

            <motion.div
              className="inline-flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-10 h-px bg-[#008f95]" />
              <span className="text-[#008f95] font-semibold text-sm uppercase tracking-widest">
                BAC Vision
              </span>
              <div className="w-10 h-px bg-[#008f95]" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MainVisionSection;