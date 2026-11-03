"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BriefModal from "@/components/BriefModal";
import { THINKING_CONCEPTS, STUDIO_PROCESS } from "@/lib/thinking";
import ConceptVisual from "@/components/thinking/ConceptVisuals";
import SaltInTeaCarousel from "@/components/thinking/SaltInTeaCarousel";

export default function ThinkingPage() {
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [techniqueFilter, setTechniqueFilter] = useState<"all" | "boring" | "famous">("all");

  return (
    <main className="relative min-h-screen bg-[#F7F6F2] text-[#0A0A0A] selection:bg-[#0A0A0A] selection:text-[#DFFF00]">
      {/* 1. Global Navigation */}
      <Navbar onOpenBrief={() => setIsBriefOpen(true)} />

      {/* 2. Hero Section */}
      <section className="relative w-full pt-10 sm:pt-16 pb-16 sm:pb-24 border-b-2 border-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 font-space text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0A0A0A] mb-4">
            <span className="w-2.5 h-2.5 bg-[#DFFF00] border border-[#0A0A0A] inline-block" />
            <span>OUR THINKING / THE CREATIVE PLAYBOOK</span>
          </div>

          {/* Bold Display Headline */}
          <h1 className="font-space text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter text-[#0A0A0A] leading-[0.92]">
            BORING IS A CHOICE.
          </h1>

          {/* Follow-up Paragraph */}
          <p className="mt-6 sm:mt-8 font-inter text-lg sm:text-2xl text-[#0A0A0A]/85 max-w-4xl font-normal leading-relaxed">
            Every remarkable ad starts with an observation most people miss. These are the ideas, behavioural quirks, and creative principles we use to make people stop scrolling.
          </p>
        </div>
      </section>

      {/* 2.5 Real Boring Technique Spotlight: The Salt in Tea Technique™ (Carousel) */}
      <SaltInTeaCarousel />

      {/* 3. Section One — The Thinking Index */}
      <section
        id="thinking-index"
        className="relative w-full py-20 sm:py-28 border-b-2 border-[#0A0A0A] bg-[#F7F6F2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Section Heading & Supporting Text */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b-2 border-[#0A0A0A]">
            <div>
              <div className="flex items-center gap-2 font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A] mb-2">
                <span className="w-2.5 h-2.5 bg-[#0A0A0A] inline-block" />
                <span>SECTION 01 / PRINCIPLES &amp; FRAMEWORKS</span>
              </div>
              <h2 className="font-space text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#0A0A0A]">
                THE THINKING INDEX.
              </h2>
            </div>
            <div className="max-w-md">
              <p className="font-inter text-base sm:text-lg text-[#0A0A0A]/85 leading-relaxed font-normal">
                “Psychology meets creative instinct. A few principles behind ideas worth remembering.”
              </p>
              <div className="mt-2 text-xs font-space text-[#0A0A0A]/60 uppercase tracking-wider">
                FILTER BY PROPRIETARY BORING METHODS OR FAMOUS STRATEGY THEORIES
              </div>
            </div>
          </div>

          {/* Technique Filter Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setTechniqueFilter("all")}
              className={`px-4 py-2 border-2 border-[#0A0A0A] font-space text-xs font-black uppercase tracking-wider transition-all ${
                techniqueFilter === "all"
                  ? "bg-[#0A0A0A] text-[#F7F6F2] shadow-[3px_3px_0px_#DFFF00]"
                  : "bg-[#F7F6F2] text-[#0A0A0A] hover:bg-[#EBEAE4]"
              }`}
            >
              ALL TECHNIQUES ({THINKING_CONCEPTS.length})
            </button>
            <button
              onClick={() => setTechniqueFilter("boring")}
              className={`px-4 py-2 border-2 border-[#0A0A0A] font-space text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
                techniqueFilter === "boring"
                  ? "bg-[#0A0A0A] text-[#DFFF00] shadow-[3px_3px_0px_#0A0A0A]"
                  : "bg-[#F7F6F2] text-[#0A0A0A] hover:bg-[#EBEAE4]"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#DFFF00] inline-block" />
              <span>BORING TECHNIQUES ({THINKING_CONCEPTS.filter((c) => c.type === "boring").length})</span>
            </button>
            <button
              onClick={() => setTechniqueFilter("famous")}
              className={`px-4 py-2 border-2 border-[#0A0A0A] font-space text-xs font-black uppercase tracking-wider transition-all ${
                techniqueFilter === "famous"
                  ? "bg-[#0A0A0A] text-[#F7F6F2] shadow-[3px_3px_0px_#DFFF00]"
                  : "bg-[#F7F6F2] text-[#0A0A0A] hover:bg-[#EBEAE4]"
              }`}
            >
              FAMOUS TECHNIQUES ({THINKING_CONCEPTS.filter((c) => c.type === "famous").length})
            </button>
          </div>

          {/* Sophisticated Editorial Grid (Click opens directly as Standalone Page) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#0A0A0A]">
            {THINKING_CONCEPTS.filter((c) =>
              techniqueFilter === "all" ? true : c.type === techniqueFilter
            ).map((concept, idx) => (
              <Link
                key={concept.id}
                href={`/thinking/${concept.slug}`}
                className={`relative p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 border-[#0A0A0A] bg-[#F7F6F2] hover:bg-[#EBEAE4] transition-all duration-200 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] ${
                  idx % 3 !== 2 ? "lg:border-r border-[#0A0A0A]" : ""
                } ${idx % 2 === 0 ? "md:border-r lg:border-r-0" : ""} ${
                  idx < 6 ? "lg:border-b border-[#0A0A0A]" : ""
                }`}
              >
                {/* Top: Large Index & Category */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-space text-xs font-bold uppercase tracking-wider">
                    <span className="font-mono text-xl sm:text-2xl font-black text-[#0A0A0A]">
                      {concept.number}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {concept.type === "boring" ? (
                        <span className="px-2 py-0.5 bg-[#DFFF00] text-[#0A0A0A] text-[10px] font-black border border-black">
                          BORING TECHNIQUE ★
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 bg-[#0A0A0A] text-[#F7F6F2] text-[10px] group-hover:bg-[#DFFF00] group-hover:text-[#0A0A0A] transition-colors">
                          {concept.category}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-space text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0A0A0A] group-hover:text-black transition-colors">
                      {concept.title}
                    </h3>
                    <div className="mt-1 font-serif italic text-sm text-[#0A0A0A]/80 font-medium">
                      “{concept.tagline}”
                    </div>
                  </div>

                  {/* Concise Explanation */}
                  <p className="font-inter text-sm text-[#0A0A0A]/75 leading-relaxed pt-1">
                    {concept.summary}
                  </p>

                  {/* Attribution disclaimer */}
                  <div className="text-[10px] font-space text-[#0A0A0A]/50 uppercase tracking-wide border-t border-[#0A0A0A]/10 pt-2">
                    {concept.attribution}
                  </div>
                </div>

                {/* Middle: Subtle Unique Visual Treatment */}
                <div className="my-6">
                  <ConceptVisual type={concept.visualSchema} isInteractive={false} />
                </div>

                {/* Bottom: "OPEN STANDALONE PAGE →" Action */}
                <div className="pt-4 border-t border-[#0A0A0A]/20 flex items-center justify-between font-space text-xs font-bold uppercase tracking-wider">
                  <span className="text-[#0A0A0A] group-hover:underline underline-offset-4 flex items-center gap-1.5 font-black">
                    <span>OPEN STANDALONE PLAYBOOK</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                  <span className="text-[10px] text-[#0A0A0A]/40 font-mono">
                    STANDALONE ROUTE
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Section Two — The Studio Experiments */}
      <section
        id="experiments"
        className="relative w-full py-20 sm:py-28 border-b-2 border-[#0A0A0A] bg-[#F7F6F2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Intro */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b-2 border-[#0A0A0A]">
            <div>
              <div className="flex items-center gap-2 font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A] mb-2">
                <span className="w-2.5 h-2.5 bg-[#DFFF00] border border-[#0A0A0A] inline-block" />
                <span>SECTION 02 / SPECULATIVE PROOFS</span>
              </div>
              <h2 className="font-space text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#0A0A0A]">
                ENOUGH THEORY. SHOW US THE IDEA.
              </h2>
            </div>
            <div className="max-w-md">
              <p className="font-inter text-base sm:text-lg text-[#0A0A0A]/85 leading-relaxed">
                “Frameworks are useful. What matters is what you make with them. These are speculative campaigns from our studio — concepts built to challenge the usual way of advertising a product.”
              </p>
              <div className="mt-2 text-xs font-space font-bold text-[#0A0A0A] bg-[#DFFF00] inline-block px-2 py-0.5 border border-[#0A0A0A]">
                [ SPECULATIVE SPEC CONCEPTS — NOT CLIENT WORK ]
              </div>
            </div>
          </div>

          {/* 3 Featured Speculative Cases with Distinct Art Direction */}
          <div className="mt-12 space-y-16">
            {/* CASE 001 — EXISTENTIAL DECAF */}
            <article className="border-2 border-[#0A0A0A] bg-[#0A0A0A] text-[#F7F6F2] p-6 sm:p-10 shadow-[8px_8px_0px_#0A0A0A] transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Half: Dark gothic split visual */}
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="relative aspect-[4/3] w-full border border-white/20 bg-[#161616] overflow-hidden group">
                    <Image
                      src="/images/decaf_coffee.jpg"
                      alt="Existential Decaf campaign visual"
                      width={600}
                      height={450}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-[#DFFF00] text-[#0A0A0A] px-2 py-0.5 font-space font-bold text-[10px] uppercase">
                        SPEC CONCEPT
                      </span>
                      <p className="font-space font-black text-sm uppercase text-[#F7F6F2] mt-1">
                        0MG CAFFEINE. 100MG EXISTENTIAL ANXIETY.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Copy Half */}
                <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-3 font-space text-xs font-bold uppercase tracking-wider">
                    <span className="text-[#DFFF00]">CASE 001 / BEVERAGE / DTC</span>
                    <span className="text-[#F7F6F2]/50">SPECULATIVE SPEC CONCEPT</span>
                  </div>

                  <h3 className="font-space text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F7F6F2] leading-tight">
                    EXISTENTIAL DECAF
                  </h3>

                  <div className="font-serif italic text-lg sm:text-xl text-[#DFFF00]">
                    “All the jittery existential anxiety. None of the caffeine.”
                  </div>

                  <p className="font-inter text-sm sm:text-base text-[#F7F6F2]/80 leading-relaxed">
                    A fictional premium decaf campaign that turns modern existential dread into humorous brand positioning. Instead of pastel meadows and gentle wellness tropes, it treats decaf as high-grade gothic ritual for overachievers whose doctors banned caffeine.
                  </p>

                  <div className="pt-4 flex items-center justify-between">
                    <Link
                      href="/work/existential-decaf"
                      className="inline-flex items-center gap-2 bg-[#DFFF00] text-[#0A0A0A] hover:bg-[#F7F6F2] px-5 py-3 font-space text-xs font-bold uppercase tracking-wider border-2 border-[#0A0A0A] transition-colors"
                    >
                      <span>INSPECT THE IDEA</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="font-mono text-xs text-[#F7F6F2]/40">
                      REF: /work/existential-decaf
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* CASE 002 — APEX MUTUAL AUTO */}
            <article className="border-2 border-[#0A0A0A] bg-[#F7F6F2] text-[#0A0A0A] p-6 sm:p-10 shadow-[8px_8px_0px_#0A0A0A] transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Copy Half */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#0A0A0A]/20 pb-3 font-space text-xs font-bold uppercase tracking-wider">
                    <span className="text-[#0A0A0A] bg-[#DFFF00] px-2 py-0.5 border border-[#0A0A0A]">
                      CASE 002 / INSURANCE / RISK
                    </span>
                    <span className="text-[#0A0A0A]/50">SPECULATIVE SPEC CONCEPT</span>
                  </div>

                  <h3 className="font-space text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0A0A0A] leading-tight">
                    APEX MUTUAL AUTO
                  </h3>

                  <div className="font-serif italic text-lg sm:text-xl text-[#0A0A0A] font-semibold">
                    “We hope you never give us a call.”
                  </div>

                  <p className="font-inter text-sm sm:text-base text-[#0A0A0A]/80 leading-relaxed">
                    A fictional insurance campaign celebrating the uneventful commute and the value of nothing happening. Instead of screaming lizards or cartoon catastrophes, it highlights the quiet luxury of a 14-second wait at a suburban red light.
                  </p>

                  <div className="pt-4 flex items-center justify-between">
                    <Link
                      href="/work/safe-driver"
                      className="inline-flex items-center gap-2 bg-[#0A0A0A] text-[#F7F6F2] hover:bg-[#DFFF00] hover:text-[#0A0A0A] px-5 py-3 font-space text-xs font-bold uppercase tracking-wider border-2 border-[#0A0A0A] transition-colors"
                    >
                      <span>INSPECT THE IDEA</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="font-mono text-xs text-[#0A0A0A]/40">
                      REF: /work/safe-driver
                    </span>
                  </div>
                </div>

                {/* Visual Half: 35mm road photography style */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] w-full border-2 border-[#0A0A0A] bg-[#0A0A0A] overflow-hidden group">
                    <Image
                      src="/images/safe_driver.jpg"
                      alt="Apex Mutual Auto campaign visual"
                      width={600}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#0A0A0A] text-[#F7F6F2] px-2.5 py-1 font-space text-[10px] font-bold uppercase border border-white/20">
                      NOTHING HAPPENED TODAY.
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* CASE 003 — SYNCGRID TECHNOLOGIES */}
            <article className="border-2 border-[#0A0A0A] bg-[#DFFF00] text-[#0A0A0A] p-6 sm:p-10 shadow-[8px_8px_0px_#0A0A0A] transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Half: Stark Swiss Typography Poster */}
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="aspect-[4/3] w-full bg-[#0A0A0A] text-[#DFFF00] p-6 flex flex-col justify-between border-2 border-[#0A0A0A] shadow-[4px_4px_0px_#0A0A0A]">
                    <div className="flex justify-between font-mono text-[10px] uppercase text-[#DFFF00]/70">
                      <span>SYNCGRID TECH</span>
                      <span>SOC-2 COMPLIANT</span>
                    </div>
                    <div className="font-space text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none text-[#F7F6F2]">
                      OUR PRODUCT WON’T CHANGE THE WORLD. BUT IT PREVENTS FINES.
                    </div>
                    <div className="font-space text-[10px] uppercase tracking-widest text-[#DFFF00]">
                      100% TYPOGRAPHY • ZERO 3D FLOATING NODES
                    </div>
                  </div>
                </div>

                {/* Copy Half */}
                <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/20 pb-3 font-space text-xs font-bold uppercase tracking-wider">
                    <span className="text-[#0A0A0A] bg-[#0A0A0A] text-[#DFFF00] px-2 py-0.5">
                      CASE 003 / ENTERPRISE SOFTWARE
                    </span>
                    <span className="text-[#0A0A0A]/60 font-mono">[SPECULATIVE SPEC CONCEPT]</span>
                  </div>

                  <h3 className="font-space text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0A0A0A] leading-tight">
                    SYNCGRID TECHNOLOGIES
                  </h3>

                  <div className="font-serif italic text-lg sm:text-xl text-[#0A0A0A] font-semibold">
                    “Nobody gets fired for buying our software. But people do get slightly sadder.”
                  </div>

                  <p className="font-inter text-sm sm:text-base text-[#0A0A0A]/85 leading-relaxed">
                    A fictional B2B campaign that satirises compliance software, audit anxiety, and risk-averse purchasing. Stripping away synthetic AI buzzwords to address the real reason CFOs approve contracts: avoiding regulator subpoenas.
                  </p>

                  <div className="pt-4 flex items-center justify-between">
                    <Link
                      href="/work/honest-b2b"
                      className="inline-flex items-center gap-2 bg-[#0A0A0A] text-[#F7F6F2] hover:bg-[#F7F6F2] hover:text-[#0A0A0A] px-5 py-3 font-space text-xs font-bold uppercase tracking-wider border-2 border-[#0A0A0A] transition-colors"
                    >
                      <span>INSPECT THE IDEA</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="font-mono text-xs text-[#0A0A0A]/50">
                      REF: /work/honest-b2b
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 5. Section Three — Inside the Thinking */}
      <section className="relative w-full py-20 sm:py-28 border-b-2 border-[#0A0A0A] bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b-2 border-[#0A0A0A]">
            <div>
              <div className="flex items-center gap-2 font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A] mb-2">
                <span className="w-2.5 h-2.5 bg-[#0A0A0A] inline-block" />
                <span>SECTION 03 / THE METHODOLOGY</span>
              </div>
              <h2 className="font-space text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#0A0A0A]">
                THE IDEA IS THE WORK.
              </h2>
            </div>
            <div className="max-w-xs">
              <p className="font-inter text-sm text-[#0A0A0A]/80 leading-relaxed">
                No 40-step agency waterfall. No committee compromise. A focused four-stage discipline to uncover tension and make it memorable.
              </p>
            </div>
          </div>

          {/* Simple 4-stage horizontal process on desktop, vertical timeline on mobile */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#0A0A0A]">
            {STUDIO_PROCESS.map((stage, idx) => (
              <div
                key={stage.number}
                className={`p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 border-[#0A0A0A] bg-[#F7F6F2] hover:bg-[#EBEAE4]/60 transition-colors ${
                  idx < 3 ? "lg:border-r border-[#0A0A0A]" : ""
                } ${idx % 2 === 0 ? "md:border-r" : ""}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-2xl font-black text-[#0A0A0A]">
                    <span>{stage.number}</span>
                    <span className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
                  </div>

                  <div>
                    <h3 className="font-space text-2xl font-black uppercase tracking-tight text-[#0A0A0A]">
                      {stage.title}
                    </h3>
                    <div className="text-[11px] font-space font-bold uppercase tracking-wider text-[#0A0A0A]/50 mt-0.5">
                      {stage.subtitle}
                    </div>
                  </div>

                  <p className="font-inter text-sm text-[#0A0A0A]/80 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#0A0A0A]/20">
                  <div className="text-[10px] font-space uppercase text-[#0A0A0A]/50 font-bold">
                    OUTPUT:
                  </div>
                  <div className="text-xs font-space font-bold uppercase text-[#0A0A0A]">
                    {stage.output}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Section Four — Our Point of View */}
      <section className="relative w-full py-24 sm:py-32 bg-[#0A0A0A] text-[#F7F6F2] border-b-2 border-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 font-space text-xs font-bold uppercase tracking-widest text-[#DFFF00]">
            <span className="w-2 h-2 bg-[#DFFF00] inline-block" />
            <span>SECTION 04 / STUDIO MANIFESTO</span>
          </div>

          {/* Headline */}
          <h2 className="font-space text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#F7F6F2] leading-[0.95]">
            WE DON&apos;T WORSHIP THE BRIEF.
          </h2>

          {/* Supporting Copy */}
          <p className="font-inter text-xl sm:text-2xl text-[#F7F6F2]/80 max-w-3xl leading-relaxed font-normal">
            “We look for the tension underneath it. The human truth behind the product. The one idea that makes the familiar feel unfamiliar.”
          </p>

          <div className="w-full border-b border-white/20 pt-4" />

          {/* Three Short Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div className="space-y-3 border-l-2 border-[#DFFF00] pl-4">
              <span className="font-mono text-xs text-[#DFFF00] font-bold">PRINCIPLE 01</span>
              <h3 className="font-space text-xl font-black uppercase text-[#F7F6F2] leading-tight">
                INTERESTING BEATS INTERCHANGEABLE.
              </h3>
              <p className="font-inter text-sm text-[#F7F6F2]/70 leading-relaxed">
                If the headline could be run by your three closest competitors, you have purchased expensive camouflage.
              </p>
            </div>

            <div className="space-y-3 border-l-2 border-[#DFFF00] pl-4">
              <span className="font-mono text-xs text-[#DFFF00] font-bold">PRINCIPLE 02</span>
              <h3 className="font-space text-xl font-black uppercase text-[#F7F6F2] leading-tight">
                HUMAN INSIGHT BEATS EMPTY BUZZWORDS.
              </h3>
              <p className="font-inter text-sm text-[#F7F6F2]/70 leading-relaxed">
                Consumers do not care about &ldquo;end-to-end holistic paradigms.&rdquo; They care about not looking foolish.
              </p>
            </div>

            <div className="space-y-3 border-l-2 border-[#DFFF00] pl-4">
              <span className="font-mono text-xs text-[#DFFF00] font-bold">PRINCIPLE 03</span>
              <h3 className="font-space text-xl font-black uppercase text-[#F7F6F2] leading-tight">
                ONE SHARP IDEA BEATS FIFTY FORGETTABLE SLIDES.
              </h3>
              <p className="font-inter text-sm text-[#F7F6F2]/70 leading-relaxed">
                We deliver execution-ready concepts people actually look at, laugh at, and send to their group chat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="relative w-full py-24 sm:py-32 bg-[#F7F6F2] text-[#0A0A0A] border-b-2 border-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-block px-3 py-1 bg-[#DFFF00] border-2 border-[#0A0A0A] font-space font-bold text-xs uppercase tracking-widest text-[#0A0A0A]">
            GOT A BORING PRODUCT?
          </div>

          <h2 className="font-space text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-[#0A0A0A]">
            LET’S MAKE IT INTERESTING.
          </h2>

          <p className="font-inter text-base sm:text-xl text-[#0A0A0A]/80 max-w-2xl mx-auto leading-relaxed">
            “Bring us the category nobody wants to advertise. We’ll look for the idea everyone else missed.”
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => setIsBriefOpen(true)}
              className="w-full sm:w-auto bg-[#0A0A0A] text-[#F7F6F2] hover:bg-[#DFFF00] hover:text-[#0A0A0A] px-8 py-4 font-space font-bold text-sm uppercase tracking-wider border-2 border-[#0A0A0A] shadow-[4px_4px_0px_#0A0A0A] hover:shadow-[6px_6px_0px_#0A0A0A] transition-all"
            >
              GIVE US A BRIEF →
            </button>

            <Link
              href="/#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 font-space font-bold text-sm uppercase tracking-wider hover:bg-[#EBEAE4] border-2 border-[#0A0A0A] transition-colors"
            >
              <span>SEE OUR WORK →</span>
            </Link>
          </div>

          <div className="pt-6 font-space text-xs uppercase tracking-wider text-[#0A0A0A]/50">
            FIXED FEE • 48-HOUR ROUNDS • NO AGENCY BLOAT
          </div>
        </div>
      </section>

      {/* 8. Global Footer */}
      <Footer />

      {/* Interactive Deadpan Brief Modal */}
      <BriefModal isOpen={isBriefOpen} onClose={() => setIsBriefOpen(false)} />
    </main>
  );
}
