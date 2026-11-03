"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { CAMPAIGNS } from "@/lib/campaigns";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardRefs.current.forEach((card) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          y: 60,
          opacity: 0.2,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 35%",
            scrub: 1,
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
      id="work"
      ref={containerRef}
      className="relative w-full py-20 md:py-28 border-b-2 border-[#0A0A0A] bg-[#F7F6F2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b-2 border-[#0A0A0A]">
          <div>
            <div className="flex items-center gap-2 font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A] mb-2">
              <span className="w-2.5 h-2.5 bg-[#DFFF00] border border-black inline-block" />
              <span>SELECTED COMMERCIAL WORKS // PORTFOLIO</span>
            </div>
            <h2 className="font-space text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#0A0A0A]">
              ADS WE WISH WERE REAL.
            </h2>
          </div>
          <div className="max-w-sm space-y-3">
            <p className="font-inter text-sm text-[#0A0A0A]/80 leading-relaxed">
              Spec campaigns for products that deserved better than generic corporate wallpaper. Click any card to inspect the full brief and scripts.
            </p>
            <div>
              <Link
                href="/work"
                prefetch={true}
                className="inline-flex items-center gap-1.5 font-space text-xs font-bold uppercase tracking-wider text-[#0A0A0A] bg-[#DFFF00] hover:bg-[#0A0A0A] hover:text-[#DFFF00] px-3.5 py-1.5 border border-[#0A0A0A] transition-all shadow-[2px_2px_0px_#0A0A0A]"
              >
                <span>OPEN FULL PORTFOLIO VAULT (3 WORKS)</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Distinct Case Cards */}
        <div className="mt-12 space-y-12">
          {CAMPAIGNS.map((campaign, idx) => {
            return (
              <div
                key={campaign.slug}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
              >
                {/* CARD 1: Full-Bleed Image with Text Overlay */}
                {campaign.layout === "full-bleed" && (
                  <Link
                    href={`/work/${campaign.slug}`}
                    prefetch={true}
                    className="group block relative w-full min-h-[500px] sm:min-h-[600px] border-2 border-[#0A0A0A] overflow-hidden bg-[#0A0A0A]"
                  >
                    {/* Background image */}
                    {campaign.image && (
                      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                        <Image
                          src={campaign.image}
                          alt={campaign.title}
                          fill
                          priority
                          className="object-cover opacity-85 filter contrast-110 group-hover:opacity-95 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/30" />
                      </div>
                    )}

                    {/* Top metadata tags */}
                    <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between text-[#F7F6F2]">
                      <div className="flex items-center gap-3 font-space text-xs font-bold uppercase tracking-widest">
                        <span className="bg-[#DFFF00] text-[#0A0A0A] px-2.5 py-1 font-black">
                          CASE {campaign.number}
                        </span>
                        <span className="bg-black/60 backdrop-blur-sm border border-white/30 px-2.5 py-1">
                          {campaign.category}
                        </span>
                      </div>
                      <div className="w-10 h-10 border-2 border-[#F7F6F2] bg-black/60 group-hover:bg-[#DFFF00] group-hover:border-[#DFFF00] group-hover:text-[#0A0A0A] flex items-center justify-center transition-colors">
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Bottom overlay copy */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-10 space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-space text-xs font-bold uppercase tracking-wider text-[#DFFF00] bg-black/80 px-2.5 py-0.5 border border-[#DFFF00]/40">
                          BRAND: {campaign.clientName}
                        </span>
                        <span className="font-space text-xs uppercase font-extrabold tracking-wider bg-white text-black px-2 py-0.5">
                          TAGLINE: BALDNESS IS PERMANENT. REGRET IS OPTIONAL.
                        </span>
                      </div>
                      <h3 className="font-space text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-[#F7F6F2] tracking-tighter leading-none">
                        DON&apos;T WAIT UNTIL IT&apos;S TOO LATE.
                      </h3>
                      <p className="font-space text-lg sm:text-2xl text-[#DFFF00] font-black tracking-tight">
                        {campaign.punchline}
                      </p>
                      <p className="font-inter text-xs sm:text-sm text-[#F7F6F2]/90 max-w-2xl line-clamp-2">
                        {campaign.summary}
                      </p>
                      <div className="pt-2 flex items-center gap-4">
                        <span className="inline-block border-b-2 border-[#DFFF00] font-space text-xs font-bold uppercase tracking-widest text-[#DFFF00] group-hover:translate-x-2 transition-transform">
                          INSPECT CAMPAIGN ASSETS &amp; SCRIPT →
                        </span>
                      </div>
                    </div>
                  </Link>
                )}

                {/* CARD 2: Massive Typography Only on Solid Acid Block */}
                {campaign.layout === "typography-only" && (
                  <Link
                    href={`/work/${campaign.slug}`}
                    prefetch={true}
                    className="group block relative w-full border-2 border-[#0A0A0A] bg-[#DFFF00] p-8 sm:p-14 overflow-hidden transition-colors duration-300 hover:bg-[#0A0A0A] text-[#0A0A0A] hover:text-[#DFFF00]"
                  >
                    {/* Top tags */}
                    <div className="flex items-center justify-between border-b-2 border-current pb-6 mb-8 font-space text-xs font-bold uppercase tracking-widest">
                      <div className="flex items-center gap-3">
                        <span className="border-2 border-current px-2.5 py-1 font-black">
                          CASE {campaign.number}
                        </span>
                        <span className="hidden sm:inline border-2 border-current px-2.5 py-1">
                          {campaign.category}
                        </span>
                        <span className="border-2 border-current px-2.5 py-1 font-bold">
                          BRAND: {campaign.clientName}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase font-space hidden sm:inline font-bold">
                          100% COPYWRITING &amp; CONCEPT
                        </span>
                        <div className="w-10 h-10 border-2 border-current flex items-center justify-center">
                          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Giant Typography */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="font-space text-xs sm:text-sm font-bold uppercase tracking-widest block opacity-80">
                          MAIN HEADLINE:
                        </span>
                        <h3 className="font-space text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.92]">
                          SUPERSTITIONS AREN&apos;T THE PROBLEM. YOUR TYRES ARE.
                        </h3>
                      </div>

                      <div className="inline-block border-2 border-current px-3.5 py-1.5 font-space text-base sm:text-xl font-bold uppercase">
                        TAGLINE: EVEN BAD LUCK DESERVES GOOD GRIP.
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 border-t-2 border-current items-end">
                        <div className="md:col-span-8 space-y-2">
                          <p className="font-space text-sm sm:text-base font-bold uppercase tracking-wide opacity-90">
                            SUPPORTING: Superstitions need a break. Your brakes shouldn&apos;t.
                          </p>
                          <p className="font-inter text-xs sm:text-sm font-medium leading-normal max-w-2xl opacity-80">
                            {campaign.summary}
                          </p>
                        </div>
                        <div className="md:col-span-4 flex md:justify-end">
                          <span className="inline-block border-2 border-current px-6 py-3 font-space text-xs sm:text-sm font-bold uppercase tracking-wider group-hover:bg-white group-hover:text-black transition-colors">
                            VIEW STRATEGY + SCRIPT →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}

                {/* CARD 3: Split-Screen 50/50 (Text Left / Visual Right) */}
                {campaign.layout === "split-screen" && (
                  <Link
                    href={`/work/${campaign.slug}`}
                    prefetch={true}
                    className="group block relative w-full border-2 border-[#0A0A0A] bg-[#FFFFFF] overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                      {/* Left Column: Editorial Text */}
                      <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-[#0A0A0A] bg-[#F7F6F2]">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A]">
                            <div className="flex items-center gap-2">
                              <span className="bg-[#0A0A0A] text-[#F7F6F2] px-2.5 py-1">
                                CASE {campaign.number}
                              </span>
                              <span className="text-[#0A0A0A]/70">{campaign.category}</span>
                            </div>
                            <span className="font-mono text-[10px] text-[#0A0A0A]/60">
                              SPEC AD 03
                            </span>
                          </div>

                          <div className="pt-2 space-y-1">
                            <span className="font-space text-xs sm:text-sm font-bold uppercase text-[#0A0A0A]/60 block">
                              BRAND: {campaign.clientName}
                            </span>
                            <h3 className="font-space text-3xl sm:text-5xl font-black uppercase tracking-tighter text-[#0A0A0A] leading-tight">
                              SHE&apos;S BUSY. YOU&apos;RE THIRSTY.
                            </h3>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <span className="font-space text-sm sm:text-base font-black text-[#0A0A0A] bg-[#DFFF00] px-3 py-1 border border-black inline-block">
                              TAGLINE: LET HER SCROLL. YOU DRINK OAT MILK.
                            </span>
                            <span className="font-space text-xs font-bold text-[#0A0A0A]/70 border border-[#0A0A0A] px-2.5 py-1 bg-white inline-block">
                              SUPPORTING: Even cows need some downtime.
                            </span>
                          </div>

                          <p className="font-inter text-xs sm:text-sm text-[#0A0A0A]/85 leading-relaxed pt-1">
                            {campaign.summary}
                          </p>
                        </div>

                        <div className="pt-8 flex items-center justify-between border-t border-black/10 mt-6">
                          <span className="font-space text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A0A0A] underline underline-offset-4 decoration-2 decoration-[#DFFF00] group-hover:decoration-[#0A0A0A] transition-all">
                            EXPLORE CAMPAIGN BREAKDOWN →
                          </span>
                          <div className="w-10 h-10 border-2 border-[#0A0A0A] bg-transparent group-hover:bg-[#DFFF00] flex items-center justify-center transition-colors">
                            <ArrowUpRight className="w-5 h-5 text-[#0A0A0A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Visual Shot */}
                      <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[440px] bg-[#0A0A0A] overflow-hidden">
                        {campaign.image && (
                          <Image
                            src={campaign.image}
                            alt={campaign.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                        )}
                        <div className="absolute top-4 right-4 bg-[#0A0A0A] text-[#DFFF00] font-space text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 border border-[#DFFF00]">
                          SPEC KEY VISUAL
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-3 border border-white/20 text-[#F7F6F2]">
                          <span className="font-space text-[10px] uppercase font-bold tracking-wider text-[#DFFF00] block">
                            THE COMMERCIAL REVEAL
                          </span>
                          <span className="font-inter text-xs text-white/90">
                            A relaxed cow enjoying reels on golden hay in the barn.
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
