"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SERVICES = [
  {
    word: "IDEAS.",
    note: "The hard part. The reason you're here.",
    direction: 1,
  },
  {
    word: "SCRIPTS.",
    note: "Dialogue real humans would actually utter.",
    direction: -1,
  },
  {
    word: "STORYBOARDS.",
    note: "Frame-by-frame proof before you spend a dime.",
    direction: 1,
  },
  {
    word: "CAMPAIGNS.",
    note: "Multi-touchpoint narratives that don't contradict themselves.",
    direction: -1,
  },
  {
    word: "BILLBOARDS.",
    note: "7 words or fewer. Readable at 75 mph.",
    direction: 1,
  },
  {
    word: "SOCIAL.",
    note: "Organic hooks that don't feel like corporate infiltration.",
    direction: -1,
  },
  {
    word: "THINGS PEOPLE REMEMBER.",
    note: "Because nobody ever recommended a carousel of stock photos to their coworker.",
    direction: 1,
  },
];

export default function WhatWeMake() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    lineRefs.current.forEach((line, index) => {
      if (!line) return;
      const shift = SERVICES[index].direction * 40;

      gsap.fromTo(
        line,
        { x: -shift },
        {
          x: shift,
          ease: "none",
          scrollTrigger: {
            trigger: line,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative w-full py-20 md:py-32 border-b-2 border-[#0A0A0A] bg-[#F7F6F2] overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A] mb-2">
          <span className="w-2.5 h-2.5 bg-[#DFFF00] border border-black inline-block" />
          <span>PORTFOLIO DISCIPLINES // CREATIVE CAPABILITY</span>
        </div>
        <h2 className="font-space text-3xl sm:text-5xl font-black uppercase tracking-tighter text-[#0A0A0A]">
          WHAT WE MAKE.
        </h2>
      </div>

      {/* Stacked Oversized Words */}
      <div className="w-full flex flex-col divide-y-2 divide-[#0A0A0A] border-t-2 border-b-2 border-[#0A0A0A]">
        {SERVICES.map((service, idx) => (
          <div
            key={service.word}
            ref={(el) => {
              lineRefs.current[idx] = el;
            }}
            className="group relative w-full py-4 sm:py-6 px-4 sm:px-8 hover:bg-[#0A0A0A] hover:text-[#F7F6F2] transition-colors duration-200 cursor-default"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <span className="font-space font-black uppercase tracking-tighter leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl inline-block relative transition-transform duration-300 group-hover:translate-x-2">
                <span className="relative z-10">{service.word}</span>
                {/* Acid yellow underline highlight on hover */}
                <span className="absolute bottom-1 left-0 w-full h-[6px] sm:h-[10px] bg-[#DFFF00] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-0" />
              </span>

              <span className="font-inter text-xs sm:text-sm font-medium text-[#0A0A0A]/70 group-hover:text-[#DFFF00] transition-colors duration-200 uppercase font-space tracking-wider">
                [{service.note}]
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
