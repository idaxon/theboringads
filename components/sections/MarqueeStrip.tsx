"use client";

import React from "react";

export default function MarqueeStrip() {
  const items = [
    "BORING → UNBORING",
    "DEADPAN CONCEPTS",
    "ADS PEOPLE DON'T SKIP",
    "NO MARKETING FLUFF",
    "B2B DOESN'T HAVE TO SUCK",
    "SCRIPTS THAT HOOK",
    "STORYBOARDS THAT SELL",
    "IDEAS YOU REMEMBER",
    "ZERO STOCK PHOTOS",
  ];

  return (
    <div className="relative w-full bg-[#DFFF00] text-[#0A0A0A] border-b-2 border-[#0A0A0A] overflow-hidden py-3 select-none">
      <div className="flex whitespace-nowrap overflow-hidden">
        {/* Repeating tracks for seamless loop */}
        <div className="flex shrink-0 items-center animate-marquee gap-8 font-space text-sm sm:text-base font-black uppercase tracking-widest">
          {items.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-[#0A0A0A] text-xs">★</span>
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center animate-marquee gap-8 font-space text-sm sm:text-base font-black uppercase tracking-widest pl-8"
        >
          {items.map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-[#0A0A0A] text-xs">★</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
