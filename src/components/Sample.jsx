import React from 'react';

export default function Samplesection() {
  return (
    <section 
      className="relative w-full min-h-[80vh] md:min-h-[100vh] flex flex-col items-center justify-center py-16 px-4 text-center bg-white"
      style={{
        // Recreates the horizontal lined texture/notebook paper style background
        backgroundImage: 'linear-gradient(#d1cbc0 1px, transparent 1px)',
        backgroundSize: '100% 12px',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center select-none">
        
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

      </div>

      {/* Optional: The thin solid baseline at the bottom of the image */}
      {/* <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4a4a4a]" /> */}
    </section>
  );
}