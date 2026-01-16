"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const medicalWords = [
  "high yield notes",
  "clinical tools",
  "drug interactions",
  "pharmacology",
  "pharmacotherapeutics",
  "medicinal chemistry",
];

export default function MedicalScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    /* Background set to transparent so the Parent Div's card effect works */
    <section ref={targetRef} className="relative h-[350vh] bg-transparent">
      <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        
        {/* Your Original Indigo Central Lighting preserved */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,27,75,0.4)_0%,transparent_75%)] pointer-events-none" />

        <div className="relative w-full px-6 flex items-center justify-center">
          {medicalWords.map((word, index) => {
            const step = 1 / medicalWords.length;
            const start = index * step;
            const end = (index + 1) * step;

            const opacity = useTransform(smoothProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
            const y = useTransform(smoothProgress, [start, end], [100, -100]);

            return (
              <motion.h2
                key={word}
                style={{ opacity, y }}
                /* Original Font 'mona-reveal' and sizing preserved */
                className="absolute text-center text-white font-mona-reveal text-[7vw] md:text-[5.5rem] lg:text-[7rem] whitespace-nowrap leading-none select-none"
              >
                {word}
              </motion.h2>
            );
          })}
        </div>
      </div>
    </section>
  );
}
