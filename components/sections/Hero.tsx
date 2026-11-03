"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import TextSwapButton from "../TextSwapButton";
import HeroBenchIllustration from "../HeroBenchIllustration";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  onOpenBrief?: () => void;
}

const HEADLINE_LINES = [
  ["WE", "MAKE"],
  ["BORING", "ADS"],
  ["UNBORING."],
];

export default function Hero({ onOpenBrief }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main Entrance Timeline
      const tl = gsap.timeline({ delay: 0.2 }); // 200ms initial delay

      // 1. Eyebrow text fades in first (200ms delay)
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );

      // 2. Headline reveals line-by-line, each line's words sliding up from 100% to 0% translateY
      // with a slight stagger (60ms per word), using GSAP timeline, easing power4.out
      HEADLINE_LINES.forEach((_, lineIndex) => {
        tl.fromTo(
          `.hero-line-${lineIndex} .hero-word`,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.06, // 60ms stagger per word
            ease: "power4.out",
          },
          lineIndex === 0 ? "+=0.05" : "-=0.6" // line-by-line reveal
        );
      });

      // 3. R3F canvas fades in after text animation starts
      tl.fromTo(
        canvasContainerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=1.2" // begins as text animation starts
      );

      // 4. CTAs fade/slide in last
      tl.fromTo(
        bottomRowRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power4.out" },
        "-=0.2"
      );

      // 5. Scroll cue fades in
      tl.fromTo(
        scrollCueRef.current,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }, sectionRef);

    // Scroll-cue fades out after 100px scroll
    const handleScroll = () => {
      if (!scrollCueRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(0, 1 - scrollY / 100);
      scrollCueRef.current.style.opacity = opacity.toString();
      scrollCueRef.current.style.pointerEvents = scrollY >= 100 ? "none" : "auto";
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[85vh] pt-6 sm:pt-10 pb-16 md:pb-24 overflow-hidden border-b-2 border-[#0A0A0A] bg-[#F7F6F2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Eyebrow text row: fades in first */}
        <div
          ref={eyebrowRef}
          className="opacity-0 flex flex-wrap items-center justify-between gap-2 pb-6 sm:pb-8 border-b border-black/15 font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-none bg-[#DFFF00] border border-black inline-block animate-pulse" />
            <span>CREATIVE DIRECTION &amp; AD CONCEPTS</span>
            <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-[#0A0A0A] text-[#DFFF00] border border-black inline-block">
              PORTFOLIO // DAKSH
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[#0A0A0A]/60 font-inter text-xs">
            <span>[COMMERCIAL CONCEPTS]</span>
            <span>[SPEC VAULT]</span>
            <span>[ZERO BLOAT]</span>
          </div>
        </div>

        {/* Hero Content Area: Text left, 3D right */}
        <div className="relative pt-6 sm:pt-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 lg:gap-8">
            {/* Left: Giant Headline */}
            <div className="w-full lg:w-[45%] xl:w-[43%] relative z-10">
              <h1 className="font-space font-black uppercase tracking-tighter leading-[0.88] text-[#0A0A0A] text-[11.5vw] sm:text-[9.5vw] md:text-[8vw] lg:text-[5.5vw] xl:text-[5.1vw] select-none">
                {HEADLINE_LINES.map((line, lineIndex) => (
                  <div
                    key={lineIndex}
                    className={`hero-line-${lineIndex} overflow-visible flex flex-wrap items-baseline gap-x-[0.22em]`}
                  >
                    {line.map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className={`hero-word inline-block will-change-transform ${
                          word === "UNBORING."
                            ? "text-[#0A0A0A] underline decoration-[#DFFF00] decoration-[0.12em] underline-offset-[0.08em]"
                            : ""
                        }`}
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                ))}
              </h1>
            </div>

            {/* Right: The Bench Illustration (Just after text finishes, enlarged) */}
            <div
              ref={canvasContainerRef}
              style={{ opacity: 0 }}
              className="w-full lg:w-[55%] xl:w-[57%] flex items-end justify-center lg:justify-end pt-4 lg:pt-0"
            >
              <HeroBenchIllustration />
            </div>
          </div>

          {/* 3. Subtext and CTAs grid: fades/slides in last */}
          <div
            ref={bottomRowRef}
            className="opacity-0 relative z-10 mt-8 sm:mt-12 pt-8 border-t-2 border-[#0A0A0A] grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
          >
            {/* Subtext: dry, confident, deadpan */}
            <div className="lg:col-span-6 space-y-3">
              <p className="font-inter text-lg sm:text-xl md:text-2xl text-[#0A0A0A] font-medium leading-snug">
                Most advertising is wallpaper. We write the 1% people actually look at, laugh at, or send to their group chat.
              </p>
              <p className="font-space text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0A0A0A]/60">
                Independent creative direction &amp; ad concepts portfolio. No agency bloat. Just the work.
              </p>
            </div>

            {/* CTAs */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-start lg:justify-end gap-4">
              <TextSwapButton
                primaryText="EXPLORE PORTFOLIO ↓"
                secondaryText="STEAL MY IDEAS →"
                variant="filled"
                href="#work"
                className="!py-4 !px-8 !text-sm"
              />
              <TextSwapButton
                primaryText="COMMISSION A BRIEF →"
                secondaryText="NO BORING SLIDES →"
                variant="outlined"
                onClick={onOpenBrief}
                className="!py-4 !px-8 !text-sm"
              />
            </div>
          </div>

          {/* 4. Scroll Cue: pulses at bottom, fades out after 100px scroll */}
          <div
            ref={scrollCueRef}
            className="opacity-0 pt-10 sm:pt-14 flex items-center justify-between text-[#0A0A0A]/60 font-space text-xs font-bold uppercase tracking-widest"
          >
            <div className="flex items-center gap-2 animate-bounce">
              <ArrowDown className="w-3.5 h-3.5 text-[#0A0A0A]" />
              <span className="text-[#0A0A0A]">SCROLL TO EXPLORE</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#DFFF00] border border-black inline-block" />
              <span>EST. 2026 // UNFILTERED CONCEPTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
