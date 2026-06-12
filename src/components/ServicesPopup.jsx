"use client";
import { useState, useEffect } from "react";
import {
  ClipboardCheck,
  FileText,
  Building2,
  Briefcase,
  Network,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

export default function ServicesHub() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const leftServices = [
    { id: 1, title: "Audit &\nAssurance", icon: ClipboardCheck },
    { id: 2, title: "Taxation", icon: FileText },
    { id: 3, title: "Accounting &\nBookkeeping", icon: Building2 },
  ];

  const rightServices = [
    { id: 4, title: "Business Advisory &\nSupport Services", icon: Briefcase },
    { id: 5, title: "Business Support\nServices", icon: Network },
    { id: 6, title: "Anti money\nlaundering", icon: ShieldCheck },
  ];

  const ServiceCard = ({ service, isLeft, index }) => {
    const Icon = service.icon;
    const isHovered = hoveredId === service.id;

    // Updated Offsets → 1 & 3 closer, 2 farther
    const offsets = [20, 80, 20];

    // Same vertical spacing
    const verticalOffsets = [-140, 0, 140];

    const delays = [0.1, 0.2, 0.3];

    return (
      <div
        className={`absolute flex items-center ${
          isLeft ? "flex-row" : "flex-row-reverse"
        }`}
        style={{
          [isLeft ? "right" : "left"]: `${offsets[index]}px`,
          top: "50%",
          transform: `translateY(${verticalOffsets[index]}px)`,
          opacity: isExpanded ? 1 : 0,
          transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delays[index]}s`,
          transitionProperty: "opacity, transform",
        }}
        onMouseEnter={() => setHoveredId(service.id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        {/* Card */}
        <div
          className={`flex items-center bg-gray-100 rounded-full overflow-hidden cursor-pointer ${
            isLeft ? "flex-row" : "flex-row-reverse"
          }`}
          style={{
            width: "280px",
            height: "80px",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            boxShadow: isHovered
              ? "0 10px 30px -10px rgba(91,183,197,0.4)"
              : "0 4px 15px -5px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
          }}
        >
          {/* Text */}
          <div
            className={`flex-1 px-4 w-full ${
              isLeft ? "text-left" : "text-right"
            }`}
          >
            <span className="text-sm font-semibold text-gray-700 whitespace-pre-line leading-tight">
              {service.title}
            </span>
          </div>

          {/* Icon */}
          <div
            className="w-20 h-full flex items-center justify-center"
            style={{ backgroundColor: "#5bb7c5" }}
          >
            <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
        </div>

        {/* Connector Line */}
        <div
          className="flex items-center"
          style={{
            width: isExpanded ? "50px" : "0px",
            transition: `width 0.4s ease ${delays[index] + 0.2}s`,
          }}
        >
          <div
            className="h-0.5 flex-1"
            style={{ backgroundColor: "#5bb7c5" }}
          />
          <div
            className="w-3 h-3 rounded-full border-2 bg-white"
            style={{
              borderColor: "#5bb7c5",
              marginLeft: isLeft ? "-1px" : "0",
              marginRight: isLeft ? "0" : "-1px",
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-8">
      <div
        className="relative flex items-center justify-center"
        style={{ width: "900px", height: "500px" }}
      >
        {/* Left */}
        <div className="absolute left-0 h-full" style={{ width: "320px" }}>
          {leftServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              isLeft={true}
              index={index}
            />
          ))}
        </div>

        {/* Center */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer z-10"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Ring */}
          <div className="absolute w-44 h-44">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 origin-center"
                style={{
                  width: "8px",
                  height: "88px",
                  marginLeft: "-4px",
                  marginTop: "-88px",
                  transform: `rotate(${i * 30}deg)`,
                  transformOrigin: "center bottom",
                }}
              >
                <div
                  className="w-full rounded-full"
                  style={{
                    height: "20px",
                    backgroundColor: "#5bb7c5",
                    opacity: isExpanded ? 1 : 0.5,
                    transition: `opacity 0.3s ease ${i * 0.05}s`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Dots */}
          {[30, 90, 150, 210, 270, 330].map((angle, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-white border-2"
              style={{
                borderColor: "#5bb7c5",
                transform: `rotate(${angle}deg) translateY(-88px)`,
                opacity: isExpanded ? 1 : 0,
                transition: `opacity 0.3s ease ${0.3 + i * 0.1}s`,
              }}
            />
          ))}

          {/* Main Circle */}
         

<div
  className="w-40 h-40 bg-white rounded-full flex items-center justify-center relative z-10 cursor-pointer"
  style={{
    boxShadow:
      "0 10px 40px -12px rgba(0,0,0,0.25), inset 0 -2px 12px rgba(0,0,0,0.06)",
    transform: isExpanded ? "scale(1)" : "scale(0.9)",
    transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
  }}
>
  <Image
    src="/images/Logo.png"
    alt="Service Icon"
    width={200}   // scaled with bigger circle
    height={200}
    className="object-contain"
  />
</div>

        </div>

        {/* Right */}
        <div className="absolute right-0 h-full" style={{ width: "320px" }}>
          {rightServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              isLeft={false}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
