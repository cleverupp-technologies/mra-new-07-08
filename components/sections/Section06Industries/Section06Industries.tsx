"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { 
  Stethoscope, 
  Factory, 
  Building, 
  ShoppingBag, 
  Scissors, 
  Landmark, 
  GraduationCap, 
  Microscope
} from "lucide-react";

export default function Section06Industries() {
  const industries = [
    {
      name: "Healthcare",
      slug: "healthcare",
      icon: Stethoscope,
      image: "/images/healthcare.jpg",
      services: [
        "Audit & Assurance",
        "Healthcare Financial Reporting",
        "GST & Tax Compliance",
      ],
    },
    {
      name: "Manufacturing",
      slug: "manufacturers",
      icon: Factory,
      image: "/images/manufacturing.jpg",
      services: [
        "Cost Accounting",
        "Working Capital Advisory",
        "Statutory Audit",
      ],
    },
    {
      name: "Real Estate",
      slug: "real-estate",
      icon: Building,
      image: "/images/real-estate.jpg",
      services: [
        "Project Financial Advisory",
        "RERA Compliance",
        "Tax Planning",
      ],
    },
    {
      name: "Retail",
      slug: "retail-wholesalers",
      icon: ShoppingBag,
      image: "/images/retail.jpg",
      services: [
        "Inventory Management Advisory",
        "GST Compliance",
        "Virtual CFO",
      ],
    },
    {
      name: "Textiles",
      slug: "textiles",
      icon: Scissors,
      image: "/images/retail.jpg",
      services: [
        "Export Tax Incentives",
        "Inverted Duty GST Refunds",
        "Job-Work Accounting",
      ],
    },
    {
      name: "NBFC",
      slug: "nbfcs",
      icon: Landmark,
      image: "/images/industry-nbfc.jpg",
      services: [
        "RBI Regulatory Returns",
        "Asset Classification Audit",
        "Capital Adequacy Ratio",
      ],
    },
    {
      name: "Education",
      slug: "education",
      icon: GraduationCap,
      image: "/images/education.jpg",
      services: [
        "Educational Trust Audit",
        "12A / 80G Tax Exemption",
        "FCRA Compliance",
      ],
    },
    {
      name: "Pharma",
      slug: "pharma",
      icon: Microscope,
      image: "/images/healthcare.jpg",
      services: [
        "Batch Cost Accounting",
        "R&D Expense Tax Credit",
        "Transfer Pricing Advisory",
      ],
    },
  ];

  return (
    <section id="industries" className="py-20 sm:py-28 lg:py-32 bg-[#FAF8F1] border-b border-[#FFD978]/40 font-sans text-center overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        
        {/* Centered Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <SectionBadge align="center" as="h2">INDUSTRIES WE SERVE</SectionBadge>
          
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#111827] tracking-tight leading-[1.15] mt-2 mb-4 max-w-3xl text-center">
            Commercial Advisory Across Key Sectors
          </p>

          <p className="font-sans text-sm sm:text-base text-[#111827]/80 max-w-2xl leading-relaxed text-center">
            Every business sector operates under distinct commercial pressures, capital cycles, and statutory compliance demands. We bring targeted financial and advisory experience across major industries.
          </p>
        </div>

        {/* 8 Industry Cards Grid (Unchanged) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 text-left">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;

            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href={`/industries/${ind.slug}`}
                  className="relative overflow-hidden rounded-[22px] border border-[#FFD978]/60 p-5 sm:p-6 flex flex-col justify-end min-h-[300px] sm:min-h-[320px] lg:min-h-[340px] shadow-sm select-none cursor-pointer group hover:border-[#F4B942] transition-colors block"
                >
                  {/* Bright Background Image */}
                  <img
                    src={ind.image}
                    alt={`${ind.name} Industry`}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Subtle Warm Gradient Overlay at Bottom Only */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/95 via-[#111827]/45 to-transparent pointer-events-none" />

                  {/* Refined Informational Card Content Layer */}
                  <div className="relative z-10 flex flex-col justify-end h-full text-white">
                    
                    {/* Circular Orange Icon Badge + Industry Title */}
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-full bg-[#F4B942] text-[#FAF8F1] flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="w-3.5 h-3.5 text-[#111827]" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold font-serif text-[#FAF8F1] tracking-tight leading-none group-hover:text-[#F4B942] transition-colors">
                        {ind.name}
                      </h3>
                    </div>

                    {/* Thin Orange Accent Divider */}
                    <div className="w-8 h-[2px] bg-[#F4B942] my-2.5 rounded-full" />

                    {/* 3 Industry Application Points */}
                    <ul className="space-y-1.5 mt-1">
                      {ind.services.map((service) => (
                        <li key={service} className="text-xs sm:text-[13px] text-[#FAF8F1]/90 font-medium flex items-center gap-2 leading-tight">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F4B942] shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
