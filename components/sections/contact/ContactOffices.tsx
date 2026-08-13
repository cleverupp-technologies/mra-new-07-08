"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export function ContactOffices() {
  const offices = [
    {
      city: "Kozhikode Headquarters",
      address: "60/4798, Third Floor, Span Hotel Complex, Jail Road, Kozhikode – 673004, Kerala, India",
      phone: "+91 95675 23620",
      email: "office@maneshrineesh.com",
      hours: "Monday – Saturday: 9:00 AM – 6:00 PM",
      mapUrl: "https://maps.google.com/?q=Span+Hotel+Complex+Jail+Road+Kozhikode",
    },
    {
      city: "Mukkam Branch",
      address: "2nd Floor, City Centre, Main Road, Mukkam, Kozhikode – 673602, Kerala, India",
      phone: "+91 495 220 8900",
      email: "mukkam@maneshrineesh.com",
      hours: "Monday – Saturday: 9:00 AM – 6:00 PM",
      mapUrl: "https://maps.google.com/?q=City+Centre+Main+Road+Mukkam+Kozhikode",
    },
  ];

  return (
    <section id="offices" className="w-full bg-[#0B0B0D] py-24 sm:py-32 border-b border-white/10 font-sans text-left overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-left"
        >
          <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[var(--gold)] uppercase mb-3 block">
            PRACTICE LOCATIONS
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
            Our Offices
          </h2>
          <div className="w-[60px] h-[3px] bg-[var(--gold)] mt-5" />
        </motion.div>

        {/* 2 Premium Charcoal Office Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {offices.map((off, idx) => (
            <motion.div
              key={off.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#111214] border border-white/[0.08] rounded-[28px] p-8 sm:p-10 flex flex-col justify-between group hover:border-[var(--gold)]/50 transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Office Title */}
                <div>
                  <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-[var(--gold)] uppercase block mb-1.5">
                    OFFICE LOCATION
                  </span>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-tight">
                    {off.city}
                  </h3>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-white/10" />

                {/* Details List */}
                <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed">
                  {/* Address */}
                  <div className="flex items-start gap-3.5 text-white/80">
                    <MapPin className="w-4 h-4 text-[var(--gold)] shrink-0 mt-1" />
                    <span>{off.address}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3.5 text-white/90 font-medium">
                    <Phone className="w-4 h-4 text-[var(--gold)] shrink-0" />
                    <a href={`tel:${off.phone.replace(/\s+/g, "")}`} className="hover:text-[var(--gold)] transition-colors">
                      {off.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3.5 text-white/90 font-medium">
                    <Mail className="w-4 h-4 text-[var(--gold)] shrink-0" />
                    <a href={`mailto:${off.email}`} className="hover:text-[var(--gold)] transition-colors">
                      {off.email}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-3.5 text-white/75">
                    <Clock className="w-4 h-4 text-[var(--gold)] shrink-0" />
                    <span>{off.hours}</span>
                  </div>
                </div>
              </div>

              {/* Primary Action Button: Get Directions */}
              <div className="pt-8 mt-8 border-t border-white/10">
                <a
                  href={off.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-full border border-[var(--gold)]/40 bg-transparent text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black font-sans font-semibold text-sm tracking-wide transition-all duration-300 group/btn cursor-pointer"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactOffices;
