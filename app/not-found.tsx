"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BoringMascot from "@/components/BoringMascot";
import confetti from "canvas-confetti";

export default function NotFound() {
  const router = useRouter();
  const [isAwake, setIsAwake] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleWakeUp = () => {
    setIsAwake(true);
    setIsRedirecting(true);

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#DFFF00", "#0A0A0A"],
      });
    } catch {
      // Confetti fallback
    }

    setTimeout(() => {
      router.push("/");
    }, 900);
  };

  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#0A0A0A] flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="max-w-xl w-full border-2 border-[#0A0A0A] bg-[#FFFFFF] p-8 sm:p-14 shadow-[10px_10px_0px_#0A0A0A] space-y-8">
        {/* Sleeping / Waking Mascot */}
        <div className="flex justify-center">
          <div className="p-4 bg-[#F7F6F2] border-2 border-[#0A0A0A] inline-block">
            <BoringMascot
              size={100}
              isAwake={isAwake}
              interactive={false}
              accentHair={true}
            />
          </div>
        </div>

        {/* 404 Copy */}
        <div className="space-y-3">
          <span className="font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/60 bg-[#DFFF00] px-3 py-1 border border-black inline-block">
            ERROR 404 // DEAD URL
          </span>
          <h1 className="font-space text-4xl sm:text-6xl font-black uppercase tracking-tighter text-[#0A0A0A]">
            BORING.
          </h1>
          <p className="font-inter text-base sm:text-lg text-[#0A0A0A]/80 max-w-sm mx-auto">
            The page you&apos;re looking for fell asleep. 😴
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2 space-y-3">
          <button
            onClick={handleWakeUp}
            disabled={isRedirecting}
            className="w-full sm:w-auto bg-[#0A0A0A] text-[#F7F6F2] hover:bg-[#DFFF00] hover:text-[#0A0A0A] border-2 border-[#0A0A0A] font-space text-sm font-bold uppercase tracking-wider px-8 py-4 transition-colors cursor-pointer"
          >
            {isRedirecting ? "WAKING UP! RETURNING HOME..." : "WAKE IT UP →"}
          </button>
          <p className="font-mono text-[10px] tracking-widest text-[#0A0A0A]/40 uppercase">
            THE BORING ADS · BY DAKSH
          </p>
        </div>
      </div>
    </main>
  );
}
