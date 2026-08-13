import React from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function AboutWhoWeAre() {
  return (
    <section id="who-we-are" className="w-full bg-[#FAF8F1] py-20 sm:py-28 lg:py-32 border-b border-[#FFD978]/40 font-sans text-center overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Badge */}
          <SectionBadge align="center">WHO WE ARE</SectionBadge>

          {/* Section Heading */}
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-[1.12] tracking-tight text-center">
            Integrated Financial Partnership
          </h2>

          {/* Gold Accent Line (Centered) */}
          <div className="w-[60px] h-[3px] bg-[#F4B942] mt-4 mb-7 mx-auto" />

          {/* Two Body Copy Paragraphs (Centered with Controlled Width) */}
          <div className="space-y-6 font-sans font-medium text-base sm:text-[18px] text-[#111827]/85 leading-relaxed text-center max-w-2xl mx-auto">
            <p>
              Our work combines audit, taxation, compliance, and strategic advisory into one integrated approach that gives business owners greater financial clarity, stronger governance, and confidence in every stage of growth.
            </p>
            <p>
              From entrepreneurs and family businesses to established organisations across Kerala, we work as long-term advisors—not just compliance professionals—helping management teams understand the financial implications behind important business decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutWhoWeAre;
