"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, Check, ThumbsUp, Sparkles, Film, Eye, Flame } from "lucide-react";
import { CAMPAIGNS, Campaign } from "@/lib/campaigns";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BriefModal from "@/components/BriefModal";
import confetti from "canvas-confetti";

export default function WorkVaultPage() {
  const [briefOpen, setBriefOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [votes, setVotes] = useState<Record<string, { yes: number; voted: boolean }>>({
    "bald-again-shampoo": { yes: 142, voted: false },
    "gripx-tyres": { yes: 198, voted: false },
    "dancing-cow-oatmilk": { yes: 236, voted: false },
  });

  const handleVote = (slug: string) => {
    if (votes[slug]?.voted) return;

    setVotes((prev) => ({
      ...prev,
      [slug]: {
        yes: (prev[slug]?.yes || 0) + 1,
        voted: true,
      },
    }));

    try {
      confetti({
        particleCount: 55,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#DFFF00", "#0A0A0A"],
      });
    } catch {
      // Confetti fallback
    }
  };

  const filteredCampaigns =
    activeTab === "all"
      ? CAMPAIGNS
      : CAMPAIGNS.filter((c) => c.slug === activeTab);

  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#0A0A0A] flex flex-col justify-between selection:bg-[#DFFF00] selection:text-black">
      <Navbar onOpenBrief={() => setBriefOpen(true)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full space-y-16">
        {/* Navigation Breadcrumb & Back Link */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#0A0A0A] pb-4 font-space text-xs font-bold uppercase tracking-wider">
          <Link
            href="/"
            className="inline-flex items-center gap-2 hover:bg-[#DFFF00] px-3 py-1.5 border border-[#0A0A0A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO HOME</span>
          </Link>
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#0A0A0A]/70">
            <span className="w-2 h-2 bg-[#DFFF00] border border-black inline-block animate-pulse" />
            <span>THE BORING ADS ARCHIVE // SPEC SUITE 2026</span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="space-y-6">
          <div className="inline-block">
            <span className="font-space text-xs font-bold uppercase tracking-widest bg-[#DFFF00] px-3 py-1 border-2 border-[#0A0A0A] shadow-[3px_3px_0px_#0A0A0A]">
              THE SPEC VAULT // 3 UNFILTERED CAMPAIGNS
            </span>
          </div>

          <h1 className="font-space text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-[#0A0A0A] leading-[0.88]">
            ADS WE WISH WERE REAL.
          </h1>

          <p className="font-inter text-base sm:text-xl text-[#0A0A0A]/80 max-w-3xl font-medium leading-relaxed">
            Real products deserve better than wallpaper advertising. Here are three spec concepts conceived with zero corporate cowardice, tight storytelling, and memorable visual punchlines.
          </p>

          {/* Quick Filter Pill Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-2 font-space text-xs font-bold uppercase tracking-wider">
            <span className="text-[10px] font-mono opacity-50 mr-2">FILTER BY CASE:</span>
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-1.5 border-2 border-[#0A0A0A] transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#0A0A0A] text-[#DFFF00] shadow-[2px_2px_0px_#DFFF00]"
                  : "bg-white hover:bg-[#DFFF00] text-[#0A0A0A]"
              }`}
            >
              ALL 3 CONCEPTS (3)
            </button>
            {CAMPAIGNS.map((c) => (
              <button
                key={c.slug}
                onClick={() => setActiveTab(c.slug)}
                className={`px-3.5 py-1.5 border-2 border-[#0A0A0A] transition-all cursor-pointer ${
                  activeTab === c.slug
                    ? "bg-[#0A0A0A] text-[#DFFF00] shadow-[2px_2px_0px_#DFFF00]"
                    : "bg-white hover:bg-[#DFFF00] text-[#0A0A0A]"
                }`}
              >
                {c.number} // {c.clientName}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Concept Ad Cards */}
        <div className="space-y-24">
          {filteredCampaigns.map((camp, idx) => (
            <article
              key={camp.slug}
              id={camp.slug}
              className="border-2 border-[#0A0A0A] bg-white shadow-[8px_8px_0px_#0A0A0A] overflow-hidden"
            >
              {/* Card Top Title Bar */}
              <div className="p-6 sm:p-8 bg-[#0A0A0A] text-[#F7F6F2] flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#0A0A0A]">
                <div className="flex items-center gap-3 font-space text-xs font-bold uppercase tracking-widest">
                  <span className="bg-[#DFFF00] text-[#0A0A0A] px-2.5 py-1 font-black">
                    CASE {camp.number}
                  </span>
                  <span className="border border-white/25 px-2.5 py-1 text-white/80">
                    {camp.category}
                  </span>
                </div>

                <div className="flex items-center gap-3 font-space text-xs">
                  <span className="text-[#DFFF00] font-mono uppercase tracking-wider hidden sm:inline">
                    STATUS: SPEC READY TO SHOOT
                  </span>
                  <Link
                    href={`/work/${camp.slug}`}
                    prefetch={true}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#DFFF00] text-[#0A0A0A] font-bold uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    <span>DECK DETAILS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Main Headline & Punchline Area */}
              <div className="p-6 sm:p-10 space-y-4 border-b-2 border-[#0A0A0A] bg-[#F7F6F2]">
                <div className="space-y-1">
                  <span className="font-space text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0A0A0A]/60 block">
                    BRAND: {camp.clientName}
                  </span>
                  <h2 className="font-space text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#0A0A0A] leading-[0.92]">
                    {camp.title}
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="font-space text-lg sm:text-2xl font-bold text-[#0A0A0A] bg-[#DFFF00] px-3.5 py-1.5 border-2 border-[#0A0A0A]">
                    {camp.punchline}
                  </span>
                  <span className="font-space text-xs uppercase font-extrabold tracking-wider border border-[#0A0A0A] bg-white px-3 py-1.5 text-[#0A0A0A]">
                    TAGLINE: {camp.deliverables.keyVisual.subhead.split(".")[0]}.
                  </span>
                </div>
              </div>

              {/* Visual + Concept Breakdown Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#0A0A0A]">
                {/* Visual Half */}
                <div className="lg:col-span-6 relative min-h-[380px] sm:min-h-[460px] bg-[#0A0A0A] flex flex-col justify-between overflow-hidden">
                  {camp.image ? (
                    <div className="relative w-full h-full min-h-[360px] sm:min-h-[460px]">
                      <Image
                        src={camp.image}
                        alt={camp.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                      <div className="absolute top-4 left-4 bg-[#0A0A0A]/90 text-[#DFFF00] font-space text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 border border-[#DFFF00]">
                        CAMPAIGN STILL / KEY VISUAL
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full min-h-[360px] p-8 sm:p-12 bg-[#DFFF00] text-[#0A0A0A] flex flex-col justify-between">
                      <div className="font-space text-xs font-bold uppercase tracking-widest opacity-70">
                        100% TYPOGRAPHY ATTACK
                      </div>
                      <div className="font-space text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none">
                        {camp.punchline}
                      </div>
                      <div className="font-space text-xs uppercase tracking-wider font-bold">
                        {camp.deliverables.keyVisual.subhead}
                      </div>
                    </div>
                  )}
                </div>

                {/* Narrative & Insight Half */}
                <div className="lg:col-span-6 p-6 sm:p-10 space-y-6 flex flex-col justify-between bg-white">
                  <div className="space-y-6">
                    {/* The Insight */}
                    <div className="space-y-2">
                      <span className="font-space text-[11px] font-bold uppercase tracking-widest text-[#0A0A0A]/60 block">
                        THE UNCOMFORTABLE TRUTH
                      </span>
                      <blockquote className="font-space text-lg sm:text-xl font-bold uppercase text-[#0A0A0A] leading-snug border-l-4 border-[#0A0A0A] pl-4">
                        {camp.insight}
                      </blockquote>
                    </div>

                    {/* The Concept */}
                    <div className="space-y-2">
                      <span className="font-space text-[11px] font-bold uppercase tracking-widest text-[#0A0A0A]/60 block">
                        THE COMMERCIAL CONCEPT
                      </span>
                      <p className="font-inter text-sm sm:text-base text-[#0A0A0A]/85 leading-relaxed">
                        {camp.theIdea}
                      </p>
                    </div>

                    {/* Quick Deliverable Tags */}
                    <div className="space-y-2 pt-2">
                      <span className="font-space text-[10px] font-bold uppercase tracking-widest text-[#0A0A0A]/50 block">
                        PACKAGE DELIVERABLES INCLUDED
                      </span>
                      <div className="flex flex-wrap gap-1.5 font-mono text-[10px] uppercase">
                        <span className="bg-[#F7F6F2] border border-[#0A0A0A] px-2 py-1 font-bold">
                          :30 HERO SCRIPT
                        </span>
                        <span className="bg-[#F7F6F2] border border-[#0A0A0A] px-2 py-1 font-bold">
                          STORYBOARD PANELS
                        </span>
                        <span className="bg-[#F7F6F2] border border-[#0A0A0A] px-2 py-1 font-bold">
                          OUTDOOR MONOLITH
                        </span>
                        <span className="bg-[#F7F6F2] border border-[#0A0A0A] px-2 py-1 font-bold">
                          SOCIAL MEDIA ANGLE
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Voting Pill */}
                  <div className="pt-6 border-t-2 border-[#0A0A0A] flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <span className="font-space text-[10px] font-bold uppercase tracking-wider text-[#0A0A0A]/60 block">
                        COMMUNITY VERDICT
                      </span>
                      <span className="font-space text-sm font-black text-[#0A0A0A]">
                        {votes[camp.slug]?.yes} VOTED TO PRODUCE
                      </span>
                    </div>

                    <button
                      onClick={() => handleVote(camp.slug)}
                      className={`px-4 py-2 border-2 border-[#0A0A0A] font-space text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                        votes[camp.slug]?.voted
                          ? "bg-[#0A0A0A] text-[#DFFF00]"
                          : "bg-[#DFFF00] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#DFFF00]"
                      }`}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{votes[camp.slug]?.voted ? "UPVOTED! ★" : "I'D SHOOT THIS AD"}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Collapsible/Direct Script Preview in Editorial Format */}
              <div className="border-t-2 border-[#0A0A0A] p-6 sm:p-10 bg-[#F7F6F2] space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-space text-xs font-bold uppercase tracking-wider">
                    <Film className="w-4 h-4" />
                    <span>THE :30 TVC SCRIPT // SCENE BREAKDOWN</span>
                  </div>
                  <span className="font-mono text-xs text-[#0A0A0A]/60">
                    READ TIME: 20 SECONDS
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {camp.deliverables.script.content.map((scene, sIdx) => (
                    <div
                      key={sIdx}
                      className="border-2 border-[#0A0A0A] bg-white p-4 space-y-3 shadow-[3px_3px_0px_#0A0A0A]"
                    >
                      <div className="flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-wider bg-[#0A0A0A] text-[#DFFF00] px-2 py-0.5">
                        <span>BEAT 0{sIdx + 1}</span>
                        <span>{scene.time}</span>
                      </div>
                      <div className="space-y-1">
                        <span className="font-space text-[9px] font-bold uppercase tracking-widest text-[#0A0A0A]/50 block">
                          [VISUAL]
                        </span>
                        <p className="font-inter text-xs text-[#0A0A0A] font-medium leading-relaxed">
                          {scene.visual}
                        </p>
                      </div>
                      <div className="space-y-1 pt-1 border-t border-black/10">
                        <span className="font-space text-[9px] font-bold uppercase tracking-widest text-[#0A0A0A]/50 block">
                          [AUDIO / VO]
                        </span>
                        <p className="font-inter text-xs text-[#0A0A0A]/80 italic leading-relaxed">
                          {scene.audio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Card Footer */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-black/15">
                  <div className="flex items-center gap-2 font-space text-xs text-[#0A0A0A]/70">
                    <span className="w-2 h-2 bg-[#DFFF00] border border-black inline-block" />
                    <span>OUTDOOR HEADLINE: &quot;{camp.deliverables.outdoor.headline}&quot;</span>
                  </div>

                  <Link
                    href={`/work/${camp.slug}`}
                    prefetch={true}
                    className="inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-[#F7F6F2] hover:bg-[#DFFF00] hover:text-[#0A0A0A] px-6 py-3 font-space text-xs font-bold uppercase tracking-wider border-2 border-[#0A0A0A] transition-all"
                  >
                    <span>VIEW FULL STRATEGY &amp; STORYBOARD →</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="border-2 border-[#0A0A0A] bg-[#0A0A0A] text-[#F7F6F2] p-8 sm:p-14 text-center space-y-6">
          <span className="font-space text-xs font-bold uppercase tracking-widest text-[#DFFF00] bg-white/10 px-3 py-1 border border-white/20 inline-block">
            NEED A CONCEPT LIKE THIS?
          </span>
          <h3 className="font-space text-3xl sm:text-5xl font-black uppercase tracking-tighter">
            YOUR PRODUCT ISN&apos;T BORING. YOUR MARKETING IS.
          </h3>
          <p className="font-inter text-sm sm:text-base text-white/70 max-w-xl mx-auto">
            Give us your product, your constraint, or your driest brief. We deliver 3 unfiltered campaign concepts in 48 hours for a flat fee.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setBriefOpen(true)}
              className="bg-[#DFFF00] text-[#0A0A0A] hover:bg-white border-2 border-[#DFFF00] font-space text-sm font-black uppercase tracking-wider px-8 py-4 transition-all shadow-[4px_4px_0px_#FFFFFF] cursor-pointer"
            >
              GIVE US A BRIEF →
            </button>
          </div>
        </div>
      </div>

      <Footer />

      <BriefModal isOpen={briefOpen} onClose={() => setBriefOpen(false)} />
    </main>
  );
}
