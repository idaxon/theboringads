"use client";

import React from "react";
import Link from "next/link";

interface TextSwapButtonProps {
  primaryText: string;
  secondaryText: string;
  variant?: "filled" | "outlined" | "yellow" | "pill";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
}

export default function TextSwapButton({
  primaryText,
  secondaryText,
  variant = "filled",
  href,
  onClick,
  className = "",
  type = "button",
  ariaLabel,
}: TextSwapButtonProps) {
  // Styles according to editorial brutalist rules (NO rounded corners, except pill navbar button which is sharp pill)
  const variantStyles = {
    filled:
      "bg-[#0A0A0A] text-[#F7F6F2] hover:bg-[#DFFF00] hover:text-[#0A0A0A] border-2 border-[#0A0A0A]",
    outlined:
      "bg-transparent text-[#0A0A0A] border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#DFFF00]",
    yellow:
      "bg-[#DFFF00] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#DFFF00] border-2 border-[#0A0A0A]",
    pill:
      "bg-[#0A0A0A] text-[#F7F6F2] hover:bg-[#DFFF00] hover:text-[#0A0A0A] border-2 border-[#0A0A0A] rounded-full",
  };

  const innerContent = (
    <span className="relative block h-5 sm:h-6 overflow-hidden select-none">
      {/* Primary text */}
      <span className="block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full will-change-transform">
        {primaryText}
      </span>
      {/* Secondary text */}
      <span
        aria-hidden="true"
        className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 will-change-transform font-bold"
      >
        {secondaryText}
      </span>
    </span>
  );

  const baseClasses = `group relative inline-flex items-center justify-center font-space text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3 transition-colors duration-200 cursor-pointer ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses} aria-label={ariaLabel || primaryText}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
      aria-label={ariaLabel || primaryText}
    >
      {innerContent}
    </button>
  );
}
