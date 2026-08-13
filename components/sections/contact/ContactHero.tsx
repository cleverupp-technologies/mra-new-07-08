"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock } from "lucide-react";

export function ContactHero() {
  return (
    <section className="w-full bg-[#0B0B0D] text-left pt-[140px] sm:pt-[152px] pb-16 sm:pb-24 border-b border-white/10 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[680px] text-left"
        >
          {/* Main Heading: Playfair Display, Pure White */}
          <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
            Let&apos;s Discuss Your Next Business Decision.
          </h1>

          {/* Standard Executive Gold Divider */}
          <div className="w-[60px] h-[3px] bg-[var(--gold)] mt-5 mb-6" />

          {/* Body Copy: Inter, text-white/82, 18px */}
          <p className="font-sans font-normal text-lg sm:text-[18px] text-white/82 leading-[1.8] mb-10">
            Whether you&apos;re planning expansion, evaluating an investment, managing compliance, or seeking long-term financial advisory, our team is ready to help you move forward with confidence.
          </p>

          {/* Direct Quick Contact Details (No Cards) */}
          <div className="space-y-4 pt-2 font-sans border-t border-white/10 pt-8">
            {/* Phone */}
            <div className="flex items-center gap-4 text-white/90">
              <Phone className="w-4 h-4 text-[var(--gold)] shrink-0" />
              <div className="flex flex-wrap gap-2 text-sm sm:text-base font-medium">
                <span className="text-white/60 font-mono text-xs uppercase tracking-wider block sm:inline">Phone:</span>
                <a href="tel:+919567523620" className="hover:text-[var(--gold)] transition-colors">
                  +91 95675 23620
                </a>
                <span className="text-white/30 hidden sm:inline">•</span>
                <a href="tel:+914952208900" className="hover:text-[var(--gold)] transition-colors">
                  +91 495 220 8900
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 text-white/90">
              <Mail className="w-4 h-4 text-[var(--gold)] shrink-0" />
              <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
                <span className="text-white/60 font-mono text-xs uppercase tracking-wider">Email:</span>
                <a href="mailto:office@maneshrineesh.com" className="hover:text-[var(--gold)] transition-colors">
                  office@maneshrineesh.com
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-center gap-4 text-white/90">
              <Clock className="w-4 h-4 text-[var(--gold)] shrink-0" />
              <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
                <span className="text-white/60 font-mono text-xs uppercase tracking-wider">Hours:</span>
                <span className="text-white/80">Monday &ndash; Saturday: 9:00 AM &ndash; 6:00 PM</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactHero;
