"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface HeroBenchIllustrationProps {
  className?: string;
}

const BULL_QUOTES = [
  "PUT THE PHONE DOWN.",
  "WALLPAPER ADS EVERYWHERE.",
  "EVERYONE SCROLLING. NO ONE REMEMBERING.",
  "STILL READING ACTUAL IDEAS.",
  "NO ONE IS LOOKING AT YOUR CAROUSEL AD.",
  "BORING.",
  "UNBOTHERED.",
];

export default function HeroBenchIllustration({ className = "" }: HeroBenchIllustrationProps) {
  const [isBlinking, setIsBlinking] = useState(false);
  const [bubble, setBubble] = useState<string | null>(null);
  const bubbleTimeout = useRef<NodeJS.Timeout | null>(null);

  // Periodic blinking for the bull sitting on the bench
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const scheduleBlink = () => {
      const delay = Math.random() * 3200 + 2400; // blink every 2.4 - 5.6s
      timer = setTimeout(() => {
        setIsBlinking(true);

        const isDouble = Math.random() < 0.35;

        setTimeout(() => {
          setIsBlinking(false);

          if (isDouble) {
            setTimeout(() => {
              setIsBlinking(true);
              setTimeout(() => {
                setIsBlinking(false);
                scheduleBlink();
              }, 120);
            }, 100);
          } else {
            scheduleBlink();
          }
        }, 150);
      }, delay);
    };

    scheduleBlink();
    return () => clearTimeout(timer);
  }, []);

  const showQuote = (text: string) => {
    setBubble(text);
    if (bubbleTimeout.current) clearTimeout(bubbleTimeout.current);
    bubbleTimeout.current = setTimeout(() => {
      setBubble(null);
    }, 2500);
  };

  const handleBullClick = () => {
    setIsBlinking(true);
    setTimeout(() => setIsBlinking(false), 200);

    const random = BULL_QUOTES[Math.floor(Math.random() * BULL_QUOTES.length)];
    showQuote(random);
  };

  return (
    <div className={`relative select-none w-full flex flex-col items-center lg:items-end ${className}`}>
      {/* Illustration Container — Bigger, no hover/cursor effects */}
      <div
        onClick={handleBullClick}
        className="relative w-full max-w-[780px] lg:max-w-[880px] xl:max-w-[960px] cursor-default"
        style={{ cursor: "default" }}
        title="Click the bull to interact"
      >
        <div className="relative w-full aspect-[786/317] flex items-end">
          <Image
            src="/images/desktop_image.png"
            alt="The Boring Ads — Everyone is glued to their phones, while the bored bull reads creative newspaper"
            width={786}
            height={317}
            priority
            className="w-full h-full object-contain select-none pointer-events-none"
            draggable={false}
          />

          {/* SVG Overlay for Interactive Blinking on the Bull (786 x 317 coordinates) */}
          <svg
            viewBox="0 0 786 317"
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          >
            {/* Bull Eyes are located at X: 670..729, Y: 110..135 */}
            {/* Left Eye Eyelid of Bull */}
            <g opacity={isBlinking ? 1 : 0} style={{ transition: "opacity 0.05s" }}>
              <defs>
                <clipPath id="benchBullLeftEye">
                  <ellipse cx={686} cy={125} rx={12} ry={10} />
                </clipPath>
              </defs>
              <rect
                x={672}
                y={114}
                width={28}
                height={22}
                fill="#201C1D"
                clipPath="url(#benchBullLeftEye)"
              />
              <line
                x1={674}
                y1={125}
                x2={698}
                y2={125}
                stroke="#0A0A0A"
                strokeWidth="2.5"
                strokeLinecap="round"
                clipPath="url(#benchBullLeftEye)"
              />
            </g>

            {/* Right Eye Eyelid of Bull */}
            <g opacity={isBlinking ? 1 : 0} style={{ transition: "opacity 0.05s" }}>
              <defs>
                <clipPath id="benchBullRightEye">
                  <ellipse cx={715} cy={125} rx={13} ry={10} />
                </clipPath>
              </defs>
              <rect
                x={701}
                y={114}
                width={28}
                height={22}
                fill="#201C1D"
                clipPath="url(#benchBullRightEye)"
              />
              <line
                x1={703}
                y1={125}
                x2={727}
                y2={125}
                stroke="#0A0A0A"
                strokeWidth="2.5"
                strokeLinecap="round"
                clipPath="url(#benchBullRightEye)"
              />
            </g>
          </svg>

          {/* Speech Bubble — positioned near the bull (right side of image) */}
          <AnimatePresence>
            {bubble && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
                className="absolute z-30 pointer-events-none bg-[#DFFF00] text-[#0A0A0A] border-2 border-[#0A0A0A] px-3 py-1.5 font-space font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-[3px_3px_0px_#0A0A0A] max-w-[220px] sm:max-w-[250px] text-center"
                style={{
                  bottom: "62%",
                  right: "2%",
                }}
              >
                {bubble}
                {/* Arrow pointing down toward bull */}
                <div className="absolute left-6 -bottom-[7px] w-3 h-3 bg-[#DFFF00] border-r-2 border-b-2 border-[#0A0A0A] rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Minimal caption pill */}
        <div className="hidden sm:flex items-center justify-end gap-2 mt-2 font-space text-[10px] uppercase tracking-wider text-[#0A0A0A]/50">
          <span className="w-1.5 h-1.5 bg-[#DFFF00] border border-black inline-block" />
          <span>EVERYONE IS ON PHONES. THE BULL READS THE WORK.</span>
        </div>
      </div>
    </div>
  );
}
