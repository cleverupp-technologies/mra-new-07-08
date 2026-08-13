"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export function AboutLocations() {
  const offices = [
    {
      city: "Kozhikode Headquarters",
      address: "60/4798, Third Floor, Span Hotel Complex, Jail Road, Kozhikode – 673004, Kerala, India",
      phone: "+91 95675 23620",
      email: "office@maneshrineesh.com",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    },
    {
      city: "Mukkam Branch Office",
      address: "2nd Floor, City Centre, Main Road, Mukkam, Kozhikode – 673602, Kerala, India",
      phone: "+91 495 220 8900",
      email: "mukkam@maneshrineesh.com",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="locations" className="w-full bg-[#FAF8F1] py-24 sm:py-32 border-b border-[#FFD978]/40 font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-mono font-semibold tracking-[0.25em] text-[#F4B942] uppercase mb-3 block">
            08 • PRACTICE LOCATIONS
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight leading-[1.15] mb-6 max-w-3xl">
            Facilities & Headquarters.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed font-normal max-w-2xl mb-16">
            Headquartered in Kozhikode with integrated branch facilities in Mukkam, our practice locations are equipped for client conferences, statutory audits, and strategic advisory sessions.
          </p>
        </motion.div>

        {/* 2 Office Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {offices.map((off, idx) => (
            <motion.div
              key={off.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FAF8F1] border border-[#FFD978]/40 rounded-[22px] overflow-hidden flex flex-col justify-between group hover:border-[#F4B942]/50 transition-all duration-300 shadow-xl shadow-black/60"
            >
              {/* Large Office Photography */}
              <div className="relative h-[200px] sm:h-[240px] w-full overflow-hidden shrink-0">
                <img
                  src={off.image}
                  alt={off.city}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-[#111214]/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#FAF8F1]/60 backdrop-blur-md border border-white/15 text-[10px] font-mono font-semibold tracking-wider text-[#F4B942] uppercase">
                    PRACTICE HUB
                  </span>
                </div>
              </div>

              {/* Office Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight mb-4">
                    {off.city}
                  </h3>

                  <div className="flex items-start gap-3 text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-4">
                    <MapPin className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
                    <span>{off.address}</span>
                  </div>
                </div>

                <div className="border-t border-[#FFD978]/40 pt-4 space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-3 text-[#111827]/90 font-medium">
                    <Phone className="w-3.5 h-3.5 text-[#F4B942] shrink-0" />
                    <a href={`tel:${off.phone}`} className="hover:text-[#F4B942] transition-colors">
                      {off.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-[#111827]/90 font-medium">
                    <Mail className="w-3.5 h-3.5 text-[#F4B942] shrink-0" />
                    <a href={`mailto:${off.email}`} className="hover:text-[#F4B942] transition-colors">
                      {off.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutLocations;
