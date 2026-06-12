import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Call() {
  return (
    <>
      <div className="relative max-w-7xl md:mx-auto mx-2  px-6  overflow-hidden rounded-3xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/business.webp"
            alt="Financial assessment background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-8  md:p-16 max-w-xl">
          <h2 className="text-white text-2xl md:text-5xl font-bold mb-4 leading-tight">
            Let's Start With a{" "}
            <span className="text-textprimary font-light">
              FREE Health Check
            </span>
          </h2>

          <p className="text-white/80 mb-6 text-md md:text-lg leading-relaxed">
            Get a comprehensive financial assessment and customized plan
            tailored to your business. No obligation. No credit card needed.
          </p>

          <div className="inline-block overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link
                href="tel:+971567678156"
                className="
        inline-block
        backdrop-blur-xl 
        bg-white/15 
        text-white
        px-5 md:px-10 
        py-3.5 md:py-4 
        rounded-2xl 
        font-semibold 
        text-base md:text-lg 
        whitespace-nowrap
        transition-all 
        duration-300
        hover:bg-white/25 
        hover:translate-y-[-2px]
      "
              >
                Book Your FREE Assessment Call
              </Link>
            </motion.div>
          </div>

          <p className="text-white/70 text-sm mt-4">
            30-min call • Personalized recommendations • Transparent pricing
            quote within 48 hours
          </p>
        </div>
      </div>
    </>
  );
}

export default Call;
