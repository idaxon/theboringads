"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

interface HeroMascotInteractiveProps {
  className?: string;
  onWakeChange?: (awake: boolean) => void;
}

const DEADPAN_REACTIONS = [
  "STILL BORING.",
  "TRYING TO SLEEP.",
  "DO YOU MIND?",
  "UNIMPRESSED.",
  "NICE TRY.",
  "NO CREATIVE YET.",
  "BORING.",
  "ZZZ...",
];

export default function HeroMascotInteractive({
  className = "",
  onWakeChange,
}: HeroMascotInteractiveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isAwake, setIsAwake] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [pokeCount, setPokeCount] = useState(0);
  const [speechBubble, setSpeechBubble] = useState<string | null>(null);
  const speechTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mouse tracking springs for smooth looking around
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const eyeX = useSpring(mouseX, springConfig);
  const eyeY = useSpring(mouseY, springConfig);

  // 3D-like subtle head tilt based on mouse position
  const rotateX = useTransform(mouseY, [-15, 15], [8, -8]);
  const rotateY = useTransform(mouseX, [-15, 15], [-8, 8]);

  // Periodic natural blinking
  useEffect(() => {
    let blinkTimer: NodeJS.Timeout;

    const scheduleNextBlink = () => {
      const delay = Math.random() * 3200 + 2400; // blink every 2.4 - 5.6s
      blinkTimer = setTimeout(() => {
        setIsBlinking(true);

        // Chance of double-blink
        const isDouble = Math.random() > 0.65;

        setTimeout(() => {
          setIsBlinking(false);
          if (isDouble) {
            setTimeout(() => {
              setIsBlinking(true);
              setTimeout(() => {
                setIsBlinking(false);
                scheduleNextBlink();
              }, 140);
            }, 120);
          } else {
            scheduleNextBlink();
          }
        }, 160);
      }, delay);
    };

    scheduleNextBlink();
    return () => clearTimeout(blinkTimer);
  }, []);

  // Window mouse movement listener
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate normalized delta clamp between -12 and 12
      const deltaX = Math.max(-14, Math.min(14, (e.clientX - centerX) / 25));
      const deltaY = Math.max(-10, Math.min(10, (e.clientY - centerY) / 25));

      mouseX.set(deltaX);
      mouseY.set(deltaY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const triggerReaction = () => {
    const nextPoke = pokeCount + 1;
    setPokeCount(nextPoke);
    setIsAwake(true);
    onWakeChange?.(true);

    const randomQuote =
      DEADPAN_REACTIONS[Math.floor(Math.random() * DEADPAN_REACTIONS.length)];
    setSpeechBubble(randomQuote);

    if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
    speechTimeoutRef.current = setTimeout(() => {
      setSpeechBubble(null);
      setIsAwake(false);
      onWakeChange?.(false);
    }, 2400);
  };

  return (
    <div
      ref={containerRef}
      className={`relative select-none flex flex-col items-center justify-center ${className}`}
    >
      {/* Speech / Thought Bubble on Poke */}
      <AnimatePresence>
        {speechBubble && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.8 }}
            animate={{ opacity: 1, y: -20, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.85 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute -top-10 sm:-top-12 z-30 pointer-events-none bg-[#DFFF00] text-[#0A0A0A] border-2 border-[#0A0A0A] px-4 py-1.5 font-space font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0px_#0A0A0A]"
          >
            {speechBubble}
            {/* Arrow */}
            <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-3 h-3 bg-[#DFFF00] border-r-2 border-b-2 border-[#0A0A0A] rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Interactive Mascot Container with 3D perspective tilt */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformPerspective: 800,
        }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.94 }}
        onClick={triggerReaction}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative cursor-pointer group w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] flex items-center justify-center"
      >
        {/* Acid Yellow Shadow / Halo Backdrop */}
        <div className="absolute inset-2 sm:inset-4 rounded-full bg-[#DFFF00] -translate-x-3 translate-y-3 sm:-translate-x-4 sm:translate-y-4 border-4 border-[#0A0A0A] -z-10 group-hover:-translate-x-5 group-hover:translate-y-5 transition-transform duration-200" />

        {/* SVG Mascot Art */}
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-sm overflow-visible"
        >
          {/* Hair Tufts on Top Right (Iconic from boringlogo.png) */}
          <g>
            {/* Long tuft */}
            <motion.line
              x1="128"
              y1="34"
              x2="140"
              y2="10"
              stroke="#0A0A0A"
              strokeWidth="8"
              strokeLinecap="round"
              animate={{
                x2: isAwake ? 144 : isHovered ? 142 : 140,
                y2: isAwake ? 6 : isHovered ? 8 : 10,
                rotate: isAwake ? 12 : isHovered ? 6 : 0,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
            />
            {/* Short accent tick */}
            <motion.line
              x1="148"
              y1="42"
              x2="162"
              y2="26"
              stroke="#0A0A0A"
              strokeWidth="7"
              strokeLinecap="round"
              animate={{
                x2: isAwake ? 168 : isHovered ? 165 : 162,
                y2: isAwake ? 22 : isHovered ? 24 : 26,
                rotate: isAwake ? 15 : 0,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
            />
          </g>

          {/* Solid Black Head Circle */}
          <circle
            cx="100"
            cy="106"
            r="82"
            fill="#0A0A0A"
          />

          {/* Eyes Group with Mouse Parallax Look-Around */}
          <motion.g style={{ x: eyeX, y: eyeY }}>
            {/* Sclera: White eye shapes (Distinct half/droop oval shape) */}
            <defs>
              <clipPath id="leftEyeClip">
                <ellipse cx="68" cy="106" rx="23" ry="21" />
              </clipPath>
              <clipPath id="rightEyeClip">
                <ellipse cx="132" cy="106" rx="23" ry="21" />
              </clipPath>
            </defs>

            {/* Left Eye White Base */}
            <ellipse
              cx="68"
              cy="106"
              rx="23"
              ry="21"
              fill="#FFFFFF"
            />
            {/* Right Eye White Base */}
            <ellipse
              cx="132"
              cy="106"
              rx="23"
              ry="21"
              fill="#FFFFFF"
            />

            {/* Pupils (Black inner dot) */}
            <circle
              cx="68"
              cy={isAwake ? "106" : "110"}
              r={isAwake ? "12" : "10"}
              fill="#0A0A0A"
            />
            <circle
              cx="132"
              cy={isAwake ? "106" : "110"}
              r={isAwake ? "12" : "10"}
              fill="#0A0A0A"
            />

            {/* Tiny pupil glint when awake or hovered */}
            {(isAwake || isHovered) && (
              <>
                <circle cx="64" cy="102" r="3.5" fill="#FFFFFF" />
                <circle cx="128" cy="102" r="3.5" fill="#FFFFFF" />
              </>
            )}

            {/* Left Eyelid (Blinking & Sleepy animation) */}
            <motion.path
              d="M 38 78 H 98 V 116 Q 68 120 38 116 Z"
              fill="#0A0A0A"
              clipPath="url(#leftEyeClip)"
              animate={{
                y: isBlinking
                  ? 28 // fully closed eye
                  : isAwake
                  ? -16 // wide awake
                  : isHovered
                  ? -6 // slightly alert
                  : 0, // default sleepy deadpan
              }}
              transition={{
                duration: isBlinking ? 0.08 : 0.25,
                ease: "easeInOut",
              }}
            />

            {/* Right Eyelid (Blinking & Sleepy animation) */}
            <motion.path
              d="M 102 78 H 162 V 116 Q 132 120 102 116 Z"
              fill="#0A0A0A"
              clipPath="url(#rightEyeClip)"
              animate={{
                y: isBlinking
                  ? 28 // fully closed eye
                  : isAwake
                  ? -16 // wide awake
                  : isHovered
                  ? -6 // slightly alert
                  : 0, // default sleepy deadpan
              }}
              transition={{
                duration: isBlinking ? 0.08 : 0.25,
                ease: "easeInOut",
              }}
            />

            {/* Distinct sleepy heavy crease line across eyes */}
            <motion.line
              x1="45"
              y1="106"
              x2="91"
              y2="106"
              stroke="#0A0A0A"
              strokeWidth="4"
              strokeLinecap="round"
              animate={{
                y: isBlinking ? 28 : isAwake ? -16 : isHovered ? -6 : 0,
                opacity: isBlinking ? 0 : 1,
              }}
              transition={{ duration: isBlinking ? 0.08 : 0.25 }}
            />
            <motion.line
              x1="109"
              y1="106"
              x2="155"
              y2="106"
              stroke="#0A0A0A"
              strokeWidth="4"
              strokeLinecap="round"
              animate={{
                y: isBlinking ? 28 : isAwake ? -16 : isHovered ? -6 : 0,
                opacity: isBlinking ? 0 : 1,
              }}
              transition={{ duration: isBlinking ? 0.08 : 0.25 }}
            />
          </motion.g>
        </svg>
      </motion.div>

      {/* Interactive Status Bar below mascot */}
      <div className="mt-3 sm:mt-4 flex items-center gap-2 px-3 py-1 bg-[#0A0A0A] text-[#F7F6F2] font-space text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-black shadow-[2px_2px_0px_#DFFF00]">
        <span
          className={`w-2 h-2 rounded-full inline-block ${
            isAwake
              ? "bg-[#DFFF00] animate-ping"
              : isBlinking
              ? "bg-red-500"
              : "bg-[#DFFF00]"
          }`}
        />
        <span>
          {isAwake
            ? "[ALERT: DISAPPOINTED]"
            : isHovered
            ? "[HOVERING: WAKING UP...]"
            : "[CLICK OR HOVER TO WAKE]"}
        </span>
      </div>
    </div>
  );
}
