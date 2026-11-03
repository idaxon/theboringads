"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function NotAnAgency() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const climaxRef = useRef<HTMLParagraphElement>(null);

  const dontLines = [
    "We don't do 80-page strategy decks.",
    "We don't spend three months in discovery meetings.",
    "We don't make safe ads that disappear into the feed.",
    "We don't charge retainers to sit on Zoom calls.",
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 60%",
          scrub: false,
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );

      lineRefs.current.forEach((el) => {
        if (!el) return;
        tl.fromTo(
          el,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.2"
        );
      });

      if (climaxRef.current) {
        tl.fromTo(
          climaxRef.current,
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.7, ease: "power3.out" },
          "+=0.1"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 bg-[#0A0A0A] text-[#F7F6F2] border-b-2 border-[#0A0A0A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-2 font-space text-xs font-bold uppercase tracking-widest text-[#DFFF00] mb-4">
          <span className="w-2.5 h-2.5 bg-[#DFFF00] inline-block" />
          <span>OUR MANIFESTO</span>
        </div>

        {/* Big Header */}
        <h2
          ref={titleRef}
          className="font-space text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-[#F7F6F2] mb-12 sm:mb-16 border-b border-white/20 pb-8 leading-none"
        >
          WE ARE NOT AN AD AGENCY.
        </h2>

        {/* 4 "We don't..." Lines */}
        <div className="space-y-6 sm:space-y-8 max-w-4xl">
          {dontLines.map((line, idx) => (
            <p
              key={idx}
              ref={(el) => {
                lineRefs.current[idx] = el;
              }}
              className="font-space text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#F7F6F2]/75 hover:text-[#F7F6F2] transition-colors leading-tight flex items-start gap-4"
            >
              <span className="text-[#DFFF00] font-mono select-none text-xl sm:text-3xl">
                ✕
              </span>
              <span>{line}</span>
            </p>
          ))}
        </div>

        {/* Climax Ending Line */}
        <div className="mt-16 sm:mt-24 pt-10 sm:pt-14 border-t border-white/20">
          <p
            ref={climaxRef}
            className="font-space text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#DFFF00] leading-none"
          >
            We make the idea.
            <br />
            You make it happen.
          </p>
          <p className="font-inter text-sm sm:text-base text-[#F7F6F2]/60 mt-4 max-w-lg">
            Traditional agencies want to sell you hours. We want to sell you the single insight that pays for itself ten times over.
          </p>
        </div>
      </div>
    </section>
  );
}
