import React from "react";
import Section01Hero from "@/components/sections/Section01Hero/Section01Hero";
import Section02Introduction from "@/components/sections/Section02Introduction/Section02Introduction";
import Section03WhoWeHelp from "@/components/sections/Section03WhoWeHelp/Section03WhoWeHelp";
import Section04WhatWeLearned from "@/components/sections/Section04WhatWeLearned/Section04WhatWeLearned";
import Section05ProfessionalApproach from "@/components/sections/Section05ProfessionalApproach/Section05ProfessionalApproach";
import Section06Industries from "@/components/sections/Section06Industries/Section06Industries";
import Section07Services from "@/components/sections/Section07Services/Section07Services";
import Section08Statistics from "@/components/sections/Section08Statistics/Section08Statistics";
import Section09Experience from "@/components/sections/Section09Experience/Section09Experience";
import Section10Insights from "@/components/sections/Section10Insights/Section10Insights";
import Section11CTA from "@/components/sections/Section11CTA/Section11CTA";
import Section12Footer from "@/components/sections/Section12Footer/Section12Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] overflow-x-hidden selection:bg-[var(--gold)] selection:text-black">
      <Section01Hero />
      <Section02Introduction />
      <Section03WhoWeHelp />
      <Section04WhatWeLearned />
      <Section05ProfessionalApproach />
      <Section06Industries />
      <Section07Services />
      <Section08Statistics />
      <Section09Experience />
      <Section10Insights />
      <Section11CTA />
      <Section12Footer />
    </main>
  );
}
