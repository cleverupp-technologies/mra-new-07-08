"use client";

import React from "react";
import Container from "@/components/ui/Container";
import HeroBackground from "./HeroBackground";
import HeroNav from "./HeroNav";
import HeroContent from "./HeroContent";
import HeroSocials from "./HeroSocials";

export default function Section01Hero() {
  return (
    <section className="relative w-full min-h-screen lg:h-[100vh] min-h-[640px] overflow-hidden bg-[#0B0B0D]">
      {/* Background Layer (z-0) */}
      <HeroBackground />

      {/* 1. Header Navigation (z-50) */}
      <HeroNav />

      {/* 2. Hero Content Container (z-20) */}
      <div className="relative z-20 flex min-h-screen lg:h-full items-center pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <Container>
          <HeroContent />
        </Container>
      </div>

      {/* 3. Floating Social Icons (z-30) */}
      <HeroSocials />
    </section>
  );
}
