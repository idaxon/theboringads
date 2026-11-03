"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Flame, Lightbulb } from "lucide-react";
import { SALT_IN_TEA_EXAMPLES } from "@/lib/thinking";

interface CarouselSlide {
  id: string;
  badge: string;
  techniqueBadge: string;
  title: string;
  tagline: string;
  summary: string;
  theSalt: string;
  image: string;
  linkText: string;
  href: string;
  isParable?: boolean;
}

export default function SaltInTeaCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Slides:
  // Slide 0: The Salt in Tea Technique™ (TECH-01)
  // Slide 1: The Honest Error™ (TECH-02)
  // Slides 2..9: Real-world advertising proof cases
  const slides: CarouselSlide[] = [
    {
      id: "salt-in-tea-technique",
      badge: "BORING TECHNIQUE 01 // PROPRIETARY PHILOSOPHY",
      techniqueBadge: "BORING TECHNIQUE 01",
      title: "THE SALT IN TEA TECHNIQUE™",
      tagline: "Don't follow the recipe. Question it.",
      summary:
        "Everyone knows the recipe for tea: water, milk, tea leaves, sugar. Now imagine adding a pinch of salt instead. It might taste surprising. It might make you question the formula. But you will definitely remember that cup of tea.",
      theSalt: "FAMILIARITY + UNEXPECTED ELEMENT + MEANINGFUL EXECUTION",
      image: "/images/salt_in_tea_hero.jpg",
      linkText: "EXPLORE THE FULL PLAYBOOK & 5 RULES →",
      href: "/thinking/the-salt-in-tea-technique",
      isParable: true,
    },
    {
      id: "honest-error-technique",
      badge: "BORING TECHNIQUE 02 // CREATIVE PSYCHOLOGY",
      techniqueBadge: "BORING TECHNIQUE 02",
      title: "THE HONEST ERROR™",
      tagline: "Make the mistake. Own the mistake. Make it the message.",
      summary:
        "A coffee brand prints “Definately Awake” instead of “Definitely Awake” on its packaging. Instead of hiding the flaw, they own it: “We checked the coffee. We forgot to check the spelling. Our team clearly needed a cup. Drink our coffee. Stay awake. Spell correctly.”",
      theSalt: "ERROR + HONEST OWNERSHIP + RELEVANT HUMOUR = MEMORABLE STORY",
      image: "/images/honest_error_hero.jpg",
      linkText: "EXPLORE THE FULL PLAYBOOK & 8 CONCEPTS →",
      href: "/thinking/the-honest-error",
      isParable: true,
    },
    ...SALT_IN_TEA_EXAMPLES.map((ex) => ({
      id: `case-${ex.id}`,
      badge: `CASE 0${ex.id} // ${ex.brand.toUpperCase()}`,
      techniqueBadge: `CASE 0${ex.id}`,
      title: ex.campaign.toUpperCase(),
      tagline: ex.badge,
      summary: ex.whyItWorked,
      theSalt: ex.theSalt,
      image: ex.image,
      linkText: "INSPECT CASE IN PLAYBOOK →",
      href: "/thinking/the-salt-in-tea-technique",
      isParable: false,
    })),
  ];

  // Auto-advance slides every 5.5s unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <section
      id="salt-in-tea-spotlight"
      className="relative w-full py-16 sm:py-24 border-b-2 border-[#0A0A0A] bg-[#F7F6F2]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Carousel Container */}
        <div className="border-2 border-[#0A0A0A] bg-[#EBEAE4] shadow-[8px_8px_0px_#0A0A0A] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Column */}
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto border-b-2 lg:border-b-0 lg:border-r-2 border-[#0A0A0A] bg-[#0A0A0A] min-h-[300px] sm:min-h-[380px]">
              <Image
                key={active.image}
                src={active.image}
                alt={active.title}
                fill
                priority
                className="object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Slide Counter Overlay */}
              <div className="absolute top-4 left-4 bg-[#0A0A0A]/90 text-[#DFFF00] px-3 py-1 font-space text-xs font-black uppercase tracking-wider border border-white/20">
                SLIDE {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </div>

              {/* Tagline Pill Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A0A0A]/90 text-[#F7F6F2] p-3 border border-white/20 font-space text-xs sm:text-sm uppercase font-bold tracking-wide flex items-center justify-between">
                <span className="truncate">{active.tagline}</span>
                <span className="text-[#DFFF00] text-[10px] shrink-0 font-mono">
                  {active.isParable ? "CORE FORMULA" : "PROVEN AD"}
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#F7F6F2]">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-space text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A]/70">
                  <span className="flex items-center gap-1.5 text-[#0A0A0A]">
                    {active.isParable ? (
                      <Lightbulb className="w-3.5 h-3.5" />
                    ) : (
                      <Flame className="w-3.5 h-3.5" />
                    )}
                    <span>{active.badge}</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#0A0A0A]/50">
                    SPOTLIGHT CAROUSEL
                  </span>
                </div>

                <h3 className="font-space text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#0A0A0A] leading-tight">
                  {active.title}
                </h3>

                <p className="font-inter text-sm sm:text-base text-[#0A0A0A]/85 leading-relaxed font-normal">
                  {active.summary}
                </p>

                {/* The Salt Highlight Box */}
                <div className="bg-[#DFFF00]/25 border-l-4 border-[#0A0A0A] p-3 space-y-1">
                  <span className="font-space font-black text-[10px] uppercase text-[#0A0A0A] block">
                    {active.isParable ? "THE EQUATION:" : "THE UNCONVENTIONAL SALT:"}
                  </span>
                  <p className="font-inter text-xs sm:text-sm font-semibold text-[#0A0A0A]">
                    {active.theSalt}
                  </p>
                </div>
              </div>

              {/* Bottom Actions & Controls */}
              <div className="pt-4 border-t border-[#0A0A0A]/20 flex flex-col gap-4">
                <Link
                  href={active.href}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-[#F7F6F2] hover:bg-[#DFFF00] hover:text-[#0A0A0A] py-3.5 px-4 font-space text-xs font-black uppercase tracking-wider border-2 border-[#0A0A0A] transition-colors text-center"
                >
                  <span>{active.linkText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Carousel Navigation Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 transition-all ${
                          idx === currentSlide
                            ? "w-6 bg-[#0A0A0A]"
                            : "w-2 bg-[#0A0A0A]/25 hover:bg-[#0A0A0A]/60"
                        }`}
                        aria-label={`Jump to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevSlide}
                      className="p-2 border-2 border-[#0A0A0A] bg-[#F7F6F2] hover:bg-[#DFFF00] transition-colors"
                      aria-label="Previous slide"
                      title="Previous"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2 border-2 border-[#0A0A0A] bg-[#F7F6F2] hover:bg-[#DFFF00] transition-colors"
                      aria-label="Next slide"
                      title="Next"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Transition Cue to The Thinking Index */}
        <div className="flex items-center justify-between pt-2 font-space text-xs font-bold uppercase tracking-wider text-[#0A0A0A]/60">
          <span>ALL CAMPAIGN CONCEPTS, RULES &amp; COMPARISON TABLES ARE INSIDE THE STANDALONE PLAYBOOKS</span>
          <a
            href="#thinking-index"
            className="hover:text-[#0A0A0A] flex items-center gap-1 text-[#0A0A0A]"
          >
            <span>CONTINUE TO THE THINKING INDEX</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
