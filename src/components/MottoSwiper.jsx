"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const partnerItems = [
  {
    title: "DMCC",
    // description:
    //   "Trusted licensing & business setup support through DMCC — ensuring fast registration and premium compliance.",
    image: "/images/dmcc.png",
  },
  {
    title: "Meydan ",
    // description:
    //   "Efficient business establishment with Meydan, offering fast processing and premium Dubai address solutions.",
    image: "/images/mydan.png",
  },
  {
    title: "Hamriyah ",
    // description:
    //   "Strong industrial licensing support ideal for manufacturing and commercial activities.",
    image: "/images/hamriya.png",
  },
  {
    title: "IFZA",
    // description:
    //   "Flexible licensing and cost-effective setup solutions helping businesses scale quickly.",
    image: "/images/ifza.png",
  },
  {
    title: "SHARJAH MEDIA CITY",
    // description:
    //   "Flexible licensing and cost-effective setup solutions helping businesses scale quickly.",
    image: "/images/shamu.png",
  },
  {
    title: "RAKEZ",
    // description:
    //   "Flexible licensing and cost-effective setup solutions helping businesses scale quickly.",
    image: "/images/rakez.png",
  },
  {
    title: "SPC FREE ZONE",
    // description:
    //   "Flexible licensing and cost-effective setup solutions helping businesses scale quickly.",
    image: "/images/spc.png",
  },
];

const MotoSwiper = () => {
  return (
    <section className="w-full bg-gray-200 py-24 px-6 ">
      <div className="max-w-7xl mx-auto text-start">
        <motion.div
          className="mb-16 max-w-4xl"

          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Using a font class that closely matches the image's "Success Stories" style */}
          <h2 className="text-4xl md:text-6xl sm:text-8xl c font-normal text-gray-900 mb-8 tracking-tight leading-none font-bold">
            Our {" "}
            <span className="font-['Playfair_Display',_serif] italic text-secondary">
              Collaborators
            </span>
          </h2>
          {/* Keeping this description for context, adjust as needed */}
          <p className="text-xl text-gray-600">
            We proudly collaborate with industry-leading freezones to empower
            businesses to establish and expand with confidence.
          </p>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          spaceBetween={40}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10 py-20"
        >
          {partnerItems.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center px-6">
                {/* Logo */}
                <div className="w-32 h-32 flex items-center justify-center mb-6">
                  <Image
                    src={partner.image}
                    alt={partner.title}
                    width={200}
                    height={100}
                    className="object-contain rounded-md"
                  />
                </div>

                {/* Title */}
                {/* <h3 className="text-xl font-semibold text-[#0f3b3b] mb-3">
                  {partner.title}
                </h3> */}

                {/* Description */}

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Zoho Partnership Section */}
      <div className="mt-24 flex flex-col items-center justify-center text-center">

        <h2 className="text-4xl md:text-6xl sm:text-8xl c font-normal text-gray-900 mb-8 tracking-tight leading-none font-bold">
          In {" "}
          <span className="font-['Playfair_Display',_serif] italic text-secondary">
            Partnership with
          </span>
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="  rounded-xl p-8 flex items-center justify-center"
        >
          <Image
            src="/images/zoho.png"
            alt="Zoho Partner"
            width={180}
            height={80}
            className="object-contain"
          />
        </motion.div>

        <p className="text-gray-600 mt-6 max-w-xl">
          We proudly partner with Zoho to deliver powerful business tools,
          helping organizations streamline operations, manage customers,
          and scale efficiently.
        </p>

      </div>
    </section>
  );
};

export default MotoSwiper;
