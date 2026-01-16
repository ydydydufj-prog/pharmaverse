"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleAction = (label: string) => {
    toast({
      title: "🚀 Portal Initializing",
      description: `Synchronizing clinical database for ${label}...`,
    });
  };

  const line1 = "Master your Pharm.D";
  const line2 = "from Day 1 to Dr.";

  // CHARACTER PHYSICS: Original weight (700) and smooth ripple
  const charVariants = {
    hidden: { opacity: 0, y: 8, fontVariationSettings: "'wght' 300, 'wdth' 80" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      fontVariationSettings: "'wght' 700, 'wdth' 100", // EXACT ORIGINAL BOLD SOUL
      transition: {
        type: "spring",
        damping: 18, 
        stiffness: 100,
        delay: i * 0.02,
      },
    }),
  };

  // Optimized line renderer for mobile wrap + "y" fix
  const AnimatedLine = ({ text, isOrange = false }: { text: string; isOrange?: boolean }) => {
    return (
      <span className="flex flex-wrap justify-center overflow-visible">
        {text.split(" ").map((word, wordIdx) => (
          <span key={wordIdx} className="inline-flex whitespace-nowrap overflow-visible mx-[0.12em]">
            {word.split("").map((char, charIdx) => {
              // Same timing for both lines = simultaneous wave
              const globalIndex = text.indexOf(word) + charIdx;
              return (
                <motion.span
                  key={charIdx}
                  custom={globalIndex}
                  initial="hidden"
                  animate="visible"
                  variants={charVariants}
                  style={{ willChange: "transform, opacity" }}
                  className={`inline-block pb-[0.15em] -mb-[0.15em] overflow-visible ${
                    isOrange ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600" : "text-white"
                  }`}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        ))}
      </span>
    );
  };

  return (
    // PRESERVED: Your exact background soul and padding
    <section className="relative bg-gradient-to-br from-[#0d4444] to-[#1a5f5f] text-white pt-24 pb-16 md:pt-40 lg:pt-48 lg:pb-32 font-mona overflow-hidden">
      
      {/* Visual background dots */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          
          <span className="inline-block bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-[12px] md:text-sm font-medium mb-10">
            ⭐ Trusted by Pharmacy Students Nationwide
          </span>

          {/* HEADING: ORIGINAL SIZES RESTORED */}
          <h1 className="text-4xl md:text-6xl font-bold select-none overflow-visible leading-tight">
            
            {/* LINE 1 */}
            <div className="block overflow-visible">
              <AnimatedLine text={line1} />
            </div>

            {/* LINE 2 - Tight original gap preserved */}
            <div className="block overflow-visible mt-0.5 md:mt-1">
              <AnimatedLine text={line2} isOrange />
            </div>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-base md:text-xl text-teal-50 mt-10 mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed px-4 md:px-0"
          >
            The complete digital platform that helps pharmacy students excel from their first day to graduation with expert-led courses and clinical support.
          </motion.p>

          {/* BUTTONS: Exactly as you like them */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 md:px-0">
            <Button
              onClick={() => handleAction("Get Started")}
              size="lg"
              className="w-full sm:w-auto bg-[#f97316] text-white hover:bg-[#ea580c] text-lg px-10 py-7 font-bold shadow-lg transform transition active:scale-95 rounded-lg"
            >
              Start Learning
            </Button>

            <Button
              onClick={() => handleAction("Explore Features")}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0d4444] text-lg px-10 py-7 font-bold transition-all duration-300 active:scale-95 rounded-lg"
            >
              Explore Syllabus
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
