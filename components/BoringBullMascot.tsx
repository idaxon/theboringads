"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  AnimatePresence,
  PanInfo,
} from "framer-motion";

interface BoringBullMascotProps {
  className?: string;
  onWakeChange?: (awake: boolean) => void;
}

const CLICK_QUOTES = [
  "STILL BORING.",
  "MOO. (RESPECTFULLY BORED)",
  "JUST THE CREATIVE. NO BULL.",
  "I WAS SLEEPING.",
  "DO YOU MIND?",
  "WHAT DO YOU WANT?",
  "100% UNBOTHERED.",
  "NO MARKETING FLUFF.",
  "WE MAKE THE IDEA. YOU MAKE IT HAPPEN.",
  "TRYING NOT TO CARE.",
];

const SHAKE_QUOTES = [
  "WOAH. CALM DOWN.",
  "STOP SHAKING ME.",
  "I GET DIZZY.",
  "IS THIS SUPPOSED TO SCARE ME?",
  "AGGRESSIVE.",
  "STILL UNIMPRESSED.",
  "NICE DRAG.",
  "PUT ME DOWN.",
];

interface SteamPuff {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  scale: number;
}

export default function BoringBullMascot({
  className = "",
  onWakeChange,
}: BoringBullMascotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isAwake, setIsAwake] = useState(false);
  const [isDizzy, setIsDizzy] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [quote, setQuote] = useState<string | null>(null);
  const [steamPuffs, setSteamPuffs] = useState<SteamPuff[]>([]);
  const quoteTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastShakeTime = useRef<number>(0);

  // Mouse tracking springs for smooth looking around & 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Natural periodic blinking
  useEffect(() => {
    let blinkTimeout: NodeJS.Timeout;

    const runBlinkCycle = () => {
      const delay = Math.random() * 3200 + 2400; // blink every 2.4s - 5.6s

      blinkTimeout = setTimeout(() => {
        setIsBlinking(true);

        // 35% chance of double-blink
        const isDouble = Math.random() < 0.35;

        setTimeout(() => {
          setIsBlinking(false);

          if (isDouble) {
            setTimeout(() => {
              setIsBlinking(true);
              setTimeout(() => {
                setIsBlinking(false);
                runBlinkCycle();
              }, 120);
            }, 100);
          } else {
            runBlinkCycle();
          }
        }, 150);
      }, delay);
    };

    runBlinkCycle();
    return () => clearTimeout(blinkTimeout);
  }, []);

  // Track window mouse coordinates relative to mascot center
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || isDragging) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = Math.max(-18, Math.min(18, (e.clientX - centerX) / 30));
      const deltaY = Math.max(-18, Math.min(18, (e.clientY - centerY) / 30));

      mouseX.set(deltaX);
      mouseY.set(deltaY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isDragging]);

  // Trigger nostril steam puffs
  const snortSteam = (intensity = 1) => {
    const scaleFactor = Math.min(1.8, intensity);
    const newPuffs: SteamPuff[] = [
      // Left nostril puffs (x: 214, y: 365 in 501x498 coordinate system)
      { id: Date.now() + 1, x: 212, y: 365, vx: -16 * scaleFactor, vy: 14, scale: 0.9 * scaleFactor },
      { id: Date.now() + 2, x: 206, y: 370, vx: -25 * scaleFactor, vy: 20, scale: 1.2 * scaleFactor },
      { id: Date.now() + 3, x: 200, y: 375, vx: -34 * scaleFactor, vy: 26, scale: 1.5 * scaleFactor },
      // Right nostril puffs (x: 284, y: 364 in 501x498 coordinate system)
      { id: Date.now() + 4, x: 286, y: 364, vx: 16 * scaleFactor, vy: 14, scale: 0.9 * scaleFactor },
      { id: Date.now() + 5, x: 292, y: 370, vx: 25 * scaleFactor, vy: 20, scale: 1.2 * scaleFactor },
      { id: Date.now() + 6, x: 298, y: 375, vx: 34 * scaleFactor, vy: 26, scale: 1.5 * scaleFactor },
    ];
    setSteamPuffs(newPuffs);
    setTimeout(() => setSteamPuffs([]), 900);
  };

  const showQuote = (text: string, duration = 2600) => {
    setQuote(text);
    if (quoteTimeoutRef.current) clearTimeout(quoteTimeoutRef.current);
    quoteTimeoutRef.current = setTimeout(() => {
      setQuote(null);
    }, duration);
  };

  // Click handler (poke)
  const handleClick = () => {
    if (isDragging) return;
    setIsAwake(true);
    onWakeChange?.(true);

    // Snort steam on poke
    snortSteam(1);

    // Fast blink / squint
    setIsBlinking(true);
    setTimeout(() => setIsBlinking(false), 200);

    const randomQuote =
      CLICK_QUOTES[Math.floor(Math.random() * CLICK_QUOTES.length)];
    showQuote(randomQuote);

    setTimeout(() => {
      setIsAwake(false);
      onWakeChange?.(false);
    }, 2400);
  };

  // Drag start handler
  const handleDragStart = () => {
    setIsDragging(true);
    setIsAwake(true);
    setIsBlinking(false);
  };

  // Drag handler (detect rapid dragging / shaking)
  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const speed = Math.hypot(info.velocity.x, info.velocity.y);
    const now = Date.now();

    // If dragged rapidly (velocity > 600px/s)
    if (speed > 600 && now - lastShakeTime.current > 700) {
      lastShakeTime.current = now;
      setIsDizzy(true);
      snortSteam(1.5); // extra intense steam snort!

      const shakeQuote =
        SHAKE_QUOTES[Math.floor(Math.random() * SHAKE_QUOTES.length)];
      showQuote(shakeQuote, 2400);

      setTimeout(() => setIsDizzy(false), 2000);
    }
  };

  // Drag end handler (snap back to origin)
  const handleDragEnd = () => {
    setIsDragging(false);
    snortSteam(1);

    setTimeout(() => {
      setIsAwake(false);
    }, 1800);
  };

  return (
    <div
      ref={containerRef}
      className={`relative select-none flex flex-col items-center justify-center ${className}`}
    >
      {/* Speech / Deadpan Thought Bubble */}
      <AnimatePresence>
        {quote && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.8 }}
            animate={{ opacity: 1, y: -24, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.85 }}
            transition={{ type: "spring", stiffness: 420, damping: 26 }}
            className="absolute -top-12 sm:-top-16 z-30 pointer-events-none bg-[#DFFF00] text-[#0A0A0A] border-2 border-[#0A0A0A] px-4 py-2 font-space font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[4px_4px_0px_#0A0A0A] max-w-[320px] text-center"
          >
            {quote}
            {/* Arrow pointing to bull */}
            <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-3.5 h-3.5 bg-[#DFFF00] border-r-2 border-b-2 border-[#0A0A0A] rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Draggable Mascot Container */}
      <motion.div
        drag
        dragSnapToOrigin={true}
        dragElastic={0.45}
        dragTransition={{ bounceStiffness: 450, bounceDamping: 24 }}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          rotate: isDizzy ? [-6, 6, -6, 6, 0] : 0,
        }}
        transition={{
          rotate: {
            duration: 0.5,
            repeat: isDizzy ? 2 : 0,
          },
        }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.97 }}
        className="relative cursor-grab active:cursor-grabbing group w-full max-w-[320px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[500px] xl:max-w-[540px] aspect-square flex items-center justify-center touch-none select-none"
      >
        {/* Mascot Bull Image Layer (Clean transparent background) */}
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
          <Image
            src="/images/mascot.png"
            alt="The Boring Ads Official Mascot Bull"
            width={501}
            height={498}
            priority
            className="w-full h-full object-contain select-none"
          />

          {/* Interactive SVG Overlay (aligned exactly with 501x498 coordinate space) */}
          <svg
            viewBox="0 0 501 498"
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          >
            {/* Left Eye Eyelid (Only appears and drops down during blink) */}
            <g opacity={isBlinking ? 1 : 0} style={{ transition: "opacity 0.05s" }}>
              <defs>
                <clipPath id="leftEyeClipPath">
                  <path d="M 181 204 Q 214 202 246 206 Q 248 230 236 248 Q 214 254 188 244 Q 180 230 181 204 Z" />
                </clipPath>
              </defs>

              {/* Left Eyelid that slides down from top to close eye */}
              <motion.path
                d="M 175 180 H 255 V 258 H 175 Z"
                fill="#201C1D"
                clipPath="url(#leftEyeClipPath)"
                animate={{
                  y: isBlinking ? 0 : -60,
                }}
                transition={{
                  duration: isBlinking ? 0.09 : 0.12,
                  ease: "easeInOut",
                }}
              />

              {/* Heavy chalk eyelid crease line on left eye */}
              <motion.line
                x1="181"
                y1="230"
                x2="246"
                y2="232"
                stroke="#151213"
                strokeWidth="4"
                strokeLinecap="round"
                clipPath="url(#leftEyeClipPath)"
                animate={{
                  y: isBlinking ? 0 : -60,
                }}
                transition={{ duration: isBlinking ? 0.09 : 0.12 }}
              />
            </g>

            {/* Right Eye Eyelid (Only appears and drops down during blink) */}
            <g opacity={isBlinking ? 1 : 0} style={{ transition: "opacity 0.05s" }}>
              <defs>
                <clipPath id="rightEyeClipPath">
                  <path d="M 256 212 Q 295 208 335 214 Q 338 234 322 248 Q 295 254 268 246 Q 256 232 256 212 Z" />
                </clipPath>
              </defs>

              {/* Right Eyelid that slides down from top to close eye */}
              <motion.path
                d="M 250 180 H 345 V 258 H 250 Z"
                fill="#201C1D"
                clipPath="url(#rightEyeClipPath)"
                animate={{
                  y: isBlinking ? 0 : -60,
                }}
                transition={{
                  duration: isBlinking ? 0.09 : 0.12,
                  ease: "easeInOut",
                }}
              />

              {/* Heavy chalk eyelid crease line on right eye */}
              <motion.line
                x1="256"
                y1="232"
                x2="335"
                y2="234"
                stroke="#151213"
                strokeWidth="4"
                strokeLinecap="round"
                clipPath="url(#rightEyeClipPath)"
                animate={{
                  y: isBlinking ? 0 : -60,
                }}
                transition={{ duration: isBlinking ? 0.09 : 0.12 }}
              />
            </g>

            {/* Nostril Steam Puffs Emitter */}
            {steamPuffs.map((puff) => (
              <motion.circle
                key={puff.id}
                cx={puff.x}
                cy={puff.y}
                r={10 * puff.scale}
                fill="#E2E2DC"
                stroke="#0A0A0A"
                strokeWidth="2"
                initial={{ opacity: 0.85, scale: 0.5 }}
                animate={{
                  cx: puff.x + puff.vx,
                  cy: puff.y + puff.vy,
                  opacity: 0,
                  scale: 1.8 * puff.scale,
                }}
                transition={{ duration: 0.75, ease: "easeOut" }}
              />
            ))}
          </svg>
        </div>
      </motion.div>

      {/* Mascot State Telemetry */}
      <div className="mt-3 flex items-center gap-2 font-space text-[10px] uppercase tracking-wider text-[#0A0A0A]/60">
        <span
          className={`w-1.5 h-1.5 rounded-full inline-block ${
            isAwake ? "bg-[#DFFF00]" : "bg-[#0A0A0A]"
          }`}
        />
        <span>
          {isAwake ? "STUDIO BULL: AWAKE" : isHovered ? "CLICK OR DRAG" : "UNBOTHERED MASCOT"}
        </span>
      </div>
    </div>
  );
}
