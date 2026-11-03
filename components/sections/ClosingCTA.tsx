"use client";

import React from "react";
import TextSwapButton from "../TextSwapButton";

interface ClosingCTAProps {
  onOpenBrief?: () => void;
}

export default function ClosingCTA({ onOpenBrief }: ClosingCTAProps) {
  return (
    <section className="relative w-full py-24 md:py-36 bg-[#F7F6F2] border-b-2 border-[#0A0A0A] overflow-hidden text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Eyebrow */}
        <div className="inline-block">
          <span className="font-space text-sm sm:text-base font-black uppercase tracking-widest text-[#0A0A0A] bg-[#DFFF00] px-3.5 py-1 border-2 border-[#0A0A0A]">
            GOT A BORING PRODUCT?
          </span>
        </div>

        {/* Giant "GOOD." */}
        <h2 className="font-space font-black uppercase tracking-tighter text-[#0A0A0A] text-[20vw] sm:text-[18vw] lg:text-[16vw] leading-[0.8] select-none">
          GOOD.
        </h2>

        {/* Deadpan explanation */}
        <p className="font-inter text-base sm:text-xl text-[#0A0A0A]/80 max-w-xl mx-auto font-medium leading-relaxed">
          The more boring the category, the funnier and more potent the breakthrough. B2B software, insurance, fasteners, accounting — give us your dryest brief.
        </p>

        {/* CTA */}
        <div className="pt-4 flex justify-center">
          <TextSwapButton
            primaryText="GIVE US A BRIEF →"
            secondaryText="WAKE UP YOUR PRODUCT →"
            variant="filled"
            onClick={onOpenBrief}
            className="!py-5 !px-10 !text-base sm:!text-lg shadow-[6px_6px_0px_#0A0A0A]"
          />
        </div>
      </div>
    </section>
  );
}
