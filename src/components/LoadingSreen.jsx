"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading duration (optional)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-70 flex flex-col items-center justify-center bg-primary text-white">
      <div className="flex flex-col items-center animate-fade-in">
        <Image
          src="/images/Logo.png"
          alt="Booker Accounting Company Logo"
          width={160}
          height={160}
          className="object-contain animate-pulse"
          priority
        />
        
      </div>
    </div>
  );
};

export default LoadingScreen;
