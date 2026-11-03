"use client";

import React from "react";
import TextSwapButton from "../TextSwapButton";

interface PricingProps {
  onOpenBrief?: () => void;
}

export default function Pricing({ onOpenBrief }: PricingProps) {
  return (
    <section
      id="pricing"
      className="relative w-full py-24 sm:py-32 border-b-2 border-[#0A0A0A] bg-[#F7F6F2] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Brutalist Card */}
        <div className="border-2 border-[#0A0A0A] bg-white p-8 sm:p-14 md:p-16 shadow-[10px_10px_0px_#0A0A0A] relative text-center">
          {/* Top Stamp Tag */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#DFFF00] border-2 border-[#0A0A0A] px-4 py-0.5 font-space text-[11px] font-black uppercase tracking-widest text-[#0A0A0A]">
            COMMISSION A PROJECT
          </div>

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/70 mb-4 pt-2">
            <span className="w-2 h-2 bg-[#DFFF00] border border-black inline-block animate-pulse" />
            <span>DIRECT CREATIVE ENGAGEMENT</span>
          </div>

          {/* Giant Headline */}
          <h2 className="font-space text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter text-[#0A0A0A] leading-[0.9]">
            GIVE US A BRIEF.
          </h2>

          {/* Deadpan Copy */}
          <p className="font-inter text-base sm:text-lg md:text-xl text-[#0A0A0A]/75 max-w-2xl mx-auto mt-6 leading-relaxed">
            We don’t do public rate cards because enterprise database software and decaf coffee don’t cost the same to unboring. Give us a 60-second brief — we’ll reply with one raw creative concept and an exact flat sprint price.
          </p>

          {/* Massive Action Button */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4">
            <div className="w-full max-w-md">
              <TextSwapButton
                primaryText="GIVE US A BRIEF →"
                secondaryText="NO BORING SLIDES →"
                variant="filled"
                onClick={onOpenBrief}
                className="w-full !py-5 !text-base sm:!text-lg shadow-[4px_4px_0px_#DFFF00]"
              />
            </div>
          </div>

          {/* Minimal 3-Point Guarantee Bar */}
          <div className="mt-12 pt-8 border-t-2 border-[#0A0A0A] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-space text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
            <div className="p-2 bg-[#F7F6F2] border border-[#0A0A0A]">
              ⚡ ONE FLAT SPRINT FEE
            </div>
            <div className="p-2 bg-[#F7F6F2] border border-[#0A0A0A]">
              ⏱ 24H PRICING TURNAROUND
            </div>
            <div className="p-2 bg-[#F7F6F2] border border-[#0A0A0A]">
              🔒 100% CONFIDENTIAL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
