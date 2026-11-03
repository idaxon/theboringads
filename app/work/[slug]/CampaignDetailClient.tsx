"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ThumbsUp, ThumbsDown } from "lucide-react";
import { Campaign, CAMPAIGNS } from "@/lib/campaigns";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import TextSwapButton from "@/components/TextSwapButton";
import BriefModal from "@/components/BriefModal";
import confetti from "canvas-confetti";

interface CampaignDetailClientProps {
  campaign: Campaign;
}

export default function CampaignDetailClient({ campaign }: CampaignDetailClientProps) {
  const [briefOpen, setBriefOpen] = useState(false);
  const [vote, setVote] = useState<"yes" | "no" | null>(null);
  const [votesCount, setVotesCount] = useState({ yes: 89, no: 11 });

  const handleVote = (choice: "yes" | "no") => {
    if (vote) return;
    setVote(choice);
    if (choice === "yes") {
      setVotesCount((prev) => ({ ...prev, yes: prev.yes + 1 }));
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#DFFF00", "#0A0A0A"],
        });
      } catch {
        // Confetti fallback
      }
    } else {
      setVotesCount((prev) => ({ ...prev, no: prev.no + 1 }));
    }
  };

  const totalVotes = votesCount.yes + votesCount.no;
  const yesPct = Math.round((votesCount.yes / totalVotes) * 100);
  const noPct = 100 - yesPct;

  // Next campaign link
  const currentIndex = CAMPAIGNS.findIndex((c) => c.slug === campaign.slug);
  const nextCampaign = CAMPAIGNS[(currentIndex + 1) % CAMPAIGNS.length];

  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#0A0A0A] flex flex-col justify-between selection:bg-[#0A0A0A] selection:text-[#DFFF00]">
      <Navbar onOpenBrief={() => setBriefOpen(true)} />

      {/* Main Campaign Content */}
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full space-y-16 sm:space-y-24">
        {/* Back Link & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#0A0A0A] pb-6 font-space text-xs font-bold uppercase tracking-wider">
          <Link
            href="/work"
            prefetch={true}
            className="inline-flex items-center gap-2 hover:bg-[#DFFF00] px-3 py-1.5 border border-[#0A0A0A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO WORK VAULT</span>
          </Link>
          <div className="flex items-center gap-4 text-[#0A0A0A]/60">
            <span>CLIENT: {campaign.clientName}</span>
            <span>•</span>
            <span>CATEGORY: {campaign.category}</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="space-y-6">
          <div className="space-y-3">
            <span className="font-space text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0A0A0A]/60 block">
              SPEC CAMPAIGN {campaign.number}
            </span>
            <h1 className="font-space text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-[#0A0A0A] leading-[0.9]">
              {campaign.title}
            </h1>
          </div>

          <p className="font-space text-2xl sm:text-4xl font-bold text-[#0A0A0A] tracking-tight bg-[#DFFF00] inline-block px-3 py-1 border-2 border-[#0A0A0A]">
            {campaign.punchline}
          </p>

          {/* Hero Visual */}
          {campaign.image ? (
            <div className="relative w-full h-[360px] sm:h-[560px] border-2 border-[#0A0A0A] overflow-hidden bg-[#0A0A0A] mt-8">
              <Image
                src={campaign.image}
                alt={campaign.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-full bg-[#0A0A0A] text-[#F7F6F2] p-12 sm:p-20 border-2 border-[#0A0A0A] mt-8">
              <p className="font-space text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight text-[#DFFF00]">
                “{campaign.punchline}”
              </p>
              <span className="font-space text-xs uppercase tracking-widest text-white/50 block mt-4">
                100% COPYWRITING & TYPOGRAPHY SYSTEM
              </span>
            </div>
          )}
        </div>

        {/* 1. THE BRIEF */}
        <section className="border-t-2 border-[#0A0A0A] pt-12 sm:pt-16 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/60 block mb-2">
              01 // CONTEXT
            </span>
            <h2 className="font-space text-2xl sm:text-3xl font-black uppercase tracking-tight">
              THE BRIEF.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="font-inter text-lg sm:text-xl text-[#0A0A0A] font-medium leading-relaxed bg-[#FFFFFF] p-6 sm:p-8 border-2 border-[#0A0A0A] shadow-[6px_6px_0px_#0A0A0A]">
              {campaign.brief}
            </p>
          </div>
        </section>

        {/* 2. THE INSIGHT (Giant Editorial Type) */}
        <section className="border-y-2 border-[#0A0A0A] py-16 sm:py-24 bg-[#0A0A0A] text-[#F7F6F2] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            <span className="font-space text-xs font-bold uppercase tracking-widest text-[#DFFF00] block">
              02 // UNCOMFORTABLE TRUTH
            </span>
            <blockquote className="font-space text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[1.05] text-[#F7F6F2]">
              {campaign.insight}
            </blockquote>
          </div>
        </section>

        {/* 3. THE IDEA */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/60 block mb-2">
              03 // CREATIVE THESIS
            </span>
            <h2 className="font-space text-2xl sm:text-3xl font-black uppercase tracking-tight">
              THE IDEA.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4">
            <p className="font-inter text-lg sm:text-xl text-[#0A0A0A] font-normal leading-relaxed">
              {campaign.theIdea}
            </p>
          </div>
        </section>

        {/* 4. DELIVERABLES BREAKDOWN */}
        <section className="border-t-2 border-[#0A0A0A] pt-12 sm:pt-16 space-y-12">
          <div>
            <span className="font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/60 block mb-2">
              04 // COMPLETE SPEC PACK
            </span>
            <h2 className="font-space text-3xl sm:text-5xl font-black uppercase tracking-tight">
              DELIVERABLES INCLUDED.
            </h2>
          </div>

          {/* Script Box */}
          <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-6 sm:p-10 shadow-[8px_8px_0px_#0A0A0A]">
            <div className="flex flex-wrap items-center justify-between border-b-2 border-[#0A0A0A] pb-4 mb-6 font-space text-xs font-bold uppercase">
              <span className="bg-[#0A0A0A] text-[#F7F6F2] px-2.5 py-1">
                DELIVERABLE 01 // SCRIPT
              </span>
              <span>{campaign.deliverables.script.duration}</span>
            </div>

            <h3 className="font-space text-xl sm:text-2xl font-bold uppercase mb-6">
              TITLE: {campaign.deliverables.script.title}
            </h3>

            <div className="space-y-4 font-mono text-xs sm:text-sm">
              {campaign.deliverables.script.content.map((beat, idx) => (
                <div key={idx} className="p-4 border border-black/20 bg-[#F7F6F2] grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-3 font-bold text-[#0A0A0A]">
                    {beat.time}
                  </div>
                  <div className="md:col-span-5 text-[#0A0A0A]/80">
                    <strong className="block text-[#0A0A0A] uppercase font-space text-xs">VISUAL:</strong>
                    {beat.visual}
                  </div>
                  <div className="md:col-span-4 text-[#0A0A0A]">
                    <strong className="block text-[#0A0A0A] uppercase font-space text-xs">AUDIO:</strong>
                    {beat.audio}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Storyboard Grid */}
          <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-6 sm:p-10 shadow-[8px_8px_0px_#0A0A0A]">
            <div className="border-b-2 border-[#0A0A0A] pb-4 mb-6 font-space text-xs font-bold uppercase">
              <span className="bg-[#0A0A0A] text-[#F7F6F2] px-2.5 py-1">
                DELIVERABLE 02 // 4-FRAME STORYBOARD
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {campaign.deliverables.storyboard.map((frame) => (
                <div key={frame.scene} className="border-2 border-[#0A0A0A] p-4 bg-[#F7F6F2] flex flex-col justify-between h-48">
                  <div>
                    <span className="font-space font-bold text-xs bg-[#DFFF00] px-2 py-0.5 border border-black inline-block mb-2">
                      SCENE {frame.scene}
                    </span>
                    <p className="font-inter text-xs text-[#0A0A0A]/90 leading-snug">
                      {frame.desc}
                    </p>
                  </div>
                  <p className="font-space text-xs font-bold uppercase text-[#0A0A0A] border-t border-black/20 pt-2">
                    “{frame.punchline}”
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Visual & Outdoor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Key Visual */}
            <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-6 sm:p-8 shadow-[6px_6px_0px_#0A0A0A] space-y-4">
              <span className="bg-[#0A0A0A] text-[#F7F6F2] px-2.5 py-1 font-space text-xs font-bold uppercase inline-block">
                DELIVERABLE 03 // KEY VISUAL
              </span>
              <h4 className="font-space text-xl font-bold uppercase leading-tight">
                {campaign.deliverables.keyVisual.headline}
              </h4>
              <p className="font-inter text-sm text-[#0A0A0A]/80">
                {campaign.deliverables.keyVisual.subhead}
              </p>
              <div className="pt-2 border-t border-black/20 text-xs font-mono text-[#0A0A0A]/60">
                ART DIRECTION: {campaign.deliverables.keyVisual.artDirection}
              </div>
            </div>

            {/* Outdoor / Billboard */}
            <div className="border-2 border-[#0A0A0A] bg-[#DFFF00] p-6 sm:p-8 shadow-[6px_6px_0px_#0A0A0A] space-y-4">
              <span className="bg-[#0A0A0A] text-[#DFFF00] px-2.5 py-1 font-space text-xs font-bold uppercase inline-block">
                DELIVERABLE 04 // OUTDOOR BILLBOARD
              </span>
              <h4 className="font-space text-2xl font-black uppercase leading-tight text-[#0A0A0A]">
                {campaign.deliverables.outdoor.headline}
              </h4>
              <div className="pt-2 border-t border-black/20 text-xs font-space font-bold uppercase text-[#0A0A0A]">
                PLACEMENT: {campaign.deliverables.outdoor.location}
              </div>
            </div>
          </div>

          {/* Social Angles & Short-Form Cutdowns */}
          <div className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-6 sm:p-8 shadow-[6px_6px_0px_#0A0A0A] space-y-6">
            <span className="bg-[#0A0A0A] text-[#F7F6F2] px-2.5 py-1 font-space text-xs font-bold uppercase inline-block">
              DELIVERABLE 05 & 06 // SOCIAL & DIGITAL CUTDOWNS
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {campaign.deliverables.social.map((hook, i) => (
                <div key={i} className="p-4 border border-black bg-[#F7F6F2] space-y-2">
                  <span className="font-space text-[10px] font-bold uppercase tracking-wider text-[#0A0A0A]/60">
                    ORGANIC HOOK #{i + 1}
                  </span>
                  <p className="font-inter text-xs text-[#0A0A0A] font-medium leading-snug">
                    “{hook}”
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-black/20">
              <div className="p-4 bg-[#0A0A0A] text-[#F7F6F2]">
                <span className="text-[#DFFF00] font-space text-xs font-bold uppercase block mb-1">
                  15-SECOND HOOK:
                </span>
                <p className="font-inter text-xs leading-relaxed">
                  {campaign.deliverables.fifteenSec}
                </p>
              </div>
              <div className="p-4 bg-[#0A0A0A] text-[#F7F6F2]">
                <span className="text-[#DFFF00] font-space text-xs font-bold uppercase block mb-1">
                  6-SECOND BUMPER:
                </span>
                <p className="font-inter text-xs leading-relaxed">
                  {campaign.deliverables.sixSec}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. "WOULD YOU MAKE IT?" INTERACTIVE WIDGET */}
        <section className="border-2 border-[#0A0A0A] bg-[#FFFFFF] p-8 sm:p-14 text-center space-y-8 shadow-[10px_10px_0px_#0A0A0A]">
          <div>
            <span className="font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/60 block mb-2">
              HONEST VERDICT
            </span>
            <h2 className="font-space text-3xl sm:text-5xl font-black uppercase tracking-tight">
              WOULD YOU MAKE IT?
            </h2>
            <p className="font-inter text-sm text-[#0A0A0A]/70 max-w-md mx-auto mt-2">
              Vote honestly. Most corporate marketing committees would get nervous. Would you run it?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => handleVote("yes")}
              disabled={vote !== null}
              className={`w-full py-4 px-6 border-2 border-[#0A0A0A] font-space text-sm font-bold uppercase flex items-center justify-center gap-3 transition-all cursor-pointer ${
                vote === "yes"
                  ? "bg-[#DFFF00] text-[#0A0A0A]"
                  : "bg-[#0A0A0A] text-[#F7F6F2] hover:bg-[#DFFF00] hover:text-[#0A0A0A]"
              }`}
            >
              <ThumbsUp className="w-4 h-4" />
              <span>YES, RUN IT ({yesPct}%)</span>
            </button>

            <button
              onClick={() => handleVote("no")}
              disabled={vote !== null}
              className={`w-full py-4 px-6 border-2 border-[#0A0A0A] font-space text-sm font-bold uppercase flex items-center justify-center gap-3 transition-all cursor-pointer ${
                vote === "no"
                  ? "bg-red-200 text-[#0A0A0A]"
                  : "bg-transparent text-[#0A0A0A] hover:bg-black/10"
              }`}
            >
              <ThumbsDown className="w-4 h-4" />
              <span>TOO RISKY ({noPct}%)</span>
            </button>
          </div>

          {vote && (
            <p className="font-space text-xs uppercase tracking-wider text-[#0A0A0A]/70 animate-fade-in">
              {vote === "yes"
                ? "Excellent choice. You clearly have taste and courage."
                : "Understood. The 80-page PowerPoint deck department welcomes you."}
            </p>
          )}
        </section>

        {/* 6. "GET YOUR CAMPAIGN →" CTA & NEXT PROJECT */}
        <section className="border-t-2 border-[#0A0A0A] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-space text-xs font-bold uppercase tracking-wider text-[#0A0A0A]/60 block mb-1">
              READY FOR YOUR PRODUCT?
            </span>
            <h3 className="font-space text-2xl sm:text-4xl font-black uppercase tracking-tight">
              GET YOUR CAMPAIGN.
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <TextSwapButton
              primaryText="GET YOUR CAMPAIGN →"
              secondaryText="LET'S BRIEF THIS →"
              variant="filled"
              onClick={() => setBriefOpen(true)}
              className="!py-4 !px-8 !text-sm"
            />
            <Link
              href={`/work/${nextCampaign.slug}`}
              prefetch={true}
              className="border-2 border-[#0A0A0A] bg-transparent hover:bg-[#0A0A0A] hover:text-[#DFFF00] p-4 font-space text-xs font-bold uppercase transition-colors"
              title={`Next: ${nextCampaign.title}`}
            >
              NEXT SPEC →
            </Link>
          </div>
        </section>
      </article>

      <Footer />

      <BriefModal isOpen={briefOpen} onClose={() => setBriefOpen(false)} />
    </main>
  );
}
