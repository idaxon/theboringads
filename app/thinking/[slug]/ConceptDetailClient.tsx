"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Brain,
  BookOpen,
  Zap,
  ExternalLink,
  Flame,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BriefModal from "@/components/BriefModal";
import {
  ThinkingConcept,
  THINKING_CONCEPTS,
  SALT_IN_TEA_EXAMPLES,
  SALT_IN_TEA_RULES,
  SALT_VS_PURPLE_COW,
  HONEST_ERROR_EXAMPLES,
  HONEST_ERROR_RULES,
  HONEST_ERROR_VS_SALT_IN_TEA,
} from "@/lib/thinking";
import ConceptVisual from "@/components/thinking/ConceptVisuals";

interface ConceptDetailClientProps {
  concept: ThinkingConcept;
}

export default function ConceptDetailClient({ concept }: ConceptDetailClientProps) {
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const slug = concept.slug;

  const currentIndex = THINKING_CONCEPTS.findIndex((c) => c.slug === slug);
  const prevConcept =
    THINKING_CONCEPTS[(currentIndex - 1 + THINKING_CONCEPTS.length) % THINKING_CONCEPTS.length];
  const nextConcept =
    THINKING_CONCEPTS[(currentIndex + 1) % THINKING_CONCEPTS.length];

  const isSaltInTea = concept.slug === "the-salt-in-tea-technique";
  const isHonestError = concept.slug === "the-honest-error";

  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#0A0A0A] flex flex-col justify-between selection:bg-[#0A0A0A] selection:text-[#DFFF00]">
      {/* 1. Global Navigation */}
      <Navbar onOpenBrief={() => setIsBriefOpen(true)} />

      {/* Main Concept Detail Article */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full space-y-12">
        {/* Breadcrumb / Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#0A0A0A] pb-4 font-space text-xs font-bold uppercase tracking-wider">
          <Link
            href="/thinking"
            prefetch={true}
            className="inline-flex items-center gap-2 hover:bg-[#DFFF00] px-3 py-1.5 border border-[#0A0A0A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL THINKING</span>
          </Link>
          <div className="flex items-center gap-3 font-mono text-[11px] text-[#0A0A0A]/70">
            <span className="bg-[#0A0A0A] text-[#DFFF00] px-2 py-0.5">
              CASE #{concept.number}
            </span>
            <span>{concept.category}</span>
          </div>
        </div>

        {/* Hero Title Section */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-space text-xs font-black uppercase tracking-widest bg-[#DFFF00] px-3 py-1 border-2 border-[#0A0A0A]">
              {concept.type === "boring" ? "PROPRIETARY STUDIO PLAYBOOK" : "CLASSIC MARKETING LAW"}
            </span>
            <span className="font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/60">
              {concept.attribution}
            </span>
          </div>

          <h1 className="font-space text-4xl sm:text-7xl font-black uppercase tracking-tighter text-[#0A0A0A] leading-[0.92]">
            {concept.title}
          </h1>

          <p className="font-space text-xl sm:text-3xl font-bold text-[#0A0A0A] tracking-tight border-l-4 border-[#0A0A0A] pl-4">
            “{concept.tagline}”
          </p>

          <p className="font-inter text-base sm:text-xl text-[#0A0A0A]/80 font-medium leading-relaxed pt-2">
            {concept.summary}
          </p>
        </div>

        {/* 2. Interactive / Visual Graphic Schema */}
        {concept.visualSchema && (
          <div className="border-2 border-[#0A0A0A] bg-white p-6 sm:p-10 shadow-[8px_8px_0px_#0A0A0A] space-y-4">
            <div className="flex items-center justify-between font-space text-xs font-bold uppercase tracking-wider border-b-2 border-[#0A0A0A] pb-3">
              <span className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-[#0A0A0A]" />
                <span>COGNITIVE / ATTENTION ARCHITECTURE</span>
              </span>
              <span className="text-[#0A0A0A]/60 hidden sm:inline">SCHEMATIC DIAGRAM</span>
            </div>
            <div className="pt-2">
              <ConceptVisual type={concept.visualSchema} />
            </div>
          </div>
        )}

        {/* 3. Deep-Dive Strategy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-y-2 border-[#0A0A0A] py-12">
          {/* Col A: The Psychological Mechanism */}
          <div className="md:col-span-6 space-y-3 pr-0 md:pr-4 border-b-2 md:border-b-0 md:border-r-2 border-[#0A0A0A] pb-8 md:pb-0">
            <div className="flex items-center gap-2 font-space text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
              <Zap className="w-4 h-4 text-[#0A0A0A]" />
              <span>THE COGNITIVE MECHANISM</span>
            </div>
            <h3 className="font-space text-xl sm:text-2xl font-black uppercase tracking-tight">
              WHY IT SHOCKS THE BRAIN
            </h3>
            <p className="font-inter text-sm sm:text-base text-[#0A0A0A]/85 leading-relaxed">
              {concept.deepDive.psychologicalMechanism}
            </p>
          </div>

          {/* Col B: Why Safe Marketing Fails */}
          <div className="md:col-span-6 space-y-3 pl-0 md:pl-4">
            <div className="flex items-center gap-2 font-space text-xs font-bold uppercase tracking-wider text-red-600">
              <AlertTriangle className="w-4 h-4" />
              <span>THE HIDDEN FAILURE MODE</span>
            </div>
            <h3 className="font-space text-xl sm:text-2xl font-black uppercase tracking-tight">
              WHY SAFE BRANDS DISAPPEAR
            </h3>
            <p className="font-inter text-sm sm:text-base text-[#0A0A0A]/85 leading-relaxed">
              {concept.deepDive.whySafeFails}
            </p>
          </div>
        </div>

        {/* 4. Studio Application (How The Boring Ads executes it) */}
        <div className="border-2 border-[#0A0A0A] bg-[#DFFF00] p-6 sm:p-10 shadow-[8px_8px_0px_#0A0A0A] space-y-4 text-[#0A0A0A]">
          <div className="flex items-center justify-between font-space text-xs font-black uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              <span>THE STUDIO RULE &amp; EXECUTION PLAYBOOK</span>
            </span>
            <span className="bg-[#0A0A0A] text-[#DFFF00] px-2 py-0.5">
              THE BORING ADS STANDARD
            </span>
          </div>

          <p className="font-inter text-base sm:text-lg font-medium leading-relaxed">
            {concept.deepDive.studioApplication}
          </p>
        </div>

        {/* 5. Connected Speculative Case Link */}
        {concept.deepDive.speculativeCaseRef && (
          <div className="border-2 border-[#0A0A0A] bg-[#0A0A0A] text-[#F7F6F2] p-6 sm:p-10 shadow-[8px_8px_0px_#0A0A0A] space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-4">
              <div className="space-y-1">
                <span className="font-space text-[10px] font-bold uppercase tracking-widest text-[#DFFF00]">
                  SPECULATIVE AD CASE STUDY
                </span>
                <h4 className="font-space text-2xl font-black uppercase">
                  {concept.deepDive.speculativeCaseRef.title} ({concept.deepDive.speculativeCaseRef.clientName})
                </h4>
              </div>
              <Link
                href={`/work/${concept.deepDive.speculativeCaseRef.slug}`}
                prefetch={true}
                className="inline-flex items-center gap-2 bg-[#DFFF00] text-[#0A0A0A] hover:bg-white px-5 py-2.5 font-space text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>OPEN SPEC CAMPAIGN DECK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="font-space text-lg sm:text-xl font-bold text-[#DFFF00] tracking-tight">
              {concept.deepDive.speculativeCaseRef.quote}
            </p>
          </div>
        )}

        {/* 6. Execution Rules Checklist */}
        <div className="border-2 border-[#0A0A0A] bg-white p-6 sm:p-10 shadow-[6px_6px_0px_#0A0A0A] space-y-6">
          <div className="flex items-center gap-2 font-space text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
            <CheckCircle2 className="w-4 h-4 text-[#0A0A0A]" />
            <span>5 EXECUTION RULES TO NEVER BREAK</span>
          </div>

          <div className="space-y-3 font-space text-xs sm:text-sm">
            {concept.deepDive.takeaways.map((rule, idx) => (
              <div
                key={idx}
                className="p-3.5 border border-black/15 bg-[#F7F6F2] flex items-start gap-3"
              >
                <span className="font-mono font-black text-[#0A0A0A] bg-[#DFFF00] px-2 py-0.5 border border-black shrink-0">
                  0{idx + 1}
                </span>
                <span className="font-medium text-[#0A0A0A] pt-0.5 leading-snug">
                  {rule}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Bottom Navigation (Prev / Next Concept) */}
        <div className="border-t-2 border-[#0A0A0A] pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href={`/thinking/${prevConcept.slug}`}
            prefetch={true}
            className="p-5 border-2 border-[#0A0A0A] bg-white hover:bg-[#F7F6F2] transition-colors space-y-1 block group"
          >
            <span className="font-space text-[10px] font-bold uppercase tracking-wider text-[#0A0A0A]/50 flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
              <ArrowLeft className="w-3 h-3" />
              <span>PREVIOUS CONCEPT #{prevConcept.number}</span>
            </span>
            <div className="font-space text-sm sm:text-base font-black uppercase text-[#0A0A0A]">
              {prevConcept.title}
            </div>
          </Link>

          <Link
            href={`/thinking/${nextConcept.slug}`}
            prefetch={true}
            className="p-5 border-2 border-[#0A0A0A] bg-white hover:bg-[#DFFF00] transition-colors space-y-1 block text-right group"
          >
            <span className="font-space text-[10px] font-bold uppercase tracking-wider text-[#0A0A0A]/50 flex items-center justify-end gap-1 group-hover:translate-x-1 transition-transform">
              <span>NEXT CONCEPT #{nextConcept.number}</span>
              <ArrowRight className="w-3 h-3" />
            </span>
            <div className="font-space text-sm sm:text-base font-black uppercase text-[#0A0A0A]">
              {nextConcept.title}
            </div>
          </Link>
        </div>
      </article>

      {/* Footer */}
      <Footer />

      {/* Brief Modal */}
      <BriefModal isOpen={isBriefOpen} onClose={() => setIsBriefOpen(false)} />
    </main>
  );
}
