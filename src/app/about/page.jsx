"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import Image from "next/image";

// --- Custom Tailwind-like Colors based on CSS Theme ---
const PRIMARY_BLACK = "#0d1a20";
const SECONDARY_TEAL = "#1c5e6a";
const PRIMARY_LIGHT = "#f9f9f9";
const NEUTRAL_FOREGROUND = "#171717";

// --- START: Custom SVG Icons (Replacing Emojis) ---

const HandshakeIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 17l-5-5a3.5 3.5 0 0 1 7-5l3 3a3.5 3.5 0 0 1 7-5l-5 5" />
    <path d="M14 14l-5 5a3.5 3.5 0 0 1-7-5l3-3a3.5 3.5 0 0 1 7-5l5 5" />
  </svg>
);
const TargetIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const GemIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 3L2 9l10 12 10-12-4-6H6z" />
    <path d="M12 21l-2-9h4l-2 9z" />
    <path d="M2 9h20" />
  </svg>
);
const MapIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" />
    <line x1="9" x2="9" y1="3" y2="18" />
    <line x1="15" x2="15" y1="6" y2="21" />
  </svg>
);
const CheckCircleIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" />
  </svg>
);
const UsersIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <path d="M19 21v-2a4 4 0 0 0-4-4h-1" />
    <path d="M19 3a4 4 0 1 0 0 8" />
  </svg>
);
const CalendarIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);
const PhoneIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-5.74-5.75A19.79 19.79 0 0 1 1.05 4.11a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.73l.7 4.99a2 2 0 0 1-.58 1.77l-2.88 2.88a1 1 0 0 0 0 1.41l5.44 5.44a1 1 0 0 0 1.41 0l2.88-2.88a2 2 0 0 1 1.77-.58l4.99.7a2 2 0 0 1 1.73 2z" />
  </svg>
);
const SearchIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" x2="16.65" y1="21" y2="16.65" />
  </svg>
);
const LockIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const LightbulbIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 14c.2-1 .5-2 1-3 1.2-2.3 3.3-3.5 5-3.5 2.8 0 5 2.2 5 5 0 1-.2 2-1 3.5" />
    <path d="M9 14c-.2-1-.5-2-1-3-1.2-2.3-3.3-3.5-5-3.5-2.8 0-5 2.2-5 5 0 1 .2 2 1 3.5" />
    <path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z" />
    <path d="M12 2c2 0 3 1.5 3 4v.5a3.5 3.5 0 0 1-7 0V6c0-2 1-4 3-4z" />
  </svg>
);
const DollarSignIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" x2="12" y1="2" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const GavelIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 9l-4 4-2-2m0 0l-5 5a2 2 0 0 1-2.83 0L3 18.17a2 2 0 0 1 0-2.83l5-5z" />
    <path d="M17 14l2 2 2-2 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4z" />
  </svg>
);
const BuildingIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <path d="M3 8h18" />
    <path d="M10 12v6" />
    <path d="M14 12v6" />
    <path d="M10 4v4" />
    <path d="M14 4v4" />
  </svg>
);

// --- END: Custom SVG Icons ---

// --- Icon Map for React Components ---
const ICON_MAP = {
  // Timeline Dots
  foundation: HandshakeIcon,
  vision: TargetIcon,
  values: GemIcon,
  uae: MapIcon,

  // Stats Grid
  accuracy: CheckCircleIcon,
  clients: UsersIcon,
  experience: CalendarIcon,
  support: PhoneIcon,

  // Core Values & Features
  precision: SearchIcon,
  integrity: LockIcon,
  foresight: LightbulbIcon,
  tax: DollarSignIcon,
  regulatory: GavelIcon,
  freezone: BuildingIcon,
};

// Image Content Block with Overlay Text (No change needed)
const ImageContentBlock = ({
  imageUrl,
  title,
  description,
  overlayPosition = "bottom",
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay }}
    viewport={{ once: true, amount: 0.3 }}
    className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
  >
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

    <div
      className={`absolute ${
        overlayPosition === "bottom" ? "bottom-0" : "top-0"
      } left-0 right-0 p-6 text-white`}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-200 leading-relaxed">{description}</p>
    </div>

    {/* Hover effect overlay */}
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
  </motion.div>
);

// Split Content Layout (Shadows removed previously)
const SplitContentLayout = ({
  imageUrl,
  title,
  content,
  reverse = false,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, x: reverse ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true, amount: 0.3 }}
    className={`flex flex-col ${
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    } gap-8 items-center`}
  >
    <div className="flex-1">
      <div
        className="h-64 md:h-80 rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
    </div>
    <div className="flex-1 space-y-4">
      <h3 className="text-3xl font-black" style={{ color: PRIMARY_BLACK }}>
        {title}
      </h3>
      <div className="space-y-3 text-gray-700">{content}</div>
    </div>
  </motion.div>
);

// Interactive Stats Grid (Icons updated to use components)
const StatsGrid = ({ stats, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true, amount: 0.3 }}
    className="grid grid-cols-2 md:grid-cols-4 gap-6"
  >
    {stats.map((stat, index) => {
      const IconComponent = ICON_MAP[stat.icon];
      return (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white rounded-xl p-6 text-center border border-gray-200"
        >
          {/* Render the SVG component */}
          <div className="text-3xl mb-2 flex justify-center">
            {IconComponent && (
              <IconComponent
                className="w-8 h-8"
                style={{ color: SECONDARY_TEAL }}
              />
            )}
          </div>

          <div
            className="text-2xl font-black mb-1"
            style={{ color: SECONDARY_TEAL }}
          >
            {stat.value}
          </div>
          <div className="text-sm font-medium text-gray-600">{stat.label}</div>
        </motion.div>
      );
    })}
  </motion.div>
);

// Floating Image Gallery (Responsive, Shadows removed)
const FloatingImageGallery = ({ images, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true, amount: 0.3 }}
    className="relative h-96 md:h-[450px]"
  >
    {images.slice(0, 3).map((image, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -5 : 5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: delay + index * 0.2 }}
        whileHover={{ scale: 1.05, z: 20 }}
        className="absolute rounded-xl overflow-hidden border-4 border-white transition-all duration-300 w-32 h-40 md:w-48 md:h-64 lg:w-60 lg:h-80"
        style={{
          ...(index === 0 && { top: "10%", left: "5%", zIndex: 10 }),
          ...(index === 1 && {
            top: "35%",
            left: "35%",
            zIndex: 20,
            transform: "rotate(5deg)",
          }),
          ...(index === 2 && {
            bottom: "5%",
            right: "5%",
            zIndex: 30,
            transform: "rotate(-5deg)",
          }),
        }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${image.url}')` }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
          <p className="text-xs font-semibold md:text-sm">{image.caption}</p>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

// Timeline Dot with Animation (Icons updated to use components)
const TimelineDot = ({ iconKey, color = SECONDARY_TEAL, index = 0 }) => {
  const IconComponent = ICON_MAP[iconKey];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      style={{ backgroundColor: color }}
      className="h-14 w-14 absolute left-3 md:left-2 flex items-center justify-center rounded-full border-4 border-white z-30"
      viewport={{ once: true }}
    >
      {/* Render the SVG component */}
      {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
    </motion.div>
  );
};

// --- Main Component ---
const AboutPageTimeline = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  // timelineHeight is still needed to set the scroll target area via containerRef offset,
  // but no longer used in useTransform calculation.
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (timelineRef.current) {
      setTimelineHeight(timelineRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  // FIX: Using scrollYProgress (0 to 1) directly for scaleY transformation for better performance
  const scaleYTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Updated timelineData is now referencing the SVG component keys
  const timelineData = [
    {
      title: "Our Foundation",
      iconKey: "foundation",
      content: (
        <div className="space-y-8">
          <SplitContentLayout
            imageUrl="/images/business7.webp"
            title="Strategic Partnership"
            content={
              <>
                <p className="text-lg leading-relaxed">
                  We go beyond traditional accounting. We serve as your
                  dedicated financial command center, combining seasoned human
                  judgment with the precision of AI driven insights to deliver
                  superior results.
                </p>
              </>
            }
            delay={0.1}
          />
        </div>
      ),
    },
    {
      title: "Vision & Purpose",
      iconKey: "vision",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageContentBlock
              imageUrl="/images/business4.webp"
              title="Our Mission"
              description="Deliver flawless accuracy and proactive financial intelligence to keep your business not just compliant, but highly competitive."
              overlayPosition="bottom"
              delay={0.1}
            />
            <ImageContentBlock
              imageUrl="/images/img.webp"
              title="Our Vision"
              description="Become the most reliable and innovative financial partner empowering owner-managed businesses across the UAE."
              overlayPosition="bottom"
              delay={0.3}
            />
          </div>

          <StatsGrid
            stats={[
              { icon: "accuracy", value: "99%", label: "Accuracy Rate" },
              { icon: "clients", value: "200+", label: "Clients Served" },
              { icon: "experience", value: "15+", label: "Years Experience" },
              { icon: "support", value: "24/7", label: "Support" },
            ]}
            delay={0.5}
          />
        </div>
      ),
    },
    {
      title: "Core Values",
      iconKey: "values",
      content: (
        <div className="space-y-8">
          <FloatingImageGallery
            images={[
              {
                url: "/images/business1.jpg",
                caption: "Precision in Every Detail",
              },
              { url: "/images/img1.webp", caption: "Uncompromising Integrity" },
              { url: "/images/business7.webp", caption: "Strategic Foresight" },
            ]}
            delay={0.1}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32">
            {[
              {
                icon: "precision",
                title: "Precision",
                desc: "Flawless attention to detail in all compliance and reporting.",
              },
              {
                icon: "integrity",
                title: "Integrity",
                desc: "Operating with the highest ethical standards and transparency.",
              },
              {
                icon: "foresight",
                title: "Foresight",
                desc: "Proactive advice that turns financial data into future strategy.",
              },
            ].map((value, index) => {
              const IconComponent = ICON_MAP[value.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white rounded-xl p-6 text-center border border-gray-100"
                >
                  {/* Render the SVG component */}
                  <div className="text-4xl mb-4 flex justify-center">
                    {IconComponent && (
                      <IconComponent
                        className="w-10 h-10"
                        style={{ color: SECONDARY_TEAL }}
                      />
                    )}
                  </div>
                  <h4
                    className="font-black text-xl mb-3"
                    style={{ color: PRIMARY_BLACK }}
                  >
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      ),
    },
    {
      title: "UAE Advantage",
      iconKey: "uae",
      content: (
        <SplitContentLayout
          imageUrl="/images/business8.webp"
          title="Local Mastery, Global Standards"
          reverse={true}
          content={
            <>
              <div className="space-y-4">
                {[
                  {
                    icon: "tax",
                    title: "VAT & Corporate Tax Readiness",
                    desc: "Navigating complex UAE tax frameworks is our core strength.",
                  },
                  {
                    icon: "regulatory",
                    title: "Regulatory Compliance",
                    desc: "Full adherence to local Economic Substance Regulations and AML requirements.",
                  },
                  {
                    icon: "freezone",
                    title: "Free Zone Expertise",
                    desc: "Specialized setup and maintenance for all UAE Free Zones.",
                  },
                ].map((feature, index) => {
                  const IconComponent = ICON_MAP[feature.icon];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {/* Render the SVG component */}
                      {IconComponent && (
                        <IconComponent
                          className="w-6 h-6 flex-shrink-0"
                          style={{ color: SECONDARY_TEAL }}
                        />
                      )}
                      <div>
                        <h6
                          className="font-bold text-lg"
                          style={{ color: NEUTRAL_FOREGROUND }}
                        >
                          {feature.title}
                        </h6>
                        <p className="text-gray-600 text-sm">{feature.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </>
          }
          delay={0.1}
        />
      ),
    },
  ];

  const customButtonClass =
    "px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full";

  return (
    <>
      <div style={{ backgroundColor: PRIMARY_LIGHT }} className="min-h-screen">
        <Navbar />

        {/* Hero Section */}

        <section className="relative overflow-hidden text-white ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src="/images/img3.webp"
              alt="Blog"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center transform-gpu"
              style={{
                WebkitTransform: "translateZ(0)",
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80" />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="text-sm md:text-lg flex text-gray-300 gap-x-2">
                <Link href="/">
                  <span className="text-white cursor-pointer hover:text-textprimary transition-colors">
                    Home
                  </span>
                </Link>
                &nbsp;›&nbsp;
                <span className="text-textprimary font-medium">About</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              The{" "}
              <span className="text-transparent bg-clip-text bg-textprimary">
                BAC Story
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl"
            >
              Your Strategic Financial Engine in the UAE: Combining Human
              Expertise with Intelligent Technology for Unmatched Growth.
            </motion.p>
          </div>
        </section>

        <hr className="my-0 border-gray-200" />

        {/* Timeline Section */}
        <section ref={containerRef} className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={timelineRef} className="relative">
              {/* Static Background Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-300 rounded-full" />

              {/* Animated Progress Line - FIX: Using scaleY for smooth scrolling performance */}
              <div className="absolute left-8 top-0 bottom-0 w-1 overflow-hidden rounded-full">
                <motion.div
                  style={{
                    scaleY: scaleYTransform, // Using scaleY is GPU accelerated and faster
                    opacity: opacityTransform,
                    background: `linear-gradient(to bottom, ${SECONDARY_TEAL}, ${PRIMARY_BLACK})`,
                    transformOrigin: "top", // Ensures the scaling animation starts from the top
                  }}
                  className="w-full h-full" // Height is now 100% of the parent
                />
              </div>

              {timelineData.map((item, index) => (
                <div key={index} className="flex justify-start py-16 md:py-24">
                  {/* Timeline Dot (Sticky Column) */}
                  <div className="relative z-20 w-24 md:w-36 flex-shrink-0">
                    <div className="sticky top-28">
                      <TimelineDot iconKey={item.iconKey} index={index} />
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="relative w-full">
                    {/* Title for Desktop */}
                    <h3
                      style={{ color: PRIMARY_BLACK }}
                      className="hidden md:block text-4xl font-black tracking-tight mb-8"
                    >
                      {item.title}
                    </h3>

                    {/* Mobile Title */}
                    <h3
                      style={{ color: PRIMARY_BLACK }}
                      className="md:hidden block text-2xl mb-6 text-left font-extrabold"
                    >
                      {item.title}
                    </h3>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-center mt-32"
            >
              <div
                style={{
                  background: `linear-gradient(to right, ${PRIMARY_BLACK}, ${SECONDARY_TEAL})`,
                }}
                className="rounded-3xl p-12 md:p-16 text-white"
              >
                <h3 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                  Ready to Transform Your Finances?
                </h3>
                <p className="text-gray-200 mb-8 text-xl max-w-3xl mx-auto">
                  Get a tailored consultation and start building a stable,
                  growth-focused future with our UAE-centric expertise.
                </p>
                <button
                  style={{
                    color: PRIMARY_BLACK,
                    backgroundColor: PRIMARY_LIGHT,
                  }}
                  className={`${customButtonClass} font-extrabold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.05]`}
                >
                  Schedule a Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <ContactSection />
      <ScrollToTop />
      <FloatingMenuButton />
      <Footer />
    </>
  );
};

export default AboutPageTimeline;
