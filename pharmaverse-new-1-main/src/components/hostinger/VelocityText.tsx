"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

/**
 * HELPER: Mathematical wrap for an invisible infinite loop.
 * For 10 spans, wrapping every 10% creates a perfect cycle.
 */
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * FIX: We use 10 spans and wrap at exactly -10%. 
   * This is the "Golden Ratio" for seamless parallax loops.
   */
  const x = useTransform(baseX, (v) => `${wrap(-10, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap w-full">
      <motion.div className="flex whitespace-nowrap flex-nowrap" style={{ x }}>
        {/* 10 Spans create a solid 'wall' of text with no starting gaps */}
        {[...Array(10)].map((_, i) => (
          <span 
            key={i} 
            className="flex-shrink-0 block text-[6rem] md:text-[9rem] font-bold uppercase tracking-[0.1em] leading-[0.9] opacity-[0.03] text-slate-900 select-none pr-16"
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function VelocityText() {
  return (
    <section className="relative w-full py-12 md:py-20 bg-white overflow-hidden select-none pointer-events-none">
      
      {/* 
        PREMIUM SPEED: 0.5 (Slow & Cinematic)
        If you want it slightly faster, change 0.5 to 0.8. 
        Speed 2.0+ is usually too fast for background watermarks.
      */}
      <ParallaxText baseVelocity={-0.5}>
        ANATOMY · PHARMACOLOGY · THERAPEUTICS · 
      </ParallaxText>
      
      {/* Tight gap for a modern "merged" background look */}
      <div className="h-0" /> 
      
      <ParallaxText baseVelocity={0.5}>
        HOSPITAL · PATIENT SAFETY · CLINICAL · 
      </ParallaxText>
      
      {/* Massive Edge Fades: The secret to the 'expensive' look */}
      <div className="absolute inset-y-0 left-0 w-40 md:w-[500px] bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 md:w-[500px] bg-gradient-to-l from-white via-white/90 to-transparent z-10" />
      
    </section>
  );
}
