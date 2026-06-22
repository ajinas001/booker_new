import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Call() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl md:rounded-3xl">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/business.webp"
            alt="Financial assessment background"
            fill
            priority={false}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[320px] items-center px-6 py-10 sm:px-8 sm:py-12 md:min-h-[420px] md:px-12 md:py-16 lg:px-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Let's Start With a{" "}
              <span className="font-light text-textprimary">
                FREE Health Check
              </span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
              Get a comprehensive financial assessment and customized plan
              tailored to your business. No obligation. No credit card needed.
            </p>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link
                href="tel:+971567678156"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-white/15 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/25 sm:px-8 sm:text-base md:px-10 md:py-4 md:text-lg"
              >
                Book Your FREE Assessment Call
              </Link>
            </motion.div>

            <p className="mt-4 text-xs leading-relaxed text-white/70 sm:text-sm">
              30-min call • Personalized recommendations • Transparent pricing
              quote within 48 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Call;