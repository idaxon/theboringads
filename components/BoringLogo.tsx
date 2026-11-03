"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BoringMascot from "./BoringMascot";

interface BoringLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  withLink?: boolean;
  isDark?: boolean;
  variant?: "image" | "interactive";
}

export default function BoringLogo({
  className = "",
  size = "md",
  showTagline = true,
  withLink = true,
  isDark = false,
  variant = "image",
}: BoringLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Height definitions for the cropped logo_final_tight.png
  const imageHeights = {
    sm: "h-9 sm:h-10",
    md: "h-11 sm:h-13",
    lg: "h-16 sm:h-20",
    xl: "h-24 sm:h-28",
  };

  // Text scaling for interactive variant
  const mascotSizes = {
    sm: 22,
    md: 28,
    lg: 44,
    xl: 64,
  };

  const textClasses = {
    sm: "text-lg tracking-tighter",
    md: "text-2xl tracking-tighter",
    lg: "text-4xl tracking-tighter",
    xl: "text-6xl tracking-tighter",
  };

  const colorClass = isDark ? "text-white" : "text-[#0A0A0A]";

  // Variant 1: Official Logo Asset (logo_final_tight.png) with creative "BY DAKSH" lockup
  if (variant === "image") {
    const imageContent = (
      <div
        className={`group inline-flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Logo Image container */}
        <div className="relative flex items-center">
          <div className="relative transition-all duration-300 group-hover:scale-[1.03]">
            <Image
              src="/logo_final_tight.png"
              alt="The Boring Ads By Daksh — Creative Concept Studio"
              width={210}
              height={143}
              priority
              className={`${imageHeights[size]} w-auto object-contain mix-blend-multiply filter contrast-125 transition-all drop-shadow-xs`}
            />
          </div>
        </div>

        {/* Creative "BY DAKSH" Lockup & Studio Badge */}
        <div
          className={`flex items-center pl-2.5 sm:pl-3.5 border-l-2 ${
            isDark ? "border-white/25" : "border-[#0A0A0A]"
          } transition-colors`}
        >
          <div className="flex flex-col justify-center font-space leading-tight select-none">
            {/* Top row: By Daksh creative badge with yellow accent */}
            <div className="flex items-center gap-1.5 leading-none">
              <span
                className={`text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase ${
                  isDark ? "text-white/70" : "text-[#0A0A0A]/60"
                }`}
              >
                BY
              </span>
              <span
                className={`px-1.5 py-0.5 text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 border ${
                  isDark
                    ? "bg-[#DFFF00] text-[#0A0A0A] border-[#DFFF00] shadow-[2px_2px_0px_rgba(255,255,255,0.25)] group-hover:bg-white group-hover:text-black group-hover:shadow-[2px_2px_0px_#DFFF00]"
                    : "bg-[#0A0A0A] text-[#DFFF00] border-[#0A0A0A] shadow-[2px_2px_0px_#DFFF00] group-hover:bg-[#DFFF00] group-hover:text-[#0A0A0A] group-hover:shadow-[2px_2px_0px_#0A0A0A]"
                }`}
              >
                DAKSH
              </span>
              <span
                className={`w-1.5 h-1.5 rounded-none border border-black transition-transform duration-300 ${
                  isHovered ? "bg-[#DFFF00] rotate-45 scale-125" : "bg-[#DFFF00] animate-pulse"
                }`}
              />
            </div>

            {/* Bottom subtitle / tagline */}
            {showTagline && (
              <div
                className={`flex items-center gap-1.5 text-[8px] sm:text-[9px] tracking-wide uppercase mt-1 ${
                  isDark ? "text-white/60" : "text-[#0A0A0A]/70"
                }`}
              >
                <span
                  className={`hidden sm:inline-block font-mono font-bold text-[8px] px-1 py-[0.5px] border ${
                    isDark
                      ? "bg-white/10 text-[#DFFF00] border-white/20"
                      : "bg-[#0A0A0A] text-[#DFFF00] border-[#0A0A0A]"
                  }`}
                >
                  DIR.
                </span>
                <span className="font-semibold">
                  {isHovered ? "AWAKE & UNBORING" : "CONCEPT STUDIO"}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    );

    if (withLink) {
      return (
        <Link href="/" className="inline-block outline-none" aria-label="The Boring Ads By Daksh Home">
          {imageContent}
        </Link>
      );
    }
    return imageContent;
  }

  // Variant 2: Animated SVG Wordmark
  const interactiveContent = (
    <div
      className={`group inline-flex items-center gap-3 font-space font-bold uppercase select-none ${colorClass} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className={`flex items-baseline font-black leading-none ${textClasses[size]}`}>
            <span>THE&nbsp;B</span>
            <span className="inline-flex items-center mx-[1px] relative self-center -translate-y-[1px]">
              <BoringMascot
                size={mascotSizes[size]}
                isAwake={isHovered}
                accentHair={true}
                interactive={true}
              />
            </span>
            <span>RING&nbsp;ADS</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 mt-1 font-mono text-[10px] tracking-wider">
          <span className={`text-[9px] font-bold ${isDark ? "text-white/60" : "text-[#0A0A0A]/60"}`}>BY</span>
          <span className={`px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider border transition-colors ${
            isDark
              ? "bg-[#DFFF00] text-[#0A0A0A] border-[#DFFF00]"
              : "bg-[#0A0A0A] text-[#DFFF00] border-[#0A0A0A] group-hover:bg-[#DFFF00] group-hover:text-[#0A0A0A]"
          }`}>
            DAKSH
          </span>
          <span className={`text-[8px] uppercase tracking-widest ml-1 ${isDark ? "text-white/40" : "text-[#0A0A0A]/40"}`}>
            {"// CONCEPT STUDIO"}
          </span>
        </div>
      </div>

      {showTagline && (
        <div
          className={`hidden md:flex items-center pl-3 border-l ${
            isDark ? "border-white/30 text-white/70" : "border-black/30 text-black/70"
          } font-inter normal-case font-normal text-xs tracking-normal leading-tight max-w-[130px]`}
        >
          Making boring brands unboring.
        </div>
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link href="/" className="inline-block outline-none" aria-label="The Boring Ads By Daksh Home">
        {interactiveContent}
      </Link>
    );
  }

  return interactiveContent;
}
