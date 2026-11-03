"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  ArrowRight,
  Flame,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import {
  SALT_IN_TEA_EXAMPLES,
  SALT_IN_TEA_RULES,
  SALT_VS_PURPLE_COW,
} from "@/lib/thinking";

export default function SaltInTeaSection() {
  const [activeTab, setActiveTab] = useState<"all" | "global" | "indian">("all");

  const filteredExamples = SALT_IN_TEA_EXAMPLES.filter((ex) => {
    if (activeTab === "all") return true;
    if (activeTab === "indian") {
      return ex.id === 6 || ex.id === 7 || ex.id === 8;
    }
    return ex.id <= 5;
  });

  return (
    <section
      id="salt-in-tea"
      className="relative w-full py-20 sm:py-28 border-b-2 border-[#0A0A0A] bg-[#F7F6F2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {/* 1. Header Banner */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#0A0A0A] pb-4 font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#DFFF00] border border-[#0A0A0A] inline-block" />
              <span>THE BORING ADS BY DAKSH / PROPRIETARY CREATIVE PHILOSOPHY</span>
            </div>
            <span className="bg-[#0A0A0A] text-[#DFFF00] px-2 py-0.5 text-[11px] font-mono">
              [BORING TECHNIQUE 01]
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="font-space text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#0A0A0A] leading-[0.95]">
                THE SALT IN TEA TECHNIQUE™
              </h2>
              <div className="inline-block bg-[#0A0A0A] text-[#F7F6F2] px-3 py-1 font-space font-bold text-xs sm:text-sm uppercase tracking-wide">
                DON&apos;T FOLLOW THE RECIPE. QUESTION IT.
              </div>
              <p className="font-inter text-lg sm:text-xl text-[#0A0A0A]/85 font-normal leading-relaxed max-w-3xl">
                The idea: Sometimes, you have to put something unexpected into the mix to discover something extraordinary.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/thinking/the-salt-in-tea-technique"
                className="inline-flex items-center justify-center gap-2 bg-[#DFFF00] text-[#0A0A0A] px-5 py-3 font-space text-xs font-black uppercase tracking-wider border-2 border-[#0A0A0A] shadow-[4px_4px_0px_#0A0A0A] hover:bg-[#F7F6F2] transition-colors text-center"
              >
                <span>OPEN STANDALONE PLAYBOOK PAGE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-[11px] font-space text-[#0A0A0A]/60 uppercase tracking-wider">
                STUDIO PLAYBOOK EDITION 2026
              </div>
            </div>
          </div>
        </div>

        {/* 2. The Tea Analogy Hero Card */}
        <div className="border-2 border-[#0A0A0A] bg-[#EBEAE4] shadow-[8px_8px_0px_#0A0A0A] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto border-b-2 lg:border-b-0 lg:border-r-2 border-[#0A0A0A] bg-[#0A0A0A]">
              <Image
                src="/images/salt_in_tea_hero.jpg"
                alt="A pinch of coarse mineral salt falling into dark hot tea in a ceramic cup"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#0A0A0A]/90 text-[#F7F6F2] px-2.5 py-1 font-space text-[10px] font-bold uppercase border border-white/20">
                FIG. 00 — THE SENSORY DISRUPTION
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A0A0A]/90 text-[#DFFF00] p-2.5 border border-white/20 font-space text-xs uppercase font-bold tracking-wide">
                “YOU WILL DEFINITELY REMEMBER THAT CUP OF TEA.”
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-[#F7F6F2]">
              <div className="space-y-4">
                <span className="font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/60 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-[#0A0A0A]" />
                  THE CORE PARABLE
                </span>

                <p className="font-inter text-base sm:text-lg text-[#0A0A0A]/90 leading-relaxed font-normal">
                  Imagine making tea. Everyone knows the recipe: water, milk, tea leaves, sugar. You follow the formula, and you get a perfectly normal cup of tea.
                </p>

                <p className="font-inter text-base sm:text-lg text-[#0A0A0A] font-bold leading-relaxed bg-[#DFFF00]/40 p-3 border-l-4 border-[#0A0A0A]">
                  Now imagine adding a pinch of salt instead of sugar.
                </p>

                <p className="font-inter text-sm sm:text-base text-[#0A0A0A]/85 leading-relaxed">
                  It might taste terrible. It might taste surprisingly interesting. It might make you question the entire recipe. But you will definitely remember that cup of tea.
                </p>

                <p className="font-inter text-sm sm:text-base text-[#0A0A0A]/85 leading-relaxed">
                  That is the thinking behind The Salt in Tea Technique: deliberately introducing a risky, unconventional element into a familiar product, format, message, or experience to create something people haven&apos;t seen before.
                </p>

                <p className="font-inter text-xs sm:text-sm text-[#0A0A0A]/70 italic">
                  The goal isn&apos;t to be different just for the sake of being different. The goal is to find the unexpected combination that makes people stop, react, remember, and talk. Some experiments fail. Some are merely strange. And occasionally, one changes the game.
                </p>
              </div>

              {/* The Formula Badge */}
              <div className="border-2 border-[#0A0A0A] bg-[#0A0A0A] text-[#F7F6F2] p-4 space-y-2">
                <div className="flex items-center justify-between font-space text-[10px] uppercase tracking-wider text-[#DFFF00]">
                  <span>THE PROPRIETARY EQUATION</span>
                  <span>THE BORING ADS BY DAKSH</span>
                </div>
                <div className="font-space text-sm sm:text-base font-black uppercase text-[#DFFF00]">
                  FAMILIARITY + UNEXPECTED ELEMENT + MEANINGFUL EXECUTION
                </div>
                <p className="font-inter text-xs text-[#F7F6F2]/75 leading-relaxed">
                  The familiar gives people context. The unexpected earns attention. The execution determines whether that attention becomes appreciation, conversation, or rejection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Why This Matters in Marketing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t-2 border-[#0A0A0A] pt-12">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs font-bold text-[#0A0A0A] bg-[#EBEAE4] px-2 py-0.5 border border-black/20">
              STRATEGIC REASONING
            </span>
            <h3 className="font-space text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#0A0A0A] leading-tight">
              WHAT IF THE THING EVERYONE IS AVOIDING IS EXACTLY WHAT MAKES THE IDEA WORTH NOTICING?
            </h3>
            <p className="font-inter text-sm sm:text-base text-[#0A0A0A]/80 leading-relaxed">
              Most brands compete by incrementally improving the same things: better features, better prices, better production, better slogans, better-looking ads. When everyone adds more sugar, sweetness becomes the default wallpaper.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border-2 border-[#0A0A0A] p-5 bg-[#F7F6F2] space-y-2">
              <span className="font-mono text-[10px] text-[#0A0A0A]/60 font-bold">EXAMPLE 01</span>
              <div className="font-space text-sm font-black uppercase text-[#0A0A0A]">
                INSURANCE × HUMOUR ABOUT DEATH
              </div>
              <p className="font-inter text-xs text-[#0A0A0A]/75 leading-relaxed">
                An insurance company uses frank, deadpan humour about mortality instead of comforting, generic corporate reassurance.
              </p>
            </div>

            <div className="border-2 border-[#0A0A0A] p-5 bg-[#F7F6F2] space-y-2">
              <span className="font-mono text-[10px] text-[#0A0A0A]/60 font-bold">EXAMPLE 02</span>
              <div className="font-space text-sm font-black uppercase text-[#0A0A0A]">
                CHOCOLATE × PROVOCATIVE TRUTH
              </div>
              <p className="font-inter text-xs text-[#0A0A0A]/75 leading-relaxed">
                A luxury chocolate brand utilizes deliberately raw, provocative satire instead of sterile romantic Valentine clichés.
              </p>
            </div>

            <div className="border-2 border-[#0A0A0A] p-5 bg-[#F7F6F2] space-y-2">
              <span className="font-mono text-[10px] text-[#0A0A0A]/60 font-bold">EXAMPLE 03</span>
              <div className="font-space text-sm font-black uppercase text-[#0A0A0A]">
                CREATOR × UNFILTERED HONESTY
              </div>
              <p className="font-inter text-xs text-[#0A0A0A]/75 leading-relaxed">
                A creator abandons safe teleprompter scripts and allows unpredictable, uncomfortable, raw comedic conversations to flourish.
              </p>
            </div>

            <div className="border-2 border-[#0A0A0A] p-5 bg-[#F7F6F2] space-y-2">
              <span className="font-mono text-[10px] text-[#0A0A0A]/60 font-bold">EXAMPLE 04</span>
              <div className="font-space text-sm font-black uppercase text-[#0A0A0A]">
                B2B SAAS × PROCUREMENT DREAD
              </div>
              <p className="font-inter text-xs text-[#0A0A0A]/75 leading-relaxed">
                An enterprise software company openly jokes about the mind-numbing boredom and audit panic of buying compliance tools.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Real Examples of the Salt in Tea Mindset Gallery (8 Real World Ads) */}
        <div className="space-y-8 border-t-2 border-[#0A0A0A] pt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/70 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#0A0A0A]" />
                PROOFS OF CONCEPT IN THE REAL WORLD
              </span>
              <h3 className="font-space text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0A0A0A] mt-1">
                8 REAL EXAMPLES OF THE SALT IN TEA MINDSET.
              </h3>
            </div>

            {/* Filter Pills for the 8 Examples */}
            <div className="flex items-center gap-2 font-space text-xs font-bold uppercase">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1.5 border border-[#0A0A0A] transition-colors ${
                  activeTab === "all"
                    ? "bg-[#0A0A0A] text-[#F7F6F2]"
                    : "bg-[#F7F6F2] text-[#0A0A0A] hover:bg-[#EBEAE4]"
                }`}
              >
                ALL CASES (8)
              </button>
              <button
                onClick={() => setActiveTab("global")}
                className={`px-3 py-1.5 border border-[#0A0A0A] transition-colors ${
                  activeTab === "global"
                    ? "bg-[#0A0A0A] text-[#F7F6F2]"
                    : "bg-[#F7F6F2] text-[#0A0A0A] hover:bg-[#EBEAE4]"
                }`}
              >
                GLOBAL ICONIC
              </button>
              <button
                onClick={() => setActiveTab("indian")}
                className={`px-3 py-1.5 border border-[#0A0A0A] transition-colors ${
                  activeTab === "indian"
                    ? "bg-[#0A0A0A] text-[#F7F6F2]"
                    : "bg-[#F7F6F2] text-[#0A0A0A] hover:bg-[#EBEAE4]"
                }`}
              >
                INDIAN DIGITAL &amp; CULTURE
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredExamples.map((item) => (
              <div
                key={item.id}
                className="border-2 border-[#0A0A0A] bg-[#F7F6F2] shadow-[5px_5px_0px_#0A0A0A] flex flex-col justify-between overflow-hidden group hover:bg-[#EBEAE4]/40 transition-all"
              >
                <div>
                  {/* Image Container with Real Photo */}
                  <div className="relative aspect-[16/9] w-full border-b-2 border-[#0A0A0A] bg-[#0A0A0A] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.brand} - ${item.campaign}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-[#0A0A0A] text-[#DFFF00] px-2 py-0.5 font-space font-black text-[9px] uppercase tracking-wider border border-white/20">
                      0{item.id} {"//"} {item.brand}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-4">
                    <div>
                      <span className="text-[10px] font-space font-bold uppercase tracking-wider text-[#0A0A0A]/60 block mb-1">
                        {item.badge}
                      </span>
                      <h4 className="font-space text-xl font-black uppercase text-[#0A0A0A] leading-tight">
                        {item.campaign}
                      </h4>
                    </div>

                    {/* The Normal Recipe vs The Salt */}
                    <div className="space-y-2 text-xs border-y border-[#0A0A0A]/20 py-3 font-inter">
                      <div>
                        <span className="font-space font-bold uppercase text-[#0A0A0A]/50 text-[10px] block">
                          THE NORMAL RECIPE:
                        </span>
                        <p className="text-[#0A0A0A]/70 line-clamp-2">
                          {item.normalRecipe}
                        </p>
                      </div>

                      <div>
                        <span className="font-space font-bold uppercase text-[#0A0A0A] text-[10px] flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-[#DFFF00] border border-black inline-block" />
                          THE SALT:
                        </span>
                        <p className="text-[#0A0A0A] font-medium">
                          {item.theSalt}
                        </p>
                      </div>
                    </div>

                    {/* Why It Worked */}
                    <div className="space-y-1">
                      <span className="font-space font-bold text-[10px] uppercase text-[#0A0A0A]/60 block">
                        WHY IT WORKED:
                      </span>
                      <p className="font-inter text-xs text-[#0A0A0A]/85 leading-relaxed">
                        {item.whyItWorked}
                      </p>
                    </div>

                    {/* Lesson Box */}
                    <div className="bg-[#DFFF00]/25 border-l-2 border-[#0A0A0A] p-2.5">
                      <span className="font-space font-bold text-[9px] uppercase tracking-wider text-[#0A0A0A] block">
                        KEY LESSON:
                      </span>
                      <p className="font-inter text-xs font-semibold text-[#0A0A0A] leading-snug">
                        {item.lesson}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer with Real Ad Link */}
                <div className="p-4 pt-2 border-t border-[#0A0A0A]/20 flex items-center justify-between font-space text-[11px] font-bold uppercase">
                  <a
                    href={item.adLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#0A0A0A] text-[#F7F6F2] hover:bg-[#DFFF00] hover:text-[#0A0A0A] px-2.5 py-1.5 transition-colors border border-black"
                  >
                    <span>WATCH REAL AD / CASE</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[9px] font-mono text-[#0A0A0A]/50">
                    {item.sourceLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. The Five Rules of the Salt in Tea Technique */}
        <div className="space-y-8 border-t-2 border-[#0A0A0A] pt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/70 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0A0A0A]" />
                THE GOVERNANCE SYSTEM
              </span>
              <h3 className="font-space text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0A0A0A] mt-1">
                THE FIVE RULES OF THE SALT IN TEA TECHNIQUE.
              </h3>
            </div>
            <div className="font-space text-xs uppercase text-[#0A0A0A]/60 font-mono">
              [EXECUTION DISCIPLINE]
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 border border-[#0A0A0A]">
            {SALT_IN_TEA_RULES.map((rule, idx) => (
              <div
                key={rule.number}
                className={`p-6 flex flex-col justify-between border-b md:border-b-0 border-[#0A0A0A] bg-[#F7F6F2] hover:bg-[#EBEAE4] transition-colors ${
                  idx < 4 ? "md:border-r border-[#0A0A0A]" : ""
                }`}
              >
                <div className="space-y-3">
                  <div className="font-mono text-3xl font-black text-[#0A0A0A]">
                    {rule.number}
                  </div>
                  <h4 className="font-space text-base font-black uppercase text-[#0A0A0A] leading-tight">
                    {rule.title}
                  </h4>
                  <p className="font-inter text-xs text-[#0A0A0A]/80 leading-relaxed">
                    {rule.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#0A0A0A]/20 font-space text-[10px] uppercase font-bold text-[#0A0A0A]/50">
                  RULE PROTOCOL {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. What Makes This Technique Different from Purple Cow? */}
        <div className="border-2 border-[#0A0A0A] bg-[#0A0A0A] text-[#F7F6F2] p-6 sm:p-10 shadow-[8px_8px_0px_#0A0A0A] space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-4 font-space text-xs uppercase tracking-wider">
            <span className="text-[#DFFF00] font-bold">
              FRAMEWORK COMPARISON: PURPLE COW vs. SALT IN TEA
            </span>
            <span className="text-[#F7F6F2]/50 font-mono">
              [PROPRIETARY vs. INDUSTRY STANDARD]
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="font-space text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#F7F6F2]">
              WHAT MAKES THIS TECHNIQUE DIFFERENT FROM PURPLE COW?
            </h3>
            <p className="font-inter text-sm sm:text-base text-[#F7F6F2]/80 max-w-3xl leading-relaxed">
              Purple Cow is about being remarkable. The Salt in Tea Technique is your studio&apos;s proposed way of searching for that remarkability by deliberately challenging a familiar recipe.
            </p>
          </div>

          {/* Comparison Matrix Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left font-space text-xs border border-white/20">
              <thead>
                <tr className="bg-white/10 text-[#DFFF00] uppercase tracking-wider border-b border-white/20">
                  <th className="p-3.5 border-r border-white/20">DIMENSION</th>
                  <th className="p-3.5 border-r border-white/20">PURPLE COW (SETH GODIN)</th>
                  <th className="p-3.5 text-[#DFFF00]">THE SALT IN TEA TECHNIQUE™ (THE BORING ADS BY DAKSH)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 font-inter text-xs text-[#F7F6F2]/85">
                {SALT_VS_PURPLE_COW.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5 font-space font-bold uppercase text-[#F7F6F2] border-r border-white/20">
                      {row.dimension}
                    </td>
                    <td className="p-3.5 border-r border-white/20 text-[#F7F6F2]/70">
                      {row.purpleCow}
                    </td>
                    <td className="p-3.5 font-medium text-[#DFFF00]">
                      {row.saltInTea}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-2 pt-2 text-[11px] font-space text-[#F7F6F2]/60 uppercase">
            <AlertTriangle className="w-3.5 h-3.5 text-[#DFFF00] shrink-0" />
            <span>
              NOTE: THIS IS A PROPOSED STUDIO FRAMEWORK RATHER THAN AN ESTABLISHED, SCIENTIFICALLY VALIDATED MARKETING THEORY.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
