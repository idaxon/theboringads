"use client";

import React, { useState } from "react";

interface ConceptVisualProps {
  type: "purple-cow" | "curiosity-gap" | "social-currency" | "pattern-interrupt" | "von-restorff" | "emotional-positioning" | "salt-in-tea" | "honest-error";
  className?: string;
  isInteractive?: boolean;
}

export default function ConceptVisual({
  type,
  className = "",
  isInteractive = true,
}: ConceptVisualProps) {
  const [revealed, setRevealed] = useState(false);

  switch (type) {
    case "purple-cow":
      return (
        <div
          className={`relative w-full h-36 bg-[#EBEAE4] border border-[#0A0A0A]/20 p-4 flex flex-col justify-between overflow-hidden group select-none ${className}`}
        >
          <div className="flex items-center justify-between text-[10px] font-space font-bold uppercase tracking-wider text-[#0A0A0A]/60">
            <span>FIELD: 16 UNITS</span>
            <span className="text-[#0A0A0A] font-mono">1/16 ANOMALY</span>
          </div>

          <div className="grid grid-cols-8 gap-1.5 my-auto">
            {Array.from({ length: 16 }).map((_, i) => {
              const isAnomaly = i === 10;
              return (
                <div
                  key={i}
                  className={`h-5 transition-all duration-300 border ${
                    isAnomaly
                      ? "bg-[#DFFF00] border-[#0A0A0A] shadow-[2px_2px_0px_#0A0A0A] scale-110 z-10"
                      : "bg-[#F7F6F2] border-[#0A0A0A]/30 group-hover:opacity-40"
                  }`}
                />
              );
            })}
          </div>

          <div className="flex items-center justify-between text-[9px] font-space uppercase tracking-widest text-[#0A0A0A]/70">
            <span>ORDINARY (0% SHARE)</span>
            <span className="font-bold text-[#0A0A0A] bg-[#DFFF00] px-1 border border-black/30">REMARKABLE →</span>
          </div>
        </div>
      );

    case "curiosity-gap":
      return (
        <div
          onClick={() => isInteractive && setRevealed(!revealed)}
          className={`relative w-full h-36 bg-[#0A0A0A] text-[#F7F6F2] border border-[#0A0A0A] p-4 flex flex-col justify-between overflow-hidden cursor-pointer select-none group ${className}`}
          title="Click to reveal gap"
        >
          <div className="flex items-center justify-between text-[10px] font-space font-bold uppercase tracking-wider text-[#F7F6F2]/60">
            <span>INFORMATION ASYMMETRY</span>
            <span className="text-[#DFFF00] text-[9px]">
              {revealed ? "[GAP RESOLVED]" : "[TAP TO REVEAL]"}
            </span>
          </div>

          <div className="space-y-1.5 my-auto font-space text-xs sm:text-sm font-bold tracking-tight">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span>THE SECRET</span>
              <span
                className={`transition-all duration-300 px-1 py-0.5 text-xs ${
                  revealed
                    ? "bg-[#DFFF00] text-[#0A0A0A]"
                    : "bg-[#F7F6F2] text-[#F7F6F2] select-none"
                }`}
              >
                {revealed ? "NOBODY ADMITS" : "•••••••••••••"}
              </span>
              <span>ABOUT</span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span>YOUR PRODUCT IS</span>
              <span
                className={`transition-all duration-300 px-1 py-0.5 text-xs ${
                  revealed
                    ? "bg-[#DFFF00] text-[#0A0A0A]"
                    : "bg-[#F7F6F2] text-[#F7F6F2] select-none"
                }`}
              >
                {revealed ? "WHY THEY BUY" : "••••••••••••"}
              </span>
            </div>
          </div>

          <div className="text-[9px] font-space uppercase tracking-widest text-[#F7F6F2]/50 flex justify-between">
            <span>TENSION OPENED</span>
            <span>TENSION HELD</span>
          </div>
        </div>
      );

    case "social-currency":
      return (
        <div
          className={`relative w-full h-36 bg-[#EBEAE4] border border-[#0A0A0A]/20 p-4 flex flex-col justify-between overflow-hidden group select-none ${className}`}
        >
          <div className="flex items-center justify-between text-[10px] font-space font-bold uppercase tracking-wider text-[#0A0A0A]/60">
            <span>TRANSMISSION TOPOLOGY</span>
            <span className="text-[#0A0A0A] font-mono">K-FACTOR &gt; 1.0</span>
          </div>

          {/* Network SVG vector */}
          <div className="my-auto w-full flex items-center justify-center">
            <svg viewBox="0 0 280 44" className="w-full max-w-[260px] h-10 overflow-visible">
              {/* Lines */}
              <line x1="30" y1="22" x2="110" y2="22" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="110" y1="22" x2="190" y2="10" stroke="#0A0A0A" strokeWidth="1.5" />
              <line x1="110" y1="22" x2="190" y2="34" stroke="#0A0A0A" strokeWidth="1.5" />
              <line x1="190" y1="10" x2="250" y2="10" stroke="#0A0A0A" strokeWidth="1.5" />
              <line x1="190" y1="34" x2="250" y2="34" stroke="#0A0A0A" strokeWidth="1.5" />

              {/* Node 1: Concept */}
              <rect x="10" y="12" width="24" height="20" fill="#0A0A0A" />
              <text x="22" y="26" textAnchor="middle" fill="#DFFF00" fontSize="8" fontFamily="sans-serif" fontWeight="bold">IDEA</text>

              {/* Node 2: Viewer */}
              <circle cx="110" cy="22" r="8" fill="#F7F6F2" stroke="#0A0A0A" strokeWidth="2" />

              {/* Node 3 & 4: Forwarded to peer / group chat */}
              <rect x="180" y="2" width="18" height="16" fill="#DFFF00" stroke="#0A0A0A" strokeWidth="1.5" />
              <text x="189" y="14" textAnchor="middle" fill="#0A0A0A" fontSize="7" fontFamily="sans-serif" fontWeight="bold">DM</text>

              <rect x="180" y="26" width="18" height="16" fill="#DFFF00" stroke="#0A0A0A" strokeWidth="1.5" />
              <text x="189" y="38" textAnchor="middle" fill="#0A0A0A" fontSize="7" fontFamily="sans-serif" fontWeight="bold">CHAT</text>

              {/* Outer nodes */}
              <circle cx="255" cy="10" r="5" fill="#0A0A0A" />
              <circle cx="255" cy="34" r="5" fill="#0A0A0A" />
            </svg>
          </div>

          <div className="flex items-center justify-between text-[9px] font-space uppercase tracking-widest text-[#0A0A0A]/70">
            <span>BROADCAST (SLOW)</span>
            <span className="font-bold text-[#0A0A0A]">PEER DISPATCH (INSTANT)</span>
          </div>
        </div>
      );

    case "pattern-interrupt":
      return (
        <div
          className={`relative w-full h-36 bg-[#EBEAE4] border border-[#0A0A0A]/20 p-4 flex flex-col justify-between overflow-hidden group select-none ${className}`}
        >
          <div className="flex items-center justify-between text-[10px] font-space font-bold uppercase tracking-wider text-[#0A0A0A]/60">
            <span>EXPECTED CADENCE</span>
            <span className="bg-[#0A0A0A] text-[#DFFF00] px-1 font-mono text-[9px]">DISRUPTION POINT</span>
          </div>

          {/* Barcode / waveform interrupted */}
          <div className="flex items-end justify-between gap-1 my-auto h-12 px-2">
            {[16, 16, 16, 16, 16, 16, 44, 16, 16, 16, 16, 16, 16].map((h, i) => {
              const isSpike = i === 6;
              return (
                <div
                  key={i}
                  style={{ height: `${h}px` }}
                  className={`w-3 sm:w-3.5 transition-all duration-300 border ${
                    isSpike
                      ? "bg-[#DFFF00] border-[#0A0A0A] border-2 shadow-[2px_2px_0px_#0A0A0A] -translate-y-1"
                      : "bg-[#0A0A0A]/30 border-transparent group-hover:opacity-60"
                  }`}
                />
              );
            })}
          </div>

          <div className="flex items-center justify-between text-[9px] font-space uppercase tracking-widest text-[#0A0A0A]/70">
            <span>AUTOMATIC SCROLL</span>
            <span className="font-bold text-[#0A0A0A]">HYPNOTIC TRANCE BROKEN</span>
          </div>
        </div>
      );

    case "von-restorff":
      return (
        <div
          className={`relative w-full h-36 bg-[#EBEAE4] border border-[#0A0A0A]/20 p-4 flex flex-col justify-between overflow-hidden group select-none ${className}`}
        >
          <div className="flex items-center justify-between text-[10px] font-space font-bold uppercase tracking-wider text-[#0A0A0A]/60">
            <span>HOMOGENEOUS CONTEXT</span>
            <span className="text-[#0A0A0A] font-mono">ISOLATION EFFECT</span>
          </div>

          {/* Architectural monoliths with one isolated stand-out */}
          <div className="flex items-end justify-center gap-3 my-auto h-14">
            <div className="w-6 h-8 bg-[#0A0A0A]/20 border border-[#0A0A0A]/40" />
            <div className="w-6 h-8 bg-[#0A0A0A]/20 border border-[#0A0A0A]/40" />
            <div className="w-6 h-8 bg-[#0A0A0A]/20 border border-[#0A0A0A]/40" />
            {/* The Isolated Hero */}
            <div className="relative w-8 h-14 bg-[#0A0A0A] border-2 border-[#0A0A0A] shadow-[3px_3px_0px_#DFFF00] flex flex-col justify-between p-1">
              <span className="w-full h-1.5 bg-[#DFFF00] block" />
              <span className="text-[7px] text-[#F7F6F2] font-space font-bold text-center">STAND</span>
            </div>
            <div className="w-6 h-8 bg-[#0A0A0A]/20 border border-[#0A0A0A]/40" />
            <div className="w-6 h-8 bg-[#0A0A0A]/20 border border-[#0A0A0A]/40" />
            <div className="w-6 h-8 bg-[#0A0A0A]/20 border border-[#0A0A0A]/40" />
          </div>

          <div className="flex items-center justify-between text-[9px] font-space uppercase tracking-widest text-[#0A0A0A]/70">
            <span>BLURRED COMPETITORS</span>
            <span className="font-bold text-[#0A0A0A] bg-[#DFFF00] px-1">PERSISTENT MEMORY</span>
          </div>
        </div>
      );

    case "emotional-positioning":
      return (
        <div
          className={`relative w-full h-36 bg-[#EBEAE4] border border-[#0A0A0A]/20 p-4 flex flex-col justify-between overflow-hidden group select-none ${className}`}
        >
          <div className="flex items-center justify-between text-[10px] font-space font-bold uppercase tracking-wider text-[#0A0A0A]/60">
            <span>DECISION MECHANISM</span>
            <span className="text-[#0A0A0A] font-mono">LIMBIC &gt; RATIONAL</span>
          </div>

          {/* 2x2 Insight Vector */}
          <div className="relative w-full h-14 my-auto border-l-2 border-b-2 border-[#0A0A0A] px-2 flex items-center justify-between">
            {/* Low resonance quadrant */}
            <div className="text-[8px] font-space font-bold text-[#0A0A0A]/40 uppercase">
              FEATURE CLAIMS
              <br />
              (FORGETTABLE)
            </div>

            {/* High resonance marker */}
            <div className="flex items-center gap-1.5 bg-[#0A0A0A] text-[#F7F6F2] px-2 py-1 border border-[#0A0A0A] shadow-[2px_2px_0px_#DFFF00]">
              <span className="w-2 h-2 rounded-full bg-[#DFFF00] animate-pulse" />
              <span className="text-[9px] font-space font-black tracking-wider uppercase">
                HUMAN TRUTH
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-space uppercase tracking-widest text-[#0A0A0A]/70">
            <span>SPEC SHEET</span>
            <span className="font-bold text-[#0A0A0A]">VISCERAL CONVICTION</span>
          </div>
        </div>
      );

    case "salt-in-tea":
      return (
        <div
          className={`relative w-full h-36 bg-[#0A0A0A] text-[#F7F6F2] border-2 border-[#0A0A0A] p-4 flex flex-col justify-between overflow-hidden group select-none ${className}`}
        >
          <div className="flex items-center justify-between text-[10px] font-space font-bold uppercase tracking-wider text-[#F7F6F2]/70">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#DFFF00] inline-block" />
              <span>THE FORMULA LAB</span>
            </span>
            <span className="text-[#DFFF00] font-mono text-[9px]">[SALT × RECIPE]</span>
          </div>

          {/* Recipe vs Salt Visual Pipeline */}
          <div className="my-auto space-y-1.5">
            <div className="flex items-center gap-1 font-mono text-[9px] sm:text-[10px] text-[#F7F6F2]/60">
              <span className="px-1 bg-[#1A1A1A] border border-white/20">WATER + MILK + TEA + SUGAR</span>
              <span>→</span>
              <span className="text-[#F7F6F2]/40">NORMAL (FORGOTTEN)</span>
            </div>

            <div className="flex items-center gap-1.5 font-space font-black text-xs sm:text-sm text-[#DFFF00] bg-[#DFFF00]/10 border border-[#DFFF00]/40 px-2 py-1">
              <span className="bg-[#DFFF00] text-[#0A0A0A] px-1 text-[10px] uppercase font-bold">+ PINCH OF SALT</span>
              <span>=</span>
              <span className="text-[#F7F6F2] tracking-wider uppercase">PERMANENT RECALL ★</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-space uppercase tracking-widest text-[#F7F6F2]/50">
            <span>FAMILIAR RECIPE</span>
            <span className="text-[#DFFF00] font-bold">UNEXPECTED ELEMENT →</span>
          </div>
        </div>
      );

    case "honest-error":
      return (
        <div
          onClick={() => isInteractive && setRevealed(!revealed)}
          className={`relative w-full h-36 bg-[#F7F6F2] border-2 border-[#0A0A0A] p-4 flex flex-col justify-between overflow-hidden group select-none cursor-pointer ${className}`}
          title="Click to toggle between conventional hide vs honest error reframe"
        >
          <div className="flex items-center justify-between text-[10px] font-space font-bold uppercase tracking-wider text-[#0A0A0A]/70">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0A0A0A] inline-block" />
              <span>FIG. TECH-02.1 — THE REFRAME PIPELINE</span>
            </span>
            <span className="font-mono text-[#0A0A0A]/60">[CLICK TO TOGGLE]</span>
          </div>

          {!revealed ? (
            <div className="my-auto space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm sm:text-base font-black text-[#0A0A0A] line-through decoration-red-500 decoration-2">
                  DEFINATELY
                </span>
                <span className="font-space font-black text-xs text-red-600 bg-red-100 px-1 border border-red-300">
                  ERROR
                </span>
                <span className="text-xs text-[#0A0A0A]/60">→</span>
                <span className="font-space font-bold text-xs text-[#0A0A0A] bg-[#DFFF00] px-1.5 py-0.5 border border-[#0A0A0A]">
                  OWN IT: “TEAM NEEDED A CUP”
                </span>
              </div>
              <p className="text-[10px] font-inter text-[#0A0A0A]/70 italic">
                “Drink our coffee. Stay awake. Spell correctly.”
              </p>
            </div>
          ) : (
            <div className="my-auto space-y-1 bg-[#0A0A0A] text-[#F7F6F2] p-2 border border-black">
              <div className="flex items-center justify-between text-[9px] font-space font-bold text-red-400 uppercase">
                <span>CONVENTIONAL: HIDE &amp; REPRINT</span>
                <span>(BORING &amp; FORGOTTEN)</span>
              </div>
              <div className="text-[10px] font-space font-black text-[#DFFF00] uppercase">
                HONEST ERROR: TURN FLAW INTO HEADLINE ★
              </div>
            </div>
          )}

          <div className="flex items-center justify-between text-[9px] font-space uppercase tracking-widest text-[#0A0A0A]/60">
            <span>HARMFUL FLAW: NEVER</span>
            <span className="font-bold text-[#0A0A0A]">HONEST OWNERSHIP → MEMORY</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
