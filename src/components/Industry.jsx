"use client";

import { motion } from "framer-motion";

const industries = [
  {
    id: "01",
    title: "SMEs & Startups",
    description:
      "We support emerging businesses with tailored accounting, compliance, and advisory services that help establish strong financial foundations and sustainable growth.",
  },
  {
    id: "02",
    title: "Real Estate & Construction",
    description:
      "From project audits to tax structuring, we assist developers and contractors in maintaining transparency, compliance, and profitability across every project.",
  },
  {
    id: "03",
    title: "Retail & Trading",
    description:
      "We offer bookkeeping, VAT compliance, and financial planning services for trading and retail firms to improve cash flow and business performance.",
  },
  {
    id: "04",
    title: "Manufacturing",
    description:
      "Our team provides cost control, budgeting, and compliance support to help manufacturers enhance efficiency and profitability.",
  },
  {
    id: "05",
    title: "Professional Services",
    description:
      "We help consultants, agencies, and service-based businesses streamline financial operations and maintain compliance with UAE regulations.",
  },
  {
    id: "06",
    title: "Free Zone Entities",
    description:
      "We provide accounting, audit, and tax support to UAE free zone companies, ensuring compliance while maximizing the benefits of your business setup.",
  },
];

// Fixed Text reveal animation component
const TextReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ 
        y: "100%",
        opacity: 0 
      }}
      whileInView={{ 
        y: 0,
        opacity: 1 
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

// Single line text reveal with mask
const SingleTextReveal = ({ text, delay = 0, className = "" }) => {
  return (
    <div className="overflow-hidden">
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay
        }}
        viewport={{ once: true, margin: "-50px" }}
        className={`block ${className}`}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default function IndustriesSection() {
  // Container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // Label animation
  const labelVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    }
  };

  // Item animation
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8
      }
    }
  };

  // Number animation
  const numberVariants = {
    hidden: { 
      scale: 0,
      opacity: 0
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <section className="bg-primary text-foreground">
      <div className="mx-4 sm:mx-8 lg:mx-20 xl:mx-32 px-6 md:px-12 lg:px-16 py-24 md:py-32">
        {/* Label with animation */}
        <motion.div
          variants={labelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(28, 94, 106, 0.1)",
            transition: { duration: 0.2 }
          }}
          className="inline-block border border-secondary text-secondary text-sm  font-medium w-fit px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full uppercase tracking-widest mb-16 cursor-pointer"
        >
          Industries We Serve
        </motion.div>

        {/* Heading with fixed text reveal animation */}
        <div className="mb-20 md:mb-24">
          <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-10">
            <SingleTextReveal 
              text="Tailored expertise for" 
              delay={0.1}
              className="block mb-3"
            />
            <SingleTextReveal 
              text="every business sector." 
              delay={0.3}
              className="block text-secondary"
            />
          </div>
          
          {/* Animated border */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent mt-10"
          />
        </div>

        {/* Industry Rows Container */}
        <motion.div 
          className="divide-y divide-gray-300/20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              variants={itemVariants}
              whileHover={{
                backgroundColor: "rgba(13, 26, 32, 0.03)",
                transition: { duration: 0.3 }
              }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-14 gap-6 md:gap-10 lg:gap-12 rounded-sm px-6 md:px-8 -mx-6 md:-mx-8 cursor-pointer group"
            >
              {/* Left side: Number + Title */}
              <div className="flex items-start md:items-center gap-6 md:gap-10 md:w-2/5 lg:w-1/3">
                <motion.h3 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary flex-shrink-0"
                  variants={numberVariants}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {industry.id}
                </motion.h3>
                <div className="min-h-[60px] flex items-center">
                  <div className="overflow-hidden">
                    <motion.h4 
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{
                        duration: 0.7,
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: 0.2 + index * 0.1
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="text-xl md:text-2xl lg:text-3xl font-light text-primary-black group-hover:text-secondary transition-colors duration-300"
                    >
                      {industry.title}
                    </motion.h4>
                  </div>
                </div>
              </div>

              {/* Right side: Description */}
              <div className="md:w-3/5 lg:w-2/3 md:pl-4">
                <div className="overflow-hidden">
                  <motion.p 
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: 0.4 + index * 0.1
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-primary-black/80 text-base md:text-lg lg:text-xl leading-relaxed group-hover:text-primary-black transition-colors duration-300"
                  >
                    {industry.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section with animations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mt-20 md:mt-24 pt-16 md:pt-20 border-t border-gray-300/20"
        >
          <motion.div
            whileHover={{ 
              scale: 1.02,
              backgroundColor: "rgba(13, 26, 32, 0.05)"
            }}
            className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 px-6 py-6 rounded-sm"
          >
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-lg md:text-xl text-primary-black font-light block"
              >
                Ready to transform your financial strategy?
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-secondary text-lg md:text-xl font-medium block"
              >
                Get started →
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}