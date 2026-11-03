"use client";

import React, { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import Portfolio from "@/components/sections/Portfolio";
import WhatWeMake from "@/components/sections/WhatWeMake";
import Pricing from "@/components/sections/Pricing";
import NotAnAgency from "@/components/sections/NotAnAgency";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Footer from "@/components/sections/Footer";
import BriefModal from "@/components/BriefModal";

export default function Home() {
  const [isBriefOpen, setIsBriefOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#F7F6F2] text-[#0A0A0A] selection:bg-[#0A0A0A] selection:text-[#DFFF00]">
      {/* 1. Navbar */}
      <Navbar onOpenBrief={() => setIsBriefOpen(true)} />

      {/* 2. Hero */}
      <Hero onOpenBrief={() => setIsBriefOpen(true)} />

      {/* 3. Marquee Strip */}
      <MarqueeStrip />

      {/* 4. Portfolio: "ADS WE WISH WERE REAL" */}
      <Portfolio />

      {/* 5. What We Make */}
      <WhatWeMake />

      {/* 6. Pricing */}
      <Pricing onOpenBrief={() => setIsBriefOpen(true)} />

      {/* 7. "WE ARE NOT AN AD AGENCY." Manifesto */}
      <NotAnAgency />

      {/* 8. Closing CTA: "GOT A BORING PRODUCT? GOOD." */}
      <ClosingCTA onOpenBrief={() => setIsBriefOpen(true)} />

      {/* 9. Footer */}
      <Footer />

      {/* Interactive Deadpan Brief Modal */}
      <BriefModal isOpen={isBriefOpen} onClose={() => setIsBriefOpen(false)} />
    </main>
  );
}
