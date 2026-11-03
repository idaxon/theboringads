"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BoringLogo from "../BoringLogo";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { label: "INSTAGRAM", href: "https://www.instagram.com/theboringads_/" },
  ];

  return (
    <footer className="relative w-full bg-[#0A0A0A] text-[#F7F6F2] pt-16 pb-8 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/20 items-start">
          {/* Col 1: Wordmark & Logo Badge */}
          <div className="md:col-span-5 space-y-4">
            <BoringLogo size="lg" isDark={true} showTagline={false} />
            <p className="font-inter text-sm text-[#F7F6F2]/70 max-w-sm">
              We make the 1% of ads people actually look at, laugh at, or remember. No 80-page decks. Just concepts.
            </p>

            {/* Official Logo Mark embed */}
            <div className="pt-2 flex items-center gap-3">
              <div className="w-16 h-16 bg-[#F7F6F2] p-1.5 border border-white/20 flex items-center justify-center">
                <Image
                  src="/logo_final_tight.png"
                  alt="The Boring Ads By Daksh Official Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="text-[11px] font-space text-[#F7F6F2]/60 uppercase leading-tight">
                OFFICIAL STUDIO MARK
                <br />
                <span className="text-[#DFFF00] font-black tracking-wider">BY DAKSH // UNBORING</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-space text-xs font-bold uppercase tracking-wider">
            <span className="text-[#DFFF00] block text-[11px] tracking-widest mb-4">
              DIRECTORY
            </span>
            <div>
              <Link href="/work" prefetch={true} className="hover:text-[#DFFF00] transition-colors block py-1">
                SELECTED WORK (VAULT) ↗
              </Link>
              <Link href="/thinking" prefetch={true} className="hover:text-[#DFFF00] transition-colors block py-1 text-[#DFFF00]">
                THINKING &amp; METHODS ↗
              </Link>
              <Link href="/#services" className="hover:text-[#DFFF00] transition-colors block py-1">
                DISCIPLINES &amp; CRAFT
              </Link>
              <Link href="/#manifesto" className="hover:text-[#DFFF00] transition-colors block py-1">
                PORTFOLIO MANIFESTO
              </Link>
              <Link href="/#pricing" className="hover:text-[#DFFF00] transition-colors block py-1">
                COMMISSION WORK
              </Link>
            </div>
          </div>

          {/* Col 3: Socials & Live Clock */}
          <div className="md:col-span-4 space-y-4 font-space text-xs">
            <span className="text-[#DFFF00] block text-[11px] font-bold tracking-widest uppercase">
              NETWORK & TELEMETRY
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 border border-white/20 bg-white/5 hover:bg-[#DFFF00] hover:text-[#0A0A0A] hover:border-[#DFFF00] transition-all uppercase font-bold text-xs group"
                >
                  <span>{s.label} (@THEBORINGADS_)</span>
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/15 space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#DFFF00] animate-pulse inline-block" />
                <span className="text-[#F7F6F2]/90 font-mono">
                  STUDIO TIME: {time || "19:45:00"} IST
                </span>
              </div>
              <p className="text-[#F7F6F2]/50 text-[11px]">
                ALL BRAIN CELLS CURRENTLY AWAKE AND DRINKING BLACK COFFEE.
              </p>
            </div>
          </div>
        </div>

        {/* Giant Faded Wordmark Full Bleed across bottom */}
        <div className="pt-12 pb-6">
          <div className="font-space font-black uppercase tracking-tighter text-[#F7F6F2]/10 text-[9.5vw] leading-[0.85] select-none text-center flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
            <span>THE BORING ADS</span>
            <span className="text-[4.5vw] text-[#DFFF00]/25 font-mono tracking-tight self-center">
              BY DAKSH
            </span>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-space text-[11px] uppercase tracking-wider text-[#F7F6F2]/50">
          <span>
            © 2026 THE BORING ADS BY DAKSH. ALL RIGHTS RESERVED. (EVEN THE BORING ONES).
          </span>
          <span className="text-[#DFFF00]">
            NO TRACKING COOKIES. NO POPUP NEWSLETTERS.
          </span>
        </div>
      </div>
    </footer>
  );
}
