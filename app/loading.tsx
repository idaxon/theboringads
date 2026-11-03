"use client";

import React from "react";

export default function Loading() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none"
      role="status"
      aria-label="Loading..."
    >
      <div className="h-1 w-full bg-[#0A0A0A]/10 overflow-hidden">
        <div className="h-full bg-[#DFFF00] border-b border-[#0A0A0A] animate-pulse w-full origin-left" />
      </div>
      <div className="absolute top-2 right-4 bg-[#0A0A0A] text-[#DFFF00] text-[10px] font-mono px-2 py-0.5 border border-black shadow-[2px_2px_0px_#0A0A0A] flex items-center gap-1.5 opacity-90">
        <span className="w-1.5 h-1.5 bg-[#DFFF00] rounded-none animate-ping inline-block" />
        <span>UNBORING IN PROGRESS...</span>
      </div>
    </div>
  );
}
