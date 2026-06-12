"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function ContactSection() {
  const sectionRef = useRef(null);

  // Scroll animation only applied for md+ screens
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Gap only for md+ screens (makes text move & stick)
  const gap = useTransform(scrollYProgress, [0, 0.7], ["140vh", "0vh"]);

  return (
    <>
      {/* for mobile screen */}

      <section className="block md:hidden px-6 py-16 bg-white overflow-hidden">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.8 }}
          className="mt-10"
        >
           <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-semibold text-secondary leading-tight"
              >
                Let’s explore the possibilities together.
              </motion.h2>
          <p className="text-lg text-neutral-600 max-w-md mb-6">
            Want to discuss how we can create value for your business?
          </p>

          <Link
            href="/contact"
            className=" w-fit  rounded-tl-full rounded-tr-full rounded-br-full border-2 inline-block px-10 py-4 hover:text-white  bordeer-secondary bg- text-secondary rounded-md hover:bg-neutral-700 transition"
          >
            Let's talk
          </Link>
        </motion.div>
      </section>

      {/* md sreens */}

      <section ref={sectionRef} className="w-full  py-20 hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="relative flex flex-col px-8 md:px-20">
            {/* Sticky only on md+ screens */}
            <motion.div
              className="md:sticky md:top-24 flex flex-col justify-start"
              style={{ gap: gap }} // applies only when sticky is active
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-semibold text-secondary leading-tight"
              >
                Let’s explore the possibilities together.
              </motion.h2>

              {/* CONTACT CTA */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.8 }}
                className="mt-10"
              >
                <p className="text-lg text-neutral-600 max-w-md mb-6">
                  Want to discuss how we can create value for your business?
                </p>

                <Link
                  href="/contact"
                  className=" w-fit  rounded-tl-full rounded-tr-full rounded-br-full border-2 inline-block px-10 py-4 hover:text-white  bordeer-secondary bg- text-secondary rounded-md hover:bg-neutral-700 transition"
                >
                  Let's talk
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full md:h-[140vh] p-6 " // padding for image
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/images/contact.webp"
                alt="Contact banner"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
