import React from "react";
import { 
  TrendingUp, 
  UserCheck, 
  Users2, 
  Factory, 
  Stethoscope, 
  Building, 
  GraduationCap, 
  ShoppingBag
} from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

export default function Section03WhoWeHelp() {
  const clientSegments = [
    {
      title: "Growing Commercial Enterprises",
      icon: TrendingUp,
    },
    {
      title: "Owner-Managed Companies",
      icon: UserCheck,
    },
    {
      title: "Family-Owned Businesses",
      icon: Users2,
    },
    {
      title: "Manufacturing Units",
      icon: Factory,
    },
    {
      title: "Healthcare Organizations",
      icon: Stethoscope,
    },
    {
      title: "Real Estate Developers",
      icon: Building,
    },
    {
      title: "Educational Institutions",
      icon: GraduationCap,
    },
    {
      title: "Retail & Wholesale Networks",
      icon: ShoppingBag,
    },
  ];

  return (
    <section id="who-we-help" className="w-full bg-[#FAF8F1] py-16 sm:py-24 lg:py-32 border-b border-[#FFD978]/30 font-sans">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-10 xl:px-16 text-center">
        
        {/* 1. Eyebrow Badge */}
        <SectionBadge align="center" as="h2">WHO WE HELP</SectionBadge>

        {/* 2. Main Heading: Centered Editorial Serif Display */}
        <p className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] text-[#111827] tracking-tight leading-[1.15] mb-8 sm:mb-10 lg:mb-12 max-w-4xl text-center mx-auto">
          Built for Businesses That Make Important Decisions
        </p>

        {/* 3. Two-Column Supporting Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 font-sans font-medium text-[17px] sm:text-[18px] lg:text-[24px] leading-[1.55] text-left">
          <p className="text-[#111827]">
            Our practice is structured to support management teams, owner-managers, and decision-makers in commercial enterprises encountering critical decision contexts—such as capacity expansion, working capital constraints, capital expenditure planning, MIS reporting, and statutory compliance.
          </p>
          <p className="text-[#111827]/90">
            Through disciplined financial analysis, regulatory insight, and proactive advisory, we partner with client leadership to establish clear fiscal visibility, strengthen internal controls, and navigate complex statutory environments with strategic confidence.
          </p>
        </div>

        {/* 4. Restrained Horizontal Divider */}
        <div className="w-full h-[1px] bg-[#FFD978]/40 my-10 sm:my-12 lg:my-16" />

        {/* 5. Clean Editorial Industry List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-8 gap-x-6 lg:gap-x-10 text-left">
          {clientSegments.map((segment) => {
            const Icon = segment.icon;
            return (
              <div
                key={segment.title}
                className="flex items-center space-x-3.5 select-none py-1 cursor-default"
              >
                <div className="w-8 h-8 rounded-full bg-[#FFD978]/25 border border-[#FFD978]/40 flex items-center justify-center text-[#F4B942] shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-sans font-medium text-base sm:text-[17px] text-[#111827] leading-snug">
                  {segment.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
