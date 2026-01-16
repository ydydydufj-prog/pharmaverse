"use client";

import React from 'react';
import { motion } from 'framer-motion';

const StatsTicker = () => {
  const stats = [
    { value: '100+', label: 'EXPERT COURSES', sub: 'CLINICAL PHARMACOLOGY' },
    { value: '99%', label: 'SUCCESS RATE', sub: 'ACADEMIC EXCELLENCE' },
    { value: '5+ YRS', label: 'HIGH-YIELD NOTES', sub: 'PHARMD DIGITAL ARCHIVE' },
    { value: '5+ YRS', label: 'HANDWRITTEN NOTES', sub: 'DETAILED CLINICAL FLOWS' },
    { value: 'TOOLS', label: 'DECISION SUPPORT', sub: 'CLINICAL CALCULATORS' },
    { value: '24/7', label: 'LEARNING SUPPORT', sub: 'EXPERT MENTOR ACCESS' },
  ];

  const tickerItems = [...stats, ...stats, ...stats];

  return (
    <section className="relative overflow-visible z-20 select-none group/master">
      <div className="bg-[#042424] border-y border-white/5 h-24 md:h-28 flex items-center transition-colors duration-700 group-hover/master:bg-[#052d2d] relative overflow-hidden">
        
        {/* LIGHT GLOW */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.15)_0%,_transparent_65%)]" />

        <motion.div 
          className="flex whitespace-nowrap" 
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {tickerItems.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="flex items-center gap-4 md:gap-5 px-6 md:px-7 border-l border-white/5 first:border-l-0 opacity-90 transition-all duration-300 group/item cursor-pointer hover:opacity-100"
            >
              <div className="flex flex-col">
                <span className="text-3xl md:text-[2.3rem] font-black text-white tracking-tighter leading-none drop-shadow-[0_0_8px_rgba(20,184,166,0.3)] group-hover/item:drop-shadow-[0_0_15px_rgba(20,184,166,0.5)] transition-all">
                  {item.value}
                </span>
              </div>

              <div className="flex flex-col text-left justify-center">
                <span className="text-[9px] md:text-[10px] font-black text-teal-400 tracking-[0.2em] mb-1.5 uppercase leading-none">
                  {item.label}
                </span>
                <span className="text-[8px] md:text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] leading-tight transition-colors group-hover/item:text-white/60">
                  {item.sub}
                </span>
              </div>
              <span className="text-white/5 text-sm ml-4 group-hover/item:text-teal-500/20 transition-colors">✦</span>
            </motion.div>
          ))}
        </motion.div>

        {/* GRADIENT FADES */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-56 bg-gradient-to-r from-[#042424] via-[#042424]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-56 bg-gradient-to-l from-[#042424] via-[#042424]/90 to-transparent z-20 pointer-events-none" />
      </div>

      {/* SCANNING BEAM */}
      <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white/5 overflow-hidden">
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="w-1/3 h-full bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"
        />
      </div>
    </section>
  );
};

export default StatsTicker;