"use client";
import React from 'react';
import { motion } from 'framer-motion';

// --- EXPANDED PHARMAVERSE DATA LIBRARY ---
const items = [
  "Pharmacology", "Drug Interactions", "Lab Values", "SOAP Builder", 
  "Medicinal Chemistry", "Renal Calculator", "High Yield Notes",
  "6-Year Curriculum", "Patient Proforma", "Pharm.D Archive",
  "Clinical Rounds", "Dosage Protocols", "Pharmacotherapy",
  "Adverse Drug Reactions", "Medical Dictionary", "Case Documentation",
  "Ward Round Logs", "NAPLEX Prep", "Drug Index", "Dose Optimization",
  "Clinical Suite", "Hospital Pharmacy", "Flowcharts", "Pharm.D Syllabus"
];

const NeoTicker = () => {
  // Triple-buffer ensures no 'end' or 'jump' ever happens at hyperspeed
  const loopingItems = [...items, ...items, ...items];

  return (
    <section className="relative bg-black py-4 md:py-6 overflow-hidden border-y border-white/[0.08] select-none z-0">
      
      {/* 1. Hardware Depth Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/[0.04] via-transparent to-teal-500/[0.04] pointer-events-none" />

      <motion.div 
        className="flex whitespace-nowrap items-center"
        /* The Triple-Loop Secret: Wrap at exactly -33.33% */
        animate={{ x: ["0%", "-33.33%"] }} 
        transition={{ 
            duration: 12, // More items need more time to be readable, but duration 12 for 72 words is actually very fast!
            ease: "linear", 
            repeat: Infinity 
        }}
      >
        {loopingItems.map((word, idx) => (
          <div key={idx} className="flex items-center">
            
            {/* 2. THE TYPOGRAPHY: Balanced for clinical authority */}
            <span className={`text-2xl md:text-4xl font-black italic px-12 tracking-[-0.01em] transition-all duration-300 ${
              idx % 2 === 0 
                ? "text-[#ff7a30] drop-shadow-[0_0_15px_rgba(255,122,48,0.8)] brightness-110" 
                : "text-zinc-400" // Premium Silver visibility
            }`}>
              {word}
            </span>

            {/* 3. PRECISION MEDICAL SEPARATOR */}
            <div className="flex items-center opacity-30 px-2">
                <div className="h-[1.5px] w-12 bg-gradient-to-r from-transparent via-zinc-400 to-transparent" />
                {/* The "Micro-Chip" Diamond */}
                <div className="w-1.5 h-1.5 rotate-45 border border-white bg-white shadow-[0_0_12px_white]" />
                <div className="h-[1.5px] w-12 bg-gradient-to-r from-transparent via-zinc-400 to-transparent" />
            </div>
          </div>
        ))}
      </motion.div>

      {/* 4. PROFESSIONAL OPTICAL MASKING */}
      <div className="absolute inset-y-0 left-0 w-48 md:w-[450px] bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-48 md:w-[450px] bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

      {/* 5. FINISHING POLISH: Fast Scanning 'Beam' */}
      <motion.div 
        animate={{ x: ["-100%", "300%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-y-0 w-96 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent skew-x-[-30deg] pointer-events-none"
      />
    </section>
  );
};

export default NeoTicker;
