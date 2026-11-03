"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import confetti from "canvas-confetti";
import BoringMascot from "./BoringMascot";

interface BriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BriefModal({ isOpen, onClose }: BriefModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    boringReason: "",
    audience: "",
    email: "",
    budget: "standard",
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Fire confetti in brand colors (black and acid yellow)
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#DFFF00", "#0A0A0A", "#FFFFFF"],
      });
    } catch {
      // Ignore confetti errors if any
    }

    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        company: "",
        boringReason: "",
        audience: "",
        email: "",
        budget: "standard",
      });
    }, 3200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A0A0A]/85 backdrop-blur-sm"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative w-full max-w-xl bg-[#F7F6F2] border-2 border-[#0A0A0A] p-6 sm:p-8 z-10 shadow-[8px_8px_0px_#0A0A0A] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b-2 border-[#0A0A0A] pb-4 mb-6">
              <div className="flex items-center gap-3">
                <BoringMascot size={32} isAwake={true} />
                <div>
                  <span className="text-[10px] font-space font-bold uppercase tracking-widest text-[#0A0A0A]/60 block">
                    BRIEF INTAKE PROTOCOL
                  </span>
                  <h3 className="font-space text-2xl sm:text-3xl font-bold uppercase tracking-tighter text-[#0A0A0A]">
                    GIVE US A BRIEF.
                  </h3>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 border-2 border-[#0A0A0A] bg-[#F7F6F2] hover:bg-[#DFFF00] flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-[#0A0A0A]" />
              </button>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#DFFF00] border-2 border-[#0A0A0A] mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8 text-[#0A0A0A]" />
                </div>
                <h4 className="font-space text-2xl font-bold uppercase tracking-tight">
                  BRIEF RECEIVED.
                </h4>
                <p className="font-inter text-sm text-[#0A0A0A]/80 max-w-md mx-auto leading-relaxed">
                  Our copywriters are currently examining your product with mild skepticism and extreme curiosity. Expect concepts in your inbox within 48 hours.
                </p>
                <p className="text-xs font-space font-mono text-[#0A0A0A]/60">
                  CLOSING DIALOGUE AUTOMATICALLY...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-space text-xs font-bold uppercase tracking-wider mb-1">
                    1. WHAT DO YOU SELL? *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. B2B cloud database, ergonomic socks, lawn mower parts"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#FFFFFF] border-2 border-[#0A0A0A] p-3 font-inter text-sm focus:outline-none focus:bg-[#DFFF00]/15"
                  />
                </div>

                <div>
                  <label className="block font-space text-xs font-bold uppercase tracking-wider mb-1">
                    2. WHY IS YOUR CURRENT MARKETING BORING? *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="e.g. Everyone in our sector uses blue gradients and smiles at iPads. Nobody remembers our ads."
                    value={formData.boringReason}
                    onChange={(e) => setFormData({ ...formData, boringReason: e.target.value })}
                    className="w-full bg-[#FFFFFF] border-2 border-[#0A0A0A] p-3 font-inter text-sm focus:outline-none focus:bg-[#DFFF00]/15 resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-space text-xs font-bold uppercase tracking-wider mb-1">
                      3. WHO BUYS THIS?
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Stressed IT managers"
                      value={formData.audience}
                      onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                      className="w-full bg-[#FFFFFF] border-2 border-[#0A0A0A] p-3 font-inter text-sm focus:outline-none focus:bg-[#DFFF00]/15"
                    />
                  </div>
                  <div>
                    <label className="block font-space text-xs font-bold uppercase tracking-wider mb-1">
                      4. YOUR WORK EMAIL *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FFFFFF] border-2 border-[#0A0A0A] p-3 font-inter text-sm focus:outline-none focus:bg-[#DFFF00]/15"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-space text-xs font-bold uppercase tracking-wider mb-1">
                    5. BUDGET COMMITMENT
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#FFFFFF] border-2 border-[#0A0A0A] p-3 font-inter text-sm focus:outline-none focus:bg-[#DFFF00]/15"
                  >
                    <option value="standard">ONE CAMPAIGN (₹4,999 / $4,999) — Complete Spec</option>
                    <option value="enterprise">FULL REBRAND CONCEPTS — Multi-channel overhaul</option>
                    <option value="curious">JUST TESTING THE WATERS — Send initial punchlines</option>
                  </select>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] font-inter text-[#0A0A0A]/60">
                    No 80-page decks. Just concepts people talk about.
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#0A0A0A] text-[#F7F6F2] hover:bg-[#DFFF00] hover:text-[#0A0A0A] border-2 border-[#0A0A0A] font-space font-bold uppercase text-xs tracking-wider px-6 py-3 transition-colors duration-150 cursor-pointer"
                  >
                    SEND BRIEF →
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
