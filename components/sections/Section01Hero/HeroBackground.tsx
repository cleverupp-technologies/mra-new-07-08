"use client";

import React from "react";
import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#FAF8F1]">
      {/* Background Image Container */}
      <div className="w-full h-full relative overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Manesh Rineesh & Associates Executive Office Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Subtle Ambient Light Blend for Text Readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, rgba(250, 248, 241, 0.92) 0%, rgba(250, 248, 241, 0.75) 45%, rgba(250, 248, 241, 0.4) 75%, transparent 100%)`
          }}
        />
      </div>
    </div>
  );
}
