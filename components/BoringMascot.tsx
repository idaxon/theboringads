"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BoringMascotProps {
  className?: string;
  size?: number;
  isAwake?: boolean;
  interactive?: boolean;
  onWakeChange?: (awake: boolean) => void;
  accentHair?: boolean;
}

export default function BoringMascot({
  className = "",
  size = 48,
  isAwake: controlledAwake,
  interactive = true,
  onWakeChange,
  accentHair = true,
}: BoringMascotProps) {
  const [internalAwake, setInternalAwake] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  const awake = controlledAwake !== undefined ? controlledAwake : internalAwake;

  // Occasional deadpan blink when awake
  useEffect(() => {
    if (!awake) return;
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180);
    }, 4000);
    return () => clearInterval(interval);
  }, [awake]);

  const handleMouseEnter = () => {
    if (interactive && controlledAwake === undefined) {
      setInternalAwake(true);
      onWakeChange?.(true);
    }
  };

  const handleMouseLeave = () => {
    if (interactive && controlledAwake === undefined) {
      setInternalAwake(false);
      onWakeChange?.(false);
    }
  };

  const handleClick = () => {
    if (interactive && controlledAwake === undefined) {
      const next = !internalAwake;
      setInternalAwake(next);
      onWakeChange?.(next);
    }
  };

  // Eyelid position:
  // Sleepy: eyelid covers top half (cut down to y=4)
  // Awake: eyelid pulls up (y=-4 or -6)
  // Blinking: eyelid drops fully closed (y=8)
  const eyelidY = isBlinking ? 8 : awake ? -4 : 2;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      title={awake ? "Awake!" : "Hover or click to wake up"}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* Hair Tuft / Eyebrow spikes as seen in boringlogo.png */}
        {accentHair && (
          <g stroke="currentColor" strokeWidth="6" strokeLinecap="round">
            {/* Left spike */}
            <motion.line
              x1="36"
              y1="6"
              x2="42"
              y2="18"
              animate={{
                y2: awake ? 16 : 19,
                rotate: awake ? -5 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
            {/* Right spike */}
            <motion.line
              x1="58"
              y1="4"
              x2="52"
              y2="18"
              animate={{
                y2: awake ? 15 : 19,
                rotate: awake ? 6 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
          </g>
        )}

        {/* Mascot Face Head (Solid Circle) */}
        <circle cx="50" cy="54" r="42" fill="currentColor" />

        <defs>
          {/* Left Eye Clip Mask */}
          <clipPath id="leftEyeClip">
            <ellipse cx="33" cy="53" rx="11" ry="11" />
          </clipPath>
          {/* Right Eye Clip Mask */}
          <clipPath id="rightEyeClip">
            <ellipse cx="67" cy="53" rx="11" ry="11" />
          </clipPath>
        </defs>

        {/* Sclera (White of the eyes) */}
        <ellipse cx="33" cy="53" rx="11" ry="11" fill="#FFFFFF" />
        <ellipse cx="67" cy="53" rx="11" ry="11" fill="#FFFFFF" />

        {/* Pupils (Black) */}
        <motion.circle
          cx="33"
          cy="53"
          r="6.5"
          fill="#0A0A0A"
          animate={{
            cy: awake ? 53 : 55,
            scale: awake ? 1.05 : 0.95,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
        <motion.circle
          cx="67"
          cy="53"
          r="6.5"
          fill="#0A0A0A"
          animate={{
            cy: awake ? 53 : 55,
            scale: awake ? 1.05 : 0.95,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />

        {/* Pupil shine glint when awake */}
        <motion.circle
          cx="31"
          cy="51"
          r="2.2"
          fill="#FFFFFF"
          animate={{ opacity: awake ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.circle
          cx="65"
          cy="51"
          r="2.2"
          fill="#FFFFFF"
          animate={{ opacity: awake ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />

        {/* Left Eyelid: covers top when sleepy */}
        <motion.path
          d="M 18 36 H 48 V 56 Q 33 58 18 56 Z"
          fill="currentColor"
          clipPath="url(#leftEyeClip)"
          animate={{
            y: eyelidY,
          }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 22,
          }}
        />

        {/* Right Eyelid: covers top when sleepy */}
        <motion.path
          d="M 52 36 H 82 V 56 Q 67 58 52 56 Z"
          fill="currentColor"
          clipPath="url(#rightEyeClip)"
          animate={{
            y: eyelidY,
          }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 22,
          }}
        />

        {/* Eyelid Crease / Lid Edge Line for deadpan expression */}
        <motion.line
          x1="22"
          y1="53"
          x2="44"
          y2="53"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{
            y: eyelidY,
            opacity: awake ? 0.3 : 1,
          }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
        />
        <motion.line
          x1="56"
          y1="53"
          x2="78"
          y2="53"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{
            y: eyelidY,
            opacity: awake ? 0.3 : 1,
          }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
        />
      </svg>
    </div>
  );
}
