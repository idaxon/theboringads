"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Brain, Zap } from "lucide-react";
import { ThinkingConcept } from "@/lib/thinking";
import ConceptVisual from "./ConceptVisuals";

interface ConceptDetailModalProps {
  concept: ThinkingConcept | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectConcept?: (c: ThinkingConcept) => void;
  allConcepts: ThinkingConcept[];
  onOpenBrief?: () => void;
}

export default function ConceptDetailModal({
  concept,
  isOpen,
  onClose,
  onSelectConcept,
  allConcepts,
  onOpenBrief,
}: ConceptDetailModalProps) {
  // Handle keyboard ESC and Arrow keys
  useEffect(() => {
    if (!isOpen || !concept) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        const idx = allConcepts.findIndex((c) => c.slug === concept.slug);
        const prev = allConcepts[(idx - 1 + allConcepts.length) % allConcepts.length];
        onSelectConcept?.(prev);
      } else if (e.key === "ArrowRight") {
        const idx = allConcepts.findIndex((c) => c.slug === concept.slug);
        const next = allConcepts[(idx + 1) % allConcepts.length];
        onSelectConcept?.(next);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, concept, allConcepts, onClose, onSelectConcept]);

  if (!isOpen || !concept) return null;

  const currentIndex = allConcepts.findIndex((c) => c.slug === concept.slug);
  const prevConcept = allConcepts[(currentIndex - 1 + allConcepts.length) % allConcepts.length];
  const nextConcept = allConcepts[(currentIndex + 1) % allConcepts.length];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#0A0A0A]/80 backdrop-blur-sm transition-all select-none animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-concept-title"
    >
      {/* Backdrop click area */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Modal Card */}
      <div className="relative w-full max-w-3xl bg-[#F7F6F2] border-2 border-[#0A0A0A] shadow-[8px_8px_0px_#0A0A0A] my-auto max-h-[92vh] overflow-y-auto flex flex-col z-10">
        {/* Header Bar */}
        <div className="sticky top-0 bg-[#F7F6F2] border-b-2 border-[#0A0A0A] px-5 py-3.5 flex items-center justify-between z-20">
          <div className="flex items-center gap-3 font-space text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
            <span className="w-2.5 h-2.5 bg-[#DFFF00] border border-[#0A0A0A] inline-block" />
            <span>
              THE THINKING INDEX / {concept.number}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectConcept?.(prevConcept)}
              className="p-1.5 border border-[#0A0A0A] hover:bg-[#DFFF00] transition-colors"
              title="Previous Concept (Left Arrow)"
              aria-label="Previous Concept"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectConcept?.(nextConcept)}
              className="p-1.5 border border-[#0A0A0A] hover:bg-[#DFFF00] transition-colors"
              title="Next Concept (Right Arrow)"
              aria-label="Next Concept"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 border-2 border-[#0A0A0A] bg-[#0A0A0A] text-[#F7F6F2] hover:bg-[#DFFF00] hover:text-[#0A0A0A] transition-colors ml-2"
              title="Close (Esc)"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Top Info Lockup */}
          <div className="space-y-3 border-b border-[#0A0A0A]/20 pb-6">
            <div className="flex flex-wrap items-center gap-2 font-space text-xs font-bold uppercase tracking-wider">
              <span className="px-2 py-0.5 bg-[#0A0A0A] text-[#DFFF00]">
                {concept.category}
              </span>
              <span className="text-[#0A0A0A]/50">•</span>
              <span className="text-[#0A0A0A]/70">
                ATTRIBUTION: {concept.attribution}
              </span>
            </div>

            <h2
              id="modal-concept-title"
              className="font-space text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0A0A0A]"
            >
              {concept.number} — {concept.title}
            </h2>

            <div className="inline-block bg-[#DFFF00] px-3 py-1 border border-[#0A0A0A] font-space font-bold text-xs uppercase tracking-wide text-[#0A0A0A]">
              TAGLINE: “{concept.tagline}”
            </div>

            <p className="font-inter text-base sm:text-lg text-[#0A0A0A]/90 leading-relaxed pt-2">
              {concept.summary}
            </p>
          </div>

          {/* Visual Schematic Treatment */}
          <div className="space-y-2">
            <span className="font-space text-[11px] font-bold uppercase tracking-widest text-[#0A0A0A]/60 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#0A0A0A]" />
              VISUAL SCHEMATIC / PERCEPTUAL MODEL
            </span>
            <ConceptVisual type={concept.visualSchema} isInteractive={true} />
          </div>

          {/* Deep Dive 2-Col Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Box 1: Psychological Mechanism */}
            <div className="border border-[#0A0A0A] p-5 bg-[#EBEAE4]/40 space-y-2">
              <div className="flex items-center gap-2 font-space text-xs font-bold uppercase tracking-wide text-[#0A0A0A]">
                <Brain className="w-4 h-4" />
                <span>THE COGNITIVE MECHANISM</span>
              </div>
              <p className="font-inter text-sm text-[#0A0A0A]/80 leading-relaxed">
                {concept.deepDive.psychologicalMechanism}
              </p>
            </div>

            {/* Box 2: Why Safe Advertising Fails */}
            <div className="border border-[#0A0A0A] p-5 bg-[#EBEAE4]/40 space-y-2">
              <div className="flex items-center gap-2 font-space text-xs font-bold uppercase tracking-wide text-[#0A0A0A]">
                <BookOpen className="w-4 h-4" />
                <span>WHY PLAYING IT SAFE FAILS</span>
              </div>
              <p className="font-inter text-sm text-[#0A0A0A]/80 leading-relaxed">
                {concept.deepDive.whySafeFails}
              </p>
            </div>
          </div>

          {/* Studio Application & Rule */}
          <div className="border-2 border-[#0A0A0A] p-5 bg-[#DFFF00]/15 space-y-3">
            <div className="font-space text-xs font-black uppercase tracking-wider text-[#0A0A0A] flex items-center justify-between">
              <span>HOW THE BORING ADS (BY DAKSH) APPLIES THIS</span>
              <span className="text-[10px] bg-[#0A0A0A] text-[#F7F6F2] px-1.5 py-0.5">STUDIO RULE</span>
            </div>
            <p className="font-inter text-sm text-[#0A0A0A] font-medium leading-relaxed">
              {concept.deepDive.studioApplication}
            </p>
          </div>

          {/* Connected Speculative Campaign */}
          {concept.deepDive.speculativeCaseRef && (
            <div className="border border-[#0A0A0A] p-5 bg-[#0A0A0A] text-[#F7F6F2] space-y-3">
              <div className="flex items-center justify-between font-space text-xs uppercase tracking-wider">
                <span className="text-[#DFFF00] font-bold">
                  STUDIO EXPERIMENT IN ACTION
                </span>
                <span className="text-[#F7F6F2]/50 text-[10px]">
                  [SPECULATIVE SPEC CONCEPT]
                </span>
              </div>

              <div>
                <div className="font-space text-lg font-black uppercase text-[#F7F6F2]">
                  {concept.deepDive.speculativeCaseRef.title}
                </div>
                <div className="text-xs font-space text-[#F7F6F2]/70 uppercase">
                  CLIENT: {concept.deepDive.speculativeCaseRef.clientName}
                </div>
                <div className="font-serif italic text-sm text-[#DFFF00] pt-1">
                  {concept.deepDive.speculativeCaseRef.quote}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <Link
                  href={`/work/${concept.deepDive.speculativeCaseRef.slug}`}
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 bg-[#DFFF00] text-[#0A0A0A] px-3 py-1.5 font-space text-xs font-bold uppercase tracking-wider hover:bg-[#F7F6F2] transition-colors border border-black"
                >
                  <span>INSPECT SPECULATIVE CAMPAIGN</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] font-mono text-[#F7F6F2]/40">
                  REF: /{concept.deepDive.speculativeCaseRef.slug}
                </span>
              </div>
            </div>
          )}

          {/* Key Strategic Takeaways */}
          <div className="space-y-3">
            <span className="font-space text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/70">
              CORE TAKEAWAYS FOR BRANDS
            </span>
            <ul className="space-y-2">
              {concept.deepDive.takeaways.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 font-inter text-sm text-[#0A0A0A]/85"
                >
                  <span className="w-4 h-4 bg-[#0A0A0A] text-[#DFFF00] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions Bar */}
        <div className="sticky bottom-0 bg-[#F7F6F2] border-t-2 border-[#0A0A0A] p-4 px-6 flex flex-wrap items-center justify-between gap-4 z-20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectConcept?.(prevConcept)}
              className="inline-flex items-center gap-1 font-space text-xs font-bold uppercase tracking-wider hover:text-[#0A0A0A] text-[#0A0A0A]/70"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>PREV: {prevConcept.number}</span>
            </button>
            <span className="text-[#0A0A0A]/30">|</span>
            <button
              onClick={() => onSelectConcept?.(nextConcept)}
              className="inline-flex items-center gap-1 font-space text-xs font-bold uppercase tracking-wider hover:text-[#0A0A0A] text-[#0A0A0A]/70"
            >
              <span>NEXT: {nextConcept.number}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`/thinking/${concept.slug}`}
              className="font-space text-xs font-bold uppercase tracking-wider text-[#0A0A0A] hover:underline"
              onClick={onClose}
            >
              PERMALINK ↗
            </Link>
            <button
              onClick={() => {
                onClose();
                onOpenBrief?.();
              }}
              className="bg-[#0A0A0A] text-[#F7F6F2] hover:bg-[#DFFF00] hover:text-[#0A0A0A] px-4 py-2 font-space text-xs font-bold uppercase tracking-wider border border-[#0A0A0A] transition-colors"
            >
              APPLY THIS TO YOUR BRAND →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
