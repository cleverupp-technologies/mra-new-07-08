"use client";

import React from "react";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#0B0B0D]">
      {/* Background Image Container */}
      <div className="w-full h-full relative overflow-hidden">
        <img
          src="/images/hero-bg.jpg"
          alt="Manesh Rineesh & Associates Executive Office Architecture"
          className="w-full h-full object-cover object-center opacity-90 scale-105"
        />

        {/* Left-to-Right Dark Gradient Overlay for High Text Contrast */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, rgba(11, 11, 13, 0.92) 0%, rgba(11, 11, 13, 0.75) 45%, rgba(11, 11, 13, 0.45) 75%, rgba(11, 11, 13, 0.15) 100%)`
          }}
        />

        {/* Top-to-Bottom Subtle Gradient for Header & Footer Contrast */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(11, 11, 13, 0.7) 0%, transparent 25%, transparent 75%, rgba(11, 11, 13, 0.8) 100%)`
          }}
        />
      </div>
    </div>
  );
}
