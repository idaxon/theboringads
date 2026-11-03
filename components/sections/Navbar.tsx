"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BoringLogo from "../BoringLogo";
import TextSwapButton from "../TextSwapButton";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenBrief?: () => void;
}

export default function Navbar({ onOpenBrief }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      label: "SELECTED WORK",
      href: "/work",
      isCurrent: pathname === "/work" || pathname?.startsWith("/work/"),
    },
    {
      label: "THINKING",
      href: "/thinking",
      isCurrent: pathname?.startsWith("/thinking"),
    },
    { label: "DISCIPLINES", href: "/#services", isCurrent: false },
    { label: "MANIFESTO", href: "/#manifesto", isCurrent: false },
    { label: "COMMISSION", href: "/#pricing", isCurrent: false },
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F7F6F2]/95 backdrop-blur-md border-b-2 border-[#0A0A0A] py-3.5 shadow-sm"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Interactive Wordmark */}
        <div className="flex items-center">
          <BoringLogo size="md" showTagline={true} />
        </div>

        {/* Center-Right: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-space text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={true}
              className={`relative py-1 transition-colors ${
                link.isCurrent
                  ? "text-[#0A0A0A] font-black"
                  : "hover:text-[#0A0A0A]"
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#DFFF00] ${
                link.isCurrent ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
              } after:transition-transform after:origin-left`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: "COMMISSION WORK" pill CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <TextSwapButton
            primaryText="COMMISSION WORK"
            secondaryText="SEND A BRIEF →"
            variant="pill"
            onClick={onOpenBrief}
            className="!px-5 !py-2.5 !text-xs !border-2"
          />
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border-2 border-[#0A0A0A] bg-[#F7F6F2] text-[#0A0A0A]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#F7F6F2] border-b-2 border-[#0A0A0A] px-4 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-space text-base font-bold uppercase tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-black/10 flex items-center justify-between ${
                  link.isCurrent ? "bg-[#DFFF00]/30 px-2 -mx-2 font-black" : ""
                }`}
              >
                <span>{link.label}</span>
                <span className="text-[#0A0A0A]/40 text-xs">→</span>
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrief?.();
              }}
              className="w-full bg-[#0A0A0A] text-[#F7F6F2] hover:bg-[#DFFF00] hover:text-[#0A0A0A] border-2 border-[#0A0A0A] font-space font-bold uppercase text-sm py-3 transition-colors text-center block"
            >
              GET AN IDEA →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
